<template>
    <div id="static_content">
        <StaticNavigation></StaticNavigation>
        
        <div id="gr_back" style="background-color:#fff; width:1144px;padding:40px;margin-top:52px;">
        <div id="select_zone" style="position:relative">
            <!-- 패스 -->
            <select id="b_0" v-on:change="path_change" class="basic">
	            <option value="all">전체</option>
	            <option v-for="p in path_data"  v-bind:value="p.id">{{p.title}}</option>
            </select>
            
            <!-- 코스  -->
            <select id="b_1" v-on:change="course_change"  class="basic">
	            <option value="all"></option>
	            <option v-for="p in course_data"  v-bind:value="p.id">{{p.title}}</option>
            </select>
            
             <select  id="b_2" class="basic">
	            <option value="all"></option>
	            <option v-for="p in clip_data"  v-bind:value="p.id">{{p.title}}</option>
            </select>
            
            <div id="static_pdf_down" v-on:click="open_window"  >통계 PDF 다운</div>
            <div id="static_pdf_down" v-on:click="makePDF" style="right:100"  >통계 PDF1 다운</div>
            <div style="    position: absolute;    width: 38px;    height: 86px;      z-index: 999999000;    top: 566px; background-color: #fff;"></div>
        </div>
        <div id="test_div">
         <svg id="sgv_11_all" width="1144" height="612"></svg></div>
         <div id="select_zone_2">
            <select class="basic">
	            <option value="0">전체</option>
                <option value="2">방문자</option>
	            <option value="1">시청자</option>	               
            </select>      
            <div id="person_num">{{pre_entry.length}}<span>명</span></div>   
        </div>
        <div id="pie_con">
            <div class="pie_seg">
                <div class="pie">
                    <span>지역</span>
                    <svg id="pie_0" style="margin-top:59px;margin-left:43px"></svg>
                </div>
                <div class="column">
                    <ul>                                                       
                    </ul>
                </div>
            </div>
            <div class="pie_seg">
                <div class="pie">
                     <span>업종</span>
                    <svg id="pie_1" style="margin-top:59px;margin-left:43px"></svg>
                </div>
                <div class="column">  <ul>
                                                        
                    </ul></div>
            </div>
            <div class="pie_seg">
                <div class="pie">
                     <span>직원수</span>
                    <svg id="pie_2" style="margin-top:59px;margin-left:43px"></svg>
                </div>
                <div class="column">  <ul>
                                                              
                    </ul></div>
            </div>
            <div class="pie_seg">
                <div class="pie">
                     <span>태그</span>
                    <svg id="pie_3" style="margin-top:59px;margin-left:43px"></svg>
                </div>
                <div class="column">  
                    <ul>
                                                         
                    </ul></div>
            </div>
        </div>
        <div id="list_view">
            <div id="list">리스트 보기 <i style="cursor:pointer" class="fas fa-chevron-up"></i> </div>
            <div id="sub_btn">
                <span id="excel_down" >리스트 엑셀로 내보내기</span>
                  <div id="input_box"><input type="text"><i class="fas fa-search"></i></div>
                <div> 
                    <span class="change_num num_on" data-num="10">10개 보기</span>
                    <span class="change_num" data-num="50">50개 보기</span>
                    <span class="change_num" data-num="100">100개 보기</span>
                    <span class="change_num" data-num="all">전체 보기</span>
                </div>
            </div>
            <table id="list_tbl">
                <thead>
                    <tr>
                        <td>순서 <i class="fas fa-sort-down"></i></td>
                        <td>아이디 <i class="fas fa-sort-down"></i></td>
                        <td>기업명 <i class="fas fa-sort-down"></i></td>
                        <td>업종 <i class="fas fa-sort-down"></i></td>
                        <td>지역 <i class="fas fa-sort-down"></i></td>
                        <td>직원수 <i class="fas fa-sort-down"></i></td>
                        <td>연락처 <i class="fas fa-sort-down"></i></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="e in entry">
                        <td>{{e.index}} </td>
                        <td>{{e.email}} </td>
                        <td>{{e.name}} </td>
                        <td>{{e.kind}} </td>
                        <td>{{e.local}} </td>
                        <td>{{e.employee_num}} </td>
                        <td>{{e.tel}}</td>
                    </tr>             
                </tbody>
            </table>
            <div id="tbl_pagination" style="margin-top:37px;">
                <i id="before_list" class="fas fa-chevron-left"></i>
                    <span class="list_btn" v-for="l in list_nav" v-bind:data-num="l">{{l}}</span>
                <i id="after_list" class="fas fa-chevron-right"></i>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import StaticNavigation from "./StaticNavigation.vue"
