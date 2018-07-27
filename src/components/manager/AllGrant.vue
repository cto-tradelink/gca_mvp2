<template>
        <div>
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
         <div id="page_title_m">
            지원사업 관리
        </div>
        <div id="write_grant"><router-link :to="'/manager/make/grant/new'">지원사업 공고문 작성</router-link></div>
        <div id="application_navi">
            <ul>
                <li v-on:click="tab_0(0)"  class="li">작성중인 공고({{data.writing_set.length}})</li>
                <li v-on:click="tab_0(1)"  class="li">승인대기({{data.waiting_set.length}}) </li>
                <li v-on:click="tab_0(2)"  class="li">공고중({{data.ing_set.length}})</li>
                <li v-on:click="tab_0(3)"  class="li">모집종료({{data.due_set.length}})</li>
                <li v-on:click="tab_0(4)"  class="li">공고종료({{data.comp_set.length}})</li> 
                <li v-on:click="tab_0(5)"  class="li navi_on">전체보기({{data.all_set.length}})</li>
                <li>|</li> 
                <li v-on:click="tab_0(6)"  class="li">블라인드({{data.blind_set.length}})</li>                
              </ul>
        </div>
        <div id="appplication_sub_navi">
            <div id="input_box"><input type="text"><i class="fas fa-search"></i></div>
            <ul>
                <!-- <li v-on:click="sort('update_date')" class="wr sort_li on">수정일순</li> -->
                
                <li v-on:click="sort('open_date')" class="sort_li on">게시일순</li>
                <li v-on:click="sort('start')" class="sort_li">모집시작일순</li>
                <li v-on:click="sort('end')"  class="sort_li">모집마감일순</li>
                <li v-on:click="sort('apply_num')"  class="ap sort_li">지원기업수 순</li>
            </ul>
        </div>
        <ApplicationManager v-for="s in show_set" :s="s" :btn="btn"></ApplicationManager>
    </div>
    </div>
</template>

<script>

import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"
import ApplicationManager from "./ApplicationManagerInManager"

Array.prototype.sort_by = function(key){
    this.sort(function(a, b){
        if(a[key] < b[key]){
            return 1;
        }else if(a[key] > b[key]){
            return -1;
        }
        return 0;
    });
}

