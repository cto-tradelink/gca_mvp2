<template>
        <div>
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <SupportDetail></SupportDetail>
        <MakeGrantBottomControl></MakeGrantBottomControl>
    </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"
import SupportDetail from "./SupportDetail.vue"
import MakeGrantBottomControl from "./common/MakeGrantBottomControl.vue"
export default {
    components:{
        Header, LeftNavi,SupportDetail,MakeGrantBottomControl
    }
}
</script>