import axios from "axios"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { setTimeout } from 'timers';


function make_pie_graph(target, arr,arr2){
        $(target).empty()
        var group = d3.select(target)
                      .attrs({ width: 300, height: 300 })
                      .append('g')
                      .attr('transform', 'translate(100, 100)');
        var data = arr;
        var pieSegments = d3.pie()(data);
        var arcGenerator = d3.arc()
                             .innerRadius(70)
                             .outerRadius(100)
                             .startAngle(function (d) { return d.startAngle; })
                             .endAngle(function (d) { return d.endAngle; });
        var colors = d3.scaleOrdinal(d3.schemeCategory10);
        group.selectAll('path')
             .data(pieSegments)
             .enter()
             .append('path')
             .attrs({ d: arcGenerator, stroke: 'white',
                      'stroke-width': 0, fill: function (d, i) {
                          return colors(i);
                      },
             });
             $(target).parent().parent().find(".column").find("ul").empty()
             for(var k=0; k < arr2.length;k++){
                 var $seg =  "<li><span style='background-color:"+colors(k)+"'></span><span>"+arr2[k]+":"+arr[k]+"</span></li>"
                  $(target).parent().parent().find(".column").find("ul").append($seg)
             }
}
function format_date(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}

function dict_sort(arr){
    arr.sort(function(a,b){  return (a[Object.keys(a)[0]]) < (b[Object.keys(b)[0]]) ?
                 -1 : (a[Object.keys(a)[0]]) > (b[Object.keys(b)[0]]) ? 1 : 0;   }).reverse()
    var value_list = []
    var key_list = []
    for(var k = 0; k < arr.length; k++){
        value_list.push(arr[k][Object.keys(arr[k])[0]])
        key_list.push(Object.keys(arr[k])[0])
    }
    var result = new Object();
    result.value=value_list
    result.key=key_list
    return result
}

