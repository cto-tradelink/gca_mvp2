<template>
    <div id="account_page">
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <AccouallGrantContent></AccouallGrantContent>
    </div>
    </div>
</template>

<script>
import Header from "../common/Header.vue"
import LeftNavi from "../common/LeftNavi.vue"
import AccouallGrantContent from "./AccouallGrantContent.vue"
export default {
    components:{
        Header, LeftNavi, AccouallGrantContent
    }
}
</script>

<style scoped>
    #account_page{
        min-height: 1000px;
    }
</style>
