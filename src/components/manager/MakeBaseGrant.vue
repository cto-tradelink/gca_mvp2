<template>
        <div>
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <MakeBaseGrantInfo></MakeBaseGrantInfo>
        <MakeGrantBottomControl></MakeGrantBottomControl>
    </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"
import MakeBaseGrantInfo from "./MakeBaseGrantInfo.vue"
import MakeGrantBottomControl from "./common/MakeGrantBottomControl.vue"
export default {
         beforeRouteLeave (to, from, next) {
        if(confirm("페이지를 벗어나시겠습니까?")){
            next()
        }
  },
    components:{
        Header, LeftNavi,MakeBaseGrantInfo,MakeGrantBottomControl
    }
}
</script>

<style scoped>
    #make_application_page{
        overflow-x: hidden;
    }
    #application_header_bottom{
        width: 100%;
        height: 48px;
        background-color: rgba(206, 212, 218, 0.35);
        margin-left: 64px;
        padding-left: 52px;
        line-height: 48px;
        font-size: 16px;
        color: #243d68;
    }
    #application_header{
        width:100%;
        position: relative;
        overflow: auto;
        height:96px;
        background-color: #2256b8;
        margin-left: 64px;
        font-size: 24px;
        letter-spacing: -1px;
        color: #f9fcff;
    }
 
</style>
