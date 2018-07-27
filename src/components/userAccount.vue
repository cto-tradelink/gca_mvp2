<template>
     <div>
     <Header></Header>
     <FilterSetting></FilterSetting>
     <div >
     <PicProfile></PicProfile>
     <DetailProfile></DetailProfile>
     </div>
     </div>
</template>

<script>
import Header from "./common/Header.vue"
import FilterSetting from "./common/FilterSetting.vue"
import PicProfile from "./PicProfile.vue"
import DetailProfile from "./DetailProfile.vue"

export default {
    components:{
        'Header':Header,
        "FilterSetting":FilterSetting,
        PicProfile,DetailProfile
    }

  
}
</script>

<style>

</style>
