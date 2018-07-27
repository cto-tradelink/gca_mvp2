<template>
    <div id="user_account_page">
        <div id="page_ttl">유저관리</div>
        <div id="user_acc_tab">
            <ul>
                <li data-panel="0" class="on">기업회원</li>
                <li data-panel="1">사업 참여기업</li>
                <li data-panel="2">개인회원</li>
            </ul>
        </div>
        <div id="filter_panel">
        <table style="border-collapse:collapse">
            <tr>
                <td id="f_col" class="col_name" style="height:73px;">
                     <div>
                        <div></div>
                        기본장르
                    </div>
                </td>
                <td>
                    <span class="filter base" v-for="t in filter_table_item.base">{{t}}</span>
                </td>
            </tr>
            <tr>
                <td class="col_name" style="height:135px;">
                    <div>
                        <div></div>
                        영역
                    </div>                    
                </td>
                <td>
                    <ul id="f_li">
                        <li><span class="filter_ttl">창작</span> <span class="filter"  v-for="t in filter_table_item.create">{{t}}</span></li>
                        <li><span class="filter_ttl">IT 관련</span> <span class="filter" v-for="t in filter_table_item.it">{{t}}</span></li>
                        <li><span class="filter_ttl">창업</span> <span class="filter" v-for="t in filter_table_item.startup">{{t}}</span></li>
                        <li><span class="filter_ttl">제조/융합</span> <span class="filter" v-for="t in filter_table_item.manufacture">{{t}}</span></li>
                        <li><span class="filter_ttl">신규산업</span> <span class="filter" v-for="t in filter_table_item.new">{{t}}</span></li>
                        <li><span class="filter_ttl">기타</span> <span class="filter" v-for="t in filter_table_item.etc">{{t}}</span></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="col_name" style="height:183px;">
                     <div>
                        <div></div>
                        조건
                    </div>
                <td>
                 <ul id="s_li">
                        <li><span class="filter_ttl">업력</span> <span class="filter" v-for="t in filter_table_item.year">{{t}}</span></li>
                        <li><span class="filter_ttl">소재지</span> <span class="filter" v-for="t in filter_table_item.local">{{t}}</span></li>
                        <li><span class="filter_ttl">기업형태</span> <span class="filter" v-for="t in filter_table_item.kind">{{t}}</span></li>
                        <li><span class="filter_ttl" style="vertical-align:top; margin-top:25px">구성원수</span> 
                         <div style="display: inline-block; width: 454px; ">
                        <input type="text" id="range_01" name="example_name" value=""/>
                    </div>
                         </li>                      
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="col_name" style="height:100px;">
                    <div>
                        <div></div>
                        지원형태
                    </div>
                <td>
                    <span class="sp_ttl filter">자금지원</span>
                    <span class="sp_ttl filter">엑셀러레이팅 투자연계</span>
                    <span class="sp_ttl filter">교육</span>
                    <span class="sp_ttl filter">판로</span>
                    <span class="sp_ttl filter">네트워킹</span>
                    <span class="sp_ttl filter">공간지원</span>
                    <span class="sp_ttl filter">기타지원</span>
                </td>
            </tr>
        </table>
