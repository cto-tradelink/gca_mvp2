<template>
        <div>
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <div id="page_con">
            <div id="brd_cum"> <span class="op">지원사업 관리  > 공고중 > </span> <span style="color: #1a2f53;">{{grant[0].fields.title}}</span> </div>
            <div id="grant_title">{{grant[0].fields.title}}</div>
            <div id="due">{{grant[0].fields.apply_start.split("T")[0]}}~  {{grant[0].fields.apply_end.split("T")[0]}} 까지<i class="fas fa-share-square"></i></div>
            <div id="sub"> <span style="color:#ea8ab3">지원기업수</span>&nbsp;<span style="color:#243d68">{{ap}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-eye"></i>
            &nbsp;
            <span style="color:#243d68">{{view}}</span>  </div>
            <div id="sub2">
              <i class="fas fa-fire"></i> {{comp}}  &nbsp;&nbsp;<i class="fas fa-clock"></i><span style="font-family:Rubik;color: #28aeff;">
                  {{grant[0].fields.apply_start.split("T")[0] , grant[0].fields.apply_end.split("T")[0]  | d_day_calc_short }}
                  </span>
            </div>
            <div id="hr" style="overflow:auto">
                 <div id="export">공고문 내보내기 PDF</div>
                <div id="show_static"  style="cursor:pointer">통계보기<i class="fas fa-chart-pie"></i></div>
            </div>
            <div id="nav">
                <ul>
                    <li data-panel="0" style="color:#243d68">지원기업 리스트</li>
                    <li data-panel="1" style="color:#243d68; font-weight:normal">관심 유저 리스트</li>
                    <li data-panel="2" style="color:#243d68; opacity:0.5">선정자 리스트</li>
                </ul>
            </div>

            <div id="tbl_hd" style="margin-left:54px;">
            <div id="input_box"><input type="text"><i class="fas fa-search"></i></div>
           
            <span id="list_excel">리스트 엑셀로 내보내기</span>
            <div id="list_num_con">
                <span id="list_10" class="list_num">10개 보기</span>
                <span id="list_50" class="list_num">50개 보기</span>
                <span id="list_100" class="list_num">100개 보기</span>
                </div>           
            </div>

            <div class="tbl_con " data-panel="0" style="margin-left:54px;">
            <table id="app" class="tbl">
                <thead>
                    <tr style=" background-color: #f2f5f7;">
                        <td><input class="index" type="checkbox"></td>
                        <td>순서</td>
                        <td>기업명</td>
                        <td>업종</td>
                        <td>대표자명</td>
                        <td>사업자등록번호</td>
                        <td>연락처</td>
                        <td>제출일</td>
                        <td>전체 지원서류</td>
                    </tr>
                </thead>
                <tbody>
                     <tr v-for="ap in app_list" >
                        <td><input :data-id="ap.id" type="checkbox"></td>
                        <td>{{ap.index}}</td>
                        <td>{{ap.name}}</td>
                        <td>{{ap.kind}}</td>
                        <td>{{ap.repre_name}}</td>
                        <td>{{ap.business_number}}</td>
                        <td>{{ap.repre_tel}}</td>
                        <td>{{ap.submit_day}}</td>
                        <td>지원서류</td>                  
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="tbl_con hidden" data-panel="1"  style="margin-left:54px;">
            <table class="tbl">
                <thead>
                    <tr style=" background-color: #f2f5f7;">
                        <td>순서</td>
                        <td>기업명</td>
                        <td>업종</td>
                        <td>대표자명</td>
                        <td>회원 아이디</td>
                        <td>연락처</td>
                        <td>메일주소</td>                      
                    </tr>
                </thead>
                <tbody>
                     <!-- <tr>
                        <td>순서</td>
                        <td>기업명</td>
                        <td>업종</td>
                        <td>대표자명</td>
                        <td>사업자등록번호</td>
                        <td>연락처</td>
                        <td>제출일</td>                                
                    </tr> -->
                </tbody>
            </table>
        </div>

        <div class="tbl_con hidden" data-panel="2"  style="margin-left:54px;">
            <table class="tbl">
                <thead>
                    <tr style=" background-color: #f2f5f7;">                    
                        <td>순서</td>
                        <td>기업명</td>
                        <td>업종</td>
                        <td>대표자명</td>
                        <td>사업자등록번호</td>
                        <td>연락처</td>
                        <td>제출일</td>                       
                    </tr>
                </thead>
                <tbody>
                     <tr v-for="w in  win_list">
                        <td>{{w.index}}</td>
                        <td>{{w.name}}</td>
                        <td>{{w.kind}}</td>
                        <td>{{w.repre_name}}</td>
                        <td>{{w.business_number}}</td>
                        <td>{{w.repre_tel}}</td>
                        <td>{{w.submit_day}}</td>
                        </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>

    <div  v-if="is_due" id="bottom_control" style="width:100%; z-index:9999; height:56px;position:fixed; bottom:0px;; background-color: #ced4da;margin-top:254px;" >
        <div style="width:1224px; margin:0px auto; height:56px;">
            <div id="apply_cancel" v-on:click="apply_cancel" style="  width: 119px;  height: 56px;  opacity: 0.7; font-size: 16px; font-weight: bold;  background-color: #4f5478;text-align:center; lien-height:56px;color:#fff; float:left;line-height:56px;">취소</div>
            <div id="apply_next" v-on:click="submit" style="  width: 231px; height: 56px;  opacity:1; font-size: 16px; font-weight: bold;  background-color: #1b49f4;text-align:center; lien-height:56px;color:#fff; float:right;line-height:56px;">선택완료</div>
        </div>
    </div>

    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"

export default {
    computed:{
        is_due:function(){
            var date = this.grant[0].fields.apply_end.split('T')[0]
            var year = date.split("-")[0]
            var month = date.split("-")[1]
            var day = date.split("-")[2]
            var then = new Date(year+"-"+month+"-"+day)
            var now = new Date()
        if (now.getTime() > then.getTime() ){

        return true
        }  
    else{
        return false
  }
        }
    },
    components:{
        Header, LeftNavi, 
    },
    data:function(){
           return{
                grant:[],
                comp:"",
                int:"",
                view:"",
                app_list:[],
                win_list:[],
           }
    },
         beforeRouteLeave (to, from, next) {
        if(confirm("페이지를 벗어나시겠습니까?")){
            next()
        }
  },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
            $(document).off("click","#show_static")
            $(document).on("click","#show_static", function(){
                location.href = ("/manager/statics/by_grant/"+vue_obj.$route.params.id)
            })  
            $(document).on("click", "#apply_next", function(){
                var check_list = []
                vue_obj.win_list = [] 
                console.log( $("input:checked").length)
                for(var k = 0 ; k< $("input:checked").length; k++){
                    for(var j=0; j < vue_obj.app_list.length; j++){
                        console.log($("input:checked").eq(k).attr("data-id") )
                        if(  $("input:checked").eq(k).attr("data-id") == vue_obj.app_list[j].id  ){
                            vue_obj.win_list.push(vue_obj.app_list[j])
                        }
                    }
                }
            })  

            $(document).on("click","#nav>ul>li", function(){
                $("#nav>ul>li").removeClass("hover")
                $(this).addClass("hover")
                $(".tbl_con").addClass("hidden")
                var target = $(this).attr("data-panel")
                $( ".tbl_con[data-panel='"+target+"']" ).removeClass("hidden")
            })

             $(document).on("click", "#list_excel", function(){                    
                    var id;
                    var target ;
                    id = $(".tbl_con").not(".hidden").find("table").attr("id")
                    var ee = excelExport(id).parseToCSV().parseToXLS("excelexport sheet");
                    location.href = ee.getXLSDataURI();
                })

            vue_obj.$http.get(`${vue_obj.baseURI}/vue_get_grant_appliance/?gr=`+vue_obj.$route.params.id)
            .then((result) => {            
                   console.log(result)
                   vue_obj.app_list = result.data
            })


            $("#gca_content").css("background-color","#fff")
            $.ajax({
                url: vue_obj.baseURI + "/vue_get_grant_detail?id="+vue_obj.$route.params.id,
                type:"get",
                success:function(re){
                    console.log(re)
                    console.log(eval(re.result))
                    vue_obj.grant = eval(re.result)
                    vue_obj.comp = (re.comp)
                    vue_obj.int =  (re.int)
                    vue_obj.view = (re.view)
                    vue_obj.ap = (re.ap)
                }
            }) 
        })
    }
    
}
</script>
<style scoped>
#apply_cancel, #apply_save, #apply_next, #apply_prev{
    cursor: pointer;
}

