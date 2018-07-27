<template>
    <div id="login_page" style="overflow:auto; height:auto">
    <Header></Header>
    <div>
        <div class="title_con">
            <div id="page_ttl">기업 메일 회원 가입</div>
        </div>        
        <div id="logincon">
            <img id="success" class="hidden" src="/static/img/success.png">
            <img id="error" class="hidden" src="/static/img/error.png">
            <input type="hidden" id="token_2" value="duck">
            <div id="test"></div>
            <table>
                <tr>
                    <td>기업 메일주소</td>
                    <td><input id="email_add" placeholder="sample@company.com" type="text" class="input"></td>
                    <td><div id="certi">인증번호 전송</div></td>
                </tr>
                <tr id="confirm" class="hidden">
                    <td></td><td><input id="token" placeholder="인증번호 입력" type="text" class="input"></td>
                    <td><div id="cert_confirm">인증하기</div></td>
                </tr>
                <tr><td style="padding-top:38px;">비밀번호</td>
                    <td style="padding-top:38px;"><input class="input" id="pw1" placeholder="비밀번호를 입력하세요" type="password"></td>
                    <td style="padding-top:38px;"></td></tr>
                <tr><td style="padding-top:16px;">비밀번호 확인</td>
                    <td style="padding-top:16px;"><input class="input" id="pw2" placeholder="비밀번호를 입력하세요" type="password"></td>
                    <td style="padding-top:16px;"></td></tr>
            </table>
            <div id="register" >가입하기</div>
        </div>
        <div class="title_con">
             <div id="social">간편가입</div>
        </div> 
       
        <div id="social_login_con">
            <div id="facebook" v-on:click='loginwithfacebook()'><img  style="float:left; margin-top:12px;margin-left:69px;margin-right:8px;" src="/static/img/icon_facebook.png"><span id="fb_btn" style="display:inline-block; float:left">페이스북으로 가입하기</span><img  src="/static/img/loading2.gif" id="fb_loading"  style="position:absolute; right:38px;;width:20px; height:20px;top:10px" class="hidden sns_loading" ></div>
            <div id="or">OR</div>
            <div id="kakao" v-on:click="loginWithKakao();">카카오로 가입하기<img  src="/static/img/loading2.gif" id="ka_loading"  style="position:absolute; right:-24px;;width:20px; height:20px;top:2px" class="hidden sns_loading" ></div>
            <div id="bar">|</div>
            <div id="naver" v-on:click="loginWithNaver()">네이버로 가입하기<img  src="/static/img/loading2.gif" id="nv_loading"  style="position:absolute; left:112px; ;width:20px; height:20px;top:2px" class="hidden sns_loading" >                
            </div>
        </div>
    </div>     
        </div>

  
</template>

<script>
import FacebookLogin from "./FacebookLogin"
import axios from 'axios';
import Header from "../common/Header"

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
   Kakao.init('422629e7f2ced5e998ddaeec8ec7d7af');

function chkPwd(str){
 var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
 if(!reg_pwd.test(str)){  return false;}
 return true;
}

function loginWithKakao(){
	  Kakao.Auth.login({
		  success: function(authObj) {
	          // 로그인 성공시, API를 호출합니다.
	          Kakao.API.request({
	            url: '/v1/user/me',
	            success: function(res) {
	              console.log(JSON.stringify(res.kaccount_email));
	              console.log(JSON.stringify(res.id));
	              console.log(JSON.stringify(res.properties.profile_image));
	              console.log(JSON.stringify(res.properties.nickname));
	            },
	            fail: function(error) {
	              alert(JSON.stringify(error));
	            }
	          });
	        },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });
}

