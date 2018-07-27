<template>
    <div id="complete">
        
        <div style="width:100%; height:536px; background-color:#fff;">
            <div style="width:1224px; height:536px;margin:0px auto; position:relative">
                <i style="font-size:112px; margin-top:134px;" class="far fa-check-circle"></i>
                <div style=" font-size: 32px;  line-height: 1.56;  letter-spacing: -2px;  color: #243d68;margin-top:24px;">
                    <div style="display:inline-block">지원을 완료했습니다.<br>
결과발표는 {{open_date | get_day_format}} 입니다.</div><span style="display:inline-block;font-size: 16px; color: #1b66f4;margin-left:51px;"><router-link to="/">홈으로 이동</router-link></span>
                </div>
               
            </div>
        </div>
         <SimilarGrant v-if="similar_list !== null" :similar_list="similar_list"></SimilarGrant>
    </div>
</template>

<script>
import SimilarGrant from "../SimilarGrant.vue"
export default {
    props:["ap"],
    components:{
        SimilarGrant,
    },
        data:function(){
        return {
              similar_list:[],
              open_date:""
    }
    },
    mounted:function(){
        var vue_obj=this
        $(document).ready(function(){
            $("#bottom_control").css("display","none")
            $("#navi_con").css("display","none")
        })
           vue_obj.$http.get(`${vue_obj.baseURI}/vue_get_application/?id=`+localStorage.getItem("id")+`&gr=`+vue_obj.$route.params.id)
            .then((result) => {            
                   console.log(result)
                   vue_obj.$props.startup = result.data              
            })
            vue_obj.$http.get(`${vue_obj.baseURI}/get_grant_detail/?id=`+vue_obj.$route.params.id)
        .then((result) => {
            this.grant_info = result.data
            this.open_date = result.data.pro_0_end
        })
            vue_obj.$http.get(`${vue_obj.baseURI}/similar_grant/?q=`+`184`)
        .then((result) => {
            this.similar_list = result.data.data            
        })

       
    }
}
</script>

<style>

</style>