#nav{
    width:1224px;
    border-bottom:1px solid #4f5478;
    height:30px;
    margin-left:53px;
}
#nav>ul>li{
    float: left;
    display:inline-block;
    border-bottom:2px solid transparent;
    padding-bottom: 8px;
    margin-right:32px;
    font-size: 14px;
    cursor:pointer;
}
#nav>ul>li:hover, #nav>ul>li.hover{
    float: left;
    display:inline-block;
    border-bottom:2px solid #f54b94;
}

#export{
    width: 152px;
    height: 29px;
    background-color: #ffffff;
    border: solid 1px #1b66f4;
    font-size: 13px; 
    color: #1b66f4;
    text-align: center;
    line-height: 29px;
    margin-left: 8px;
    float: right;
    margin-top:16px;
}
#show_static{
     width: 119px;
  height: 29px;
  background-color: #ffffff;
  border: solid 1px #1b66f4;
  text-align: center;
  line-height: 29px;
   color: #1b66f4;
    float: right;
    margin-top:16px;
}

 #page_con{
     width:100%;
     margin-left:64px;
     position: relative;
 }
 #brd_cum{
    font-size: 12px;
    color: #1a2f53;
    padding-top:25px;
    margin-left:52px;
 }
 .op{
opacity: 0.5;
 }
