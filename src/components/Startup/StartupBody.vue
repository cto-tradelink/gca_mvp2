<template>
    <div id="startup_body_con">
        <div id="startup_navi">
            <ul>
                <li  class="on" data-panel="0">서비스/프로덕트</li>
                <li  data-panel="1">기업소개</li>
                <li  data-panel="2">소식</li>  
                <li class="hidden_info" data-panel="3">비공개 정보</li>                
            </ul>
        </div>
        <div>
            <ServiceProduct :startup="startup"></ServiceProduct>
            <StartupIntro :startup="startup"></StartupIntro>  
            <StartupNews :startup="startup"></StartupNews>    
            <StartupHiddenInfo :startup="startup"></StartupHiddenInfo>          
        </div>
    </div>
</template>

<script>
import ServiceProduct from "./ServiceProduct.vue"
import StartupIntro from "./StartupIntro.vue"
import StartupNews from "./StartupNews.vue"
import StartupHiddenInfo from "./StartupHiddenInfo.vue"
import { setTimeout } from 'timers';

export default {
    components:{
        ServiceProduct, StartupIntro, StartupNews, StartupHiddenInfo
    },
    props:["startup"],
    data:function(){
        return{
        }
    },
    mounted:function(){
        $(document).ready(function(){
            var url_string = window.location.href
            var url = new URL(url_string);
            var c = url.searchParams.get("filter");
            console.log(c)
            if(c=="on"){
                setTimeout(function(){
                   $("#startup_navi>ul>li:eq(3)").click(); 
                },1000)
            }
            $("#right_back").css("height",$("#content").css("height"))
            $(document).off("click","#startup_navi>ul>li",)
            $(document).on("click","#startup_navi>ul>li", function(){
                $(".startup_detail").addClass("hidden")
                console.log($(".panel_"+$(this).attr("data-panel")))
                $(".panel_"+$(this).attr("data-panel")).removeClass("hidden")
                $("#startup_navi>ul>li").removeClass("on")
                $(this).addClass("on")
                $("#right_back").css("height",$("#content").css("height"))
            })
        })
    }
}
</script>
<style scoped>
#startup_body_con{
    width:1016px;
    margin: 0px auto;
}
#startup_navi{
    width: 1016px;
    height: 50px;
    background-color: #ffffff;
    margin-bottom: 8px;
}
ul{
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;  
}
li{
    float: left;
    padding-right: 14px;
    padding-left: 14px;
    margin-right: 10px;
    border-bottom: 4px solid transparent;
    cursor: pointer;
    list-style: none;
    line-height: 46px;
    font-size: 14px;
    color: rgba(26, 42, 83, 0.5);
}

li:hover, li.on{
    border-bottom: 4px solid #f54b94!important;
    color: #1a2a53;
}

</style>
