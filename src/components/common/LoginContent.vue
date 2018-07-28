<template>
    <div id="login_con" style="float:right; margin-top:9px;">
            
            <div id="login_processed">
                <img src="/static/img/ic_noti_2.png" id="noti" style="width:24px;height:24px;margin-top:4px;margin-right:29px;"> 
                <img id="my_profile" src="/static/img/ic_profile.png" style="width:32px;height:32px;">
            </div>
            <div id="no_login">
                <img src="/static/img/ic_search.png" style="opacity:0;width:24px;height:24px;margin-top:4px;margin-right:24px;float:left;cursor:pointer"> 
                <div id="register_hd" style=""><router-link :to="'/login'">가입하기</router-link></div>
                <div id="login_hd">로그인</div>
            </div>          
            <div id="alarm_popup_con" class="hidden">
                <ul>
                    <li>
                        <div class="alarm_ttl">
                            <span class="date">08.08</span>
                            <span class="ttl">관심 지원사업에 변동사항이있습니다.</span>
                        </div>
                        <div class="info">
                            2018 제 6회 도쿄 게임박람회
                        </div>
                    </li>
                    <li>
                        <div class="alarm_ttl">
                            <span class="date">08.08</span>
                            <span class="ttl">지원한 지원사업에 변동사항이있습니다.</span>
                        </div>
                        <div class="info">
                            스타트업 2030 엑셀러레이팅 네트워킹
                        </div>
                    </li>
                    <li>
                        <div class="alarm_ttl">
                            <span class="date">08.08</span>
                            <span class="ttl">관심기업 정보에 변동사항이있습니다.</span>
                        </div>
                        <div class="info">
                            로켓펀치
                        </div>
                    </li>
                </ul>
                <div id="alarm_more_btn"><router-link to="/mypage/alarm">더보기</router-link></div>
            </div>
            <div id="profile_popup_con" class="hidden">
                <ul>
                    <li><router-link to="/mypage/alarm">알림보관</router-link></li>
                    <li class="hd" style=" border-bottom:none"><router-link to="/mypage/apply" >지원 히스토리</router-link></li>
                    <li style="height:33px; lne-height:33px; border-bottom:none"><router-link to="/mypage/apply" >지원내역</router-link></li>
                    <li  style="height:33px; lne-height:33px;"><router-link to="/mypage/apply" >관심지원사업</router-link></li>
                    <li  class="hd" style=" border-bottom:none"><router-link to="/mypage/startup" >기업 페이지 관리</router-link></li>
                    <li  style="height:33px; lne-height:33px; border:none"><router-link to="/mypage/startup" >기업 페이지 관리</router-link></li>
                    <li><router-link to="/mypage/interest_startup" >관심기업</router-link></li>
                    <li  class="hd" style=" border-bottom:none"><router-link to="/mypage/channel/ing">내 채널 관리</router-link></li>
                    <li  style="height:33px; lne-height:33px; border:none"><router-link to="/mypage/channel/ing">수강중인 강좌</router-link></li>
                    <li  style="height:33px; lne-height:33px; border:none"><router-link to="/mypage/channel/int">관심강좌</router-link></li>
                    <li><router-link to="/mypage/channel">내 강의/코스/패스 등록</router-link></li>
                    <li><router-link to="/mypage/my_account" >계정 정보관리</router-link></li>                    
                </ul>
                <div id="logout">로그아웃</div>
            </div>
            <div id="back_layer" class="hidden"></div>
            <div id="login_view" class="hidden">
                <div id="view_top"><span id="view_text">로그인</span> <span id="x_btn"><img src="/static/img/x_btn.png" style="width:24px; height:24px;"></span></div>
                <table style="margin-left:85px;margin-top:40px;">
                    <tr><td style="width:95px;padding-bottom:16px;padding-left:22px;"><span>아이디</span><br>
                        <input type="text" placeholder="sample@company.com" class="input_login" id="username"></td></tr>
                    <tr><td style="padding-left:22px;">
                        <span>비밀번호</span><br>
                        <input type="password" @keyup.enter="onSubmit" placeholder="비밀번호를 입력하세요" id="pw"  class="input_login"></td></tr>
                </table>
                <div id="error_span" class="hidden" style=" color:red ;margin-left: 155px;">아이디와 비밀번호가 일치하지않습니다.</div>
                <div id="login_btn">로그인</div>
                <div id="hr"></div>
                <div class="sns_seg"  v-on:click="loginwithfacebook" style="margin-top:40px; cursor:pointer;position:relative"><img src="/static/img/icon_facebook.png">페이스북계정 로그인<img  src="/static/img/loading2.gif" id="fb_loading" style="position:absolute; right:20px;;width:20px; height:20px;top:-2px;" class="hidden sns_loading" ></div>
                <div class="sns_seg"  v-on:click="loginWithKakao" style=" cursor:pointer;position:relative"><img src="/static/img/icon_kakao.png">카카오계정 로그인<img  src="/static/img/loading2.gif" id="ka_loading"  style="position:absolute; right:20px;;width:20px; height:20px;top:-2px"  class="hidden sns_loading"></div>
                <div class="sns_seg"  v-on:click="loginWithNaver" style=" cursor:pointer;position:relative" ><img src="/static/img/icon_naver.png">네이버계정 로그인<img  src="/static/img/loading2.gif" id="nv_loading"  style="position:absolute; right:20px;;width:20px; height:20px;top:-2px" class="hidden sns_loading" ></div>
                <input id="token_2" type="hidden">
                <div id="bottom">아직 회원이 아니신가요?&nbsp;&nbsp;<router-link :to="'/login'"><span id="register_link">회원가입</span></router-link></div>
            </div>
    </div>