export default {
    components:{
        StaticNavigation
    },
    methods:{
        course_change:function(){
            this.clip_data=[]
            console.log( $("#b_1").val() )
            for (var k=0; k < (this.course_data.length) ; k++){
                if( parseInt(this.course_data[k].id) == parseInt($("#b_1").val()) ){
                    console.log("data")
                    console.log(this.course_data[k].clip)
                    this.clip_data = this.course_data[k].clip.slice()
                }
            }
        },
        path_change:function(){
            this.course_data=[]
            for (var k=0; k < (this.path_data.length) ; k++){
                console.log($("#b_0").val())
                if( parseInt(this.path_data[k].id) == parseInt($("#b_0").val()) ){
                    this.course_data = this.path_data[k].course.slice()
                }
            }

        },
        open_window:function(){
   
            var url="/manager/statics/by_grant/popup/219";
            window.open(url,"","width=800,height=800,left=600");}
        ,  
        makePDF: function(selector = 'body') {
            $(".change_num.num_on").click();
            $("#list_view").addClass("hidden")
            $(".zoom").attr("width","1")
            $(".zoom").attr("height","1")
   
			window.html2canvas = html2canvas //Vue.js 특성상 window 객체에 직접 할당해야한다.
			let that = this
			let pdf = new jsPDF('l', 'mm', 'a4')
			let canvas = pdf.canvas
			const pageWidth = 295 //캔버스 너비 mm
			const pageHeight =210  //캔버스 높이 mm
			canvas.width = pageWidth                 

            var ele = document.querySelector('#test_div')
			let width = ele.offsetWidth // 셀렉트한 요소의 px 너비
			let height = ele.offsetHeight // 셀렉트한 요소의 px 높이
			let imgHeight = pageWidth * height/width // 이미지 높이값 px to mm 변환
			if(!ele){
				console.warn(selector + ' is not exist.')
				return false
            }
            
            	html2canvas(ele).then(canvas=>{
                    	let position = 0
                    var imgData = canvas.toDataURL('image/png')
                    var downloadLink = document.createElement("a");
                    document.body.appendChild(downloadLink);
                    downloadLink.style.display = "none";
                    downloadLink.href = imgData;
                    downloadLink.download = "TEST111.PNG";
                    downloadLink.click();
                    downloadLink.remove()
                    
					pdf.addImage(imgData, 'png', 0, position, pageWidth, imgHeight, undefined, 'slow')
					//Paging 처리
					let heightLeft = imgHeight //페이징 처리를 위해 남은 페이지 높이 세팅.
					heightLeft -= pageHeight
					while (heightLeft >= 0) {
						position = heightLeft - imgHeight
						pdf.addPage();
						pdf.addImage(imgData, 'png', 0, position, pageWidth, imgHeight)
						heightLeft -= pageHeight
					}
					//pdf.save("test" +'.pdf')
                })
                setTimeout(function(){
                var ele = document.querySelector('#gr_back')
			 width = ele.offsetWidth // 셀렉트한 요소의 px 너비
			 height = ele.offsetHeight // 셀렉트한 요소의 px 높이
             imgHeight = pageWidth * height/width // 이미지 높이값 px to mm 변환



             $("#person_num").css({
                    "display": "inline-block",
                    "margin-left": "30px"
             })
             $("#pie_con").css("margin-left", "158px")
                	html2canvas(ele).then(canvas=>{
                    	let position = 0
                  var imgData = canvas.toDataURL('image/png')
					pdf.addImage(imgData, 'png', 0, position, pageWidth, imgHeight, undefined, 'slow')
					//Paging 처리
					let heightLeft = imgHeight //페이징 처리를 위해 남은 페이지 높이 세팅.
					heightLeft -= pageHeight
					while (heightLeft >= 0) {
						position = heightLeft - imgHeight
						pdf.addPage();
						pdf.addImage(imgData, 'png', 0, position, pageWidth, imgHeight)
						heightLeft -= pageHeight
					}
                    pdf.save("test" +'.pdf')
                     $("#pie_con").css("margin-left", "0")
                      $("#person_num").css({
                    "display": "block",
                    "margin-left": "0px"
             })
                })
                },1000)
               

            setTimeout(function(){
  var ele = document.querySelector('#pie_con')
			 width = ele.offsetWidth // 셀렉트한 요소의 px 너비
			 height = ele.offsetHeight // 셀렉트한 요소의 px 높이
			 imgHeight = pageWidth * height/width // 이미지 높이값 px to mm 변환
			if(!ele){
				console.warn(selector + ' is not exist.')
				return false
            }
            	html2canvas(ele).then(canvas=>{
                  	let position = 0
                    var imgData = canvas.toDataURL('image/png')
                    var downloadLink = document.createElement("a");
                    document.body.appendChild(downloadLink);
                    downloadLink.style.display = "none";
                    downloadLink.href = imgData;
                    downloadLink.download = "다운로드.png";
                    downloadLink.click();
                    downloadLink.remove()
                    
					pdf.addImage(imgData, 'png', 0, position, pageWidth, imgHeight, undefined, 'slow')
					//Paging 처리
					let heightLeft = imgHeight //페이징 처리를 위해 남은 페이지 높이 세팅.
					heightLeft -= pageHeight
					while (heightLeft >= 0) {
						position = heightLeft - imgHeight
						pdf.addPage();
						pdf.addImage(imgData, 'png', 0, position, pageWidth, imgHeight)
						heightLeft -= pageHeight
					}
					//pdf.save("test" +'.pdf')
                })

                    $(".zoom").attr("width","1084")
                    $(".zoom").attr("height","482")

            },2000)

        
},

    },
    data:function(){
        return{
            pre_entry:[],
            entry:[
               
            ],
            base_info:{

              },
            list_nav:[

            ],
            path_data:[],
            course_data:[],
            clip_data:[],
            watch_static:[],
            fav_static:[]
        }
    },
    mounted:function(){
    var vue_obj=this

    //기관 관리자 라면 ;
    try{
        if(user.has("manager"))
        $("manager_select").removeClass("hidden")
    }
    catch(e){
        console.log(e)
    }
    
    var svg = d3.select("#sgv_11_all"),
    margin = {top: 20, right: 20, bottom: 110, left: 40},
    margin2 = {top: 530, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    height2 = +svg.attr("height") - margin2.top - margin2.bottom;
    var parseDate = d3.timeParse("%Y-%m-%d");
    var x_data = d3.scaleTime().range([0, width]),
    x2 = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    y2 = d3.scaleLinear().range([height2, 0]),
    y3 = d3.scaleLinear().range([height, 0]),
    y4 = d3.scaleLinear().range([height, 0]);
    
    var Line_chart;

    var line1 = d3.line()
        .x(function (d) { return x_data(parseDate(d.date)); })
        .y(function (d) { return y(d.number); });
    var line2 = d3.line()
        .x(function (d) { return x_data(parseDate(d.date)); })
        .y(function (d) { return y(d.number); });


    var xAxis = d3.axisBottom(x_data),
        xAxis2 = d3.axisBottom(x2),
        yAxis = d3.axisLeft(y);

     var focus = svg.append("g")
        .attr("class", "focus")
        .attr("fill","none")
        .attr("stroke-width","1px")
        .attr("stroke","#000")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var brush
    var zoom
    var context = svg.append("g")
    .attr("class", "context")
     .attr("stroke","#000")
        .attr("strok-width","1px")
        .attr("fill","none")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

$(document).ready(function(){
    init_zoomable_line()
    // 전체 패스와 코스 강의 데이터 받아오는 부분
    $.ajax({
        url:vue_obj.baseURI+"/vue_get_statics_by_channel",
        type:"get",
        success:function(res){
            console.log(res)
            vue_obj.path_data = res.path.slice()
        }
    })

    $.ajax({
        url:vue_obj.baseURI+"/vue_get_channel_statics_path/?path_id=12",
        type:"get",
        success:function(res){
            console.log(res)            
           vue_obj.watch_static = res.line.watch_static
                 vue_obj.fav_static = res.line.fav_static

        }
    })
    $(document).on("change","#b_0", function(){
        $.ajax({
            url:vue_obj.baseURI+"/vue_get_channel_statics_path?path_id="+$("#b_0").val(),
            type:"get",
            success:function(res){
                console.log(res)
                 var result = dict_sort(res.path_local_tag)
                 vue_obj.watch_static = res.line.watch_static
                 vue_obj.fav_static = res.line.fav_static
                make_pie_graph("#pie_0", result.value , result.key)
                var result2 = dict_sort(res.path_kind_tag)
                make_pie_graph("#pie_1", result2.value , result2.key)
                var result3 = dict_sort(res.path_em_tag)
                make_pie_graph("#pie_2", result3.value , result3.key)
                var result4 = dict_sort(res.path_field_tag)
                make_pie_graph("#pie_3", result4.value , result4.key)
                update_zoomable_line()
            }        
        })
    })// 패스 셀렉

    $(document).on("change","#b_1", function(){
  $.ajax({
            url:vue_obj.baseURI+"/vue_get_channel_statics_course?course_id="+$("#b_1").val(),
            type:"get",
            success:function(res){
                console.log(res)
                 var result = dict_sort(res.path_local_tag)
                 vue_obj.watch_static = res.line.watch_static
                 vue_obj.fav_static = res.line.fav_static
                make_pie_graph("#pie_0", result.value , result.key)
                var result2 = dict_sort(res.path_kind_tag)
                make_pie_graph("#pie_1", result2.value , result2.key)
                var result3 = dict_sort(res.path_em_tag)
                make_pie_graph("#pie_2", result3.value , result3.key)
                var result4 = dict_sort(res.path_field_tag)
                make_pie_graph("#pie_3", result4.value , result4.key)
                update_zoomable_line()
            }        
        })
    })// 코스 셀렉

    $(document).on("change","#b_2", function(){

    })// 패스 셀렉


    $(document).on("click",".title", function(){
        $(".title").parent().removeClass("on")
        $(this).parent().addClass("on")
    })

    $(document).on("click","#excel_down", function(){     
        var ee = excelExport("list_tbl").parseToCSV().parseToXLS("excelexport sheet");
       location.href = ee.getXLSDataURI();
       })
 
       
   

    $(document).off("change","#select_zone_2")
    $(document).on("change","#select_zone_2>.basic:eq(0)", function(){
        if($(this).val()=="0"){
                vue_obj.pre_entry = vue_obj.base_info.all_startup_list
                vue_obj.entry = vue_obj.base_info.all_startup_list.slice(0,10)
                var result = dict_sort(vue_obj.base_info.all_local_tag)
                make_pie_graph("#pie_0", result.value , result.key)
                var result2 = dict_sort(vue_obj.base_info.all_kind_tag)
                make_pie_graph("#pie_1", result2.value , result2.key)
                var result3 = dict_sort(vue_obj.base_info.all_em_tag)
                make_pie_graph("#pie_2", result3.value , result3.key)
                var result4 = dict_sort(vue_obj.base_info.all_tag_tag)
                make_pie_graph("#pie_3", result4.value , result4.key)
        }else 
        if($(this).val()=="1"){
                vue_obj.pre_entry = vue_obj.base_info.ap_startup_list
                vue_obj.entry = vue_obj.base_info.ap_startup_list.slice(0,10)
                var result = dict_sort(vue_obj.base_info.ap_local_tag)
                make_pie_graph("#pie_0", result.value , result.key)
                var result2 = dict_sort(vue_obj.base_info.ap_kind_tag)
                make_pie_graph("#pie_1", result2.value , result2.key)
                var result3 = dict_sort(vue_obj.base_info.ap_em_tag)
                make_pie_graph("#pie_2", result3.value , result3.key)
                var result4 = dict_sort(vue_obj.base_info.ap_tag_tag)
                make_pie_graph("#pie_3", result4.value , result4.key)
        }else 
        if($(this).val()=="2"){
                vue_obj.pre_entry = vue_obj.base_info.hit_startup_list
                vue_obj.entry = vue_obj.base_info.hit_startup_list.slice(0,10)
                var result = dict_sort(vue_obj.base_info.hit_local_tag)
                make_pie_graph("#pie_0", result.value , result.key)
                var result2 = dict_sort(vue_obj.base_info.hit_kind_tag)
                make_pie_graph("#pie_1", result2.value , result2.key)
                var result3 = dict_sort(vue_obj.base_info.hit_em_tag)
                make_pie_graph("#pie_2", result3.value , result3.key)
                var result4 = dict_sort(vue_obj.base_info.hit_tag_tag)
                make_pie_graph("#pie_3", result4.value , result4.key)
        }
   
        vue_obj.list_nav=[]
        for(var k=1; k <= Math.ceil(vue_obj.pre_entry.length/10); k++){vue_obj.list_nav.push(k)}
        $(".list_btn").removeClass("bold")
        $(".list_btn:eq(0)").addClass("bold")
    })

    $(document).on("click",".change_num", function(){
            $(".change_num").removeClass("num_on")
            $(this).addClass("num_on")
            if($(this).attr("data-num") == "10"){
                vue_obj.entry = vue_obj.pre_entry.slice(0,10)
                vue_obj.list_nav=[]
                for(var k=1; k <= Math.ceil(vue_obj.pre_entry.length/10); k++){vue_obj.list_nav.push(k)}
            }else if($(this).attr("data-num") == "50"){
                vue_obj.entry = vue_obj.pre_entry.slice(0,50)
                vue_obj.list_nav=[]
                for(var k=1; k <= Math.ceil(vue_obj.pre_entry.length/50); k++){vue_obj.list_nav.push(k)}
            }else if($(this).attr("data-num") == "100"){
                 vue_obj.entry = vue_obj.pre_entry.slice(0,100)
                 vue_obj.list_nav=[]
                for(var k=1; k <= Math.ceil(vue_obj.pre_entry.length/100); k++){vue_obj.list_nav.push(k)}
            }else{
                 vue_obj.entry = vue_obj.pre_entry
                 vue_obj.list_nav=[]
                 vue_obj.list_nav.push(1)
            }
    })

    $(document).on("click",".list_btn", function(){
        $(".list_btn").removeClass("bold");
        $(this).addClass("bold")

        vue_obj.entry = vue_obj.pre_entry.slice( (parseInt($(this).attr("data-num"))-1)*10, (parseInt($(this).attr("data-num")))*10)
    })
   
 
  

    function update_zoomable_line(){
        
     brush = d3.brushX()
        .extent([[0, 0], [width, height2]])
        .on("brush end", brushed);
    zoom = d3.zoom()
        .scaleExtent([1, Infinity])
        .translateExtent([[0, 0], [width, height]])
        .extent([[0, 0], [width, height]])
        .on("zoom", zoomed);

    var line_sub_1 = d3.line()
        .x(function (d) { return x2(parseDate(d.date)); })
        .y(function (d) { return y2(+d.number); });
    var line_sub_2 = d3.line()
        .x(function (d) { return x2(parseDate(d.date)); })
        .y(function (d) { return y2(+d.number); });
    var line_sub_3 = d3.line()
        .x(function (d) { return x2(parseDate(d.date)); })
        .y(function (d) { return y2(+d.number); });
   

      
  var parsed_data ;
  var data0 = vue_obj.fav_static
  var data1 = vue_obj.watch_static



  var min_date = new Date()
  min_date.setDate(min_date.getDate() - 60);


  var extent_0= d3.extent(data0, function(d) {  return parseDate(d.date); });
  var dateHash_0 = data0.reduce(function(agg, d) {
          agg[parseDate(d.date)] = true;
          return agg;
      }, {})
  var  headers = x_data.domain();
  d3.timeDays(min_date, Date.now())
        .filter(function(date) { return !dateHash_0[(date)]; })
        .forEach(function(date) {
            var emptyRow = { "date": format_date(date) , "number":0 };
            headers.forEach(function(header) {
                emptyRow[header] = null;
            });
            data0.push(emptyRow);
        });
    data0.sort(function(a, b) { return d3.ascending(a.date, b.date); });

    
  var extent1= d3.extent(data1, function(d) {  return parseDate(d.date); });
  var dateHash1 = data1.reduce(function(agg, d) {
          agg[parseDate(d.date)] = true;
          return agg;
      }, {})
  var  headers = x_data.domain();
  d3.timeDays(min_date, Date.now())
        .filter(function(date) { return !dateHash1[(date)]; })
        .forEach(function(date) {
            var emptyRow = { "date": format_date(date) , "number":0 };
            headers.forEach(function(header) {
                emptyRow[header] = null;
            });
            data1.push(emptyRow);
        });
    data1.sort(function(a, b) { return d3.ascending(a.date, b.date); });

    x_data.domain([min_date, Date.now()  ]);  
    y.domain([0, d3.max(data1, function (d) { return +d.number; })]);
    x2.domain(x_data.domain());
    y2.domain(y.domain());
    
    $(".focus:eq(1)").empty();
    $(".axis--y").remove();
    focus.append("g")
        .attr("class", "axis axis--y")
        .call(yAxis)    
    Line_chart.append("path")
        .datum(data0)
        .attr("class", "line1")
        .attr("fill","none")
        .attr("d", line1);
    Line_chart.append("path")
        .datum(data1)
        .attr("class", "line2")
        .attr("fill","none")
        .attr("d", line1);
        
    $(".context").empty()
    context.append("path")
        .datum(data0)
        .attr("class", "line1")
        .attr("fill", "none")        
        .attr("d", line_sub_1);
    context.append("path")
        .datum(data1)
        .attr("class", "line2")
        .attr("fill", "none")  
        .attr("d", line_sub_2);
   
        

    context.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);


    context.append("g")
      .attr("class", "brush")
      .attr("fill","none")
      .call(brush)
      .call(brush.move, x_data.range());
    svg.append("rect")
      .attr("class", "zoom")
      .attr("width", width)
      .attr("height", height)
      .attr("fill","transparent")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .call(zoom);

    }
    
    function init_zoomable_line(){

    brush = d3.brushX()
        .extent([[0, 0], [width, height2]])
        .on("brush end", brushed);
    zoom = d3.zoom()
        .scaleExtent([1, Infinity])
        .translateExtent([[0, 0], [width, height]])
        .extent([[0, 0], [width, height]])
        .on("zoom", zoomed);

    var line_sub_1 = d3.line()
        .x(function (d) { return x2(parseDate(d.date)); })
        .y(function (d) { return y2(+d.number); });
    var line_sub_2 = d3.line()
        .x(function (d) { return x2(parseDate(d.date)); })
        .y(function (d) { return y2(+d.number); });
    var line_sub_3 = d3.line()
        .x(function (d) { return x2(parseDate(d.date)); })
        .y(function (d) { return y2(+d.number); });
  

    var clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);

    Line_chart = svg.append("g")
        .attr("class", "focus")
        .attr("stroke","#000")
        .attr("strok-width","1px")
        .attr("fill","none")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("clip-path", "url(#clip)");
   
  var parsed_data ;
  var data1 = vue_obj.fav_static
  var data2 = vue_obj.watch_static
  


  var extent1= d3.extent(data1, function(d) {  return parseDate(d.date); });
  var dateHash1 = data1.reduce(function(agg, d) {
          agg[parseDate(d.date)] = true;
          return agg;
      }, {})
  var  headers0 = x_data.domain();
  d3.timeDays(new Date(vue_obj.min_date), Date.now())
        .filter(function(date) { return !dateHash1[(date)]; })
        .forEach(function(date) {
            var emptyRow = { "date": format_date(date) , "number":0 };
            headers0.forEach(function(header) {
                emptyRow[header] = null;
            });
            data1.push(emptyRow);
        });
    data1.sort(function(a, b) { return d3.ascending(a.date, b.date); });


    var extent2= d3.extent(data2, function(d) {  return parseDate(d.date); });
  var dateHash2 = data2.reduce(function(agg, d) {
          agg[parseDate(d.date)] = true;
          return agg;
      }, {})
  var  headers2 = x_data.domain();
  d3.timeDays(new Date(vue_obj.min_date), Date.now())
        .filter(function(date) { return !dateHash2[(date)]; })
        .forEach(function(date) {
            var emptyRow = { "date": format_date(date) , "number":0 };
            headers2.forEach(function(header) {
                emptyRow[header] = null;
            });
            data2.push(emptyRow);
        });
    data2.sort(function(a, b) { return d3.ascending(a.date, b.date); });
    

    x_data.domain(d3.extent(data1, function(d) { return parseDate(d.date) }));  
    y.domain([0, d3.max(data1, function (d) { return +d.number; })]);
    x2.domain(x_data.domain());
    y2.domain(y.domain());

    focus.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
    focus.append("g")
        .attr("class", "axis axis--y")
        .call(yAxis)
    Line_chart.append("path")
        .datum(data1)
        .attr("class", "line1")
        .attr("d", line1);
    Line_chart.append("path")
        .datum(data2)
        .attr("class", "line2")
        .attr("d", line2);



    context.append("path")
        .datum(data1)
        .attr("class", "line1")
        .attr("d", line_sub_1);
    context.append("path")
        .datum(data2)
        .attr("class", "line2")
        .attr("d", line_sub_2);



    context.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);
    context.append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, x_data.range());
    svg.append("rect")
      .attr("class", "zoom")
      .attr("fill", "none")      
      .attr("width", width)
      .attr("height", height)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .call(zoom);
    }
    
function brushed() {
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
  var s = d3.event.selection || x2.range();
  x_data.domain(s.map(x2.invert, x2));

  Line_chart.select(".line1").attr("d", line1);
  Line_chart.select(".line2").attr("d", line2);

  
  focus.select(".axis--x").call(xAxis);
  svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
      .scale(width / (s[1] - s[0]))
      .translate(-s[0], 0));
}

