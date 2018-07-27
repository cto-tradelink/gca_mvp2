<template>
    <div id="grant_main">
    <Header></Header>    
    <div id="grant_detail_con" style="width:100%;margin-top:2px;">   
      <div id="back_canvas_1" style="position:absolute;width:50%; background-color:#f5f8ff; ;left:0px;"></div>
      <div id="back_canvas_2" style="position:absolute;width:50%; background-color:#fff; left:50%"></div>      
      <div id='tooltip_1' style='position:absolute;background-color:lightgray;padding:5px;z-index:99999;display:none'></div>
      <div id='tooltip_2' style='position:absolute;background-color:lightgray;padding:5px;z-index:99999;display:none'></div>
      
      <GrantDetail></GrantDetail>
     
    </div>   
    
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import FilterSetting from "./common/FilterSetting.vue"
import GrantDetail from "./GrantDetail.vue"

export default {
 components:{
   'Header':Header,
   "FilterSetting":FilterSetting,
   "GrantDetail":GrantDetail,   
 },
 mounted:function(){
   var target_id = this.$route.params
   $(document).ready(function(){
   
      $("#back_canvas_1").css("height",$("#grant_detail_height").css("height")) 
      $("#back_canvas_2").css("height",$("#grant_detail_height").css("height")) 
      $("#header>ul>a:eq(0)>li:eq(0)").addClass("menu_on")
   })
}

}
</script>

<style scoped>
  #grant_detail_con{
   
    margin: 0px auto;;
    position: relative;
    }
  
</style>
