<template>
    <div id="base_info" style="padding-bottom:200px;">
        <div id="case_con">
            <div id="base_title">사업분야</div>
            <div id="wr_con_1">
                <table>
                    <tr>
                        <td>키워드 입력</td>
                        <td><input id="tag_input" class="input_normal" v-on:change="make_hash_string($event)" v-model="startup.keyword" type="text" placeholder="회사 서비스의 키워드를 입력하세요" value="#"> </td>
                    </tr>             
                </table>
            </div>
            <div id="wr_con_2">
                <div class="seg_title">분야 선택</div>                
                <table style="border-collapse:collapse">
            <tr>
                <td id="f_col" class="col_name" style="height:50px;">
                     <div>
                        <div></div>
                        기본장르
                    </div>
                </td>
                <td id="base" style="min-height:80px;">
                  
                </td>
            </tr>
            <tr>
                <td class="col_name" style="height:50px;">
                    <div>
                        <div></div>
                        특수장르
                    </div>                    
                </td>
                <td id="special">
                    
                </td>
            </tr>           
            
        </table>
            <div style="width:968px; height:1px; border-bottom:1px solid #e7edfc"></div>
            <div  id="add_genre">추가하기</div>

            </div>
            <div id="wr_con_3">
                <table>
                    <tr>
                        <td style="opacity:0.8; font-size:17px; color:#1a2f53">사업(서비스) 카테고리</td>
                        <td><input type="text" v-model="startup.service_category" class="input_normal" placeholder="입력하세요" style="margin-bottom:16px;"></td>
                    </tr>
                    <tr>
                        <td style="opacity:0.8; font-size:17px; color:#1a2f53">사업(서비스) 명</td>
                        <td><input type="text" v-model="startup.service_name"  class="input_normal" style="margin-bottom:16px;"></td>
                    </tr>
                    <tr>
                        <td style="  opacity:0.8; font-size:17px; color:#1a2f53; vertical-align: top; padding-top: 17px;">사업(서비스) 소개<br>
                            <span class="text_num">최대 1000자 내외</span>
                        </td>
                        <td><textarea  v-model="startup.service_intro" placeholder="회사 소개글을 입력하세요." ></textarea></td>
                    </tr>
                </table>
            </div>

        </div>
       <div id="filter_popup" style="width:936px;position:fixed; top:200px; left:50%; margin-left:-468px;background-color:#fff">    
        <div id="filter_panel">
            <div id="filter_panel_hd" style="width:100%; height:40px;line-height:40px; background-color: #e7edfc;">
                <span style="display:inline-block;line-height:40px;margin-left:16px;font-size:12px;">필터선택</span></div>
        <table style="border-collapse:collapse; width:890px">
            <tr>
                <td id="f_col" class="col_name" style="height:121px;">
                     <div>
                        <div></div>
                        기본장르
                    </div><br>                
                    <span class="filter" v-for="t in filter_table_item.base">{{t}}</span>
                </td>
            </tr>
            <tr>
                <td class="col_name" style="height:135px;">
                    <div>
                        <div></div>
                        영역
                    </div>                                 
                    <ul id="f_li">
                        <li><span class="filter_ttl">창작</span> <span class="filter"  v-for="t in filter_table_item.create">{{t}}</span></li>
                        <li><span class="filter_ttl">IT 관련</span> <span class="filter" v-for="t in filter_table_item.it">{{t}}</span></li>
                        <li><span class="filter_ttl">창업</span> <span class="filter" v-for="t in filter_table_item.startup">{{t}}</span></li>
                        <li><span class="filter_ttl">제조/융합</span> <span class="filter" v-for="t in filter_table_item.manufacture">{{t}}</span></li>
                        <li  style="clear:left"><span class="filter_ttl">신규산업</span> <span class="filter" v-for="t in filter_table_item.new">{{t}}</span></li>
                        <li><span class="filter_ttl">기타</span> <span class="filter" v-for="t in filter_table_item.etc">{{t}}</span></li>
                    </ul>
                </td>
            </tr>
        </table>
        </div>
    </div> 
    </div>
</template>

<script>
import  * as utils  from "../utils/utils"

export default {
    props:["startup"],
      beforeRouteLeave (to, from, next) {
        if(confirm("페이지를 벗어나시겠습니까?")){
            next()
        }
  },
    data:function(){
        return{
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
            }
        }
    },
    methods:{
       make_hash_string:function(e){
            utils.make_hash_string(e)
       },
      
    },
    
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){

              $(document).on("keyup","#tag_input", function(){
                
            })


              vue_obj.$http.get(`${vue_obj.baseURI}/vue_get_application/?id=`+localStorage.getItem("id")+`&gr=`+vue_obj.$route.params.id)
            .then((result) => {            
                   console.log(result)
                   vue_obj.$props.startup = result.data
                for(var k =0 ; k < vue_obj.$props.startup.tag.length; k++ ){
                    $(".filter:contains("+vue_obj.$props.startup.tag[k]+")").addClass("on")
                }
            })
                $(document).off("click",".filter")
                $(document).on("click",".filter",function(){                               
                    if($(this).hasClass("on")){                     
                        $(this).removeClass("on")
                    }else{
                        $(this).addClass("on")
                    }                    
                })

            $(document).off("click","#apply_save" )            
            $(document).on("click","#apply_save", function(){
                  for(var k =0; k < $(".filter.on").length; k++){
                        vue_obj.$props.startup.tag.push($(".filter.on:eq("+k+")").text())
                    }// 태그 리스트 회사 정보에 저장
                    var formData = new FormData();
                formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                })
                alert("저장되었습니다.")          
            })

                $(document).off("click","#apply_next")
                $(document).on("click","#apply_next", function () {
                var result = confirm("해당 정보를 토대로 기업 정보를 업데이트 하시겠습니까?")
                 for(var k =0; k < $(".filter.on").length; k++){
                        vue_obj.$props.startup.tag.push($(".filter.on:eq("+k+")").text())
                    }// 태그 리스트 회사 정보에 저장
                 if(result == true){
                      var formData = new FormData();
                        formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                        vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_startup_with_application_2/`,formData)
                        .then((result) => {            
                            console.log(result)
                        })
                }                
                var formData = new FormData();
                formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                })               
                vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/startup_info")
                })
                $(document).off("click","#apply_prev")
                $(document).on("click","#apply_prev", function () {
                       var result = confirm("해당 정보를 토대로 기업 정보를 업데이트 하시겠습니까?")
                      if(result == true){
                     var formData = new FormData();
                        formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                        vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_startup_with_application_2/`, formData)
                        .then((result) => {
                            console.log(result)
                        })
                    }
                    else{
                    } 

                     var formData = new FormData();
                formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                })

                vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/base_info")
                })
                     
        

        })
    }
}
</script>