</template>
<script>
var sns;
function get_sns_auth(token,sns,context){
    var target = context
    if(sns == "facebook"){
        $("#fb_loading").removeClass("hidden")
    }
     if(sns == "naver"){
        $("#nv_loading").removeClass("hidden")
    }
     if(sns == "kakao"){
        $("#ka_loading").removeClass("hidden")
    }
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
                    window.location.reload()
                    //context.$router.push("/")
                    $(".sns_loading").addClass("hidden")
           }
            })
}


export default {
    methods:{

  loginwithfacebook:function(){
         window.open("https://www.facebook.com/v3.0/dialog/oauth?client_id=162083444444485&redirect_uri=http%3A%2F%2Fgconnect.kr%2Flogin&state=abcabc")
        sns = "facebook"

     },
     loginWithKakao:function(){     
        console.log(this)
        var target = this   
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
    },

        onSubmit:function(){
            var vue_obj = this
 var data_1={
                    "username":$("#username").val(),
                    "password":$("#pw").val(),
                }
                console.log(data_1)
                $.ajax({
                    url:`${vue_obj.baseURI}/vue_login_user/`,
                    data:data_1,
                    method:"POST",
                    success:function(res){
                        console.log(res)
                        if(res.user=="ma"){
                            vue_obj.$router.push('/agent/dashboard')
                             localStorage.setItem("id",res.id)
                        localStorage.setItem("user",res.user)                        
                        localStorage.setItem("login",true)
                        }
                        else if(res.user =="m"){
                            vue_obj.$router.push('/manager/dashboard')
                             localStorage.setItem("id",res.id)
                        localStorage.setItem("user",res.user)                        
                        localStorage.setItem("login",true)
                        }else if(res.user =="u"){
                            console.log("here")
                                localStorage.setItem("id",res.id)
                        localStorage.setItem("user",res.user)                        
                        localStorage.setItem("login",true)
                        
                            console.log("페이지 새로 고침")
                            window.location.reload();
                             
                        }else{
                            $("#error_span").removeClass("hidden")
                        }
                      
                    }, 
                    error:function(e){
                        console.log(e)
                        alert("서버와의 연결이 원활하지 않습니다. 잠시후에 다시 시도해주세요.")
                    }
                })    
        },
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
            try{  
                var url_string = window.location.href;
                var url = new URL(url_string)
                console.log(url.searchParams.get("code"))
                $("#token_2", window.opener.document).val(url.searchParams.get("code"))
                if(url.searchParams.get("code") != ""){
                    window.close();
                }
                } catch(e){}            
            var target = document.getElementById('token_2');
            var obs = 0
            var observer = new MutationObserver(function(mutations) {
                if(obs==0){
                console.log($("#token_2").val())
                console.log(sns)
                get_sns_auth($("#token_2").val(), sns, vue_obj);
                observer.disconnect()
                return false;
                obs = obs+1
                }
                
                
            });
            var config = { attributes: true, childList: true, characterData: true };
            observer.observe(target, config);
            
            $(document).off("click","#logout")
            $(document).on("click","#logout",function(){
                if(confirm("로그아웃 하시겠습니까?")){
                localStorage.removeItem("id")
                localStorage.removeItem("user")
                localStorage.removeItem("login")
                vue_obj.$router.go()

                }
            })
            if( localStorage.getItem("login") == false ||localStorage.getItem("login") == undefined){
                $("#login_processed").addClass("hidden")
                $("#no_login").removeClass("hidden")
            } else{
                $("#login_processed").removeClass("hidden")
                $("#no_login").addClass("hidden")
            }
            $(document).on("mouseenter", "#noti", function(){
                $("#alarm_popup_con").removeClass("hidden")
                 $("#profile_popup_con").addClass("hidden")
            })
            $(document).on("mouseleave", "#alarm_popup_con", function(){
                $("#alarm_popup_con").addClass("hidden")
            })
              $(document).on("mouseenter", "#my_profile", function(){
                $("#profile_popup_con").removeClass("hidden")
                 $("#alarm_popup_con").addClass("hidden")
            })
            $(document).on("mouseleave", "#profile_popup_con", function(){
                $("#profile_popup_con").addClass("hidden")
            })

            $(document).off("click","#login_btn")
            $(document).on("click","#login_btn", function(){
                var data_1={
                    "username":$("#username").val(),
                    "password":$("#pw").val(),
                }
                console.log(data_1)
                $.ajax({
                    url:`${vue_obj.baseURI}/vue_login_user/`,
                    data:data_1,
                    method:"POST",
                    success:function(res){
                        console.log(res)
                        if(res.user=="ma"){
                            vue_obj.$router.push('/agent/dashboard')
                             localStorage.setItem("id",res.id)
                        localStorage.setItem("user",res.user)                        
                        localStorage.setItem("login",true)
                        }
                        else if(res.user =="m"){
                            vue_obj.$router.push('/manager/dashboard')
                             localStorage.setItem("id",res.id)
                        localStorage.setItem("user",res.user)                        
                        localStorage.setItem("login",true)
                        }else if(res.user =="u"){
                            console.log("here")                                         
                             localStorage.setItem("id",res.id)
                        localStorage.setItem("user",res.user)                        
                        localStorage.setItem("login",true)
                        vue_obj.$router.push("/")
                        window.location.reload();
                        }else{
                            $("#error_span").removeClass("hidden")
                        }
                      
                    }, 
                    error:function(e){
                        console.log(e)
                    }
                })                
            })
            $(document).off("click", "#register_hd")
            $(document).on("click", "#register_hd", function(){
                vue_obj.$router.push('/login')
            })
            $(document).on("click","#login_hd", function(){
                $("#back_layer").removeClass("hidden")
                $("#login_view").removeClass("hidden")
                $("#back_layer").css("width",window.innerWidth)
                $("#back_layer").css("height",window.innerHeight)
                $("#back_layer").css("top","0px")
                $("#back_layer").css("left","0px")                
                $("#login_view").removeClass("hidden")
            })
            $(document).on("click","#x_btn", function(){
            
                $("#login_view").addClass("hidden")
                $("#back_layer").css("width",0)
                $("#back_layer").css("height",0)
                $("#back_layer").css("top","0px")
                $("#back_layer").css("left","0px")                
                $("#login_view").add("hidden")
            })
        })
    }
}
</script>

