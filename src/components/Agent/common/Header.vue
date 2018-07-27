<template>
    <div id="header">
           <div id="logo" ><router-link to="/agent/dashboard"><img src="/static/img/Logo.png" alt="로고" style="width:112px;height:24px;margin-top:15px; margin-left:15px; float:left" ></router-link></div>
           <div id="personal_con"><router-link :to="'/agent'"> <img src="/static/img/ic_profile.png"></router-link>
            <div id="profile_popup_con" class="hidden" style="position: absolute;right: 0px; top: 56px;">
                <ul>
                    <li  style="height:33px; line-height:33px; "><router-link to="/agent/dashboard">대시보드</router-link></li>                 
                    <li  style="height:33px; line-height:33px; "><router-link to="/agent/statics/by_grant" >통계</router-link></li>
                    <li  style="height:33px; line-height:33px; "><router-link to="/agent/grant/all" >지원사업관리</router-link></li>
                    <li  style="height:33px; line-height:33px; "><router-link to="/agent/all_grant" >전체지원사업</router-link></li>
                    <li  style="height:33px; line-height:33px; "><router-link to="/agent/account/agent" >기관회원</router-link></li>
                    <li  style="height:33px; line-height:33px; "><router-link to="/agent/user_account">유저관리</router-link></li>
                                  
                </ul>
                <div id="logout">로그아웃</div>
            </div></div>
           
    </div>
</template>

<script>
export default {
    mounted:function(){
        $(document).ready(function(){
            $(document).on("mouseenter","#personal_con", function(){
                $("#profile_popup_con").removeClass("hidden")
            })
            $(document).on("mouseleave","#profile_popup_con", function(){
                 $("#profile_popup_con").addClass("hidden")
            })
               $(document).off("click","#logout")
            $(document).on("click","#logout",function(){
                if(confirm("로그아웃 하시겠습니까?")){
                localStorage.removeItem("id")
                localStorage.removeItem("user")
                localStorage.removeItem("login")
                location.href =  "/"
                }
            })
        })
    }
}
</script>

<style scoped>
#logout{
    width: 152px;
    padding-left: 24px;
    height: 32px;
    background-color: rgba(206, 212, 218,  0.2 );
    font-size: 12px;
    color: #1a2f53;
    
    line-height: 32px;
    cursor: pointer;
}
#profile_popup_con>ul>li{
    width:152px;
    padding-left: 24px;
    height:40px;
    line-height: 40px;
    font-size: 12px;
    font-weight: bold;
    border-bottom:  1px solid rgba(36,61,104, 0.2 );
    cursor: pointer;
}
.hd{
    opacity: 0.5;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.33;
    color: #243d68;
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

    #header{
        width:100%;
        height:56px;
        background-color: #fff;
        border-bottom: 1px solid #ced4da;
        z-index: 99999;
        position: relative;
    }
    #logo_con{
        width: 123px;
        height: 24px;
        float: left;
        margin-top: 16px;
        margin-left: 18px;
        border: 1px solid #ddd
    }
    #personal_con{
        width:32px;
        height: 32px;
        float: right;
        margin-top:12px;
        margin-right: 24px;
        border: 1px solid #ddd;
        border-radius: 16px;
    }
</style>
