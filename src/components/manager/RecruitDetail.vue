<template>
    <div id="make_application_page" style=" padding-bottom:200px;">
             <div id="application_header">
                <div id="title"><i style="font-size=20px;"  onclick="history.back();" class="fas fa-chevron-left"></i> &nbsp;&nbsp;&nbsp;공고문 작성중</div>
            </div>
            <div id="application_header_bottom">
            <ul>               
                 <li v-on:click="go_link_0">
                    <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/check.png"><div style="float:left; margin-left:8px;">사업개요</div>
                    </div>
                </li>                    
                <li><i class="fas fa-chevron-right"></i></li>
                <li  v-on:click="go_link_1">
                    <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/check.png"><div style="float:left; margin-left:8px;">지원내용</div>
                    </div>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li  v-on:click="go_link_2">
                     <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/pen.png"><div style="float:left; margin-left:8px;">모집개요</div>
                    </div>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li  v-on:click="go_link_3" style="opacity:0.52">
                    <span style="background-color:#fff;font-size:16px; width:24px; height:24px; display:inline-block; text-align:center;line-height:24px;border-radius:12px;margin-right:8px;">4</span>선정개요</span>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li  v-on:click="go_link_4" style="opacity:0.52">
                    <span style="background-color:#fff;font-size:16px; width:24px; height:24px; display:inline-block; text-align:center;line-height:24px;border-radius:12px;margin-right:8px;">5</span>제출서류</span>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li  v-on:click="go_link_5" style="opacity:0.52">
                    <span style="background-color:#fff;font-size:16px; width:24px; height:24px; display:inline-block; text-align:center;line-height:24px;border-radius:12px;margin-right:8px;">6</span>기타</span>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li  v-on:click="go_link_6" style="opacity:0.52">
                   <span>공고문 작성완료</span>
                </li>
            </ul>
            </div>
            <div id="grant_info_con">
                <div id="page_title">모집개요</div>               
                 <div class="grant_info_con">
                    <div class="grant_info_title" style="margin-bottom:24px;"> 모집기간 <span>공고 진행기간</span></div>
                    <i class="fas fa-calendar"></i> <datetime v-model="grant_info.apply_start"></datetime>  에서  <i class="fas fa-calendar"></i> <datetime v-model="grant_info.apply_end"  type="datetime"  :minute-step="30" ></datetime> 까지
                </div>
          
                <div class="grant_info_con">
                    <div class="grant_info_title">모집대상<span>사업(행사) 참가기업 대상(조건 및 분야를 포함)</span></div>
                    <tinymce id="d1" v-model="grant_info.object">
                        ex. 상금 1등 2000만원, 입주 6개월(연장평가를 통해 최대 2년), 공동 홍보물 제작
                    </tinymce>
                </div>
               
                 <div class="grant_info_con">
                    <div class="grant_info_title">모집조건<span>사업(행사) 참가기업 대상(조건 및 분야를 포함)</span></div>
                    <tinymce id="d2" v-model="grant_info.condition" >
                        ex. 상금 1등 2000만원, 입주 6개월(연장평가를 통해 최대 2년), 공동 홍보물 제작
                    </tinymce>
                </div>

                     <div class="grant_info_con">
                    <div class="grant_info_title">모집분야</div>
                   <table style="border-collapse:collapse; margin-left: 75px;">
            <tr>
                <td id="f_col" class="col_name" style="height:73px;font-size: 14px;  font-weight: bold;  color: #243d68;">
                     <div>
                        <div></div>
                        기본장르
                    </div>
                </td>
                <td>
                    <span v-on:click="add_tag($event)" class="filter" v-for="t in filter_table_item.base">{{t}}</span>
                </td>
            </tr>
            <tr>
                <td class="col_name" style="vertical-align:top; padding-top:22px;font-size: 14px;font-weight: bold;">
                    <div>
                        <div></div>
                        특수장르
                    </div>                    
                </td>
                <td style="padding-top: 22px;">
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
                                    <li class="filter"  v-for="t in filter_table_item.it">{{t}}</li>
                                </ul>
                            </div>                        
                        <li>
                            <div>
                                <span class="filter_ttl">창업</span>
                                <ul class="filter_ul">
                                    <li class="filter"  v-for="t in filter_table_item.startup">{{t}}</li>
                                </ul>
                            </div>  
                        <li style="height:112px;">
                            <div>
                                <span class="filter_ttl">제조/융합</span>
                                <ul class="filter_ul">
                                    <li class="filter"   v-for="t in filter_table_item.manufacture">{{t}}</li>
                                </ul>  
                            </div>
                        <li style="height:112px;">
                            <div>
                                <span class="filter_ttl">신규산업</span>
                                <ul class="filter_ul">
                                    <li class="filter"  v-for="t in filter_table_item.new">{{t}}</li>
                                </ul>  
                            </div>
                        <li style="height:112px;">
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
            <tr>
                <td></td>
                <td><input type="checkbox">기타</td>
            </tr>
                        
        </table>
                </div>
                <div class="grant_info_con">
                    <div class="grant_info_title" style="margin-bottom:24px;"> 모집규모 </div>
                  <input id="recruit_size" type="number" v-model="grant_info.recruit_size" placeholder="00" style="text-align:center; width: 95px;  height: 38px;  background-color: #ffffff;  border: solid 1px #ced4da;"> 팀 내외
                </div>
                <div class="grant_info_con">
                    <div class="grant_info_title"><input type="checkbox" checked> 우대사항 </div>
                    <textarea id="prefer" type="text" class="input_normal" v-model="grant_info.prefer"  placeholder="ex) 우대사항"></textarea>
                </div>
                <div class="grant_info_con">
                <div class="grant_info_title"><input type="checkbox" checked>제한사항 </div>
                    <textarea id="constraint" type="text" class="input_normal" v-model="grant_info.constraint"  placeholder="ex)제한사항"></textarea>
                </div>
            </div>
            
    </div>