<div id="tbl_hd">
            <div id="input_box"><input id="input_text" type="text"><i class="fas fa-search"></i></div>
            <span id="select_excel">선택 다운로드</span>
            <span id="list_excel">리스트 엑셀로 내보내기</span>
            <div id="list_num_con">
                <span id="list_10" v-on:click="list(10,$event)" class="list_num hover">10개 보기</span>
                <span id="list_50" v-on:click="list(50,$event)"  class="list_num">50개 보기</span>
                <span id="list_100" v-on:click="list(100,$event)"  class="list_num">100개 보기</span>
            </div>
           
        </div>
        <div class="tbl_con" data-panel="0">
            <table id="tbl1" class="tbl">
                <thead>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>순서</td>
                        <td>기업명</td>
                        <td>계정 아이디</td>
                        <td>대표자</td>
                        <td>핸드폰 번호</td>
                        <td>메일 주소</td>
                        <td>소재지</td>
                        <td>구성원수</td>
                        <td>사업 참가 횟수</td>
                        <td>사업 선정 횟수</td>
                        <td>가입일</td>                        
                    </tr>
                </thead>
                <tbody>
                     <tr v-for="s in startup">
                        <td><input type="checkbox"></td>
                        <td>{{s.index}}</td>
                        <td>{{s.name}}</td>
                        <td>{{s.id}}</td>
                        <td>{{s.repre}}</td>
                        <td>{{s.tel}}</td>
                        <td>{{s.email}}</td>
                        <td>{{s.local}}</td>
                        <td>{{s.employ_num}}</td>
                        <td>{{s.apply_num}}</td>
                        <td>{{s.award_num}}</td>
                        <td>{{s.join.split("T")[0]}}</td>                        
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="tbl_con hidden" data-panel="1">
            <table id="tbl2" class="tbl">
                <thead>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>순서</td>
                        <td>기업명</td>
                        <td>공고 마감일</td>
                        <td>공고명</td>
                        <td>대표자</td>
                        <td>소재지</td>                     
                        <td>선정여부</td>                                   
                    </tr>
                </thead>
                <tbody>
                     <tr v-for=" s in ap_set">
                        <td><input type="checkbox"></td>
                        <td>{{s.index}}</td>
                        <td>{{s.name}}</td>
                        <td>{{s.due_date}}</td>
                        <td>{{s.title}}</td>
                        <td>{{s.repre}}</td>                      
                        <td>{{s.local}}</td>
                        <td>{{s.awarded}}</td>                     
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="tbl_con hidden" data-panel="2">
            <table id="tbl3" class="tbl">
                <thead>
                    <tr>
                        <td><input type="checkbox"></td>
                        <td>순서</td>
                        <td>회원아이디</td>
                        <td>이름</td>
                        <td>핸드폰 번호</td>
                        <td>SNS</td>
                        <td></td>
                        <td>가입일</td>                                         
                    </tr>
                </thead>
                <tbody>
                     <tr v-for="u in user_set">
                       <td><input type="checkbox"></td>
                        <td>{{u.index}}</td>
                        <td>{{u.id}}</td>
                        <td>{{u.name}}</td>
                        <td>{{u.tel}}</td>
                        <td></td>
                        <td></td>
                        <td>{{u.joined.split("T")[0]}}</td>                       
                    </tr>
                </tbody>
            </table>
             <div id="tbl_pagination" style="margin-top:37px;">
                <i id="before_list" class="fas fa-chevron-left"></i>
                    <span class="list_btn" v-for="l in list_nav" v-bind:data-num="l">{{l}}</span>
                <i id="after_list" class="fas fa-chevron-right"></i>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

