<template>
    <div id="dashboard_page">
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <DashContent  v-if="dashboard_list != ''" :dashboard_list="dashboard_list"></DashContent>
    </div>
    </div>
</template>

<script>
import Header from "../common/Header.vue"
import LeftNavi from "../common/LeftNavi.vue"
import DashContent from "./AgentDashContent.vue"
export default {
    components:{
        Header, LeftNavi,DashContent
    },
    data:function(){
        return{
            dashboard_list:{
                due_set:[],
                waiting_set:[],
                ing_set:[],
            },
        }
    }
    ,
    mounted:function(){
        var data= {"id": "84"}
        var vue_obj = this
        $.ajax({
            method:"post",
            url: `${vue_obj.baseURI}/vue_get_agent_dashboard/`,
            data: data,
            success:function(res){
                vue_obj.dashboard_list = $.extend(true, {}, res);
            },
            error:function(e){
                console.log(e)
            }
        })

    }
}
</script>

<style scoped>

</style>
