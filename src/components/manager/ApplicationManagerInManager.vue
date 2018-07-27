<template>

    <div class="app_seg" :data-id="s.id">
        <img class="app_logo">
        <div class="text_con">
            <div class="app_title" >{{s.title}}</div>
            <div class="app_due">{{s.start.split("T")[0]}}~  {{s.end.split("T")[0]}} 까지</div>
            <div class="sub">
                <div class="sub_int"><i class="fas fa-heart"></i>50</div>
                <div class="sub_comp"><i class="fas fa-fire"></i>{{s.comp}}</div>
                <div class="sub_d_day"><i class="far fa-clock"></i>{{ s.start.replace("T"," "),  s.end.replace("T"," ")| d_day_calc_short }}</div>
                <div class="sub_agency">{{s.author}} </div>   
                <div v-if="pro=='open'" class="sub_agency">게시일 : <span v-if="s.open_date">{{s.open_date.split("T")[0]}}</span> </div>                
                <div v-if="pro=='wait'" class="sub_agency">최종수정일 : <span v-if="s.updated">{{s.updated.split("T")[0]}}</span> </div>                
            
            </div>
        </div>
        <div class="btn_con">         
                <div v-if="s.status=='작성중'"><router-link :to="'/manager/make/grant/' + s.id"  ><img  src="/static/img/writing.jpg"> </router-link> </div>
                <div v-if="s.status=='승인대기'"><router-link :to="'/manager/grant/' + s.id"  ><img  src="/static/img/waiting.jpg"> </router-link> </div>
                <div v-if="s.status=='공고중'"><router-link :to="'/manager/grant/' + s.id"  ><img  src="/static/img/ing.jpg"> </router-link> </div>
                <div v-if="s.status=='모집종료'"><router-link :to="'/manager/grant/' + s.id"  ><img  src="/static/img/grant_end.jpg"> </router-link> </div>
                <div v-if="s.status=='공고종료'"><router-link :to="'/manager/grant/' + s.id"  ><img  src="/static/img/end.jpg"> </router-link> </div>
                <div v-if="s.status=='블라인드'"><router-link :to="'/manager/make/grant/' + s.id"  ><img  src="/static/img/writing.jpg"> </router-link> </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["s","btn","pro"],
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
            console.log(vue_obj.$props)
            console.log(vue_obj.$props.s.id)
            $(document).off("click",".app_seg[data-id='"+vue_obj.$props.s.id+"']",) 
            $(document).on("click",".app_seg[data-id='"+vue_obj.$props.s.id+"']", function(){
                if(vue_obj.$props.s.status!="작성중" && vue_obj.$props.s.status!="블라인드"){
                    if(vue_obj.$route.fullPath.indexOf("agent")!=-1)
                    vue_obj.$router.go("/agent/grant/"+vue_obj.$props.s.id)
                    else{
                          location.href = ("/manager/grant/"+vue_obj.$props.s.id)
                    }
                }else{
                     if(vue_obj.$route.fullPath.indexOf("agent")==-1){
                        location.href =("/manager/make/grant/"+vue_obj.$props.s.id)
                     }
                }
            })

            if( vue_obj.$props.s.status == "작성중" ){
                
            }
        })
    }
}
</script>

<style scoped>
.app_btn{
    width: 124px;
    height: 38px;
    border-radius: 20px;
    background-color: #ffffff;
    border: solid 1px #1b66f4;
    font-weight: normal;
    line-height:40px;
    letter-spacing: normal;
    text-align: center;
    color: #1b66f4;
    margin-top: 42px;
    margin-left: 43px;
    cursor: pointer;
}
.btn_con{
    width:210px;
    float: right;
    height: 124px;
    border-left: 1px solid #ced4da; 
    margin-top: 16px;
}
.sub{
    position: absolute;
    bottom: 32px;
    width:668px;
   
}
.sub_int{
    font-family: Rubik;
    font-size: 14px;
    font-weight: 300; 
    line-height: 1.14;
    letter-spacing: -0.9px;
    color: #243d68;
}
.text_con{
    width: 644px;
    position: relative;
    height: 140px;;
}
.sub_int{

}
.sub>div{
    float: left;
    margin-right: 12px;
    padding-right:12px;
    border-right:1px solid #ced4da;
}
.sub_comp{
  font-family: Rubik;
  font-size: 14px;
  font-weight: 300; 
  line-height: 1.14;
  letter-spacing: -0.9px;
  color: #243d68;
}
.sub_d_day{
    border-left:none; 
     font-family: Rubik;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.14;
  letter-spacing: -0.9px;
  color: #28aeff;
}
.sub_agency{
    float: right!important;
    border-right:none!important;
    margin-right: 0px; 
    font-size: 12px;
    line-height: 1.33;
    color: #a0a3bc;

}
    .fas, .far{
        margin-right: 8px;
    }
    .text_con{
        margin-top: 16px;
        margin-left: 24px;
        float: left;
    }

    .app_title{
        font-size: 20px;
  font-weight: bold;
  color: #1a2f53;
    }
    .app_due{
        opacity: 0.8; 
        font-size: 14px;
        font-weight: bold;
        line-height: 1.71;
        color: #2256b8;
    }


    .app_logo{
        width: 114px;
        height: 156px;
        float: left;
    }


    .app_seg{
        cursor:pointer;
        width: 1016px;
        height: 156px;
        background-color: #ffffff;
        margin-bottom: 16px;
        position: relative;
        margin-left:114px;
    }


</style>
