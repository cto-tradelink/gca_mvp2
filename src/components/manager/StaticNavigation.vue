<template>
    <div id="static_navigation">
        <ul>
            <li><router-link :to="'/manager/statics/by_grant'" >사업별 통계</router-link></li>
            <li><router-link :to="'/manager/statics/by_all'" >전체 지원사업 통계</router-link></li>
            <li><router-link :to="'/manager/statics/user'" >유저 통계</router-link></li>
            <li><router-link :to="'/manager/statics/by_channel'" >채널 통계</router-link></li>
            <li><router-link :to="'/manager/statics/site'" >사이트 통계</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
             if (vue_obj.$route.fullPath == "/manager/statics/by_grant" ){ console.log("0"); $("#static_navigation>ul>li:eq(0)").addClass("hover")}
             if (vue_obj.$route.fullPath == "/manager/statics/by_all" )  {   console.log("1"); $("#static_navigation>ul>li:eq(1)").addClass("hover")}
             if (vue_obj.$route.fullPath == "/manager/statics/user" )     { console.log("2");  $("#static_navigation>ul>li:eq(2)").addClass("hover")}
             if (vue_obj.$route.fullPath == "/manager/statics/by_channel" ){ console.log("3"); 
             console.log($("#static_navigation>ul>li:eq(3)"))
             $("#static_navigation>ul>li:eq(3)").addClass("hover")}
             if (vue_obj.$route.fullPath == "/manager/statics/site" )     {  console.log("4"); $("#static_navigation>ul>li:eq(4)").addClass("hover")}
        })
    },
}
</script>
<style scoped>
    #static_navigation{
        width: 1224px;        
        margin-top:40px;
        /* border-bottom:1px solid #e2e2e2; */
        height: auto;
        overflow: auto
    }
    ul
    {
        -webkit-margin-before: 0em;
        -webkit-margin-after: 0em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        -webkit-padding-start: 0px;
    }
    li{
        list-style: none;
        float: left;
        margin-right: 4px;
        font-size: 16px;
        line-height: 14px;
        padding-bottom: 14px;
        padding-top:14px;
        padding-left:18px;
        padding-right:18px;
        border-radius:4px; 
        cursor: pointer;
        background-color: #fff;
        color: #4f5478;

    }
    li:hover, li.hover{
        background-color: #2256b8;
        color:#fff;
    }
</style>