</template>

<script>
function save(obj){
       var tag_list=[]
       console.log(obj.grant_info)
                $(".filter.hover").each(function(){
                    tag_list.push($(this).text())
                })
                var formData = new FormData();
                var grant_info ={}
                grant_info["id"]=obj.$route.params.id
                grant_info["recruit_tag"]= tag_list
                console.log(obj.grant_info.apply_start)
                grant_info["apply_start"] = obj.grant_info.apply_start
                grant_info["apply_end"] =  obj.grant_info.apply_end
                grant_info["object"] = obj.grant_info.object
                grant_info["condition"] = obj.grant_info.condition
                grant_info["recruit_size"]  = obj.grant_info.recruit_size
                grant_info["prefer"]  =obj.grant_info.prefer
                grant_info["constraint"]  =obj.grant_info.constraint
                
                formData.append('json_data', JSON.stringify(grant_info));    
                obj.$http.post(`${obj.baseURI}/vue_set_grant_3/`, formData)
}

export default {
   
    methods:{
       
         
        go_link_0:function(){
            var result = confirm("현재 작성 내용을 저장후 이동하시겠습니까?")
            if (result == true){
                save(this);
            }
            this.$router.push("/manager/make/grant/"+this.$route.params.id)            
        },
        go_link_1:function(){
            
        },
        go_link_2:function(){
            var result = confirm("현재 작성 내용을 저장후 이동하시겠습니까?")
            if (result == true){
                save(this);
            }
                this.$router.push("/manager/make/grant/"+this.$route.params.id+"/recruit_content")
         
        },
        go_link_3:function(){
            var result = confirm("현재 작성 내용을 저장후 이동하시겠습니까?")
            if (result == true){
                save(this);
            }
      
      this.$router.push("/manager/make/grant/"+this.$route.params.id+"/select_method")
        
        },
        go_link_4:function(){
            var result = confirm("현재 작성 내용을 저장후 이동하시겠습니까?")
            if (result == true){
                save(this);
            }
      
      this.$router.push("/manager/make/grant/"+this.$route.params.id+"/attached_file")
           
        },
        go_link_5:function(){
            var result = confirm("현재 작성 내용을 저장후 이동하시겠습니까?")
            if (result == true){
                save(this);
            }
      
      this.$router.push("/manager/make/grant/"+this.$route.params.id+"/etc")
        },
        go_link_6:function(){
            var result = confirm("현재 작성 내용을 저장후 이동하시겠습니까?")
            if (result == true){
                save(this);
            }
      
      this.$router.push("/manager/make/grant/"+this.$route.params.id+"/complete")
        }
    },
         beforeRouteLeave (to, from, next) {
        if(confirm("페이지를 벗어나시겠습니까?")){
            next()
        }
  },
    data:function(){
        return{
               grant_info:{
                apply_end:"2018-01-01 00:00:00",
                apply_start:"2014-04-04 00:00:00",
              
            },
        
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
        }
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
                $.ajax({
                    url:vue_obj.baseURI+"/vue_get_grant_information?id="+vue_obj.$route.params.id,
                    success:function(res){
                        vue_obj.grant_info = res
                      for(var k=0; k <  vue_obj.grant_info.tag.length;k++)
                      {
                          $(".filter:contains('"+vue_obj.grant_info.tag[k] + "')").addClass("hover");
                      }
                    }
                })

            $(document).off("click","input[type='checkbox']")
            $(document).on("click","input[type='checkbox']",function(){
                if( $(this).is(":checked") ){
                    $(this).parent().parent().children("*").not(".grant_info_title").removeClass("hidden")
                }else{
                    $(this).parent().parent().children("*").not(".grant_info_title").addClass("hidden")
                }
            })
            $("#gca_content").css("background-color","#fdfeff")
            $(document).off("click",".filter")
            $(document).on("click",".filter",function(){
                if($(this).hasClass("hover")) $(this).removeClass("hover")
                else $(this).addClass("hover")
            })
            
            
            $(document).off("click","#apply_next")
            $(document).on("click","#apply_next", function(){
                var tag_list=[]
                $(".filter.hover").each(function(){
                    tag_list.push($(this).text())
                })
                var formData = new FormData();
                var grant_info ={}
                grant_info["id"]=vue_obj.$route.params.id
                grant_info["recruit_tag"]= tag_list
                grant_info["apply_start"] =vue_obj.grant_info.apply_start
                grant_info["apply_end"] = vue_obj.grant_info.apply_end                
                grant_info["object"] = vue_obj.grant_info.object
                grant_info["condition"] = vue_obj.grant_info.condition
                grant_info["recruit_size"] = vue_obj.grant_info.recruit_size
                grant_info["prefer"] = vue_obj.grant_info.prefer
                grant_info["constraint"] = vue_obj.grant_info.constraint
                
                formData.append('json_data', JSON.stringify(grant_info));    
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_grant_3/`, formData)
                .then((result) => {            
                       vue_obj.$router.push("/manager/make/grant/"+ vue_obj.$route.params.id +"/select_method")
                })    
            })

            $(document).off("click","#apply_save")
            $(document).on("click","#apply_save", function(){
                var tag_list=[]
                $(".filter.hover").each(function(){
                    tag_list.push($(this).text())
                })
                var formData = new FormData();
                var grant_info ={}
                grant_info["id"]=vue_obj.$route.params.id
                grant_info["recruit_tag"]= tag_list
                grant_info["apply_start"] =vue_obj.grant_info.apply_start
                grant_info["apply_end"] = vue_obj.grant_info.apply_end                
                grant_info["object"] = vue_obj.grant_info.object
                grant_info["condition"] = vue_obj.grant_info.condition
                grant_info["recruit_size"] = vue_obj.grant_info.recruit_size
                grant_info["prefer"] = vue_obj.grant_info.prefer
                grant_info["constraint"] = vue_obj.grant_info.constraint
                
                formData.append('json_data', JSON.stringify(grant_info));    
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_grant_3/`, formData)
                .then((result) => {            
                   alert("저장되었습니다.")
                })    

            })


})
    }
}
</script>
<style>
.vdatetime{
    display: inline-block;
}
.vdatetime-input{
        width: 258px;
    height: 38px;
    background-color: #ffffff;
    border: solid 1px #ced4da;
    line-height: 38px;
    padding-left: 20px;
    font-size: 14px;
    display: inline-block;
}
</style>
<style scoped>
.filter{
    cursor:pointer
}
.filter.hover{
    font-weight: bold
}
.tag_con{
    margin-top: 24px;
}
.bold{
    font-weight: bold;
}

