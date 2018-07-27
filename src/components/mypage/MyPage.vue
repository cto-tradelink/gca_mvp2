<template>
    <div id="my_page">
        <Header></Header>
        <div id="left_back"></div>
        <div id="right_back"></div>
        <div id="my_page_con">            
            <div id="my_page_body">
                <div id="left_navi">
                    <LeftNavi></LeftNavi>
                </div>
                <div id="content">
                    <router-view></router-view>                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../common/Header.vue"
import ManageApplicant from "./ManageApplicant.vue"
import LeftNavi from "./common/LeftNavi.vue"
import ManageStartupInfo from "./ManageStartupInfo.vue"
export default {
    components:{
        Header,ManageApplicant,LeftNavi,ManageStartupInfo
    },
    mounted:function(){
        $(document).ready(function(){
        
        })
    }
}
</script>
<style scoped>
    #left_navi{
        width:182px;
        float: left;
    }
    #content{
        width:1018px;
        background-color: #f5f8ff;
        float: left;
        min-height: 1000px;
        padding-left:24px; 
        margin-top: 2px;
    }
    #my_page_con{
        width: 100%;
        height: auto;
        position: absolute;
        top: 56px;
    }
    #my_page_body{
        width:1224px;
        min-height: 1000px;
        margin: 2px auto
    }
    #left_back{
        width: 50%;
        min-height: 1000px;
        float: left;
        background-color: #fff;
        margin-top: 2px;
    }
    #right_back{
        width: 50%;
        min-height: 1000px;
        float: left;
        background-color: #f5f8ff;
        margin-top: 2px;
    }
</style>