var gl_num = 10;
$.extend({
    replaceTag: function (element, tagName, withDataAndEvents, deepWithDataAndEvents) {
        var newTag = $("<" + tagName + ">")[0];
        // From [Stackoverflow: Copy all Attributes](http://stackoverflow.com/a/6753486/2096729)
        $.each(element.attributes, function() {
            newTag.setAttribute(this.name, this.value);
        });
        $(element).children().clone(withDataAndEvents, deepWithDataAndEvents).appendTo(newTag);
        return newTag;
    }
})
$.fn.extend({
    replaceTag: function (tagName, withDataAndEvents, deepWithDataAndEvents) {
        // Use map to reconstruct the selector with newly created elements
        return this.map(function() {
            return jQuery.replaceTag(this, tagName, withDataAndEvents, deepWithDataAndEvents);
        })
    }
})
export default {
    methods:{
        list:function(num,e){
            $(".list_num").removeClass("hover")
            $(e.path[0]).addClass("hover")
            gl_num = num 
            this.startup = []
            this.pre_startup = []
            var target = this
            this.origin_startup.forEach(function(o){
                if( o.name.indexOf($("#input_text").val()) != -1 || 
                    o.id.indexOf($("#input_text").val()) != -1 ||
                    o.repre.indexOf($("#input_text").val()) != -1 ||
                    o.local.indexOf($("#input_text").val()) != -1 ||
                    o.email.indexOf($("#input_text").val()) != -1)
                    {target.pre_startup.push(o)}
            })
            this.startup = this.pre_startup.slice(0,num)

            this.pre_ap_set = []
            this.origin_ap_set.forEach(function(o){
                if( o.name.indexOf($("#input_text").val()) != -1 || 
                    o.title.indexOf($("#input_text").val()) != -1 ||
                    o.local.indexOf($("#input_text").val()) != -1) 
                    {console.log(o);target.pre_ap_set.push(o)}
            })
            this.ap_set = this.pre_ap_set.slice(0,num)
            
            this.pre_user_set = []
            this.origin_user_set.forEach(function(o){
                if( o.name.indexOf($("#input_text").val()) != -1 || 
                    o.id.indexOf($("#input_text").val()) != -1 ) //||
                //    o.sns.indexOf($("#input_text").val()) != -1) 
                    {console.log(o);target.pre_user_set.push(o)}
            })
            this.user_set = this.pre_user_set.slice(0,num)            
        }
    },

    data:function(){
        return{
           
            pre_ap_set:[],
            pre_startup:[],
            pre_user_set:[],
            startup:"",
            items:[
                {"name":"창업", "id":"1"},
                {"name":"스타트업", "id":"2"},
                {"name":"1년 미만 창업", "id":"3"},
            ],
            temporary:[],
            filter_table_item:{
                "base":["만화","출판","게임","애니메이션","방송","공연","광고","캐릭터","지식정보","콘텐츠 솔루션"],
                "create":["일러스트","전문디자인","디자인","콘텐츠기획"],
                "startup":["스타트업","1인기업","융합스타트업"],
                "new":["VR","AR","MCN"],
                "it":["IT","SW","ICT"],
                "manufacture":["메이커스","제조융복합","1인제조업"],
                "etc":["기획","개발","마케터"],
                "year":["3년이내","5년이내","7년이내","제한없음"],
                "local":["경기도기업","경기도 이전 예정","경기도 기업 이용기업","경기도 거주 임직원"],
                "kind":["개인사업자","법인사업자","경기도기업","MVP 보유기업","상용화 제품 보유기업"]
           },
           sel_item:["경기도","스타트업","제품"]
        }
    },
    mounted:function(){
                var data={}
                this.$http.get(`${this.baseURI}/vue_get_startup_account/`, data)
                .then((result) => {            
                    this.data = result.data
                    this.startup = result.data.startup.slice(0,10)
                    this.ap_set = result.data.ap_set.slice(0,10)
                    this.user_set = result.data.user_set.slice(0,10)
                    this.origin_startup = result.data.startup.slice(0,10)
                    this.origin_ap_set = result.data.ap_set.slice(0,10)
                    this.origin_user_set = result.data.user_set.slice(0,10)
                })            
        var vue_obj = this
        $(document).ready(function(){
                $(document).on("click", "#list_excel", function(){                    
                    var id;
                    var target 
                    $(".tbl").each(function(){
                        if( !$(this).parent().hasClass("hidden") ){
                            id = $(this).attr("id")
                            $(this).find("*[type='checkbox']").remove();
                            target = this
                        }
                    })                                                 
                    var ee = excelExport(id).parseToCSV().parseToXLS("excelexport sheet");
                    location.href = ee.getXLSDataURI();
                    $(target).find("tr").each(
                        function(){
                            $(this).find("td:eq(0)").append('<input type="checkbox">')
                        }
                    )    
                })
                $(document).off("keyup", "#input_text")
                $(document).on("keyup", "#input_text", function(){       
                    
                    console.log("shds")           
                    vue_obj.startup = []
                    vue_obj.pre_startup = []
                    var target = vue_obj
                    console.log(vue_obj)
                    console.log($("#input_text").val())
                    vue_obj.origin_startup.forEach(function(o){

                if( o.name.indexOf($("#input_text").val()) != -1 || 
                    o.id.indexOf($("#input_text").val()) != -1 ||
                    o.repre.indexOf($("#input_text").val()) != -1 ||
                    o.local.indexOf($("#input_text").val()) != -1 ||
                    o.email.indexOf($("#input_text").val()) != -1)
                    {target.pre_startup.push(o)}
            })
            vue_obj.startup = vue_obj.pre_startup.slice(0,gl_num)

            vue_obj.pre_ap_set = []
            vue_obj.origin_ap_set.forEach(function(o){
                if( o.name.indexOf($("#input_text").val()) != -1 || 
                    o.title.indexOf($("#input_text").val()) != -1 ||
                    o.local.indexOf($("#input_text").val()) != -1) 
                    {console.log(o);target.pre_ap_set.push(o)}
            })
            vue_obj.ap_set = vue_obj.pre_ap_set.slice(0,gl_num)
            
            vue_obj.pre_user_set = []
            vue_obj.origin_user_set.forEach(function(o){
                if( o.name.indexOf($("#input_text").val()) != -1 || 
                    o.id.indexOf($("#input_text").val()) != -1 ) //||
                //    o.sns.indexOf($("#input_text").val()) != -1) 
                    {console.log(o);target.pre_user_set.push(o)}
            })
            vue_obj.user_set = vue_obj.pre_user_set.slice(0,gl_num)
                })
               var values = ["제한없음"]
                            for (var k = 1; k < 100; k++) {
                                values.push(k + "명 이하")
                            }
                            values.push("100명 이상")
                    $("#range_01").ionRangeSlider({
                                values: values,
                                type: "single",
                                min: 0,
                                max: 100,
                                from:0,
                                onFinish:
                                    function (data) {
                                        $("#range_01").val(data.from)
                                    },
                            });
                $(document).on("click","#user_acc_tab>ul>li", function(){
                    $("#user_acc_tab>ul>li").removeClass("on")
                    $(this).addClass("on")
                    if($(this).attr("data-panel")=="2"){
                        $("#filter_panel>table").addClass("hidden")
                    }
                    else{
                           $("#filter_panel>table").removeClass("hidden")
                    }
                    $(".tbl_con").addClass("hidden")
                    $(".tbl_con[data-panel='"+$(this).attr("data-panel")+"']").removeClass("hidden")
                })
                $(document).off("click", ".filter")
                $(document).on("click", ".filter", function(){
                    console.log(this)
                     if ( $(this).hasClass("hover") ) $(this).removeClass("hover")
                    else{ $(this).addClass("hover") }
                    //클릭해 놓은 모든 필터 리스트
                    var filter_list = []

                    $(".filter").each(function(){
                        if($(this).hasClass("hover")){
                            filter_list.push($(this).text())
                        }
                    })                 
                   
                   
                    vue_obj.pre_startup=[]
                    for(var k=0; k < vue_obj.origin_startup.length ; k++){
                        var dal = filter_list.length;
                        var h=0
                        console.log(vue_obj.origin_startup[k])
                        for(var j=0; j < filter_list.length; j++){
                            if(vue_obj.origin_startup[k].tag.indexOf(filter_list[j]) != -1) 
                            { h= h+1 }
                        }
                        if(dal === h){
                            vue_obj.pre_startup.push(vue_obj.origin_startup[k])
                        }
                    }                    
                    vue_obj.startup = vue_obj.pre_startup.slice(0,gl_num)
                   
                    vue_obj.pre_ap_set=[]
                    for(var k=0; k < vue_obj.origin_ap_set.length ; k++){
                        var dal = filter_list.length;
                        var h=0
                        for(var j=0; j < filter_list.length; j++){
                            if(vue_obj.origin_ap_set[k].tag.indexOf(filter_list[j]) != -1) 
                            { h= h+1 }
                        }
                        if(dal === h){
                            vue_obj.pre_ap_set.push(vue_obj.origin_ap_set[k])
                        }
                    }                    
                    vue_obj.ap_set = vue_obj.pre_ap_set.slice(0,gl_num)


                })
        })
    }
    
}
</script>


