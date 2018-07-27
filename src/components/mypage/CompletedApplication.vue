<template>
    <div class="app_seg">
        <img class="app_logo">
        <div class="text_con">
            <div class="app_title"><a :href='"/grant/"+int.sb_id' >{{int.title}}></a></div>
           <div class="app_due">{{int.start|get_day_format}}~  {{int.date|get_day_format}} 까지</div>
            <div class="sub">
                <div class="sub_int"><i class="fas fa-heart"></i>{{int.int}}</div>
                <div class="sub_comp"><i class="fas fa-fire"></i>{{int.comp}}:1</div>
                
                <div class="sub_d_day"><i class="far fa-clock"></i>{{int.start ,int.date | d_day_calc_short_2 }}</div>
                <div class="sub_agency">경기도 콘텐츠 진흥원</div>                
            </div>
        </div>
        <div class="btn_con">
            <a target="_blank" :href="'/apply/'+int.id+'/application'">
            <div class="app_btn">
                내 지원서
            </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:["int"]
}
</script>

<style scoped>
.app_btn{
    /* width: 124px;
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
    cursor: pointer; */
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
        width: 1016px;
        height: 156px;
        background-color: #ffffff;
        margin-bottom: 16px;
        position: relative;
        
    }


</style>
