<template>
    <div id="make_application_page">
             <div id="application_header">
                <div id="title"><i style="font-size=20px;"  onclick="history.back();" class="fas fa-chevron-left"></i> &nbsp;&nbsp;&nbsp;공고문 작성중</div>
            </div>
            <div id="application_header_bottom">
            <ul>               
                <li v-on:click="go_link_0" :data-id="$route.params.id">
                    <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/check.png"><div style="float:left; margin-left:8px;">사업개요</div>
                    </div>
                </li>                    
                <li><i class="fas fa-chevron-right"></i></li>
                <li >
                    <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/pen.png"><div style="float:left; margin-left:8px;">지원내용</div>
                    </div>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li  v-on:click="go_link_2" style="opacity:0.52">
                    <span style="background-color:#fff;font-size:16px; width:24px; height:24px; display:inline-block; text-align:center;line-height:24px;border-radius:12px;margin-right:8px;">3</span>모집개요</span>
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
                <div id="page_title">지원내용</div>
                <div class="grant_info_con">
                    <div class="grant_info_title">지원 항목 선택</div>
                    <table id="tbl1">
                        <tr>
                            <td>자금지원</td>
                            <td><ul>
                                <li>자금지원</li>
                                <li>R&D지원</li>
                                </ul>
                            </td>
                            <td>자금지원</td>
                            <td><ul>
                                <li>엑셀러레이팅 프로그램</li>
                                <li>데모데이 프로그램(투자연계)</li>
                                </ul>
                            </td>
                            <td>교육</td>
                            <td><ul>
                                <li>교육 프로그램</li>
                                <li>전문가 양성 프로그램</li>
                                </ul>
                            </td>
                             <tr>
                            <td>판로</td>
                            <td><ul>
                                <li>해외 진출 지원</li>
                                <li>전시회 참가지원</li>
                                <li>유통지원</li>
                                </ul>
                            </td>
                            <td>자금지원</td>
                            <td><ul>
                             <li>네트워킹 프로그램 </li>
                                <li>데모데이 프로그램(네트워킹) </li>
                                <li>전문가 컨설팅&멘토링</li>
                                </ul>
                            </td>
                            <td>기타지원</td>
                            <td><ul>
                                <li>마케팅지원</li>
                                <li>퍼블리싱 지원</li>
                                <li>B2B 상담</li>
                                <li>번역지원</li>                               
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                공간지원
                            </td>
                            <td>
                                <ul>
                                <li>스타트업 오피스 지원</li>
                                <li>가상오피스</li>
                                </ul>
                            </td>
                             <td>
                                피칭
                            </td>
                            <td>
                                <ul>
                                    <li>기업피칭</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
         
                <div class="grant_info_con">
                    <div class="grant_info_title">지원내용<span>선정시 기업이 받게되는 지원내용</span></div>
                    <tinymce id="d1"  v-model="grant_info.supply_content" style="margin-top:">
                        ex. 상금 1등 2000만원, 입주 6개월(연장평가를 통해 최대 2년), 공동 홍보물 제작
                    </tinymce>

                </div>
            </div>
            
    </div>
</template>

<script>

     function save(obj){
            var  meta_val=[]
            var formData = new FormData();
            var grant_info ={}
            grant_info["id"]=obj.$route.params.id
            var supply_tag = [] 
            $("#tbl1>tr>td>ul>li.hover").each(function(){
                supply_tag.push($(this).text().trim())
            })
            grant_info["supply_tag"] = supply_tag
            grant_info["support_detail"] = obj.data
            formData.append('json_data', JSON.stringify(grant_info));    
            obj.$http.post(`${obj.baseURI}/vue_set_grant_2/`, formData)
            .then((result) => {            
            })    
        }


export default {
  
       beforeRouteLeave (to, from, next) {
        if(confirm("페이지를 벗어나시겠습니까?")){
            next()
        }
  },

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
    data:function(){
        return{
            grant_info:{
                supply_content:"",
            }
        }
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){


            $(document).off("click","td>ul>li")
            $(document).on("click","td>ul>li",function(){
                if($(this).hasClass("hover"))$(this).removeClass("hover");
                else  $(this).addClass("hover");
            })

               $.ajax({
                    url:vue_obj.baseURI+"/vue_get_grant_information?id="+vue_obj.$route.params.id,
                    success:function(res){
                        vue_obj.grant_info = res
                         for(var k =0; k < vue_obj.grant_info.tag.length; k++){
                             $("li:contains('"+vue_obj.grant_info.tag[k]+"')").addClass("hover")
                            
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


            $("#gca_content").css("background-color","#fdfeff");
                var meta_val = []

 $(document).off("click","#apply_save")
            $(document).on("click","#apply_save", function(){
                meta_val=[]
                var formData = new FormData();
                var grant_info ={}
                grant_info["id"]=vue_obj.$route.params.id
                var supply_tag = [] 
                $("#tbl1>tr>td>ul>li.hover").each(function(){
                    supply_tag.push($(this).text())
                })
                grant_info["supply_tag"] = supply_tag
                grant_info["supply_content"] = vue_obj.grant_info.supply_content
                formData.append('json_data', JSON.stringify(grant_info));    
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_grant_2/`, formData)
                .then((result) => {            
                    console.log( vue_obj)
                  alert("저장되었습니다.")
                })    
            })

            $(document).off("click","#apply_next")
            $(document).on("click","#apply_next", function(){
                meta_val=[]
                var formData = new FormData();
                var grant_info ={}
                grant_info["id"]=vue_obj.$route.params.id
                var supply_tag = [] 
                $("#tbl1>tr>td>ul>li.hover").each(function(){
                    supply_tag.push($(this).text())
                })
                grant_info["supply_tag"] = supply_tag
                grant_info["supply_content"] = vue_obj.grant_info.supply_content
                formData.append('json_data', JSON.stringify(grant_info));    
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_grant_2/`, formData)
                .then((result) => {            
                    console.log( vue_obj)
                    vue_obj.$router.push("/manager/make/grant/"+ vue_obj.$route.params.id +"/recruit_content")
                })    
            })
        })
    }
}
</script>

<style scoped>
td>ul>li{
    cursor: pointer;
}
.hover{
    font-weight:bold;
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
        padding-bottom:200px;
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
</style>
