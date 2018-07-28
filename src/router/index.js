import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import userAccount from '@/components/userAccount'
import Grant from "@/components/Grant"
import StartupList from "@/components/Startup/StartupList"
import Startup from "@/components/Startup/Startup"
import StaticsByGrant from "@/components/manager/StaticsByGrant"
import StaticsByChannel from "@/components/manager/StaticsByChannel"

import StaticsByGrantPopup from "@/components/manager/StaticsByGrantPopUp"

import StaticsByAll from "@/components/manager/StaticsByAll"
import MyPage from "@/components/mypage/Mypage"
import Apply from "@/components/Apply/Apply"
import BaseInfo from "@/components/Apply/BaseInfo"
import BusinessInfo from "@/components/Apply/BusinessInfo"
import StartupInfo from "@/components/Apply/StartupInfo"
import Oversea from "@/components/Apply/Oversea"
import StartupIntro from "@/components/Apply/StartupIntro"
import AttachedFile from "@/components/Apply/AttachedFile"
import Complete from "@/components/Apply/Complete"
import Application from "@/components/Apply/Application"
import MyAccount from "@/components/mypage/MyAccount"
import Alarm from "@/components/mypage/Alarm"
import Login from "@/components/Login/Login"
import ManageApplicant from "@/components/mypage/ManageApplicant"
import ManageStartupInfo from "@/components/mypage/ManageStartupInfo"
import InterestStartup from "@/components/mypage/InterestStartup"
import InterestSupportBusiness from "@/components/mypage/InterestSupportBusiness"


import FBSignInButton from 'vue-facebook-signin-button'
import Dashboard from "@/components/manager/Dashboard/Dashboard"
import AgentDashboard from "@/components/Agent/DashBoard/AgentDashboard"
import WaitGrant from "@/components/Agent/WaitGrant" 
import AllgrantList from "@/components/manager/AllGrant/AllgrantList"
import AllgrantList2 from "@/components/agent/AllGrant/AllgrantList"

import Account from "@/components/manager/Account/Account"
import UserAccount from "@/components/manager/AccountList/UserAccount"
import UserAccount2 from "@/components/agent/AccountList/UserAccount"

import StaticsByUser from "@/components/manager/StaticsByUser"
import StaticsBySite from "@/components/manager/StaticsBySite"
import MakeApplication from "@/components/manager/MakeApplication"
import MakeBaseGrant from "@/components/manager/MakeBaseGrant"
import SupportContent from "@/components/manager/SupportContent"
import RecruitContent from "@/components/manager/RecruitContent"
import SelectMethod from "@/components/manager/SelectMethod"
import GrantAttachedFile from "@/components/manager/AttachedFile"
import GrantEtc from "@/components/manager/GrantEtc"
import GrantComplete from "@/components/manager/GrantComplete"
import AllGrant from "@/components/manager/AllGrant"
import AgentAllGrant from "@/components/agent/AgentAllGrant"
import StaticsBySiteSub from "@/components/manager/StaticsBySiteSub"
import GrantDetail from "@/components/manager/GrantDetail"
import GrantDetailAgent from "@/components/agent/GrantDetail"

import AgentAccount from "@/components/manager/AccountList/AgentAccount"
import AgentAccount2 from "@/components/agent/AccountList/AgentAccount"

import ManageChannel from "@/components/mypage/my_channel/ManageChannel"

import AgentStaticsByGrant  from "@/components/Agent/StaticsByGrant"
import AgentStaticByAll from "@/components/Agent/StaticsByAll"
import ClipView from "@/components/mypage/my_channel/ClipView"
import CourseHome from "@/components/mypage/my_channel/CourseHome"
import PathHome from "@/components/mypage/my_channel/PathHome"
import CourseView from "@/components/mypage/my_channel/CourseView"
import PathView from "@/components/mypage/my_channel/PathView"
import MakeClip from "@/components/mypage/my_channel/MakeClip"
import MakeCourse  from "@/components/mypage/my_channel/MakeCourse"
import MakePath  from "@/components/mypage/my_channel/MakePath"
import Channel from "@/components/Channel"
import ChannelClip from "@/components/ChannelClip"
import ChannelCourse from "@/components/ChannelCourse"
import ChannelPath from "@/components/ChannelPath"