function test(e){alert(e)}
var adb= "aasdf"
var sns = ""
function get_sns_auth(token,sns,context){
    console.log(context)
    if(sns == "facebook"){
        $("#fb_loading").removeClass("hidden")
    }
     if(sns == "naver"){
        $("#nv_loading").removeClass("hidden")
    }
     if(sns == "kakao"){
        $("#ka_loading").removeClass("hidden")
    }
    var target = context
    $.ajax({
            method:"POST",
            url:context.baseURI+`/vue_get_sns_auth/`,
            data: {
            "token":  token ,
            "provider":sns                           
            },
                success:function(e){
                    console.log(e)
                    alert(e.name+"님 환영합니다.!")
                    localStorage.setItem("id",189)
                    localStorage.setItem("login",true)
                    localStorage.setItem("user","u")
                    console.log(target)
                    location.href="/"
                                    //    context.$router.push("/") 
                    $(".sns_loading").addClass("hidden")
            }
            })
}
export default {
    components:{
        FacebookLogin, Header,
    },
    methods:{
     loginwithfacebook:function(){
         window.open("https://www.facebook.com/v3.0/dialog/oauth?client_id=162083444444485&redirect_uri=http%3A%2F%2Fgconnect.kr%2Flogin&state=abcabc")
        sns = "facebook"

        $("#fb_loading").removeClass("hidden")
 
     },
     loginWithKakao:function(){     
        console.log(this)
        var target = this
        $("#ka_loading").removeClass("hidden") 
      Kakao.Auth.login({
        success: function(authObj) {
            console.log(authObj)
         get_sns_auth(authObj.access_token ,"kakao" , target)
            // 토큰을 받아서 서버에서 request.post 사용자 정보를 취해야 함 - https://developers.kakao.com/docs/restapi/user-management , https://developers.kakao.com/docs/restapi/kakaostory-api - python 검색해서 참고 할것.
        },
        fail: function(err) {
          alert(JSON.stringify(err));
        }
      })   
    },
    loginWithNaver:function(){
        //var url = "https://nid.naver.com/oauth2.0/authorize?client_id=MonomZR2k6j8bS3LEFvy&response_type=code&redirect_uri=http%3A%2F%2Fgconnect.kr%2Flogin&state=aaa"
        var url = "https://nid.naver.com/oauth2.0/authorize?client_id=MonomZR2k6j8bS3LEFvy&response_type=code&redirect_uri=http%3A%2F%2Fgconnect.kr%2Flogin&state=aaa"
        
        window.open(url)
        sns = "naver"

        $("#nv_loading").removeClass("hidden")
    },
    },
    mounted:function(){
        var confirm = false;
        var vue_obj = this
        $(document).ready(function(){
            try{  
                var url_string = window.location.href;
                var url = new URL(url_string)
                console.log(url.searchParams.get("code"))
               console.log( $("#token_2", window.opener.document).val(url.searchParams.get("code")) )
                 $("#token_2", window.opener.document).val(url.searchParams.get("code")) 

               if(url.searchParams.get("code") != ""){
                    window.close();
                }
               } catch(e){}            
            var target = document.getElementById('token_2');
            var observer = new MutationObserver(function(mutations) {     
                get_sns_auth($("#token_2").val(), sns, vue_obj);           
            });
            var config = { attributes: true, childList: true, characterData: true };
            observer.observe(target, config);
            
            $(document).on("click","#certi", function(){
                console.log("this")
              var data = {
                  "type":"confirm",
                  "val":$("#email_add").val()
              }         
                $.ajax({
                    url:`${vue_obj.baseURI}/cert_email/`,
                    data:data,
                    method:"post",
                    success:function(res){
                        console.log(res)
                        $("tr.hidden").removeClass("hidden")
                        alert("이메일을 발송하였습니다.메일함을 확인해보세요.")
                    },
                    error:function(e){
                        console.log(e)
                        alert("서버와의 연결이 원활하지 않습니다. 잠시후에 다시 시도해주세요.")
                    },
                })
            })
            $(document).on("keyup","#pw1", function(){                
                if($("#pw1").val() != $("#pw2").val()) {
                     $("#success").addClass("hidden")
                     $("#error").removeClass("hidden")
               }else{
                   if(chkPwd($("#pw1").val())){
                        $("#success").removeClass("hidden")
                        $("#error").addClass("hidden")
                   }else{
                        $("#error").removeClass("hidden")
                        $("#success").addClass("hidden")
                   }
               }
            })
            $(document).on("keyup","#pw2", function(){
               if($("#pw1").val() != $("#pw2").val()) {
                     $("#success").addClass("hidden")
                     $("#error").removeClass("hidden")
               }else{
                   if(chkPwd($("#pw1").val())){
                        $("#success").removeClass("hidden")
                        $("#error").addClass("hidden")
                   }else{
                        $("#error").removeClass("hidden")
                        $("#success").addClass("hidden")
                   }
               }
            })
            $(document).on("click","#register", function(){
               if($("#pw1").val() != $("#pw1").val()) {
                   alert("비밀번호일치를 확인해주세요.")
                    $("#pw1").css("border","1px solid #ff0000")
                    $("#pw2").css("border","1px solid #ff0000")
               }
               if( !chkPwd($("#pw1").val()) ) {
                   alert("비밀번호는 영문자 혼합하여 20자리 이내여야 합니다.")
                    $("#pw1").css("border","1px solid #ff0000")
                    $("#pw2").css("border","1px solid #ff0000")
               }
               if(confirm==false){
                   alert("이메일 인증을 진행해주세요.")
                   $("#email_add").css("border","1px solid #ff0000")
               }


                var data ={
                    "username":$("#email_add").val(),
                    "password":$("#pw1").val(),
                    "confirmation_code":$("#token").val()
                }
                $.ajax({
                    url:`${vue_obj.baseURI}/vue_signup/`,
                    data:data,
                    method:"post",
                    success:function(res){
                        console.log(res)
                        if (res.result == "ok"){
                            localStorage.setItem("id", res.id)
                            localStorage.setItem("user", res.user)
                            localStorage.setItem("login", true)       
                            vue_obj.$router.push("/")                     
                        }else{
                            alert("이미 가입되어있는 이메일 입니다.")
                        }                        
                    },
                    error:function(e){
                        console.log(e)
                    },
                })               
            })
             $(document).on("click","#cert_confirm", function(){
                console.log("this")
              var data = {
                  "type":"confirm2",
                  "confirmation_code":$("#token").val(),
                  "target":$("#email_add").val()
              }         
                $.ajax({
                    url:`${vue_obj.baseURI}/cert_email/`,
                    data:data,
                    method:"post",
                    success:function(res){
                        console.log(res)
                        if(res=="ok"){
                            confirm = true
                            $("#confirm").addClass("hidden")
                            alert("이메일이 인증되었습니다. 회원가입을 진행해주세요")
                            $("#cert_confirm").text("인증완료")
                        }else {
                            confirm= false
                            alert("인증코드를 바르게 입력해주세요.")
                        }
                    },
                    error:function(e){
                        console.log(e)
                    },
                })
            })
        })
    }
}
</script>