<style scoped>
#f_col{
    width: 104px;
}
.col_name{
    font-size: 14px;
    font-weight: normal;
    color: #1a2a53;
    
}
.filter{
    height: 24px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: normal;
    margin-right: 6px;
    background-color: #ffffff;
    padding:13px 27px;; 
    border-radius: 40px;
}
.filter{
    display: inline-block;
}

.filter_ttl{
    width:81px;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
}
.filter_on{
    color: #ea8ab3!important;
}

.col_name>div>div{
    width: 8px;
    height: 8px;
    background-color: #1b66f4;
    display: inline-block;
    border-radius: 10px;
    margin-bottom: 2px;
    margin-right: 8px;
}

.sp_ttl{
    opacity: 0.9; 
    font-size: 13px;
    font-weight: normal;
    color: #f9fcff;
    margin-right: 42px;
}
#s_li{
    line-height: 28px;
    height:28px;
}
#f_li>li{
    float: left;    
    line-height: 60px;
    height: 60px;;
}
#s_li>li{
   
    line-height: 60px;
    height: 60px;; 
}
#filter_seg{
    width: 936px;
    height: 766px;
    background-color: #ffffff;
}
.col_name>div>div{
    width: 8px;
    height: 8px;
    background-color: #1b66f4;
    display: inline-block;
    border-radius: 10px;
    margin-bottom: 2px;
    margin-right: 8px;
}

#filter_hd{
    width: 936px;
    height: 40px;
    background-color: #e7edfc;
}



#wr_con_3>table>tr>td{

}
#add_genre{
     width: 100px;
  height: 40px;
  border-radius: 28px;
   background-color: #ffffff;
   font-size: 14px;
  font-weight: bold;
 
  letter-spacing: -0.1px;
  text-align: center;
  color: #1b49f4;
  border:1px solid #1b49f4;
  line-height: 40px;
  cursor: pointer;
  margin-top:16px
}

table{
    border-collapse: collapse;
}
textarea{
    font-size: 14px;
    line-height: 1.71;
    color: #1a2f53;
    padding: 16px;
    width: 944px;
    height: 94px;
    border: solid 1px #ced4da
}
.text_num{
    font-size: 14px;
    line-height: 1.71;
    color: #a0a3bc;
    margin-top: 2px;
}

tr>td:nth-child(1){
    font-size: 16px;  
    color: #1a2f53;
}
#wr_con_3{
     width: 1144px;
  min-height: 200px;
  background-color: #ffffff;
  padding: 40px;
  margin-top: 24px;

}
#f_li>li>div{
    width:322px; 
    height: 170px;    
    float: left;
}
.filter_ttl{
    display: block;
    float: left;
    width: 106px;
    font-size: 14px;
  color: #7697ab;
  line-height: 35px;
}
.filter_ul{
    display: inline-block;

}
.filter_ul>li{
    line-height: 35px;
    cursor: pointer;
}

#wr_con_2>table{
    
}
.filter{
    font-size: 14px;
  color: #1b66f4;
  margin-right: 58px;
  opacity: 0.5;
  cursor: pointer;
}
.filter:hover, .filter.on{
      font-size: 14px;
  font-weight: bold;
  color: #1b66f4!important;
  opacity: 1!important;
}

.seg_title{
    font-size: 16px;
    color: #a0a3bc;

}
#wr_con_2{
    width: 1144px;
     min-height: 200px;
    background-color: #ffffff;
    margin-top: 24px;
    padding: 40px;
}
tr>td:nth-child(1){
    width: 172px;
}
ul{
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
}
li{
    list-style: none;
}

#base_info{
    position: relative;
    width:100%;
}
#case_con{
    width: 1224px;
    margin: 0px auto;
}
#base_title{
    width: 95px;
    height: 32px;  
    font-size: 24px; 
    letter-spacing: -1px;
    color: #a0a3bc;
    margin-top: 31px;
}
#wr_con_1{
    margin-top: 40px;
    width: 1160px;
    height: 56px;
    background-color: #ffffff;
    padding : 40px 32px; 
}

#wr_con_1>table{
    
}
.input_normal{
    width: 415px;
    height: 40px;
    border: solid 1px #ced4da;
    font-size: 14px;
    letter-spacing: normal;
    color: #1a2f53;
    padding-left: 16px;
    line-height: 40px;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #1a2f53;
    opacity: 0.5; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #1a2f53;
    opacity: 0.5; /* Firefox */
}

::-ms-input-placeholder { /* Microsoft Edge */
    color: #1a2f53;
    opacity: 0.5; /* Firefox */
}

</style>