var min_zoom ="";
var flag = true

function zoomed() {
    
 var t = d3.event.transform;
  if( dateDiff(t.rescaleX(x2).domain()[0] ,t.rescaleX(x2).domain()[1] ) > 8 ){
       if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
        x_data.domain(t.rescaleX(x2).domain());
  Line_chart.select(".line1").attr("d", line1);
  Line_chart.select(".line2").attr("d", line2);

  focus.select(".axis--x").call(xAxis);
  context.select(".brush").call(brush.move, x_data.range().map(t.invertX, t));
  }
  else{
      if(flag==true){
          flag= false;
          min_zoom = t.k
        }
          zoom.scaleExtent([1,min_zoom])
  }
}
function type(d) {
  d.date = parseDate(d.date);
  d.number = +d.number;
  return d;
}

function dateDiff(_date1, _date2) {
    var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
    var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);
    diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
    var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    return diff;
} 
})
    }
}
</script>
<style scoped>
.column>ul{
    display: block;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
    margin-top: 0px;
    margin-left: 0px;
}

.column>ul>li{
   list-style: none;
    height: auto;
    line-height: 16px;
    width: 100%;
    margin-bottom: 18px;
    float: left;
    font-size: 12px;
    }
    .column>ul>li:last-child{
          margin-bottom: 0px;
    }
