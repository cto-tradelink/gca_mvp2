<template>
    <div id="static_page" style="background-color:#fff">
            <svg width="1144" height="612" ></svg>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"

export default {

     beforeRouteLeave (to, from, next) {
        if(confirm("페이지를 벗어나시겠습니까?")){
            next()
        }
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
        .y(function (d) { return y(d.d1); });

    var line2 = d3.line()
        .x(function (d) { return x2(d.date); })
        .y(function (d) { return y2(d.d1); });

    var line3 = d3.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.d2); });

    var line4 = d3.line()
        .x(function (d) { return x2(d.date); })
        .y(function (d) { return y2(d.d2); });

    var line5 = d3.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.d3); });

    var line6 = d3.line()
        .x(function (d) { return x2(d.date); })
        .y(function (d) { return y2(d.d3); });
    
   var line7 = d3.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.d4); });
   var line8 = d3.line()
        .x(function (d) { return x2(d.date); })
        .y(function (d) { return y2(d.d4); });

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

d3.csv("/static/anal2.csv", type, function (error, data) {
  if (error) throw error;
    console.log(data)
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function (d) { return d.d3; })]);
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
        .attr("fill", "none")
        .attr("stroke", "#000")             
        .attr("d", line);
     Line_chart.append("path")
         .datum(data)         
         .attr("class", "line3")
          .attr("fill", "none")
        .attr("stroke", "#000")    
         .attr("d", line3);
     Line_chart.append("path")
         .datum(data)         
         .attr("class", "line5")   
          .attr("fill", "none")
        .attr("stroke", "#000")         
         .attr("d", line5);
     Line_chart.append("path")
         .datum(data)         
         .attr("class", "line7")
          .attr("fill", "none")
        .attr("stroke", "#000")    
         .attr("d", line7);




    context.append("path")
        .datum(data)     
        .attr("fill", "none")
          .attr("fill", "none")
        .attr("stroke", "#000")    
        .attr("class", "line2")
        .attr("d", line2);

    context.append("path")
        .datum(data)     
        .attr("class", "line4")
          .attr("fill", "none")
        .attr("stroke", "#000")    
        .attr("d", line4);
     context.append("path")
        .datum(data)     
          .attr("fill", "none")
        .attr("stroke", "#000")    
        .attr("class", "line6")
        .attr("d", line6);

    context.append("path")
        .datum(data)     
        .attr("fill", "none")
        .attr("stroke", "#000")    
        .attr("class", "line8")
        .attr("d", line8);


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
      .attr("fill", "transparent")      
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
  Line_chart.select(".line5").attr("d", line5);
  Line_chart.select(".line7").attr("d", line7);
  

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
  Line_chart.select(".line5").attr("d", line5);
  Line_chart.select(".line7").attr("d", line7);



  //Line_chart.select(".line3").attr("d", line3);
  focus.select(".axis--x").call(xAxis);
  context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
}

function type(d) {
  d.date = parseDate(d.date);
  d.d1 = +d.d1;
  d.d2 = +d.d2;
  d.d3 = +d.d4;
  d.d4 = +d.d4;
  return d;
}
    

}
}

</script>

<style scoped>
 .line {
        fill: none;
        stroke: steelblue;
        stroke-width: 1px;
    }
     .line1 {
        fill: none;
        stroke: steelblue;
        stroke-width: 1px;
    }
     .line2 {
        fill: none;
        stroke: steelblue;
        stroke-width: 1px;
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
     .line5 {
        fill: none;
        stroke: steelblue;
        stroke-width: 1.5px;
    }

     .line6 {
        fill: none;
        stroke: steelblue;
        stroke-width: 1.5px;
    }
     .line7 {
        fill: none;
        stroke: steelblue;
        stroke-width: 1.5px;
    }
     .line8 {
        fill: none;
        stroke: steelblue;
        stroke-width: 1.5px;
    }

 
    .zoom{
        fill: transparent;
    }
</style>
