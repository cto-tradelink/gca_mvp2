<template>
    <div style="position:fixed; top:104px;; ">
        <ul id="grant_left_navi">
            <li class="navi on">사업개요</li>
            <li class="navi">지원내용</li>
            <li class="navi">모집개요</li>
            <li class="navi">안내사항</li>
            <li class="navi">기타</li>
        
        </ul>
        <div v-on:click="makePDF" id="pdf_down">공고문 PDF 다운</div>
        <TodayViewed></TodayViewed>
    </div>
</template>
<script>
import TodayViewed from "./TodayViewed.vue"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default {
  methods:{
      makePDF: function(selector) {   
    
             $("#static_pdf_down").addClass("hidden")
            $("#grant_detail_card").css("width","850px")
                $(".hr").addClass("hidden")
                      
			window.html2canvas = html2canvas //Vue.js 특성상 window 객체에 직접 할당해야한다.
			let that = this
			let pdf = new jsPDF('p', 'mm', 'a4')
			let canvas = pdf.canvas
			const pageWidth = 210 //캔버스 너비 mm
			const pageHeight =295  //캔버스 높이 mm
			canvas.width = pageWidth      
            var ele = document.querySelector('#grant_pdf_con')
			let width = ele.offsetWidth // 셀렉트한 요소의 px 너비
			let height = ele.offsetHeight // 셀렉트한 요소의 px 높이
			let imgHeight = pageWidth * height/width // 이미지 높이값 px to mm 변환
            //let imgHeight =  pageHeight * width/height
            if(!ele){
				console.warn(selector + ' is not exist.')
				return false
            }
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
                    pdf.save($("#grant_title").text() +'.pdf')
                    $("#static_pdf_down").removeClass("hidden")
                 
           $("#grant_detail_card").css("width","1016px")
                $(".hr").removeClass("hidden")
                      
                      
                })
         }
  },
    components:{
        TodayViewed
    },
    mounted:
    function(){
            $(document).ready(function(){         
            // 스크롤 이벤트 바인딩
            $(window).scroll(function() {              
                $(".navi").removeClass("on");
              if($(".gr_seg_ttl:eq(1)").offset().top >= $(this).scrollTop() && $(this).scrollTop() >= $(".gr_seg_ttl:eq(0)").offset().top) { $("#grant_left_navi>li.navi:eq(0)").addClass("on");  }
              else
              if($(".gr_seg_ttl:eq(2)").offset().top >= $(this).scrollTop() && $(this).scrollTop() >= $(".gr_seg_ttl:eq(1)").offset().top) {$("#grant_left_navi>li.navi:eq(1)").addClass("on"); }
              else
              if($(".gr_seg_ttl:eq(3)").offset().top >= $(this).scrollTop() && $(this).scrollTop() >= $(".gr_seg_ttl:eq(2)").offset().top) {  $("#grant_left_navi>li.navi:eq(2)").addClass("on"); }
              else
              if($(".gr_seg_ttl:eq(4)").offset().top >= $(this).scrollTop() && $(this).scrollTop() >= $(".gr_seg_ttl:eq(3)").offset().top) {  $("#grant_left_navi>li.navi:eq(3)").addClass("on");}
            else
   if($(this).scrollTop() >= $(".gr_seg_ttl:eq(4)").offset().top) {  $("#grant_left_navi>li.navi:eq(4)").addClass("on");}
           

              //   if($(".ttl:eq(4)").offset().top >= $(this).scrollTop() && $(this).scrollTop() >= $(".ttl:eq(3)").offset().top) { $(".navi:eq(3)").addClass("on"); console.log($(".ttl:eq(0)").text()) }
          
                if(parseInt($("#grant_detail_height").css("height").replace("px")) < $(this).scrollTop()+window.innerHeight -100 ) {
                    $("#bottom_btn_con").css("position","relative")
                    $("#grant_left_navi").parent().css("position","absolute")
                    console.log(parseInt($("#grant_detail_height").css("height").replace("px","")) - 820)
                    $("#grant_left_navi").parent().css("top", parseInt($("#grant_detail_height").css("height").replace("px","")) - 820)
                
                }
                else{
                       $("#grant_left_navi").parent().css("position","fixed")
                       $("#grant_left_navi").parent().css("top","104px")
                       $("#bottom_btn_con").css("position","fixed")
                
                }
            });
        })           

    }
     
  
}
</script>

<style scoped>
    .on{
        color: #1a2f53;
        border-bottom: 5px solid #f54b94
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
        width: 66px;
        border-bottom:5px solid  rgba(0,0,0,0) ;
        margin-bottom:40px;
        width: 66px;
        height: 24px;
        opacity: 0.5;
        font-family: SpoqaHanSans;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.71;
        letter-spacing: normal;
        color: #1a2f53;
    }
    #pdf_down{
        width: 160px;
        height: 40px;
        background-color: #ffffff;
        border: solid 1px #1b66f4;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        color: #1b66f4;
        cursor: pointer;
    }
</style>
