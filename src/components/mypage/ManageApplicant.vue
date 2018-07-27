<template>
    <div>
        <div class="page_title">
            지원내역 관리
        </div>
        <div id="application_navi">
            <ul>
                <li data-target ="wr" class="navi_on">작성중인 지원서 <span>({{writing.length}})</span></li>
                <li data-target ="submit">지원완료 <span>({{comp.length}})</span></li>
                <li data-target ="end">공고종료 <span>({{comp.length}})</span></li>
            </ul>
        </div>
        <div id="appplication_sub_navi">
            <ul>
                <li v-on:click="sort('date')" class="on">마감임박순</li>
                <li v-on:click="sort('date')" >최신순</li>
                <li>기관별</li>
            </ul>
        </div>
        <div id="application_con">
            <div id="application_int">
                <WritingApplication class="wr ap"  v-for="int in writing" :int="int"></WritingApplication>
                <CompletedApplication class="submit ap hidden" v-for="int in comp" :int="int" ></CompletedApplication>
                <CompletedApplication class="end ap hidden"  v-for="int in comp" :int="int" ></CompletedApplication>                
            </div>
        </div>
    </div>
</template>
<script>
import InterestApplication from "./InterestApplication.vue"
import WritingApplication from "./WritingApplication.vue"
import CompletedApplication from "./CompletedApplication.vue"
import { setTimeout } from 'timers';

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
            this.comp.sort_by(key)
            this.inte.sort_by(key)
            this.writing.sort_by(key)
             this.end.sort_by(key)
        }
    },
    components:{
        InterestApplication, WritingApplication,CompletedApplication
    },
    data:function(){
        return{
            comp:[],
            inte:[],
            writing:[],
            end:[]
        }
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
            
            $(document).on("click","#appplication_sub_navi>ul>li", function(){
                $("#appplication_sub_navi>ul>li").removeClass("on")
                $(this).addClass("on")
            })
            $(document).on("click","div.app_seg.inter.ap > div.text_con > div.sub > div.sub_int > i", function(){
                if(localStorage.getItem("user")=="u"){
                var result = confirm("관심목록에서 제외하시겠습니까?")
                if(result==true){
                     var data={
                            "id":localStorage.getItem("id"),
                            "val":$(this).attr("data-id")
                        }
                     $.ajax({
                        url:`${vue_obj.baseURI}/vue_add_interest_sb/`,
                        method:"POST",
                        data:data,
                        success:function(res){console.log(res)
                            if(res=="ok-add"){alert("관심 사업에 추가되었습니다.")                           
                            }else{
                                alert("관심사업에서 삭제되었습니다.")                                
                            }
                            vue_obj.$router.go()
                        },
                        error:function(e){console.log(e)
                       
                        }
                     })
                }
                }else if (localStorage.getItem("user")=="m"||localStorage.getItem(user)=="ma"){
                    alert("기관 관리자나 매니저는 관심 담기를 할수 없습니다.")
                }else{
                    alert("로그인을 진행해 주세요.")
                }
               


            })
            $(document).on("click","#application_navi>ul>li", function(){
                $("#application_navi>ul>li").removeClass("navi_on")
                $(this).addClass("navi_on")
                $(".ap").addClass("hidden");
                console.log("."+$(this).attr("data-target"))
                $("."+$(this).attr("data-target")).removeClass("hidden")
            })
            $.ajax({
                url: vue_obj.baseURI + "/get_startup_application/",
                type:"post",
                data:{"id":localStorage.getItem("id")},
                success:function(res){
                    vue_obj.comp = res.comp.slice()
                    vue_obj.inte = res.interest.slice()
                    vue_obj.writing = res.writing.slice()
                    vue_obj.end = res.comp.slice()
                   
                }
            })
        })
    }
}
</script>

<style scoped>
#appplication_sub_navi{
    width:100%;
    margin-top: 24px;
    overflow: auto;;
    margin-bottom: 16px;
}

#appplication_sub_navi>ul{
    float: right;

}

#appplication_sub_navi>ul>li{
    font-size: 10px;
    color: #a0a3bc;
    list-style: none;
    float: left;
    margin-left: 8px;
    cursor: pointer;
}
#appplication_sub_navi>ul>li.on{
    font-weight: bold;
    font-size: 10px;
     color: #1a2f53;

}


.page_title{
  /* opacity: 0.8;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.6; 
  color: #1a2f53;
  margin-top: 40px; */
}

#application_navi{
    margin-top: 30px;
    background-color: #fff;
    width: 1016px;
    height: 48px;
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
#application_navi>ul>li:hover, #application_navi>ul>li.navi_on{
     font-weight: bold;
  color: #243d68;
   border-bottom: 2px solid  #1b66f4;
}

#application_navi{
    width: 1016px;
  height: 48px;
  background-color: #ffffff;
}
</style>