span.filter_r{
    font-size: 14px;
    line-height: 1.71;
    color: #1b66f4!important;
    margin-right: 16px;
    display: inline-block;
}

#f_li>li{
    float: left;
    margin-right: 25px;
    display: inline-block;
    width:125px;
}
#f_li>li:last-child{
    margin-right: 0px;
}
.filter_ttl{
    display: inline-block;
    vertical-align: top;
  
}
.filter_ul{
   
}
table>tr>td{
    height: 64px;;
    vertical-align: middle;
  
}
table>tr:last-child>td{
    border-bottom: none;
}
table>tr>td:nth-child(1){
    width: 89px;
}
td>span{
    font-size: 12px;
    line-height: 1.33;
    color: #a0a3bc;
    display: inline-block;
}



#tbl1{
    border-collapse: collapse;
    margin-top:27px;
    margin-left:156px;
}
#tbl1>tr>td{
    vertical-align: top;
}
td>ul>li{
    display: block;
    margin-bottom: 27px;
}
#tbl1>tr>td:nth-child(2n+1){
    width: 100px;
    font-size: 14px;
    color: #243d68;
     font-weight: bold;
}

#tbl1>tr>td:nth-child(2n){
    width: 200px;
    font-size: 14px;
    color: #1b66f4;
}