<style scoped>
.filter.hover{
    font-weight: bold!important;
}

#user_acc_tab{
    margin-top: 47px;
}
#page_ttl{
     font-size: 24px;
  color: #1a2f53;
  padding-top: 32px;
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
    .list_num:hover, .list_num.hover{
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
        width:1176px;
        margin-left:3px;
    }
    .tbl{
        border-collapse: collapse;  
        width:1176px;
        margin-left: 3px;
    }
    .tbl>tbody>tr>td{
        font-size: 12px;
        color: #1a2f53;
        height: 54px;
        line-height: 54px;
    }
    thead>tr>td{
        border-top:1px solid #4f5478;
        border-bottom : 1px solid #4f5478;
        font-size: 14px;
        letter-spacing: normal;
        color: #1a2f53;
        height:40px;
    }

    #user_account_page{
        margin-left:94px;
    }
    #user_acc_tab{
        width: 1224px;
        overflow:auto;
        border-bottom: 1px solid #afafaf;
    }
    #user_acc_tab>ul>li{
        float: left;
        display: block;
        margin-right: 48px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        opacity: 0.5;
        color: #1a2f53;
    }
    #user_acc_tab>ul>li.on, #user_acc_tab>ul>li:hover{
        border-bottom: 2px solid #1b66f4!important;
        opacity: 1;
        color: #1a2f53;
    }    
