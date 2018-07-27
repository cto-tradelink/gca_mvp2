<template>
    <div id="static_content">
        <StaticNavigation></StaticNavigation>
        <div id="user_static_con">
            <div id="static_pdf_down" style="cursor:pointer" v-on:click="makePDF">통계 PDF 다운</div>
            <div class="static_row_seg" style="margin-top:38px;">
                <div class="static_ttl">총 회원 등록 기업</div>
                <div class="static_seg">
                    <div class="sub_ttl">총 기업회원수</div>
                    <div class="number">{{data.total_startup}}</div>
                </div>
                <div class="static_seg">
                    <div class="sub_ttl">총 개인회원 수 </div>
                    <div class="number">{{data.total_user}}</div>
                </div>
                <div class="static_seg">
                    <div class="sub_ttl">기업회원 1개당 평균 사업 참가수</div>
                    <div class="number">{{data.avg_apply}}</div>
                </div>
                <div class="static_seg" style="border-right:none">
                    <div class="sub_ttl">기업회원 1개당 평균 사업 선정수</div>
                    <div class="number">{{data.avg_award}}</div>
                </div>
            </div>
            <div class="static_row_seg" style="margin-top:76px;">
                <div class="static_ttl">최종선정기업</div>
                <div class="static_seg">
                    <div class="sub_ttl">총 기업회원수</div>
                    <div class="number">{{data.total_startup_award}}</div>
                </div>
                <div class="static_seg">
                    <div class="sub_ttl">기업회원 1개당 평균 사업 참가수 </div>
                    <div class="number">{{data.avg_apply_award}}</div>
                </div>
                <div class="static_seg">
                    <div class="sub_ttl">기업회원 1개당 평균 사업 선정수</div>
                    <div class="number">{{data.avg_pick_number}}</div>
                </div>
          
            </div>

            <div class="static_row_seg" style="margin-top:76px;">
                <div class="static_ttl">경기지역 모아보기</div>
                <div class="static_seg">
                    <div class="sub_ttl">총 기업회원수</div>
                    <div class="number">{{data.total_startup_gg}}</div>
                </div>
                <div class="static_seg">
                    <div class="sub_ttl">기업회원 1개당 평균 사업 참가수</div>
                    <div class="number">{{data.avg_apply_gg}}</div>
                </div>
                <div class="static_seg">
                    <div class="sub_ttl">기업회원 1개당 평균 사업 선정수</div>
                    <div class="number">{{data.avg_pick_gg}}</div>
                </div>
          
            </div>

        </div>
    </div>
    
</template>

<script>
import StaticNavigation from "./StaticNavigation.vue"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default {
    methods:{
         makePDF: function(selector) {   
             $("#static_pdf_down").addClass("hidden")
             
			window.html2canvas = html2canvas //Vue.js 특성상 window 객체에 직접 할당해야한다.
			let that = this
			let pdf = new jsPDF('l', 'mm', 'a4')
			let canvas = pdf.canvas
			const pageWidth = 295 //캔버스 너비 mm
			const pageHeight =210  //캔버스 높이 mm
			canvas.width = pageWidth      
            var ele = document.querySelector('#user_static_con')
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
                    pdf.save("유저 통계"+'.pdf')
                    $("#static_pdf_down").removeClass("hidden")
                })
         }
    },

    components:{
        StaticNavigation,
    },
    data:function(){
        return{
            data:""
        }
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
            vue_obj.$http.get(`${vue_obj.baseURI}/vue_static_user`)
                    .then((result) => {
                        vue_obj.data = result.data
                })
        })
    }
}
</script>

<style scoped>
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