.column>ul>li>span:nth-child(1){
    display: block;    
    width: 16px;
    height: 16px;
    float: left;
    margin-right: 7px;
        
    }
    .column>ul>li:nth-child(1)>span:nth-child(1){   
        background-color: rgb(148, 103, 189); 
    }
    .column>ul>li:nth-child(2)>span:nth-child(1){   
        background-color: rgb(214, 39, 40);
    } 
    .column>ul>li:nth-child(3)>span:nth-child(1){   
        background-color: rgb(44, 160, 44);
    }
    .column>ul>li:nth-child(4)>span:nth-child(1){   
        background-color: rgb(255, 127, 14);
    } 
     .column>ul>li:nth-child(5)>span:nth-child(1){   
        background-color: rgb(31, 119, 180);
    } 
    .column>ul>li:nth-child(6)>span:nth-child(1){   
        background-color: rgb(255, 127, 14);
    } 
;

    .column>ul>li>span{
        float: left;
        display: block;
        height: 16px;
        line-height: 16px;
        font-size: 12px;

    }
    .column>ul>li>span:nth-child(1){
        display: block;
        float: left;
    }
     .column>ul>li>span:nth-child(2){
        display: block;
        float: left;
    }
    .column{
        float: left;
     
        width:84px;
        height:100%;
    }