export default {
    methods:{
        sort:function(key){
            console.log("sort")
            this.show_set.sort_by(key).reverse()
    },
        tab_0(num){
            if(num==0){
                try{
                   this.show_set = this.data.writing_set.slice()
                   this.origin_set = this.data.writing_set.slice()
                   this.btn = "계속 쓰기"
                }
                catch(e){
                    console.log(e)            
                }
            }
            if(num==1){
                try{
                   this.show_set = this.data.waiting_set.slice()
                       this.origin_set =  this.data.waiting_set.slice()
                   this.btn = "승인 대기중"
                }
                catch(e){
                    console.log(e)   
                }
            }
            if(num==2){
                try{
                   this.show_set = this.data.ing_set.slice()
                      this.origin_set =   this.data.ing_set.slice()
                   this.btn = "공고중"
                }
                catch(e){
                    console.log(e)   
                }
            }
            if(num==3){
                try{
                   this.show_set = this.data.due_set.slice()
                      this.origin_set = this.data.due_set.slice()
                   this.btn = "모집종료"
                }
                catch(e){
                    console.log(e)   
                }
            }
            if(num==4){
                try{
                   this.show_set = this.data.comp_set.slice()
                    this.origin_set = this.data.comp_set.slice()
                   this.btn = "공고종료"
                }
                catch(e){
                    console.log(e)   
                }
            }
            if(num==5){
                try{
                   this.show_set = this.data.all_set.slice()
                   this.origin_set =this.data.all_set.slice()
                   this.btn = "전체보기"
                }
                catch(e){
                    console.log(e)   
                }
            }
            if(num==6){
                try{
                   this.show_set = this.data.blind_set.slice()
                  this.origin_set= this.data.blind_set.slice()
                   this.btn = "다시 작성하기"
                }
                catch(e){
                    console.log(e)   
                }
            }
        }
    },
    data:function(){
        return {
            show_set:[""],
            origin_set:[],
            btn:"",
            data:{
                writing_set:[""],
                waiting_set:[""],
                ing_set:[""],
                due_set:[""],
                comp_set:[""],
                all_set:[""],
                blind_set:[""],
                
            }           
        }
    },
    components:{
        Header, LeftNavi,ApplicationManager,
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
            $(document).on("click",".sort_li", function(){
                $(".sort_li").removeClass("on")
                if($(this).hasClass("on")) $(this).removeClass("on")
                else{$(this).addClass("on") }
            })

            $(document).on("keyup","#input_box", function(){
                vue_obj.show_set = []
                console.log(vue_obj.origin_set)
                for(var k = 0; k < vue_obj.origin_set.length ; k++){
                    if(vue_obj.origin_set[k].title.indexOf($(this).val()) != -1){
                      
                        vue_obj.show_set.push(vue_obj.origin_set[k])

                   }
                }
            })

            $(document).on("click",".li", function(){
                $(".li").removeClass("navi_on")
                if($(this).hasClass("navi_on")) $(this).removeClass("navi_on")
                else{$(this).addClass("navi_on") }
                $(".sort_li").removeClass("on")
                $(".sort_li:eq(0)").addClass("on")                 
            })
            $("#gca_content").css("background-color","#f4f7fa")
            var data={}
            vue_obj.$http.get(`${vue_obj.baseURI}/vue_get_grant_info/`, data)
                .then((result) => {          
                  console.log(result)  
                 vue_obj.data = result.data
                 vue_obj.show_set = result.data.all_set.slice()
                 vue_obj.origin_set = result.data.all_set.slice()
                 
            })    
        })
    }
}
</script>
<style scoped>
#page_title_m{
    margin-left: 114px;
    padding-top: 44px;
    font-size: 24px;
  line-height: 1.33;
  letter-spacing: -1px;
  color: #1a2f53;
}

#application_navi{
    margin-top: 62px;
    width: 1016px;
    height: 48px;
    margin-left: 114px;
}
ul{
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
}
#application_navi>ul>li{    
    list-style: none;
    opacity: 0.7;
    font-size: 14px;
    color: #243d68;
    float: left;
    line-height: 48px;
    margin-right: 38px;
    border-bottom: 2px solid transparent; 
    cursor: pointer;
}
#application_navi>ul>li:nth-child(1){    
   margin-left:14px;
}
#application_navi>ul>.li:hover, #application_navi>ul>li.navi_on{
    font-weight: bold;
    color: #243d68;
    border-bottom: 2px solid  #1b66f4;
}

#application_navi{
   width: 1016px;
   height: 49px;
   border-bottom: 1px solid #4f5478;
}
#write_grant{
    position: absolute;
    width: 156px;
    height: 40px;
    background-color: #1b66f4;
    color: #fff;
     border-radius: 20px;
     line-height: 40px;
      font-size: 13px;
      top:160px;
      left:974px;
      text-align: center;
      cursor: pointer;
}


#appplication_sub_navi{
    width:1130px;
    margin-top: 24px;
    overflow: auto;;
    margin-bottom: 16px;
}

#appplication_sub_navi>ul{
    float: right;
    margin-top: 5px;
}

#appplication_sub_navi>ul>li{
    font-size: 12px;
    color: #a0a3bc;
    list-style: none;
    float: left;
    margin-left: 16px;
    cursor: pointer;
}
#appplication_sub_navi>ul>li.on{
    font-weight: bold;
    font-size: 12px;
     color: #1a2f53;

}


    #input_box{
        display: inline-block;
        width: 144px;
        height: 32px;
        background-color: #ffffff;
        border: solid 1px #ced4da;
        line-height:32px;
        margin-right:29px;
        margin-left:114px;
    }
    #input_box>i{
        color:#ced4da   
    }
    #input_box>input{
        width: 115px;
        border:none;
        outline: none;
    }

</style>
