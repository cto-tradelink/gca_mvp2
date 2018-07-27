<template>
    <div id="dash_content">
        <div id="page_ttl">알림</div>
        <div id="dashboard_navi">
            <ul>
                <li class="on">
                    <div data-panel="0">모집마감 <i class="fas fa-chevron-right"></i>
                        <div class="num">{{dashboard_list.due_set.length}}</div>
                    </div>                
                </li>
                <li>
                    <div data-panel="1">블라인드 받음 <i class="fas fa-chevron-right"></i>
                        <div class="num">{{dashboard_list.blind_set.length}}</div>
                    </div>                
                </li>
                <li>
                    <div data-panel="2">작성중인 공고 <i class="fas fa-chevron-right"></i>
                        <div class="num">{{dashboard_list.writing_set .length}}</div>
                    </div>                
                </li>
                <li>
                    <div data-panel="3">공고중 <i class="fas fa-chevron-right"></i>
                        <div class="num">{{dashboard_list.ing_set.length}}</div>
                    </div>                
                </li>
            </ul>
        </div>
        <div id="dash_seg_con">
                <table class="tbl" data-panel="0">
                    <tr class="hd_row">
                        <td>선정일</td>
                        <td>공고명</td>
                        <td>시작일</td>
                        <td>마감일</td>
                        <td>경쟁률</td>
                        <td>지원자수</td>
                        <td>통계</td>                        
                    </tr>
                    <tr style="cursor:pointer" v-for="sp in dashboard_list.due_set ">
                        <td v-on:click="go_detail(sp.id)" >{{sp.pick_date}}</td>
                        <td v-on:click="go_detail(sp.id)" ><img class="img">{{sp.title}}</td>
                        <td v-on:click="go_detail(sp.id)" >{{sp.start.split("T")[0]}}</td>
                        <td v-on:click="go_detail(sp.id)" >{{sp.end.split("T")[0]}}</td>       
                         <td v-on:click="go_detail(sp.id)" >{{sp.comp}}</td>
                        <td v-on:click="go_detail(sp.id)" >{{sp.apply_num}}명</td>             
                        <td><router-link :to="'/manager/statics/by_grant/'+sp.id">통계보기</router-link></td>                        
                    </tr>
                </table>
                <table class="tbl hidden" data-panel="1">
                    <tr class="hd_row">
                        <td>승인 요청일</td>
                        <td>공고명</td>
                        <td>시작일</td>
                        <td>마감일</td>
                        <td>경쟁률</td>
                        <td>지원자수</td>
                        <td>통계</td>                        
                    </tr>
                  <tr style="cursor:pointer" v-for="sp in dashboard_list.blind_set ">
                        <td v-on:click="go_write(sp.id)" >{{sp.up_data}}</td>
                        <td v-on:click="go_write(sp.id)" ><img class="img">{{sp.title}}</td>
                        <td v-on:click="go_write(sp.id)" >{{sp.start.split("T")[0]}}</td>
                        <td v-on:click="go_write(sp.id)" >{{sp.end.split("T")[0]}}</td>
                        <td v-on:click="go_write(sp.id)" >{{sp.comp}}</td>
                        <td v-on:click="go_write(sp.id)" >{{sp.apply_num}}명</td>
                        <td><router-link :to="'/manager/make/grant/'+sp.id">수정하기</router-link></td>                        
                    </tr>
                </table>
                <table class="tbl hidden" data-panel="2">
                    <tr class="hd_row">
                        <td>선정일</td>
                        <td>공고명</td>
                        <td>시작일</td>
                        <td>마감일</td>
                        <td>경쟁률</td>
                        <td>지원자수</td>
                        <td>통계</td>                        
                    </tr>
                    <tr  style="cursor:pointer" v-for="sp in dashboard_list.writing_set ">
                        <td  v-on:click="go_write(sp.id)" >{{sp.pick_date}}</td>
                        <td  v-on:click="go_write(sp.id)" ><img class="img">{{sp.title}}</td>
                        <td  v-on:click="go_write(sp.id)" >{{sp.start.split("T")[0]}}</td>
                        <td  v-on:click="go_write(sp.id)" >{{sp.end.split("T")[0]}}</td>
                        <td  v-on:click="go_write(sp.id)" >{{sp.comp}}</td>
                        <td  v-on:click="go_write(sp.id)" >{{sp.apply_num}}명</td>
                        <td></td>                        
                    </tr>
                </table>
                <table class="tbl hidden" data-panel="3">
                    <tr class="hd_row">
                        <td>선정일</td>
                        <td>공고명</td>
                        <td>시작일</td>
                        <td>마감일</td>
                        <td>경쟁률</td>
                        <td>지원자수</td>
                        <td>통계</td>                        
                    </tr>
                <tr style="cursor:pointer" v-for="sp in dashboard_list.ing_set ">
                        <td  v-on:click="go_detail(sp.id)" >{{sp.pick_date}}</td>
                        <td  v-on:click="go_detail(sp.id)" ><img class="img">{{sp.title}}</td>
                        <td  v-on:click="go_detail(sp.id)" >{{sp.start.split("T")[0]}}</td>
                        <td  v-on:click="go_detail(sp.id)" >{{sp.end.split("T")[0]}}</td>
                        <td  v-on:click="go_detail(sp.id)" >{{sp.comp}}</td>
                        <td  v-on:click="go_detail(sp.id)" >{{sp.apply_num}}명</td>
                        <td><router-link :to="'/manager/statics/by_grant/'+sp.id">통계보기</router-link></td>                        
                    </tr>
                </table>
                
        </div>

    </div>
