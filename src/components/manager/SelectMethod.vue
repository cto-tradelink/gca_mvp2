<template>
        <div>
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <SelectMethodDetail></SelectMethodDetail>
        <MakeGrantBottomControl></MakeGrantBottomControl>
    </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"
import SelectMethodDetail from "./SelectMethodDetail.vue"
import MakeGrantBottomControl from "./common/MakeGrantBottomControl.vue"
export default {
    components:{
        Header, LeftNavi,SelectMethodDetail,MakeGrantBottomControl
    }
}
</script>