<template>
    <div id="static_page">
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <StaticsSiteContent></StaticsSiteContent>
    </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"
import StaticsSiteContent from "./StaticsSiteContent.vue"

export default {
    components:{Header, LeftNavi, StaticsSiteContent},
    mounted:function(){
         $(document).ready(function(){
            $("#static_navigation>ul>li").removeClass("hover")
            $("#static_navigation>ul>li:eq(3)").addClass("hover")
        })
    }
}
</script>

<style scoped>
    #static_page{
      
       
    }
</style>
