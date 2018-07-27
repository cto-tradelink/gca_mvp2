<template>
    <div id="left_navi">
        <div id="navi_con">
            <ul>
                <li><router-link :to="'/manager/dashboard'"><img class="navi_icon" data-src="/static/img/ic_sms_hover.png" src="/static/img/ic_sms.png" id="alarm"><span>대시보드</span></router-link></li>
                <li><router-link :to="'/manager/statics/by_grant'"><img class="navi_icon" data-src="/static/img/ic_equalizer_hover.png" src="/static/img/ic_equalizer.png" id="static" ><span >통계</span></router-link></li>
                <li><router-link :to="'/manager/grant/all'"><img class="navi_icon" data-src="/static/img/ic_description_hover.png" src="/static/img/ic_description.png" id="grant_wr"><span>지원사업 관리</span></router-link></li>
                <li><router-link :to="'/manager/all_grant'"><img class="navi_icon" data-src="/static/img/ic_library_books_hover.png" src="/static/img/ic_library_books.png" id="grant_wr"><span>전체 지원사업</span></router-link></li>
                <li><router-link :to="'/manager/account/agent'"><img class="navi_icon" data-src="/static/img/ic_people_hover.png" src="/static/img/ic_people.png" id="grant_wr"><span>기관회원</span></router-link></li>
                <li><router-link :to="'/manager/user_account'"><img data-src="/static/img/ic_business_hover.png" class="navi_icon" src="/static/img/ic_business.png"  id="smile"><span>유저관리</span></router-link></li>                
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    mounted:function(){
        var vue_obj = this

        $(window).scroll(function(event){ 
            var scroll = $(document).scrollTop();
            if ( scroll  > 10 ){
                $("#left_navi").css("position","fixed")
                $("#left_navi").css("top","0")
                $("#left_navi").css("left","0")
                $("#left_navi").css("padding-top","56px")
                
            }
            });


        $(document).ready(function(){


            try{
             $(".navi_icon").each(function(){
                 $(this).attr("src",$(this).attr("data-src").replace("_hover",""))
             })
            if (vue_obj.$route.fullPath.indexOf("dashboard") != -1) {
                   $(".navi_icon:eq(0)").attr("src", $(".navi_icon:eq(0)").attr("data-src"))
                   $("#navi_con>ul>li:eq(0)").addClass("hover")
                  }
            if (vue_obj.$route.fullPath.indexOf("manager/statics") != -1) {
                  $(".navi_icon:eq(1)").attr("src", $(".navi_icon:eq(1)").attr("data-src"))
                  $("#navi_con>ul>li:eq(1)").addClass("hover")}
            if (vue_obj.$route.fullPath.indexOf("/manager/make/grant") != -1){
                  $(".navi_icon:eq(2)").attr("src", $(".navi_icon:eq(2)").attr("data-src"))
                  ("#navi_con>ul>li:eq(2)").addClass("hover")}
            if (vue_obj.$route.fullPath.indexOf("manager/grant") != -1){ 
                  $(".navi_icon:eq(2)").attr("src", $(".navi_icon:eq(2)").attr("data-src"))
                  $("#navi_con>ul>li:eq(2)").addClass("hover")}                
            if (vue_obj.$route.fullPath.indexOf("manager/user_account") != -1){ 
                  $(".navi_icon:eq(5)").attr("src", $(".navi_icon:eq(5)").attr("data-src"))
                  $("#navi_con>ul>li:eq(5)").addClass("hover")}
            if (vue_obj.$route.fullPath.indexOf("manager/all_grant") != -1){ 
                  $(".navi_icon:eq(3)").attr("src", $(".navi_icon:eq(3)").attr("data-src"))
                  $("#navi_con>ul>li:eq(3)").addClass("hover")}
            if (vue_obj.$route.fullPath.indexOf("manager/account/agent") != -1){ 
                  $(".navi_icon:eq(4)").attr("src", $(".navi_icon:eq(4)").attr("data-src"))
                  $("#navi_con>ul>li:eq(4)").addClass("hover")}


            // $(document).on("mouseenter",".navi_icon", function(){
            //     $(this).attr("src",$(this).attr("data-src"))
            // })
            // $(document).on("mouseleave",".navi_icon", function(){
            //     $(this).attr("src",$(this).attr("data-src").replace("_hover",""))
            // })
            }
            catch(e){console.log(e)}
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
            display: inline-block;
    width: 110px;
        
    }
    li.hover, li:hover{
        border-right:9px solid #1b66f4 !important;
    }    
    .hover>a>span{
        color: #1b66f4;
            display: inline-block;
    width: 110px;
    }
    .navi_icon{
        float: left;     
        width:20px;
        height: 20px;       
        margin-right: 26px;
        margin-top: 9px;
    }
    a{
        display: inline-block;
        width:100%
    }

</style>
