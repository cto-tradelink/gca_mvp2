<template>
    <div id="static_content">
        <StaticNavigation></StaticNavigation>
        <div id="user_static_con">
            <div id="static_pdf_down">통계 PDF 다운</div>
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
export default {
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
             const baseURI = "http://127.0.0.1:8000"
            vue_obj.$http.get(`${baseURI}/vue_static_user`)
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
