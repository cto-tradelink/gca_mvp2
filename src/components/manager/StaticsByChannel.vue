<template>
    <div id="static_page">
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <StaticsChannelContent></StaticsChannelContent>
    </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"
import StaticsChannelContent from "./StaticsChannelContent.vue"

export default {
    components:{Header, LeftNavi, StaticsChannelContent},
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