.fa-calendar{
    font-size: 20px;
    margin-right:9px;
}
.date{
    width: 258px;
    height: 38px;
    background-color: #ffffff;
    border: solid 1px #ced4da;
    line-height: 38px;
    padding-left: 20px;
    font-size:14px;
}
#input_file{
    border: none;
    position: absolute;
    top:64px;
    right:16px;
}
#file_ttl{
    position: absolute;
    top:15px;
    left:16px;
    color: #1b82f4;
}
#file_ttl>span{
    font-size: 12px;
    color: #a0a3bc;
}
#poster_file_con{
    margin-top: 24px;
    width: 1016px;
    height: 101px;
    background-color: #ffffff;
    border: solid 1px #ced4da;
    position: relative;
}
.input_normal{
    width:1224px;
    border: none;
    outline: none;
    font-size: 14px;
    color: #1a2f53;
    margin-top: 24px;
    background-color: transparent
   
}
.grant_info_con{
    width: 1224px;  
    margin-left:52px;
    margin-top:48px;
}
.grant_info_title{
    width:100%;
    border-bottom:1px solid #ced4da;
    font-size: 16px;
    color: #243d68;
    height: 44px;
    line-height: 44px;
}
.grant_info_title>span{
    font-size: 12px;
    color: #a0a3bc;
    display: inline-block;
    margin-left: 24px;
}

#grant_info_con{
    width:100%;
    margin-left: 64px; 
}
#page_title{
    margin-left: 52px;
    margin-top: 44px;
    font-size: 20px;
    font-weight: 900;
    color: #1a2f53;
}

  #make_application_page{
        overflow-x: hidden;
    }
    #application_header_bottom{
        width: 100%;
        height: 48px;
        background-color: rgba(206, 212, 218, 0.35);
        margin-left: 64px;
        padding-left: 52px;
        line-height: 48px;
        font-size: 16px;
        color: #243d68;
    }
    #application_header{
        width:100%;
        position: relative;
        overflow: auto;
        height:96px;
        background-color: #2256b8;
        margin-left: 64px;
        font-size: 24px;
        letter-spacing: -1px;
        color: #f9fcff;

    }
    #title{
        color: #fff;
        margin-top:32px;
        margin-left:52px;
    }
    #application_header_bottom>ul>li{
    list-style: none;
    float: left;
    margin-right: 24px;
    line-height: 48px;
}
.filter{
    font-size: 14px;
    color: #1b66f4;
    margin-right: 54px;
}
.filter_ttl{
    display: block;
    float: left;
    width:100px
}
#f_li>li{
    float: left;
    width: 327px!important;
    height: 174px;
}
.filter_ul>.filter{
    margin-bottom: 26px;
}
.filter_ul{
    display: inline-block;
}

</style>
