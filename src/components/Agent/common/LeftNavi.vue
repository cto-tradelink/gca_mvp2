<template>
    <div id="left_navi">
        <div id="navi_con">
            <ul>
                <li><router-link :to="'/agent/dashboard'"><img class="navi_icon" src="/static/img/ic_sms.png" id="alarm"><span>대시보드</span></router-link></li>
                <li><router-link :to="'/agent/statics/by_grant'"><img  src="/static/img/ic_equalizer.png"  class="navi_icon" id="static" ><span >통계</span></router-link></li>
                <li><router-link :to="'/agent/grant/all'"><img class="navi_icon" src="/static/img/ic_description.png" id="grant_wr"><span>지원사업 관리</span></router-link></li>
                <li><router-link :to="'/agent/all_grant'"><img class="navi_icon" src="/static/img/ic_library_books.png"  id="navi"><span>전체 지원사업</span></router-link></li>
                <li><router-link :to="'/agent/account/agent'"><img class="navi_icon" src="/static/img/ic_people.png" id="human"><span>기관회원</span></router-link></li>
                <li><router-link :to="'/agent/user_account'"><img  src="/static/img/ic_business.png"  class="navi_icon" id="smile"><span>유저관리</span></router-link></li>                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
            if (vue_obj.$route.fullPath.indexOf("dashboard") != -1) $("#navi_con>ul>li:eq(0)").addClass("hover")
            if (vue_obj.$route.fullPath.indexOf("statics") != -1) $("#navi_con>ul>li:eq(1)").addClass("hover")
            if (vue_obj.$route.fullPath.indexOf("agent/grant") != -1) $("#navi_con>ul>li:eq(2)").addClass("hover")

        })
    }
}
</script>

<style scoped>
    #left_navi{
        position: absolute;        
        height: 100%;
        width:64px;
        background-color: rgba(255, 255, 255, 0.9);
        -webkit-transition: width 0.3s; /* For Safari 3.1 to 6.0 */
        transition: width 0.3s;
        z-index: 999;
        overflow: hidden;
    }
    #left_navi:hover{
    width:193px;
     box-shadow: 0px 0 16px 0px rgba(63, 67, 98, 0.42);
    }
    ul{
        -webkit-margin-before: 0em;
        -webkit-margin-after: 0em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        -webkit-padding-start: 0px;
        margin-top:45px;
        margin-left: 20px;
    }
    li{
        list-style: none;
        margin-bottom: 22px;
        width:163px;
        font-size: 14px;
        color: #2b2b2b;
        border-right:9px solid transparent;
        line-height: 39px;
        height:39px;
        cursor: pointer;
    }
    li>span{
        display: block;
        
    }
     li.hover{
        border-right:9px solid #1b66f4 !important;
    }    
    .hover>a>span{
        color: #1b66f4;
    }
    .navi_icon{
        float: left;
       
        width:20px;
        height: 20px;
        border-radius: 10px;
        margin-right: 24px;
        margin-top: 9px;
    }

</style>