<style scoped>
#register_hd{
    width: 105px;
  height: 40px;
  border-radius: 20px;
  background-color: #1b66f4;
  margin-right:7px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  float: left;
  cursor: pointer;
}
#login_hd{
    text-align: center;
    line-height: 36px;
    color:#1b49f4;
     width: 101px;
  height: 36px;
  border-radius: 25px;
  border: solid 2px #1b49f4;
  float: left;
  cursor: pointer;
}
#no_login{
    width: 266px;
}
#register_link{
    opacity: 0.8;
  font-size: 14px;
  color: #1b49f4;
}

#bottom{
    width:100%;
    height: 84px;
    background-color: #e7edfc;
    margin-top:32px;
    text-align: center;
    line-height: 84px;
    font-size: 14px;
    font-weight: normal;
}
.sns_seg{

    margin-bottom:8px;
    margin-left:147px;
    width: 270px;
    border-radius: 20px;
    height: 40px;
    background-color: #ffffff;
    border: solid 1px #ced4da;
    line-height: 40px;
}
.sns_seg>img{
    margin-left:52px;
    margin-right:8px;
        float: left;
    margin-top: 13px;
}
#login_btn{
    width: 102px;
    height: 40px;
    background-color: #1b66f4;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    line-height: 40px;
    border-radius: 20px;
    margin-left: 232px;
    margin-top:40px;
    margin-bottom:40px;
    cursor:pointer
}