import Main from "@/components/Main"
import ManageChanneling from "@/components/mypage/my_channel/ManageChannelIng"
import ManageChannelint from "@/components/mypage/my_channel/ManageChannelInt"
import ManageChannelDetail from "@/components/mypage/my_channel/ManageChannelDetail"


import Datetime from 'vue-datetime'

// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

var VueTruncate = require('vue-truncate-filter')
Vue.use(VueTruncate)

Vue.use(Datetime)

import tinymce from 'vue-tinymce-editor'
Vue.use(FBSignInButton)


function ManagerGuard(next){
  if(localStorage.getItem("user")!= "m"){
    alert("유효하지 않은 접근 입니다.")
    next("/")
  }else{
    next()
  }
}


Vue.component('tinymce', tinymce)
Vue.use(Router)
export default new Router({
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
   
    
    {
      path: '/',
      component: Main
    },
    {
      path: '/grant',
      component: Home
    },
    {
      path: '/my_account',
      name: 'Account',
      component: Account
    },
    {
      path: '/grant/:id',
      name: 'Grant',
      component: Grant,
      beforeRouteLeave (to, from, next){
        console.log(to)
        console.log(from)
        console.log(next)
      }
    },
    {
      path: '/startup_list',
      name: 'StartupList',
      component: StartupList
    },
    {
      path: '/startup/:id',
      name: 'Startup',
      component: Startup
    },    

    



    // 매니저 url
    { beforeEnter:(to,from,next)=>{ if(localStorage.getItem("user")=="m"){next();}else{alert("유효한 접근이 아닙니다."); next("/");}} ,path:'/manager/account', name:"manager_account", component:Account},
    {path:'/manager/account/agent', name:"manager_account", component:AgentAccount},
    {path:'/manager/all_grant', name:"manager_allgrant", component:AllgrantList},
    {path:'/manager/dashboard', name: 'dashboard',component: Dashboard, },
    {path:'/manager/user_account', name:"user_account", component:UserAccount},
    {path:'/manager/statics/by_grant', component:StaticsByGrant},       
    {path:'/manager/statics/by_grant/:id', component:StaticsByGrant},       
    {path:'/manager/statics/by_channel', component:StaticsByChannel},       
    {path:'/manager/statics/by_all', component:StaticsByAll},       
    {path:'/manager/statics/user', component:StaticsByUser},   
    {path:'/manager/statics/by_grant/popup/:id', component:StaticsByGrantPopup},       
    {path:'/manager/statics/site', component:StaticsBySite},  
    {path:'/manager/statics/site_sub', component:StaticsBySiteSub},      
    {path:'/manager/make/application/:id', component:MakeApplication},       
    {path:'/manager/make/grant/:id', component:MakeBaseGrant},
    {path:'/manager/make/grant/:id/support_content', component:SupportContent},       
    {path:'/manager/make/grant/:id/recruit_content', component:RecruitContent},       
    {path:'/manager/make/grant/:id/select_method', component:SelectMethod},       
    {path:'/manager/make/grant/:id/attached_file', component:GrantAttachedFile},       
    {path:'/manager/make/grant/:id/etc', component:GrantEtc},       
    {path:'/manager/make/grant/:id/complete', component:GrantComplete}, 
    {path:'/manager/grant/all', component:AllGrant}, 
    {path:'/manager/grant/:id', component:GrantDetail},
    
    


    // 기관 관리자 url 

    {path:'/agent/', name:"manager_account", component:Account},
    {path:'/agent/statics/by_grant', component:AgentStaticsByGrant},       
    {path:'/agent/statics/by_all', component:AgentStaticsByGrant},       
    {path:'/agent/statics/user', component:StaticsByUser},   
    {path:'/agent/dashboard', name: 'dashboard',component: AgentDashboard, },
    {path:'/agent/grant/all',component: AgentAllGrant, },
    {path:'/agent/grant/:id',component: GrantDetailAgent, },
    {path:'/agent/grant/wait/:id', component:WaitGrant},
    {path:'/agent/all_grant', name:"manager_allgrant", component:AllgrantList2},
    {path:'/agent/account/agent',component: AgentAccount2, },
    {path:'/agent/user_account', name:"user_account", component:UserAccount2},
   
    

    {path:'/channel',component: Channel, },
    {path:'/channel/clip',component: ChannelClip, },
    {path:'/channel/course',component: ChannelCourse, },
    {path:'/channel/path',component: ChannelPath, },
    {path:'/clip/:id',component: ClipView, },
    {path:'/make_clip',component: MakeClip, },
    {path:'/make_course',component: MakeCourse, },
    {path:'/course/:id',component: CourseHome, },
    {path:'/course/view/:id/:clip',component: CourseView, },
    {path:'/path/:id',component: PathHome, },
    {path:'/path/view/:id/:course/:clip',component: PathView, },
    {path:'/make_path',component: MakePath, },


    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { beforeEnter:(to,from,next)=>{ if(localStorage.getItem("user")=="u"){next();}else{alert("유효한 접근이 아닙니다."); next("/");}}
      ,path: '/mypage',
      name: 'MyPage',
      component: MyPage,
      children:[
        {path:'interest_startup', component:InterestStartup},
        {path:'interest_sb', component:InterestSupportBusiness},
        
        {path:'alarm', component:Alarm},
        {path:'my_account', component:MyAccount},
        {path:'apply', component:ManageApplicant},
        {path:'startup', component:ManageStartupInfo},
        {path:'channel', component:ManageChannelDetail},
        {path:'channel/ing', component:ManageChanneling},
        {path:'channel/int', component:ManageChannelint}  
      ]
    },
    { beforeEnter:(to,from,next)=>{ if(localStorage.getItem("user")=="u"){next();}else{alert("유효한 접근이 아닙니다."); next("/");}}
      ,path: '/apply/:id',
      name: 'Apply',
      component: Apply,
      children:[
        {  path:'base_info', component:BaseInfo},
        {path:'business_info', component:BusinessInfo},
        {path:'startup_info', component:StartupInfo},
        {path:'oversea_info', component:Oversea},
        {path:'startup_intro', component:StartupIntro},
        {path:'attached_file', component:AttachedFile},
        {path:'application', component:Application},
        {path:'complete', component:Complete},
      ]
    },
  ]
})