.pie>span{
    display: block;
    position: absolute;
    left:39px;
    width: 100px;
    height: 28px;
    font-size: 16px;
    color: #243d68;
    line-height: 28px;
}
  .line1,.line2,.line3,.line4 ,.line5,.line6,.line7,.line8,.line9{
        fill: none;
       
        stroke-width: 1.5px;
    }
    .line1{
        stroke: steelblue;
    }
    .line2{
        stroke: red;
    }
    .line3{
        stroke: black;
    }
    .line4{
        stroke: green;
    }
    .line5{
        stroke: yellow;
    }
    .line6{
        stroke: brown;
    }
    .line7{
        stroke: rosybrown;
    }
    .line8{
        stroke: orangered;
    }
    .line9{
        stroke: purple;
    }
.zoom {
  cursor: move;
  fill: transparent;
  pointer-events: all;
}

.file{
    cursor: pointer;
}
.hidden{
    display: none;
}
td>i{
    margin-top: 1px;
    vertical-align: top;
    cursor: pointer;
}

#list_tbl{
    width: 1112px;
    border-collapse: collapse;
    margin-top: 16px;
    margin-left: 16px;
}
#list_tbl>thead>tr{ 
    height: 40px;
  
}
#list_tbl>thead>tr>td{
    border-top:1px solid #4f5478;
    border-bottom:1px solid #4f5478;
    
    font-size: 14px; 
    color: #1a2f53;
    vertical-align: center;
    padding-left: 14px;
}
#list_tbl>tbody>tr>td{
     font-size: 12px; 
  color: #1a2f53;
  height:56px;
  border-bottom: solid 1px #ced4da;
  padding-left: 16px;
}


