<template>
    <div style="clear:both;  top:0px;">
         <div id="grant_detail_height">
             <div style="width:1224px; margin-left:-65px;">
            <GrantDetailCard  v-if="grant_info !== null" :grant_info="grant_info" ></GrantDetailCard>
            <GrantDetailInfo   v-if="grant_info !== null" :grant_info="grant_info" ></GrantDetailInfo>
            <GrantMoreDetailInfo   v-if="grant_info !== null" :grant_info="grant_info" ></GrantMoreDetailInfo>
             </div>
           
        </div>     
    </div>
</template>

<script>
import SideBanner from "./SideBanner.vue"
import GrantDetailCard from "./GrantDetailCard.vue" 
import GrantDetailInfo from "./GrantDetailInfo.vue"
import LeftNavi from "./LeftNavi.vue"
import GrantMoreDetailInfo from "./GrantMoreDetailInfo.vue"
import SimilarGrant from "./SimilarGrant.vue"
import axios from "axios"


export default {
    data:function(){
    return {
        tag_items:[{"name":"1인출판"},{"name":"1인출판"},],
        grant_info:{},
        similar_list:[],
    }
},
 components:{
  SideBanner, GrantDetailCard,GrantDetailInfo,LeftNavi,GrantMoreDetailInfo, SimilarGrant
 },
 mounted:function(){
   const baseURI = "http://127.0.0.1:8000"
   this.$http.get(`${baseURI}/get_grant_detail/?id=`+this.$route.params.id)
        .then((result) => {
          
            this.grant_info = result.data               
        })
    this.$http.get(`${baseURI}/similar_grant/?q=`+this.$route.params.id)
        .then((result) => {
            
            this.similar_list = result.data.data            
        })
    $("#grant_detail_more_con > div:nth-child(6)").remove()
    $("#grant_detail_more_con > div:nth-child(6)").remove()
    $("#gca_content").css("background-color","#fff")
    

 }
}
</script>

<style>
  #bottom_btn_con{
      width: 100%;
      height: 56px;;
    }
    #int_btn{
      width:50%;
      float: left;
      text-align: center;
      height: 56px;
       background-color: #a0a3bc;
       color:#fff;
       line-height: 56px;
         font-size: 16px;
         cursor: pointer;
    }
    #apply_btn{
        color:#fff;
      width:50%;
      float: left;
      text-align: center;
      height: 56px;
       background-color: #1b49f4;
       line-height: 56px;
         font-size: 16px;
              cursor: pointer;
    }
    .fixed{
        position: fixed;
        bottom: 0px
    }
</style>
