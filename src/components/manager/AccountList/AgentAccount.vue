<template>
    <div id="dashboard_page">
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <AgentAccountContent></AgentAccountContent>
    </div>
    </div>
</template>

<script>
import Header from "../common/Header.vue"
import LeftNavi from "../common/LeftNavi.vue"
import AgentAccountContent from "./AgentAccountContent.vue"
export default {
    components:{
        Header, LeftNavi,AgentAccountContent
    }
}
</script>

<style scoped>

</style>
