<template>
    <div id="static_content">
        <StaticNavigation></StaticNavigation>
        
            <div id="site_static_con">
                <div class="text_seg">
                    <div class="ttl">일별 사용자 수</div>
                    <div class="sub">주간평균</div>
                    <div class="num">69</div>                                        
                </div>
                <div class="text_seg">
                    <div class="ttl">신규방문자</div>
                    <div class="sub">주간평균</div>
                    <div class="num">58</div>   
                </div>
            <svg width="1144" height="612"></svg>
                <div class="text_seg">
                    <div class="ttl">세션수</div>
                    <div class="sub">주간평균</div>
                    <div class="num">194</div>   
                </div>
                <div class="text_seg">
                    <div class="ttl">사용자당 세션수</div>
                    <div class="sub">주간평균</div>
                    <div class="num">2.81</div>   
                </div>
                <div class="text_seg">
                    <div class="ttl">세션당 페이지수</div>
                    <div class="sub">주간평균</div>
                    <div class="num">6.37</div>   
                </div>
                <div class="text_seg">
                    <div class="ttl">페이지 뷰</div>
                    <div class="sub">주간평균</div>
                    <div class="num">1235</div>   
                </div>
            <iframe  frameBorder="0" src="/manager/statics/site_sub/" width="1144" height="612" border="none" style="background-color:#fff" scrolling = "no" ></iframe>
          
            </div>
    
        </div>    
</template>

<script>
import StaticNavigation from "./StaticNavigation.vue"
export default {
    components:{
        StaticNavigation,
    },
    mounted:function(){
                
var svg = d3.select("svg"),
     margin = {top: 20, right: 20, bottom: 110, left: 40},
    margin2 = {top: 530, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    height2 = +svg.attr("height") - margin2.top - margin2.bottom;

var parseDate = d3.timeParse("%Y-%m-%d");

var x = d3.scaleTime().range([0, width]),
    x2 = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    y2 = d3.scaleLinear().range([height2, 0]);

var xAxis = d3.axisBottom(x),
    xAxis2 = d3.axisBottom(x2),
    yAxis = d3.axisLeft(y);

var brush = d3.brushX()
    .extent([[0, 0], [width, height2]])
    .on("brush end", brushed);

var zoom = d3.zoom()
    .scaleExtent([1, Infinity])
    .translateExtent([[0, 0], [width, height]])
    .extent([[0, 0], [width, height]])
    .on("zoom", zoomed);

    var line = d3.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.user); });

    var line2 = d3.line()
        .x(function (d) { return x2(d.date); })
        .y(function (d) { return y2(d.user); });

    var line3 = d3.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.new_user); });

    var line4 = d3.line()
        .x(function (d) { return x2(d.date); })
        .y(function (d) { return y2(d.new_user); });



    var clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0); 


    var Line_chart = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("clip-path", "url(#clip)");


    var focus = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var context = svg.append("g")
    .attr("class", "context")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

d3.csv("/static/test_analytics.csv", type, function (error, data) {
  if (error) throw error;

  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function (d) { return d.user; })]);
  x2.domain(x.domain());
  y2.domain(y.domain());


    focus.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    focus.append("g")
        .attr("class", "axis axis--y")
        .call(yAxis);

    Line_chart.append("path")
        .datum(data)         
        .attr("class", "line1")
        .attr("d", line);

    Line_chart.append("path")
        .datum(data)         
        .attr("class", "line3")
        .attr("d", line3);

    context.append("path")
        .datum(data)     
        .attr("class", "line2")
        .attr("d", line2);

    context.append("path")
        .datum(data)     
        .attr("class", "line4")
        .attr("d", line4);


  context.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);

  context.append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, x.range());

  svg.append("rect")
      .attr("class", "zoom")
      .attr("width", width)
      .attr("height", height)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .call(zoom);


});

function brushed() {
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
  var s = d3.event.selection || x2.range();
  x.domain(s.map(x2.invert, x2));
  Line_chart.select(".line1").attr("d", line);
  Line_chart.select(".line3").attr("d", line3);
  
  focus.select(".axis--x").call(xAxis);
  svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
      .scale(width / (s[1] - s[0]))
      .translate(-s[0], 0));
}

function zoomed() {
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
  var t = d3.event.transform;
  x.domain(t.rescaleX(x2).domain());
  Line_chart.select(".line1").attr("d", line);
  Line_chart.select(".line3").attr("d", line3);
  focus.select(".axis--x").call(xAxis);
  context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
}

function type(d) {
  d.date = parseDate(d.date);
  d.user = +d.user;
  d.new_user = +d.new_user
  return d;
}

     

}
}
</script>

<style scoped>
    .text_seg{
        position: relative;
        width:304px;
        height: 114px;
        float: left;
        border-right:1px solid #ced4da;
        margin-top: 33px;
        margin-bottom:100px;
    }



    .ttl{
        position: absolute;
        font-size: 15px;
        color: #243d68;
        top:8px;
        left:30px;
    }
    .sub{
        position: absolute;
        font-size: 12px;
        color: #1a2f53;
        top:32px;
        left:30px;
    }
    .num{
        font-size: 32px;
        font-weight: 300;
        color: #1b49f4;
        position: absolute;
        right: 55px;
        bottom:20px;

    }


 .line {
        fill: none;
        stroke: steelblue;
        stroke-width: 1.5px;
    }

     .line1 {
        fill: none;
        stroke: steelblue;
        stroke-width: 1.5px;
    }
     .line2 {
        fill: none;
        stroke: steelblue;
        stroke-width: 1.5px;
    }
     .line3 {
        fill: none;
        stroke: steelblue;
        stroke-width: 1.5px;
    }
     .line4 {
        fill: none;
        stroke: steelblue;
        stroke-width: 1.5px;
    }
.zoom {
  cursor: move;
  fill: none;
  pointer-events: all;
}
    #site_static_con{
        width: 1224px;
        height: 808px;
        background-color: #fff;
        margin-top:56px;
    }
   #static_content{
        margin-left: 64px;        
        padding-top:40px;
        padding-left: 52px;
    }
    #user_static_con{
        margin-top:56px;
        width: 1144px;
        padding: 40px;
        height: 670px;
        background-color: #ffffff;
        position: relative;
    }
    #static_pdf_down{
        width: 120px;
        height: 32px;
        border-radius: 16px;
        font-size: 14px;
        text-align: center;
        color: #1b66f4;
        position: absolute;
        top:32px;
        right:40px;
        border: solid 1px #1b66f4;
        line-height: 32px;
    }
    .static_row_seg{
        width: 100%;       
        overflow: auto; 
    }
    .static_ttl{
        font-size: 18px;
        color: #1a2f53;
    }
    .static_seg{
        float: left;
        width: 285px;
        height: 114px;
        border-right:1px solid #ced4da;
        margin-top:20px;
        position: relative;
    }
   .sub_ttl{
        position: absolute;
        left: 24px;
        top:8px;
        font-size: 15px;
        color: #243d68;
    } 
    .number{
        font-family: Rubik;
        font-size: 24px;
        font-weight: 300;
        color: #1b49f4;
        line-height: 60px;
        position: absolute;
        top:48px;
        right: 71px;
    }



</style>
