<template>
    <div style="clear:both; position:absolute; top:0px;width:100%;">
         <div id="grant_detail_height">
             <div style="width:1224px; margin:0px auto">
                  <LeftNavi></LeftNavi>
                  <div id="grant_pdf_con">
            <GrantDetailCard  v-if="grant_info !== null" :grant_info="grant_info" ></GrantDetailCard>
            <GrantDetailInfo   v-if="grant_info !== null" :grant_info="grant_info" ></GrantDetailInfo>
            <GrantMoreDetailInfo   v-if="grant_info !== null" :grant_info="grant_info" ></GrantMoreDetailInfo>
             </div>
             </div>
           
        </div>     
        <div id="bottom_btn_con" class="fixed">
            <div id="int_btn"><img src="/static/img/like_w.png" style="display: inline-block; vertical-align: sub; margin-bottom: -4px;"> 관심담기</div>
            <div id="apply_btn" >지원하기</div>
        </div>
        <SimilarGrant v-if="similar_list !== null" :similar_list="similar_list"></SimilarGrant>
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
     var vue_obj=this
   this.$http.get(`${this.baseURI}/get_grant_detail/?id=`+this.$route.params.id)
        .then((result) => {
          
            this.grant_info = result.data               
        })
    this.$http.get(`${this.baseURI}/similar_grant/?q=`+this.$route.params.id)
        .then((result) => {
            
            this.similar_list = result.data.data            
        })
        $(document).ready(function(){
            $(document).on("click","#apply_btn", function(){
                if( $("#d-day").text().indexOf("마감") == -1 ){
                    vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/base_info/")
                }else{
                    alert("마감된 공고입니다.")
                }
            })
                $(document).off("click","#int_btn")
                $(document).on("click","#int_btn", function(){

                     if(localStorage.getItem("user")=="u") {
                    console.log(vue_obj.$route.params.id)
                      var data={
                            "id":localStorage.getItem("id"),
                            "val":vue_obj.$route.params.id
                        }
                    $.ajax({
                        url:`${vue_obj.baseURI}/vue_add_interest_sb/`,
                        method:"POST",
                        data:data,
                        success:function(res){console.log(res)
                            if(res=="ok-add"){alert("관심 사업에 추가되었습니다.")
                           
                            }else{
                                alert("관심사업에서 삭제되었습니다.")
                             
                            }
                        },
                        error:function(e){console.log(e)
                       
                        }
                     })
                     }
                     else if(localStorage.getItem("user")=="m" ||
                     localStorage.getItem("user")=="ma"
                     ){
                         alert("매니저나 기관 관리자는 관심 담기를 할수 없습니다. ")
                     }
                     else{
                         alert("로그인을 진행해 주세요.")
                     }
                      



                })
        })

 }
}
</script>

<style>
  #bottom_btn_con{
      width: 100%;
      height: 56px;
    }
    #int_btn{
      width:50%;
      float: left;
      text-align: center;
      height: 56px;
      background-color: #c1d1f7;
      color:#1b49f4;
      line-height: 56px;
      font-size: 16px;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
    }
    #apply_btn{
        color:#fff;
      width:50%;
      float: left;
      text-align: center;
      height: 56px;
       background-color: #1b66f4;
       line-height: 56px;
         font-size: 16px;
              cursor: pointer;
    }
    .fixed{
        position: fixed;
        bottom: 0px
    }
</style>
