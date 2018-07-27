<template>
    <div style="height:58px;">
        <div id="header_con">
        <div id="header">
            <div id="logo" ><router-link to="/"><img src="/static/img/Logo.png" alt="로고" style="width:112px;height:24px;margin-top:5px;" ></router-link></div>
            <ul>
                <router-link to="/grant"><li class="menu_top">지원사업</li></router-link>
                <router-link to="/startup_list"><li class="menu_top">스타트업</li></router-link>
                <router-link to="/channel"><li class="menu_top">채널</li></router-link>
            </ul>
            <div id="search_con">
                <!-- <input type="text" placeholder="search" v-model="keyword" @keyup.enter="searchGrant"> -->
            </div>
            <LoginContent></LoginContent>
        </div>
        </div>
        <Modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">검색어를 입력하지 않으셨습니다.
                 <i class="closeModalBtn fa fa-times" 
          aria-hidden="true" 
          @click="showModal = false">
        </i>
          </h3>
          <h4 slot="body">검색어 입력하세요.</h4>
        </Modal>        
    </div>
</template>

<script>
import LoginContent from "./LoginContent.vue" 
import Modal from './SearchModal.vue'

export default {
     components:{
         "LoginContent":LoginContent,
         Modal:Modal,
     },
     data: function(){
         return{
           keyword:"",
          showModal: false,
         }
        
     },
     methods:{
        searchGrant: function(){
            if (this.keyword !== '') {
                 
            } else {
            this.showModal = !this.showModal;
            }
        }
     },
     mounted:function(){
         $(document).ready(function(){
        
         })
     }

}
</script>



<style scoped>
#header{

    width:1224px;
    margin: 0px auto;

}
#logo{
    float: left;
    margin-top:12px;
    margin-bottom: 12px;
    width: 138px;
    height:32px;
}
ul{
    float: left;
    list-style: none;
    margin: 0px;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
    margin-left: 342px;
    margin-top: 19px;
    line-height: 19px;
}
li{
    float: left;
   margin-right:48px;
    height: 19px; 
    font-size: 17px; 
    color: #1a2f53;
    font-weight: bold;

}
li:nth-child(1){
    margin-left: 0px;
}
#header_con{
    width:100%;
    height:57px;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
}
</style>
