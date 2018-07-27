<template>
    <div id="static_page">
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <StaticsGrantContent></StaticsGrantContent>
    </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"
import StaticsGrantContent from "./StaticsGrantContent.vue"

export default {
    components:{Header, LeftNavi, StaticsGrantContent}
}
</script>

<style scoped>
    #static_page{
             
    }
</style>
