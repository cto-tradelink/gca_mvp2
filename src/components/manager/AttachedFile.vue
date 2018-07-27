<template>
        <div>
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <AttachedFileContent></AttachedFileContent>
        <MakeGrantBottomControl></MakeGrantBottomControl>
    </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"
import AttachedFileContent from "./AttachedFileContent.vue"
import MakeGrantBottomControl from "./common/MakeGrantBottomControl.vue"
export default {
    components:{
        Header, LeftNavi,AttachedFileContent,MakeGrantBottomControl
    }
}
</script>