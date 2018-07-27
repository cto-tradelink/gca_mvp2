<template>
    <div id="application_navigation">
        <div id="navi_con">
            <ul>               
                <li :data-id="$route.params.id">
                    <router-link @click="confirm($event)" :to='"/apply/"+$route.params.id+"/base_info"'>
                    <!-- <a :href='"/apply/"+$route.params.id+"/base_info"'> -->
                    <i class="far fa-check-circle"></i><span>기본정보</span>
                    <!-- </a> -->
                    </router-link>
                    </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li >
                    <router-link :to='"/apply/"+$route.params.id+"/business_info"'>
                        <i class="far fa-check-circle"></i><span>사업분야</span>
                    </router-link>
                    </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li>
                      <router-link :to='"/apply/"+$route.params.id+"/startup_info"'>
                    <i class="far fa-check-circle"></i><span>기업정보</span>
                      </router-link></li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li>
                    <router-link :to='"/apply/"+$route.params.id+"/oversea_info"'>
                    <i class="far fa-check-circle"></i><span>해외진출현황</span>
                    </router-link>
                    </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li>
                    <router-link :to='"/apply/"+$route.params.id+"/startup_intro"'>
                    <i class="far fa-check-circle"></i><span>기업소개</span>
                     </router-link>
                     </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li>
                    <router-link :to='"/apply/"+$route.params.id+"/attached_file"'>
                    <i class="far fa-check-circle"></i><span>첨부서류</span>
                    </router-link></li>
                <li><i class="fas fa-chevron-right"></i>
                </li>
                <li>
                    <router-link :to='"/apply/"+$route.params.id+"/application"'>
                    <i class="far fa-check-circle"></i><span>작성완료</span>
                    </router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        confirm:function(e){
            const a = confirm('작성된 정보를 토대로 기업 정보를 업데이트하시겠습니까?')
            if (a) {
            this.$router.push("/apply/"+this.$route.params.id+"/base_info")
            }
        }
    },
    mounted:function(){
    },
}
</script>

<style scoped>
li>div{
    cursor: pointer;
}

ul{
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
}
li{
    list-style: none;
    float: left;
    margin-right: 24px;
    line-height: 48px;
}
#navi_con{
    width:1224px;
    height: 48px;
    margin: 0px auto;
  
}
#application_navigation{
    width: 100%;
    height: 48px;
    background-color: rgba(133, 159, 184, 0.35);
}
</style>