#hr{
    width:100%;
    height: 1px;
    border-bottom:1px solid #e7edfc
}

.input_login{
     width: 320px;
  height: 40px;
  background-color: #ffffff;
  border: solid 1px #ced4da;
  padding-left:20px;
  line-height: 40px;
  margin-top:8px;
}
#view_top{
    width:100%;
    height: 40px;
    border-bottom: 1px solid  #e7edfc;
     background-color: #c1d1f7;
}
#view_text{
    font-size: 16px;
    color: #243d68;
    display: inline-block;
    line-height: 40px;
    margin-left:16px; 
}
#x_btn{
    float: right;
    margin-right:8px;
    line-height: 55px;
    cursor: pointer;
}

#back_layer{
    position: fixed;
    background-color: rgba(26, 47, 83, 0.8);
    z-index: 99;
}
#login_view{
    position: fixed;
    width: 564px;
  height: 605px;
  background-color: #ffffff;
  z-index: 999;
  left:50%;
  margin-left:-282px;
  top:200px;
  line-height: inherit;
}
#logout{
        width: 152px;
    padding-left: 16px;
    height: 32px;
    /* background-color: rgba(206, 212, 218, 0.2 ); */
    font-size: 14px;
    color: #1a2f53;
    line-height: 21px;
    cursor: pointer;
    opacity: 0.5;
}

#profile_popup_con>ul>li{
    width:161px;
    padding-left: 16px;
    height:33px;
    line-height: 33px;
    font-size: 14px;
    border-bottom:  1px solid rgba(36,61,104, 0.2 );
    cursor: pointer;   
}
.hd{
  
    font-size: 12px!important;
    font-weight: 900;
    line-height: 1.33;
    color: #1a2a53;
    opacity:0.5;
}
#profile_popup_con>ul>li:last-child{
    border-bottom: none;
    margin-bottom: 8px;
}


#profile_popup_con{
    position: absolute;
    z-index: 999;
    top:46px;
    width: 176px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px -1px rgba(206, 212, 218, 0.5), 0 10px 10px 2px rgba(34, 86, 184, 0.19), 0 1px 1px 0 rgba(79, 84, 120, 0.26);
}

#alarm_more_btn{
    width:266px;
    text-align: right;
    margin-left: 26px;
    margin-top: 18px;
    margin-bottom:16px;
    font-size: 12px;
    font-weight: bold;
    color: #243d68;
    cursor: pointer;
}
#alarm_popup_con{
    z-index: 999;
}

#alarm_popup_con>ul{
    width:100%
}
#alarm_popup_con>ul>li{
    cursor: pointer;
    margin-left:0px;
    padding-left: 16px;
    width:272px;
    list-style:none;
    font-size: 10px;
    border-bottom: 1px solid rgba(36,61,104, 0.2 );
}

#alarm_popup_con>ul>li:last-child{
    border-bottom:none;
}


.date{
    margin-top:13px;
    display: inline-block;
    width: 56px;
    text-align: left;
}
.ttl{
    width: 198px;
}
.info{
    margin-top:8px;
    font-weight: bold;
    color: #f54b94;
    margin-bottom:16px;
    font-size: 12px;
    padding-left: 58px;
}



#login_con{
    position: relative;
}
    #alarm_popup_con{
        position: absolute;
        top:46px;
        right:63px;
        width: 288px;
    height: auto;;
  background-color: #ffffff;
  box-shadow: 0 2px 4px -1px rgba(206, 212, 218, 0.5), 0 10px 10px 2px rgba(34, 86, 184, 0.19), 0 1px 1px 0 rgba(79, 84, 120, 0.26);
    }
</style>