#filter_setting{
    background-color: #f6f6f6;
}

#f_li>li{
    float: left;
    width: 517px;
    line-height: 45px;
    height: 45px;;
}


#filter_popup{
    width:100%;
    background-color: rgba(31, 56, 104, 0.94);
    position: absolute;
    z-index: 9999;

}
#filter_panel{
    width:1184px;
    background-color: #ffffff;
    margin-top: 32px;
    padding: 20px;
}
#f_col{
    width: 104px;
}
.col_name{
    font-size: 20px;
    font-weight: normal;
    color: #1a2f53;
    
}
.filter{
    height: 24px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: normal;
    margin-right: 32px;
    color: #4f5478;
}
tr>td{
    border-bottom:1px solid rgba(206, 212, 218, 0.5);
}
.filter_ttl{
    width:81px;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    color: #4f5478;
}
.filter_on{
    color: #ea8ab3!important;
}
.col_name>div>div{
    width: 21px;
    height: 4px;
    background-color: #28aeff;
    margin-bottom: 5px;
}
.sp_ttl{
    opacity: 0.9; 
    font-size: 13px;
    font-weight: normal;
    color: #4f5478;
    margin-right: 42px;
}
#s_li{
    line-height: 33px;   
}
#s_li>li{
    width:800px
}
.filter{
    cursor: pointer;
}
.filter_conf{
     border-radius: 30px;
  background-color: #ea8ab3;
  color: #fff;
  padding: 6px 13px;;
  font-size: 14px;
  margin-top: 17px;
  margin-right: 15px;
}
.filter_res{
        border-radius: 30px;
  background-color: #fff;
  color: #1a2f53;
  padding: 6px 13px;;
  font-size: 14px;
  margin-top: 17px;
  margin-right: 15px;
}


#save_btn{
    display: inline-block;
    text-align: center;
    width: 86px;
    color: #f7fcff;
     background-color:rgba(27,182,244,0.87) ;
     border-radius: 30px;
     margin-right: 10px;
     height: 32px;
     line-height: 32px;
      font-size: 12px;
      cursor: pointer;
}


#filter_add_btn{
    display: inline-block;
    text-align: center;
    width: 86px;
    color: #f7fcff;
     background-color:rgba(27,102,244,0.87) ;
     border-radius: 30px;
     margin-right: 10px;
     height: 32px;
     line-height: 32px;
      font-size: 12px;
      margin-top: 17px;
      cursor: pointer;
}

#filter_list>div{
    float: right;
    margin-top: 17px;
}
#filter_result>div{
    float: right;
}
.top_tag_con{
    width:1070px;
    display: block;
    float: left;
}

   .base{
          color: #1a2f53;
    }
    .list_btn{
        cursor: pointer;
        font-size: 15px; 
        color: #7697ab;
        margin: 8px;
    }
</style>
