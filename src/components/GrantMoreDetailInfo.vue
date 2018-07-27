<template>

    <div id="grant_detail_more_con">
       
        <div class="gr_seg" >
             <div class="gr_seg_ttl">사업개요</div>
                <ul style="margin-top:40px;margin-bottom:15px;">
                    <li class="sub_info"><span class="label">사업기간</span><div style="margin-bottom:14px;">{{grant_info.business_start | get_day_format}}부터 ~ {{grant_info.business_end | get_day_format}}까지 </div></li>
                    <li class="sub_info"><span class="label">모집대상</span><div style="margin-bottom:14px;" v-html="grant_info.object"></div></li>
                    <li class="sub_info"><span class="label">사업목적</span><div style="margin-bottom:14px;" v-html="grant_info.subject"></div></li>
                    <li class="sub_info"><span class="label">사업내용</span><div style="margin-bottom:14px; white-space: pre-line;" v-html="grant_info.business_detail"> </div></li>
                </ul>
        </div>
        <div class="gr_seg">
            <div class="gr_seg_ttl">지원내용</div>
            <ul style="margin-top:24px;">
                <li class="sub_info"><span class="label">지원항목</span><div style="font-weight:bolder margin-bottom:14px;"><span v-for="t in grant_info.top_support_tag" class="filter">{{t}}</span></div></li>
                <li class="sub_info"><span class="label">지원내용</span><div style="margin-bottom:14px;white-space: pre-line; ">{{grant_info.supply_content}} </div></li>
                <li class="sub_info"><span class="label">지원조건</span><div style="margin-bottom:14px;white-space: pre-line;">
             {{grant_info.supply_condition}} 
</div> </li>
            </ul>
        </div>
        <div class="gr_seg" >
            <div class="gr_seg_ttl">모집개요</div>
            <ul style="margin-top:24px;">
                <li class="sub_info"><span class="label">모집기간</span><div style="margin-bottom:14px;">{{grant_info.apply_start | get_day_format}}부터 ~ {{grant_info.apply_end | get_day_format}}까지 </div></li>
                <li class="sub_info"><span class="label">모집대상</span><div style="margin-bottom:14px;" v-html="grant_info.object"></div></li>
                <li class="sub_info"><span class="label">모집조건</span><div style="margin-bottom:14px;">사업(행사) 참가기업이 반드시 갖추어야 하는 조건은 아래와 같습니다.
                    <ul style="margin-top:16px;">
                        <li class="sub_info"><span class="label">주소지</span><div>
                            <span class="filter" v-for="t in grant_info.local_tag" style="margin-right:5px">#{{t}}</span>
                            </div></li>
                        <li class="sub_info"><span class="label">형태</span><div>
                            <span class="filter"  v-for="t in grant_info.kind_tag" style="margin-right:5px">#{{t}}</span>
                            </div></li>
                        <li class="sub_info"><span class="label">연차</span><div>
                             <span class="filter"  v-for="t in grant_info.year_tag" style="margin-right:5px">#{{t}}</span>
                            </div></li>
                        <li class="sub_info"><span class="label">제품단계</span><div>
                              <span class="filter"  v-for="t in grant_info.step_tag" style="margin-right:5px">#{{t}}</span>
                            </div></li>
                        <li class="sub_info"><span class="label">기타</span><div style="white-space: pre-line;">{{
                            grant_info.condition_etc
                            }}</div></li>
                    </ul>
                    </div></li>
                <li class="sub_info"><span class="label">모집분야</span><div>
                    <ul>
                        <li class="sub_info"><span class="label">기본장르</span><div>
                              <span v-for="t in grant_info.base_tag" style="margin-right:5px">#{{t}}</span>
                            </div></li>
                        <li class="sub_info"><span class="label">특수장르</span><div>
                              <span v-for="t in grant_info.special_tag" style="margin-right:5px">#{{t}}</span>
                            </div></li>
                        <li class="sub_info"><span class="label">기타</span><div>
                             <span v-for="t in grant_info.special_etc_tag" style="margin-right:5px">#{{t}}</span>
                            </div></li>
                    </ul>
                    </div></li>
                <li class="sub_info"><span class="label">모집규모</span><div style="margin-bottom:14px;">{{grant_info.recruit_size}}팀 내외</div></li>
                <li class="sub_info"><span class="label">우대사항</span><div style="margin-bottom:14px;white-space: pre-line;">
                    {{grant_info.prefer}}
                    </div></li>
                <li class="sub_info"><span class="label">제한사항</span><div style="margin-bottom:14px;white-space: pre-line;">
                    {{grant_info.constraint}}</div></li>
            </ul>
        </div>
        
        <div class="gr_seg">
 <div class="gr_seg_ttl" >안내사항</div>

<ul style="margin-top:24px;">
      <li class="sub_info"><span class="label">행사일정</span><div style="margin-bottom:14px;">
          </div></li>
      <li class="sub_info"><span class="label">FAQ</span><div style="margin-bottom:14px;white-space: pre-line;">
          {{grant_info.fag}}
          </div></li>
      <li class="sub_info"><span class="label">추가문의처</span><div style="margin-bottom:14px;white-space: pre-line;">
           {{grant_info.additional_faq}}
          </div></li>