// 유저 단의 지원서 상세 페이지 에서 d-day 계산하고 마감 된 공고 임을 알려줌

Vue.filter('d_day_calc',function(date, date2){       
  try{
    var now = new Date();
    var year = date.split(" ")[0].split("-")[0]
    var month = date.split(" ")[0].split("-")[1]
    var day = date.split(" ")[0].split("-")[2]
    var then = new Date(year+"-"+month+"-"+day)
    var gap = then.getTime() - now.getTime();
    var year2 = date2.split(" ")[0].split("-")[0]
    var month2 = date2.split(" ")[0].split("-")[1]
    var day2 = date2.split(" ")[0].split("-")[2]
    var then2 = new Date(year2+"-"+month2+"-"+day2)
    var gap2 = then.getTime() - then2.getTime()
    var width = 796 * ((gap2-gap)/gap2)
    gap = Math.floor(gap / (1000 * 60 * 60 * 24))+2;
    if(gap <0 ){
         gap = "마감된 공고입니다."
        $("#inner_range").css("width","796px")
    }else{
        gap = "D-"+gap
        $("#inner_range").css("width",width)
      } 
    return gap      
  }    
  catch(e){
    console.log(e)
    return ""
  }
})

Vue.filter('d_day_calc_short',function(date, date2){       
  try{
    var now = new Date();
    var year2 = date2.split(" ")[0].split("-")[0]
    var month2 = date2.split(" ")[0].split("-")[1]
    var day2 = date2.split(" ")[0].split("-")[2]
    var then2 = new Date(year2+"-"+month2+"-"+day2)
    var gap2 = then2.getTime() - now.getTime()   
    gap2 = Math.floor(gap2 / (1000 * 60 * 60 * 24))+1;
    if(gap2 <0 ){
         gap2 = "모집완료"
       
    }else{
        gap2 = "D-"+gap2
     
      } 
    return gap2      
  }    
  catch(e){
    console.log(e)
    return ""
  }
})

