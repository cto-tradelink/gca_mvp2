<template>
    <div>
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <MakeApplicationContent></MakeApplicationContent>
    </div>
    </div>
</template>
<script>
import MakeApplicationContent from "./MakeApplicationContent.vue"
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"

export default {
    components:{
        Header, LeftNavi, MakeApplicationContent,
    }
}
</script>

<style>

</style>
