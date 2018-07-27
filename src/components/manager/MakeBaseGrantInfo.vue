<template>
    <div id="make_application_page" style=" padding-bottom:200px;">
             <div id="application_header">
                <div id="title"><i style="font-size=20px;" class="fas fa-chevron-left"></i> &nbsp;&nbsp;&nbsp;공고문 작성중</div>
            </div>
            <div id="application_header_bottom">
            <ul>               
                <li class="grant_hd_menu">
                    <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/pen.png"><div style="float:left; margin-left:8px;">사업개요</div>
                    </div>
                </li>                    
                <li><i class="fas fa-chevron-right"></i></li>
                <li class="grant_hd_menu" v-on:click="go_link_1" style="opacity:0.52">                    
                    <span style="background-color:#fff;font-size:16px; width:24px; height:24px; display:inline-block; text-align:center;line-height:24px;border-radius:12px;margin-right:8px;">2</span>지원내용</span>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li class="grant_hd_menu"  v-on:click="go_link_2"  style="opacity:0.52">
                    <span style="background-color:#fff;font-size:16px; width:24px; height:24px; display:inline-block; text-align:center;line-height:24px;border-radius:12px;margin-right:8px;">3</span>모집개요</span>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li  class="grant_hd_menu" v-on:click="go_link_3"  style="opacity:0.52">
                    <span style="background-color:#fff;font-size:16px; width:24px; height:24px; display:inline-block; text-align:center;line-height:24px;border-radius:12px;margin-right:8px;">4</span>선정개요</span>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li class="grant_hd_menu" v-on:click="go_link_4"  style="opacity:0.52">
                    <span style="background-color:#fff;font-size:16px; width:24px; height:24px; display:inline-block; text-align:center;line-height:24px;border-radius:12px;margin-right:8px;">5</span>제출서류</span>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li class="grant_hd_menu" v-on:click="go_link_5"  style="opacity:0.52">
                    <span style="background-color:#fff;font-size:16px; width:24px; height:24px; display:inline-block; text-align:center;line-height:24px;border-radius:12px;margin-right:8px;">6</span>기타</span>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li class="grant_hd_menu" v-on:click="go_link_6"   style="opacity:0.52">
                   <span>공고문 작성완료</span>
                </li>
            </ul>



            </div>
                <div id="grant_info_con">
               <div id="page_title">사업개요</div>
                <div class="grant_info_con">
                    <div class="grant_info_title">지원사업명 <span>지원사업의 타이틀 영역에 보여집니다.</span></div>
                    <input type="text"  v-model="grant_info.title" id="title_input" class="input_normal" maxlength="80" placeholder="기업이 참여하게 되는 사업명을 입력해 주세요. ex)넥스트 스타트업 어워드">
                </div>
                <div class="grant_info_con">
                    <div class="grant_info_title">태그추가 <span>지원사업을 쉽게 검색할 수 있게 도와줍니다.</span></div>
                    <input type="text"  v-model="grant_info.title_tag" id="tag_input" class="input_normal" value="#" placeholder="#">
                </div>
               
                <div class="grant_info_con">
                    <div class="grant_info_title">지원사업 한줄소개 <span>카드에 위치하게 됩니다.&nbsp;&nbsp;<i style="cursor:pointer;font-size:17px;" class="fas fa-question-circle"></i></span></div>
                    <input type="text" id="short_desc_input"  v-model="grant_info.short_desc"  class="input_normal" placeholder="지원사업 한줄소개를 입력하세요.">
                </div>

                 <div class="grant_info_con">
                    <div class="grant_info_title"><input type="checkbox"  checked> 포스터 <span>대규모 사업(행사)중 하위사업(행사)가 특정된 경우</span></div>
                    <div id="poster_file_con">
                        <div id="file_ttl">포스터 이미지를 업로드 해주세요.<span>파일 용량 1MB이내, jpeg, jpg, png 파일 가능.</span></div>
                        <input id="input_file" type="file">
                    </div> 
                </div>

                 <div class="grant_info_con">
                    <div class="grant_info_title"><input type="checkbox"  checked> 지원사업 명(하위) <span>대규모 사업(행사)중 하위사업(행사)가 특정된 경우</span></div>
                    <input type="text" id="sub_title_input"  v-model="grant_info.title_sub"  class="input_normal" placeholder="지원사업명(하위)를 입력하세요.">
                </div>

                 <div class="grant_info_con">
                    <div class="grant_info_title" style="margin-bottom:24px;"> 진행기간 <span>사업(행사) 진행기간</span></div>
                    <i class="fas fa-calendar"></i>
                    <datetime v-model="grant_info.business_period_start"></datetime>
                     에서  <i class="fas fa-calendar"></i>  <datetime v-model="grant_info.business_period_end"></datetime> 까지
                </div>
                 <div class="grant_info_con">
                    <div class="grant_info_title"><input type="checkbox"  checked> 진행장소 </div>
                    <input type="text" id="location" v-model="grant_info.place" class="input_normal" placeholder="진행장소를 입력하세요">
                </div>
                 <div class="grant_info_con">
                    <div class="grant_info_title"><input type="checkbox"  checked> 사업목적 </div>
                    <textarea type="text" id="subject" v-model="grant_info.subject" class="input_normal" placeholder="사업목적을 입력하세요"></textarea>
                </div>
                 <div class="grant_info_con" style="">
                    <div class="grant_info_title"><input type="checkbox"  checked> 사업내용 </div>
                    <textarea type="text" id="business_detail" v-model="grant_info.business_detail" class="input_normal" placeholder="사업내용을 입력하세요"></textarea>
                </div>
            </div>
    </div>
