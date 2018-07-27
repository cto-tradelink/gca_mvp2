<template>
        <div>
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <RecruitDetail></RecruitDetail>
        <MakeGrantBottomControl></MakeGrantBottomControl>
    </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"
import RecruitDetail from "./RecruitDetail.vue"
import MakeGrantBottomControl from "./common/MakeGrantBottomControl.vue"
export default {
    components:{
        Header, LeftNavi,RecruitDetail,MakeGrantBottomControl
    }
}
</script>