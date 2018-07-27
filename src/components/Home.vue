<template>
    <div id="home_main">
    <Header></Header>
    <FilterSetting></FilterSetting>
    <Recommendation></Recommendation>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import FilterSetting from "./common/FilterSetting.vue"
import Recommendation from "./Recommendation.vue"
export default {
 components:{
   'Header':Header,
   "FilterSetting":FilterSetting,
   "Recommendation":Recommendation
 },
 mounted:function(){
   $("#header>ul>a:eq(0)>li:eq(0)").addClass("menu_on")
 }

}
</script>

<style>



</style>