</template>

<script>


export default {
    methods:{
        go_link_1:function(){
            if(this.id !="new" && this.id!=undefined){
                this.$router.push("/manager/make/grant/"+this.id+"/support_content")
            }
            else{
                alert("내용 작성후 '다음'버튼을 클릭해서 진행하세요.")
            }
        },
        go_link_2:function(){
            if(this.id !="new" && this.id!=undefined){
                this.$router.push("/manager/make/grant/"+this.id+"/recruit_content")
            }
            else{
                alert("내용 작성후 '다음'버튼을 클릭해서 진행하세요.")
            }
        },
        go_link_3:function(){
            if(this.id !="new" && this.id!=undefined){
                this.$router.push("/manager/make/grant/"+this.id+"/select_method")
            }
            else{
                alert("내용 작성후 '다음'버튼을 클릭해서 진행하세요.")
            }
        },
        go_link_4:function(){
            if(this.id !="new" && this.id!=undefined){
                this.$router.push("/manager/make/grant/"+this.id+"/attached_file")
            }
            else{
                alert("내용 작성후 '다음'버튼을 클릭해서 진행하세요.")
            }
        },
        go_link_5:function(){
            if(this.id !="new" && this.id!=undefined){
                this.$router.push("/manager/make/grant/"+this.id+"/etc")
            }
            else{
                alert("내용 작성후 '다음'버튼을 클릭해서 진행하세요.")
            }
        },
        go_link_6:function(){
            if(this.id !="new" && this.id!=undefined){
                this.$router.push("/manager/make/grant/"+this.id+"/complete")
            }
            else{
                alert("내용 작성후 '다음'버튼을 클릭해서 진행하세요.")
            }
        },
        

    },
    data:function(){
        return{
grant_info:{},
    
            test:"",
            test2:""
        }
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
            $(document).on("keyup","#tag_input", function(){
                
                $(this).val("#"+$(this).val().slice(1,$(this).val().length).replace("##","#").replace(/\s/g,"#"));
                $(this).val($(this).val().replace("##","#"));
                
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
            var meta_val = []
            if (vue_obj.$route.params.id != "new"){
                //아이디가 있다면 어디까지 썻는지에 대한 데이터가 있을것..  
                $.ajax({
                    url:vue_obj.baseURI+"/vue_get_grant_information?id="+vue_obj.$route.params.id,
                    success:function(res){
                        vue_obj.grant_info = res
                    }
                })
            }
            



            $(document).off("click","#apply_next")
            $(document).on("click","#apply_next", function(){                
                meta_val=[]
                var formData = new FormData();
                var file = document.querySelector('#input_file');
                formData.append("file", file.files[0]);
                var data={}
                var grant_info ={}
                grant_info["user_id"]= localStorage.getItem("id")
                grant_info["id"]=vue_obj.$route.params.id
                grant_info["title"] = $("#title_input").val()
                grant_info["tag"] = $("#tag_input").val()
                grant_info["short_desc"] = $("#short_desc_input").val()
                grant_info["poster"] = $("#input_file").val().replace(/^.*[\\\/]/, '') 
                grant_info["sub_title"] = $("#sub_title_input").val()
                console.log(vue_obj.grant_info.business_period_start)
                grant_info["start"] = vue_obj.grant_info.business_period_start.split("T")[0]
                grant_info["end"] = vue_obj.grant_info.business_period_end.split("T")[0]
                grant_info["location"] = $("#location").val()
                grant_info["subject"] = vue_obj.grant_info.subject
                grant_info["business_detail"] =  vue_obj.grant_info.business_detail
                grant_info["step"] = "1"
                
                formData.append('json_data', JSON.stringify(grant_info));    
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_grant_1/`, formData)
                .then((result) => {  
                    console.log(result)          
                    var id= result.data.result;
                    vue_obj.id = result.data.result;
                    vue_obj.$router.push("/manager/make/grant/"+id+"/support_content")
                })    
            })


              $(document).off("click","#apply_save")
            $(document).on("click","#apply_save", function(){                
                meta_val=[]
                var formData = new FormData();
                var file = document.querySelector('#input_file');
                formData.append("file", file.files[0]);
                var data={}
                var grant_info ={}
                grant_info["id"]=vue_obj.$route.params.id
                grant_info["title"] = $("#title_input").val()
                grant_info["tag"] = $("#tag_input").val()
                grant_info["short_desc"] = $("#short_desc_input").val()
                grant_info["poster"] = $("#input_file").val().replace(/^.*[\\\/]/, '') 
                grant_info["sub_title"] = $("#sub_title_input").val()
                console.log(vue_obj.grant_info.business_period_start)
                grant_info["start"] = vue_obj.grant_info.business_period_start
                grant_info["end"] = vue_obj.grant_info.business_period_end
                grant_info["location"] = $("#location").val()
                grant_info["subject"] = $("#subject").text()
                grant_info["business_detail"] = $("#business_detail").text()
                grant_info["step"] = "1"
                
                formData.append('json_data', JSON.stringify(grant_info));    
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_grant_1/`, formData)
                .then((result) => {  
                    console.log(result)          
                    var id= result.data.result;
                    vue_obj.id = result.data.result;
                    
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

ul{
    -webkit-margin-before:0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
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
    li{
    list-style: none;
    float: left;
    margin-right: 24px;
    line-height: 48px;
}
</style>