</ul>
        </div>

    <div class="gr_seg">
        <div class="gr_seg_ttl">기타</div>
        <div style="margin-top:24px;white-space: pre-line;">
                         {{grant_info.etc}}
        </div>
    </div>

    <div class="gr_seg">
        <div class="gr_seg_ttl">실시간 지원현황 간략보기</div>
        <svg id="realtime_apply" width="1016" height="200"></svg>
        
    </div>
 <div class="gr_seg">
        <div class="gr_seg_ttl">해당사업의 과거 지원현황</div>
        <svg id="past_apply" width="1016" height="200"></svg>
        
    </div>
    </div>    
</template>

<script>
export default {
    props:["grant_info"],
    filters:{
       
    },
    updated:function(){       
        $("#back_canvas_1").css("height",$("#grant_detail_height").css("height"))
    },
    mounted:
        function(){


function log(sel , message){
    console.log(sel)
  
    console.log(message)
}

            // Define margins, dimensions, and some line colors
var margin = {top: 40, right: 120, bottom: 50, left: 40};
var width = 1016 - margin.left - margin.right;
var height = 200 - margin.top - margin.bottom;
var data_0 ;
// Define the scales and tell D3 how to draw the line
var parseTime = d3.timeParse("%d-%b-%y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#realtime_apply")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
var tipBox_1;
var tooltipLine_1;
d3.csv("/static/test.json", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.close = +d.close;
  });
  data_0=data
  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.close; })]);

  // Add the X Axis
  svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x)
              .tickFormat(d3.timeFormat("%Y-%m-%d")))
      .selectAll("text")	
        .style("text-anchor", "end")
        .attr("font-size","12px")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-30)");

  // Add the Y Axis
  svg.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y));

  svg.append("path")
     .datum(data)
     .attr("fill","none")
     .attr("stroke","#000")
     
     .attr("d",valueline)
     .attr("class","line")

  tooltipLine_1 = svg.append('line');
  tipBox_1 = svg.append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('opacity', 0)
    .on('mousemove', drawTooltip_1)
    .on('mouseout', removeTooltip_1);

});
var tooltip_1 = d3.select('#tooltip_1');
function removeTooltip_1(){}
function drawTooltip_1() {
  console.log(data_0)
  var coords = d3.mouse(this);
  var x_cord = Math.round( x.invert(coords[0]))
  var y_cord = Math.round( y.invert(coords[1]))
  var y_val 
  for(var k =0; k< data_0.length-1;k++){
      (data_0[k].date.getTime()) 
    if( data_0[k].date.getTime() > new Date(x_cord).getTime() && new Date(x_cord).getTime() > data_0[k+1].date.getTime() ){
        y_val = (data_0[k].close)
    }
  }

  //console.log(y(((x_cord))))

  var year= y_val
//   tooltipLine_1.attr('stroke', 'black')
//     .attr('x1', x())
//     .attr('x2', x(year))
//     .attr('y1', 0)
//     .attr('y2', height);

  tooltip_1.html(year)
    .style('display', 'block')
    .style('left', d3.event.pageX + 20)
    .style('top', d3.event.pageY - 20)
    .selectAll()
    $("#tooltip_1").css("top",d3.event.pageY)
    $("#tooltip_1").css("left",d3.event.pageX)
 
}
}
    

}
</script>
<style scoped>

.axis { font: 14px sans-serif; }

.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 2px;
}
    #grant_detail_more_con{
        margin-left: 184px; 
        background-color: #fff;
        width: 1016px;
        height: auto;
        overflow: -webkit-paged-y;
        padding-left: 24px;
    }
    ul{
            -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
    }
    li{
        list-style: none;
    }
    li>span.label{
        width:107px;
        text-align: left;
        color: #1a2f53;
        font-size: 14px;
        display: inline-table;
        opacity: 0.7;    
        color: #1a2a53;
    }

    li>div{
        width: 762px;
        display: inline-table;
        margin-bottom:11px; 
        font-size: 14px;
        color: #1a2f53;
        line-height: 1.71;
    }
    .gr_seg{
        height: auto;
        overflow: auto ;
        border-bottom: 1px solid rgba(206, 212, 218, 0.5);
        position: relative;
        padding-bottom: 30px;
    }
    .gr_seg>.gr_seg_ttl{
        font-size: 20px;
        font-weight: bold;
        line-height: 1.6;
        color: #1a2f53;
        margin-top: 35px;
    }
    .sub_info>div>span{
        margin: 4px;
    }
    .sub_info>div>ul>li>div{
        width:400px;
    }

    .sub_info>div>ul>li>div>span{
        font-weight:bold 
    }
    #grant_detail_more_con > div > ul > li > div > ul > li > span{
        color: #1a2f53!important;
        opacity: 0.8; 
        font-size: 14px;
        font-weight: bold;
        line-height: 1.86;
        letter-spacing: -0.1px;
        color: #1a2a53;
        line-height: 40px;
    }
    #grant_detail_more_con > div > ul > li > div > ul > li > div > span{
        color: #243d68;
    }
    /* .filter{
    background-color: #f5f8ff;
    opacity: 0.7; 
    font-size: 14px;
    line-height: 1.86;
    letter-spacing: -0.1px;
    text-align: center;
    color: #1a2a53;
    padding: 7px 17px;
    border-radius: 30px;
      color: #1a2a53!important;
      display: inline-block;
      margin-right:8px;
} */
</style>