// 데이트 포맷에서 날짜 추출

Vue.filter('get_day_format',function(date){   
  try{
    var year = date.split("T")[0].split("-")[0]
    var month = date.split("T")[0].split("-")[1]
    var day = date.split("T")[0].split("-")[2]
    var week = new Array('일', '월', '화', '수', '목', '금', '토');
    var today = new Date(year+"-"+month+"-"+day).getDay();
    var todayLabel = week[today];     
  }
  catch(e){
    return "" 
  }
  return year+"년 "+month+"월 "+day+"일 ("+todayLabel+")"
}
)


Vue.filter('d_day_calc_short_2',function(date, date2){       
  try{
    var now = new Date();
    var year2 = date2.split("-")[0]
    var month2 = date2.split("-")[1]
    var day2 = date2.split("-")[2]
    var then2 = new Date(date2)
    console.log(then2)
    var gap2 = then2.getTime() - now.getTime()   
    console.log(gap2)
    gap2 = Math.floor(gap2 / (1000 * 60 * 60 * 24))+1;
    if(gap2 <0 ){
         gap2 = "모집완료"       
    }else{
        gap2 = "D-"+gap2     
      } 
    return gap2      
  }    
  catch(e){
    console.log(e)
    return ""
  }
})


Vue.filter('array_length',function(arr){   
  try{
    return arr.length
  }
  catch(e){
    return "" 
  } 
}
)

// 타임 포맷 변경  xxxxx 초 00:00:00
Vue.filter('get_time_format',function(nbSeconds,hasHours=true){   
  try{
    var time = [],
        s = 1;
    var calc = nbSeconds;

    if (hasHours) {
        s = 3600;
        calc = calc / s;
        time.push(format(Math.floor(calc)));//hour
    }

    calc = ((calc - (time[time.length-1] || 0)) * s) / 60;
    time.push(format(Math.floor(calc)));//minute

    calc = (calc - (time[time.length-1])) * 60;
    time.push(format(Math.round(calc)));//second


    function format(n) {//it makes "0X"/"00"/"XX"
        return (("" + n) / 10).toFixed(1).replace(".", "");
    }

    //if (!hasHours) time.shift();//you can set only "min: sec"

    return time.join(":");
  }
  catch(e){
    return "" 
  }
 
}
)

// 초를 시간으로 바꿔주는 똑같은 함수
Vue.filter('seconds2time',function(seconds){   
  var hours   = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds - (hours * 3600)) / 60);
  var seconds = seconds - (hours * 3600) - (minutes * 60);
  var time = "";

  if (hours != 0) {
    time = hours+":";
  }
  if (minutes != 0 || time !== "") {
    minutes = (minutes < 10 && time !== "") ? "0"+minutes : String(minutes);
    time += minutes+":";
  }
  if (time === "") {
    time = seconds+"s";
  }
  else {
    time += (seconds < 10) ? "0"+seconds : String(seconds);
  }
  return time;
 

}
)

