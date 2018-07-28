<template>
    <div id="base_info">
        <div id="case_con">
            <div id="base_title">사업분야</div>
            <div id="wr_con_1">
                <table>
                    <tr>
                        <td>키워드 입력</td>
                        <td><input class="input_normal"  v-on:keyup="make_hash_string($event)"   type="text" placeholder="회사의 서비스 키워드를 입력하세요" value="트레이드링크"> </td>
                    </tr>             
                </table>
            </div>
            <div id="wr_con_2">
                <div class="seg_title">분야 선택</div>                
                <table style="border-collapse:collapse">
            <tr>
                <td id="f_col" class="col_name" style="height:73px;">
                     <div>
                        <div></div>
                        기본장르
                    </div>
                </td>
                <td>
                    <span class="filter" v-for="t in filter_table_item.base">{{t}}</span>
                </td>
            </tr>
            <tr>
                <td class="col_name" style="height:135px;">
                    <div>
                        <div></div>
                        특수장르
                    </div>                    
                </td>
                <td>
                    <ul id="f_li">
                        <li>
                            <div>
                                <span class="filter_ttl">창작</span> 
                                <ul class="filter_ul">
                                    <li class="filter"  v-for="t in filter_table_item.create">{{t}}</li>
                                </ul> 
                            </div>                                            
                        <li>
                            <div>
                                <span class="filter_ttl">IT 관련</span> 
                                <ul class="filter_ul">
                                    <li class="filter"   v-for="t in filter_table_item.it">{{t}}</li>
                                </ul>
                            </div>                        
                        <li>
                            <div>
                                <span class="filter_ttl">창업</span>
                                <ul class="filter_ul">
                                    <li class="filter"  v-for="t in filter_table_item.startup">{{t}}</li>
                                </ul>
                            </div>  
                        <li>
                            <div>
                                <span class="filter_ttl">제조/융합</span>
                                <ul class="filter_ul">
                                    <li class="filter"  v-for="t in filter_table_item.manufacture">{{t}}</li>
                                </ul>  
                            </div>
                        <li>
                            <div>
                                <span class="filter_ttl">신규산업</span>
                                <ul class="filter_ul">
                                    <li class="filter"  v-for="t in filter_table_item.new">{{t}}</li>
                                </ul>  
                            </div>
                        <li>
                            <div>
                                <span class="filter_ttl">기타</span>
                                <ul class="filter_ul">
                                    <li class="filter"  v-for="t in filter_table_item.etc">{{t}}</li>
                                </ul>  
                            </div>
                        </li>
                    </ul>
                </td>
            </tr>           
            
        </table>
            </div>
            <div id="wr_con_3">
                <table>
                    <tr>
                        <td>사업(서비스) 카테고리</td>
                        <td><input type="text"  class="input_normal" style="margin-bottom:16px;"></td>
                    </tr>
                    <tr>
                        <td>사업(서비스) 명</td>
                        <td><input type="text"  class="input_normal" style="margin-bottom:16px;"></td>
                    </tr>
                    <tr>
                        <td style="   vertical-align: top; padding-top: 17px;">사업(서비스) 소개<br>
                            <span class="text_num">최대 1000자 내외</span>
                        </td>
                        <td><textarea  ></textarea></td>
                    </tr>
                </table>
            </div>

        </div>       
    </div>
</template>

<script>
import * as utils from "../../utils/utils"


export default {
    props:["startup"],
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
        }
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
              vue_obj.$http.get(`${vue_obj.baseURI}/vue_get_application/?id=60&gr=147`)
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
                  $(document).off("click","#apply_save" )            
            $(document).on("click","#apply_save", function(){
                var formData = new FormData();
                formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                console.log(vue_obj.$props.startup)
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                }).then((result)=>{
                    alert("임시 저장되었습니다.")
                })                
            })

        })
    }
}
</script>

<style scoped>


table{
    border-collapse: collapse;
}
textarea{
    font-size: 14px;
    line-height: 1.71;
    color: #1a2f53;
    padding: 16px;
    width: 944px;
    height: 335px;
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
  height: 519px;
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
    margin-top: 40px;
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
    height: 419px;
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
        margin: 0px 54px;;
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
    height: 52px;
    border: solid 1px #ced4da;
    font-size: 14px;
    letter-spacing: normal;
    color: #1a2f53;
    padding-left: 16px;
    line-height: 56px;
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
