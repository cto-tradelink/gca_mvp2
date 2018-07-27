<template>
    <div id="account_page">
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <AccountContent></AccountContent>
    </div>
    </div>
</template>

<script>
import Header from "../common/Header.vue"
import LeftNavi from "../common/LeftNavi.vue"
import AccountContent from "./AccountContent.vue"
export default {
    components:{
        Header, LeftNavi, AccountContent
    }
}
</script>

<style scoped>
    #account_page{
        min-height: 1000px;
    }
</style>
