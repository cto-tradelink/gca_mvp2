<template>
    <div id="static_page">
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <StaticsUserContent></StaticsUserContent>
    </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"
import StaticsUserContent from "./StaticsUserContent.vue"

export default {
    components:{Header, LeftNavi, StaticsUserContent},
    mounted:function(){
         $(document).ready(function(){
            $("#static_navigation>ul>li").removeClass("hover")
            $("#static_navigation>ul>li:eq(2)").addClass("hover")
        })
    }
}
</script>

<style scoped>
    #static_page{
      
       
    }
</style>