#grant_title{
    position: absolute;
    font-size: 32px;
    color: #243d68;
    left:52px;
    top:82px;
}
#due{
    position: absolute;
    font-size: 32px;
    color: #243d68;
    left:52px;
    top:130px;
    font-size: 14px;
  font-weight: bold; 
  color: #2256b8;
}
#sub{
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    top:143px;left:971px;
}
#sub2{
    font-size: 24px;
    color: #243d68;
    font-family: Rubik;
    position: absolute;
    top:141px;
    left:1115px;
}
#hr{
    width: 1224px;
   
    border-top:1px solid #ced4da;
    margin-top: 150px;
    margin-left:54px;
}

#tbl_hd{
    margin-top:25px;
}

.tbl_con{
    margin-top: 16px;
}
    .list_num{
        display: inline-block;
        margin-top:17px;
        margin-left:18px;
        cursor: pointer;
    }
    .list_num:hover{
        font-weight: bold!important;
        color: #243d68!important;
    }

    #list_num_con{
        float: right;
        font-size: 12px;
        color: #243d68;
        height:34px;
    }

    #select_excel,#list_excel {
        display: inline-block;
        font-size: 12px;
        color: #1b66f4;
        vertical-align: bottom;
        margin-right:16px;
        cursor: pointer;
    }


    #input_box{
        display: inline-block;
        width: 144px;
        height: 32px;
        background-color: #ffffff;
        border: solid 1px #ced4da;
        line-height:32px;
        margin-right:29px;
    }
    #input_box>i{
        color:#ced4da   
    }
    #input_box>input{
        width: 115px;
        border:none;
        outline: none;
    }
    .tbl_con{

    }

    #tbl_hd{
        width:1224px;
        margin-left:3px;
    }
    .tbl{
        border-collapse: collapse;  
        width:1224px;
        margin-left: 3px;
    }
    .tbl>tbody>tr>td{
        font-size: 12px;
        color: #1a2f53;
        height: 54px;
        line-height: 54px;
    }
    thead>tr>td{
        font-size: 14px;
        letter-spacing: normal;
        color: #1a2f53;
        height:40px;
    }
</style>