<template>
        <div>
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <GrantEtcContent></GrantEtcContent>
        <MakeGrantBottomControl></MakeGrantBottomControl>
    </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"
import GrantEtcContent from "./GrantEtcContent.vue"
import MakeGrantBottomControl from "./common/MakeGrantBottomControl.vue"
export default {
    components:{
        Header, LeftNavi,GrantEtcContent,MakeGrantBottomControl
    }
}
</script>