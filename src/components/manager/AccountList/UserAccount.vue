<template>
    <div id="dashboard_page">
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <UserAccountContent></UserAccountContent>
    </div>
    </div>
</template>

<script>
import Header from "../common/Header.vue"
import LeftNavi from "../common/LeftNavi.vue"
import UserAccountContent from "./UserAccountContent.vue"
export default {
    components:{
        Header, LeftNavi,UserAccountContent
    }
}
</script>

<style scoped>

</style>