<style scoped>

#fb_btn{
 font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
    text-align: center;
 letter-spacing: -0.1px;
 
  color: #1b49f4;
}
#error{

     position: absolute;
    top: 157px;
    left: 546px;
}
#success{
        position: absolute;
    top: 157px;
    left: 546px;
}
    #naver{
        position: absolute;
        top: 162px;
        right:274px;
        font-size: 14px;
        color: #1a2a53;
        cursor: pointer;
    }
    #kakao{
        position: absolute;
        top: 162px;
        left:270px;
        font-size: 14px;
         color: #1a2a53;
         cursor: pointer;
    }
    #social_login_con{
        position: relative;
        cursor: pointer;
    } 
    #or{
        opacity: 0.5;
        font-size: 14px;
        text-align: center;
        color: #1a2a53;
        position: absolute;
        top:112px;
        left:391px;
    }

    #facebook{
        width: 294px;
        height: 40px;
        border-radius: 20px;
        border: solid 2px #1b49f4;
        line-height: 40px;
        text-align: center;
        position: absolute;
        top:48px;
        left:257px;
        cursor: pointer;
    }

    #register{
        width: 261px;
        height: 40px;
        border-radius: 20px;
        background-color: #1b66f4;
        line-height: 40px;
        color: #fff;
        text-align: center;
        margin-left:262px;
        margin-top:37px;        
        cursor: pointer;
    }
    #logincon>table>tr>td:nth-child(1){
        width:168px;
    }
    #logincon>table>tr>td:nth-child(1){
       padding-left:8px;
    }
        
    #logincon>table{
        margin-top:40px;
        margin-left:100px;
        border-collapse: collapse
    }
    #logincon{
        overflow: auto;
        height: auto;
        position: relative;
    }

    #social_login_con{

    }
    #social{
        font-size: 24px;
        color: #a0a3bc;
        margin-top:64px;
        margin-bottom:40px;
    }
    
    .title_con{
        width:808px; 
        margin: 0px auto;;
    }


    #page_ttl{
        font-size: 24px;
        color: #a0a3bc;
        margin-top:48px;
        margin-bottom:32px;
    }
    #logincon{
        width: 808px;
        padding-bottom: 20px;
        background-color: #ffffff;
        margin: 0px auto;
    }
    #certi{
        width: 131px;
        height: 40px;
        border-radius: 25px;
        border: solid 2px #1b49f4;
        font-size: 14px;
        font-weight: bold;
        color: #1b49f4;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
    }
    #social_login_con{
        width: 808px;
        height: 241px;
        background-color: #ffffff;
        margin:0px auto;
        margin-bottom: 100px;
    }
    #cert_confirm{
        width: 101px;
        height: 40px;
        border-radius: 20px;
        background-color: #1b66f4;
        text-align: center;
        line-height: 40px;
        color:#fff;
        cursor: pointer;
        }
    .input{
        width: 262px;
        height: 24px;
        border: solid 1px #ced4da;
        padding:15px;
        color:#1a2f53;
        margin-right: 6px;
    }
    #bar{
        position: absolute;
        width: 1px;
        height: 20px;
        color: #e7edfc;
        top:165px;
        left:404px;
      }
</style>