#sub_btn{
    width:1112px;
    overflow: auto;
    margin-top: 22px;
    margin-left: 16px;
}
#excel_down{
    display: block;
    font-size: 12px;
    color: #1b66f4;
    float: left;
    cursor: pointer;
    position: absolute;
    top:46px;
    right:16px;
}
#sub_btn>div{
    float: right;
    font-size: 12px;
    color: #243d68;
}
#sub_btn>div>span.num_on{
    font-weight: bold
}
#sub_btn>div>span{
    margin-right: 21px;
    cursor: pointer;
}
#sub_btn>div>span:nth-child(4){
    margin-right: 0px;
}
#tbl_pagination{
    width:1112px;
    margin-left:16px;
    text-align: center
}
#list_view{
    position: relative;
    width: 1144px;
    overflow: auto;
    margin-top: 40px;
 border: solid 1px #ced4da;
 padding-top: 40px;

}
#pie_con{
    overflow: auto;
}
#list{
    font-size: 20px;
  line-height: 1.2;
  letter-spacing: normal;
  color: #1a2f53;
      height:39px;
    width:1112px;
    margin-left:16px;
    line-height: 32px;
  
}
#pie_con{
    margin-top: 21px;
}
.pie_seg{
    width: 400px;
    height: 320px;
    margin-top:10px;
    border-right:1px solid rgba(206, 212, 218, 0.7);
    float: left;
    position: relative;
    overflow: hidden;
}
.pie{
    float: left;
    width:300px;;
    height: 197px;
   
}
.pie_seg:nth-child(4){
    margin-right: 0px;
}
#person_num{
  opacity: 0.8;
  font-family: Rubik;
  font-size: 34px;
  font-weight: 300;
  color: #243d68;
  margin-top: 24px;
  margin-left: 8px;
}
#person_num>span{
     font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.75;
  letter-spacing: normal;
  color: #243d68;
}

    .basic{
        width: 309px;
        height: 51px;
        font-size: 20px;
        font-weight: 900;
        color: #1a2f53;
        line-height: 51px;
        padding-left: 18px;
    
    }
    #select_zone{
        margin-top: 40px;
        width: 1144px;;
        height: 51px;;
    }
    #static_content{
        margin-left: 64px;        
        padding-top:40px;
        padding-left: 52px;
    }
    #top_banner{
        width:1224px;;
        overflow: auto;;
        border-bottom:1px solid #a0a3bc;
        margin-top:56px;
    }
    #top_banner>div{
        margin-top:15px;
        float: left;
        position: relative;
        cursor: pointer;
        color: #4f5478;
        font-size: 14px;
        border-bottom:2px solid transparent;
        margin-right:30px;
        padding-bottom:7px;

    }
    #top_banner>.on{
        border-bottom:2px solid #1b49f4;
        color:#1b49f4;
    }

    
    #static_pdf_down{
     width: 120px;
  height: 32px;
  border-radius: 16px;
  border: solid 1px #1b66f4;
        background-color: #ffffff;
        border: solid 1px #1b66f4;
        color: #1b66f4;
        font-size: 12px;
        line-height: 34px;
        text-align: center;
        margin-top:8px;
        float: right;
        cursor: pointer;
    }
    .list_btn{
        cursor: pointer;
        font-size: 15px; 
        color: #7697ab;
        margin: 8px;
    }
    .bold{
         color: #243d68;
        font-weight: bold;
        cursor: default;
    }

    
    #input_box{
        display: inline-block;
        width: 144px;
        height: 32px;
        background-color: #ffffff;
        border: solid 1px #ced4da;
        line-height:32px;
        margin-right:29px;
        float: left!important;
    }
    #input_box>i{
        color:#ced4da   
    }
    #input_box>input{
        width: 115px;
        border:none;
        outline: none;
    }
    #select_zone_2{
        margin-top: 140px;
    }
</style>