</template>

<script>
export default {
    methods:{
        go_detail:function(id){
            this.$router.push('/manager/grant/'+id)
        }, 
        go_write:function(id){
             this.$router.push('/manager/make/grant/'+id)
        }
    },
    props:["dashboard_list"],
    mounted:function(){
        $(document).ready(function(){
                $("td>img").each(function(){
                    if( $(this).attr("src")==undefined ){$(this).remove()}
                })

            $(document).on("click","ul>li", function(){
                $("ul>li").removeClass("on")
                $(this).addClass("on")
                $(".tbl").addClass("hidden")
                $(".tbl[data-panel='"+$(this).find("div").attr("data-panel")+"']").removeClass("hidden")
            })
        })
    },
    updated:function(){
         $("td>img").each(function(){
                    if( $(this).attr("src")==undefined ){$(this).remove()}
                })
    }
}
</script>

<style  scoped>
.hd_row>td{
  font-size: 14px;
  font-weight: bold;
  color: #243d68!important;
  border-bottom: 1px solid #1a2f53!important;
  
}

.num{
     font-family: Rubik;
  font-size: 30px;
  font-weight: 300;
  color: #4f5478;
  position: absolute;
  top:41px;
  right:8px;
}
#page_ttl{
    font-size: 24px;
  line-height: 1.33;
  color: #1a2f53;
}


.img{
    width: 40px;
    height: 40px;
    border-radius: 6px;
    margin-right: 16px;
    margin-top: 16px;
    float: left;
}
ul>li{
    display: block;
    float: left;
    width:192px;
    cursor: pointer;
    border-right:1px solid #ced4da;
    border-bottom: 4px solid transparent;
    }

ul>li.on{
border-bottom: 4px solid  #1b66f4;;
}

ul>li>div{
    padding-right: 8px;
    padding-top: 10px;
    padding-left: 24px;
    padding-bottom: 3px;
    height: 71px;;
    position: relative;
}
    .tbl{
        width: 1192px;
        margin-left: 16px;
        border-collapse: collapse;
    }
     .tbl>tr>td:nth-child(1){
         padding-left: 8px;
     }
    .tbl>tr>td{
        height: 72px; 
        line-height: 72px;
        border-bottom:1px solid #ced4da;
        font-size: 14px;
        color: #1a2f53;
    }
     .tbl>tr>td:nth-child(7){
        color: #1b66f4;
     }

    #dash_seg_con{
        width: 1224px;
        background-color: #ffffff;
    }
    #dash_content{
        margin-left: 64px;
         background-color: #fff;
        padding-top:40px;
        padding-left: 52px;
    }
    #dashboard_navi{
        width: 1224px;
        height: 80px;
        background-color: #fff;
        margin-top: 40px;
    }
    #dash_content{
        background-color: #f4f7fa;
    }
</style>
