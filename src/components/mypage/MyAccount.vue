<template>
    <div style="position:relative">
        <div class="page_title">
            계정정보 관리
        </div>
        <div id="account_con">
            <div id="core_profile" style="width:245px;float:left">
                <img >
                <span id="name">{{info.result.name}}</span>
                <span id="email">{{info.result.email}}</span>
            </div>

            <div class="info_con" style="width:496px; border:1px solid #c1d1f7; padding:6px; float:left; margin-left:29px;">
                <ul>
                    <li><span class="label">
                        <img src="/static/img/Phone.png">전화번호</span>
                        <span class="lb_con">{{info.tel}}</span>
                    </li>
                    <li><span class="label"><img src="/static/img/SNS.png">SNS</span>
                         <span class="lb_con" style="display:inline-block"><img style="width:24px;height:24px;vertical-align:middle" src="/static/img/facebook_1.png"></span><br>                     </li>
                    <li>
                        <span class="label"><img src="/static/img/Mail2.png">수신동의</span>
                        <span class="lb_con">수신 동의 상태 입니다.</span>
                    </li>
                </ul>
            </div>


       </div>

       <div id="modi_account" class="hidden">
            <div id="core_profile" style="width:245px;float:left">
                <img >
            </div>
            <div class="info_con" style="width:496px; border:1px solid #c1d1f7; padding:6px; float:left; margin-left:29px;">
                <ul>
                    <li style="border:none"><span class="label f4">
                        이름</span>
                        <span class="lb_con"><input v-model="info.result.name" class="input_normal"></span>
                    </li>
                    <li style="height:50px"><span class="label f4">
                        계정주소</span>
                        <span class="lb_con">{{info.result.email}}</span>
                    </li>                    
                    <li style="height:74px;line-height:74px;"><span class="label f4">
                        <img src="/static/img/Phone.png">전화번호</span>
                        <span class="lb_con"><input class="input_normal" v-model="info.tel"></span>
                    </li>
                    <li style="height:74px; line-height:74px; "><span class="label f4"><img src="/static/img/SNS.png">SNS</span>
                         <span class="lb_con" style="display:inline-block"><img style="width:24px;height:24px;vertical-align:middle; position:absolute;top:241px;left:403px;" src="/static/img/facebook_1.png">
                         <input class="input_normal" style="padding-left:42px; width:342px;"> </span>              
                    </li>
                    <li>
                        <span class="label f4 " style="width:150px;"><img src="/static/img/Mail2.png">수신동의</span>
                        <input type="checkbox" v-model="info.agreement" class="check" id="email_agree">   
                    </li>
                    <li><span id="email_val" >수신 동의 상태 입니다.</span></li>
                </ul>
            </div>

       </div>
       <div class="modi_btn" style="cursor:pointer">수정하기</div> 
    </div>
</template>

<script>

var mode="show"
export default {
    data:function(){
        return {
            user:[],
            info:{},
        }
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
            // $(".check:checkbox").mSwitch();

            $.ajax({
                url:vue_obj.baseURI+"/vue_get_user_info/",
                type:"post",
                data:{
                    "id":localStorage.getItem("id")
                },
                success:function(res){
                    console.log(res)
                    vue_obj.info = res;                
                }
            })
            $(document).on("click", ".modi_btn", function () {
                if(mode == "show"){
                    $("#account_con").addClass("hidden")
                    $("#modi_account").removeClass("hidden")
                    mode = "not"
                }
                else{

                    $("#account_con").removeClass("hidden")
                    $("#modi_account").addClass("hidden")
                    mode="show"
                    
            $.ajax({
                url:vue_obj.baseURI+"/vue_sset_user_info/",
                type:"post",
                data:{
                    "id":localStorage.getItem("id"),
                    "phone" : vue_obj.info.tel,
                    "name": vue_obj.info.result.name,
                    "agreement": vue_obj.info.agreement,
                    "email" : vue_obj.info.email
                },
                success:function(res){
                    console.log(res)
                 
                }
            })
               }

            })
        })
   }

}
</script>
<style scoped>

.input_normal{
     width: 376px;
  height: 24px;
  line-height: 24px;
  background-color: #ffffff;
  border: solid 1px #e7edfc;
  padding: 8px;
  color: rgba(26, 42, 83, 0.5);
}

.modi_btn{

}
.label{
    width: 85px;
     opacity: 0.8;
     display: inline-block;
    }

.label>img{
    margin-right:4px;
    margin-left:9px;
    vertical-align: middle;
    }
.mo{
    display:inline-block
}
.mo_re{
    display: inline-block
}
ul{
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
}
ul>li{
    height:40px;
    line-height: 40px;
    list-style: none;
    display: block;
    border-bottom:1px solid #c1d1f7;

}
ul>li:nth-child(1){
    opacity: 0.8;
    font-size: 16px;
    color: #1a2f53;
    font-size: 12px;
}
ul>li:nth-child(2){
    color: #1a2f53;
    font-size: 12px;
}
.info_con>ul>li:last-child{
    font-size: 12px;
    border: none;
}
.seg{
    line-height: 56px;
    height: 56px;
    width: 864px;
    background-color: #ffffff;
    border: solid 1px #ced4da;
    margin-bottom: 16px;
}

#seg_con{
    width:496px;
    overflow: auto;
    float: left;
  
}
/* .page_title{
    opacity: 0.8;  
    font-size: 20px;
    font-weight: bold;  
    color: #1a2f53;
    margin-top:40px;
} */
#account_con{
    margin-top:32px;
    width: 864px;
    height: 157px;
    background-color: #ffffff;
    position: relative;
    padding: 40px 24px;;
}

#modi_account{
       margin-top:32px;
    width: 864px;  
    background-color: #ffffff;
    position: relative;
    padding: 40px 24px;;
    overflow: auto;
}


#core_profile{
    text-align: center;    
    width:120px;
    height:206px;  
    float: left;
}
#core_profile>img{
    width: 80px;
    height: 80px;
    border-radius: 40px;
    border: solid 1px #ced4da;
    margin-top:8px;
    margin-left: 80px;
    display: block;
    
}
#name{
    text-align: center;
    font-size: 32px;
    color: #243d68;
    margin-top: 17px;
    display: block;
    font-size: 17px;
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
}
#email{
    margin-top: 14px;
    font-size: 14px;
    text-align: center;
    color: #1a2f53;
    display: block;
}
.modi_btn{
    width: 84px;
    height: 32px;
    border-radius: 16px;
    border: solid 1px #1b66f4;
    font-size: 14px;
    text-align: center;
    color: #1b66f4;
    margin-left:406px;
    margin-top:32px;    
    line-height: 32px;
    cursor: pointer;
}

</style>
