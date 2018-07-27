<template>
    <div id="dash_content">
        <div id="page_ttl">알림</div>
        <div id="dashboard_navi">
         
            <ul>
                <li class="on">
                    <div data-panel="0">승인요청 <i class="fas fa-chevron-right"></i>
                        <div class="num"></div>
                    </div>                
                </li>
                <li>
                    <div data-panel="1">공고중 <i class="fas fa-chevron-right"></i>
                        <div class="num"></div>
                    </div>                
                </li>
                <li>
                    <div data-panel="3">모집 마감된 공고 <i class="fas fa-chevron-right"></i>
                        <div class="num"></div>
                    </div>                
                </li>                
            </ul>
        </div>
        <div id="dash_seg_con">
                <table class="tbl" data-panel="0">
                    <tr class="hd_row">
                        <td>요청일</td>
                        <td>공고명</td>
                        <td>시작일</td>
                        <td>마감일</td>
                                        
                    </tr>
                    <tr v-for="sp in dashboard_list.due_set ">
                        <td>{{sp.confirm_date}}</td>
                        <td><router-link :to="'/agent/'+sp.id"><img class="img">{{sp.title}}</router-link></td>
                        <td>{{sp.start.split("T")[0]}}</td>
                        <td>{{sp.end.split("T")[0]}}</td>                                
                    </tr>
                </table>
                                
                <table class="tbl hidden" data-panel="1">
                    <tr class="hd_row">
                        <td>선정일</td>
                        <td>공고명</td>
                        <td>시작일</td>
                        <td>마감일</td>
                        <td>경쟁률</td>
                        <td>지원자수</td>
                        <td>통계</td>                        
                    </tr>
                <tr v-for="sp in dashboard_list.ing_set ">
                        <td>{{sp.pick_date}}</td>
                        <td style="cursor:pointer"><router-link :to="'/agent/'+sp.id"><img class="img">{{sp.title}}</router-link></td>
                        <td>{{sp.start.split("T")[0]}}</td>
                        <td>{{sp.end.split("T")[0]}}</td>
                        <td>{{sp.comp}}</td>
                        <td>{{sp.apply_num}}명</td>
                        <td>통계보기</td>                        
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
                <tr v-for="sp in dashboard_list.due_set ">
                        <td>{{sp.pick_date}}</td>
                        <td><router-link :to="'/agent/'+sp.id"><img class="img">{{sp.title}}</router-link></td>
                        <td>{{sp.start.split("T")[0]}}</td>
                        <td>{{sp.end.split("T")[0]}}</td>
                        <td>{{sp.comp}}</td>
                        <td>{{sp.apply_num}}명</td>
                        <td>통계보기</td>                        
                    </tr>
                </table>
                
        </div>

    </div>
</template>

<script>
export default {
    props:["dashboard_list"],
    updated:function(){
         $(".img").each(function(){
                if($(this).attr("src") == undefined){
                    $(this).remove()
                }
            })
         $(".num:eq(0)").text($(".tbl:eq(0)>tr").length-1)
         $(".num:eq(1)").text($(".tbl:eq(1)>tr").length-1)
         $(".num:eq(2)").text($(".tbl:eq(2)>tr").length-1)
        
    },
    mounted:function(){
        $(document).ready(function(){
            $("td>img").each(function(){
                console.log($(this).attr("src"))
                if($(this).attr("src") == undefined){
                    $(this).remove()
                }
            })
            $(document).on("click","ul>li", function(){
                $("ul>li").removeClass("on")
                $(this).addClass("on")
                $(".tbl").addClass("hidden")
                $(".tbl[data-panel='"+$(this).find("div").attr("data-panel")+"']").removeClass("hidden")
            })
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
