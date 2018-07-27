<template>
    <div id="left_navi">
        <div id="navi_title">마이페이지</div>
        <ul>
            <li class="hd">지원히스토리</li>
            <li class="ta"><router-link to="/mypage/apply" >지원내역</router-link></li>
            <li class="ta"><router-link to="/mypage/interest_sb" >관심 지원사업</router-link></li>
        </ul>

        <ul>
            <li class="hd">기업 페이지 관리</li>
            <li class="ta"><router-link to="/mypage/startup" >기업 페이지 관리</router-link></li>
            <li class="ta"><router-link to="/mypage/interest_startup" >관심 기업</router-link></li>
        </ul>
        
        <ul>
            <li class="hd">내 채널 관리</li>
            <li class="ta"><router-link to="/mypage/channel/ing">수강중인 강좌</router-link></li>
            <li class="ta"><router-link to="/mypage/channel/int">관심 강좌</router-link></li>
            <li class="ta"><router-link to="/mypage/channel">강좌 관리하기</router-link></li>
        </ul>

        <ul>
            <li class="hd">계정 관리</li>
            <li class="ta"><router-link to="/mypage/my_account" >계정 정보 수정</router-link></li>
        </ul>
   
  
        <ul style="border:none; border-top:1px solid #e7edfc ">
           
            <li class="ta" id="sub_logout">로그아웃</li>
        </ul>
    </div>
</template>

<script>
export default {
    methods:{
        logout:function(){
            console.log("here")
            localStorage.removeItem("id")
            localStorage.removeItem("user")
            localStorage.removeItem("login")
            this.$router.push("/")
        },
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
             $(document).off("click","#sub_logout")
            $(document).on("click","#sub_logout",function(){
                if(confirm("로그아웃 하시겠습니까?")){
                localStorage.removeItem("id")
                localStorage.removeItem("user")
                localStorage.removeItem("login")
                vue_obj.$router.push("/")
                }
            })
        })
    }

}
</script>

<style scoped>
ul{
   
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
}

.ta{
    padding-left: 16px;
    width:144px;
    height:42px;
    line-height: 42px;
     font-size: 14px;
  font-weight: normal;
  cursor:pointer
}
.hd{
    padding-left: 16px;
    width: 143px;
    height: 35px;
    font-size: 12px;
  font-weight: normal;
   font-weight: bold;
  line-height: 35px;
  letter-spacing: normal;
  color: rgba(26, 42, 83, 0.5);
    background-color: #e7edfc;
    border: solid 1px #e7edfc;
    display: block;
}
ul{
    display: block;
    width: 160px;
    border: solid 1px #e7edfc;
    margin-bottom: 20px;
    ;
}


#navi_title{
    margin-top: 40px;
    overflow: auto;
    margin-bottom: 32px;
    font-size: 24px;
}



</style>
