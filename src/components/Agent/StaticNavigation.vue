<template>
    <div id="static_navigation">
        <ul>
            <li class="hover"><router-link :to="'/agent/statics/by_grant'" >사업별 통계</router-link></li>
            <li><router-link :to="'/agent/statics/by_all'" >전체 지원사업 통계</router-link></li>
            <li><router-link :to="'/agent/statics/user'" >유저 통계</router-link></li>
            <li><router-link :to="'/agent/statics/site'" >사이트 통계</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {

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
