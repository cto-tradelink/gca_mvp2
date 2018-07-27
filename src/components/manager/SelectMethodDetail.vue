<template>
    <div id="make_application_page">
             <div id="application_header">
                <div id="title"><i style="font-size=20px;"  onclick="history.back();" class="fas fa-chevron-left"></i> &nbsp;&nbsp;&nbsp;공고문 작성중</div>
            </div>
            <div id="application_header_bottom">
            <ul>
                <li v-on:click="go_link_0" >
                    <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/check.png"><div style="float:left; margin-left:8px;">사업개요</div>
                    </div>
                </li>                    
                <li><i class="fas fa-chevron-right"></i></li>
                <li v-on:click="go_link_1" >
                    <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/check.png"><div style="float:left; margin-left:8px;">지원내용</div>
                    </div>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li v-on:click="go_link_2"  >
                     <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/check.png"><div style="float:left; margin-left:8px;">모집개요</div>
                    </div>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li v-on:click="go_link_3" >
                    <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/pen.png"><div style="float:left; margin-left:8px;">선정개요</div>
                    </div>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li  v-on:click="go_link_4" style="opacity:0.52">
                    <span style="background-color:#fff;font-size:16px; width:24px; height:24px; display:inline-block; text-align:center;line-height:24px;border-radius:12px;margin-right:8px;">5</span>제출서류</span>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li v-on:click="go_link_5"  style="opacity:0.52">
                    <span style="background-color:#fff;font-size:16px; width:24px; height:24px; display:inline-block; text-align:center;line-height:24px;border-radius:12px;margin-right:8px;">6</span>기타</span>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li  v-on:click="go_link_6"  style="opacity:0.52">
                   <span>공고문 작성완료</span>
                </li>
            </ul>
            </div>




            <div id="grant_info_con">
                <div id="page_title">선정개요</div>
              
                <div class="grant_info_con">
                    <div class="grant_info_title">선정방법<span>선정 방식, 선정 규모 기재</span></div>
                    <tinymce id="d1" v-model="data" style="margin-top:">
                       선정 방식, 선정 규모 기재
                    </tinymce>
                </div>
              
                 <div class="grant_info_con">
                    <div class="grant_info_title" style="margin-bottom:24px;"> 심사일정</div>
                     <input type="radio" name="filt"> <i class="fas fa-calendar"></i> <datetime v-model="grant_info.pro_0_start"></datetime>  에서  <i class="fas fa-calendar"></i><datetime v-model="grant_info.pro_0_end"></datetime>  까지
                    <br><input type="radio" name="filt"> 미정  </div>
             
                
                 <div class="grant_info_con">
                    <div class="grant_info_title" style="margin-bottom:24px;"> 발표일정</div>
                    <input type="radio" name="open"><i class="fas fa-calendar"></i> <datetime v-model="grant_info.pro_0_open"></datetime>  <br> 
                     <input type="radio" name="open"> 미정
                </div>
                 <div class="grant_info_con">
                    <div class="grant_info_title" style=""> 발표방법</div>
                    <input class="input_normal" v-model="grant_info.open_method" placeholder="발표방법을 입력하세요." type="text">
                </div>
               <div class="grant_info_con">
                    <div class="grant_info_title">심사기준<span>심사 채점 지표</span></div>
                    <tinymce id="d2" v-model="grant_info.pro_0_criterion" style="margin-top:">
                       ex. 역량(20), 기획력(30), 시장전망(20)
                    </tinymce>
                </div>
              
                 <div class="grant_info_con">
                    <div class="grant_info_title"><input type="checkbox"  checked> 2차 심사 </div>
                    <textarea type="text" id="pro_1" v-model="grant_info.pro_1_choose" class="input_normal" placeholder="2차 심사 내용을 입력하세요."></textarea>
                </div>
                 <div class="grant_info_con">
                    <div class="grant_info_title"><input type="checkbox"  checked> 3차 심사 </div>
                    <textarea type="text" id="pro_2" class="input_normal" v-model="grant_info.pro_2_choose" placeholder="3차 심사 내용을 입력하세요."></textarea>
                </div>
         
            </div>
    </div>
</template>

<script>


        function save(obj){
      var formData = new FormData();
                var grant_info ={}
                grant_info["id"]=obj.$route.params.id
                grant_info["pro_0_choose"] = obj.data
                grant_info["pro_0_start"] = $("#start").val()
                grant_info["pro_0_end"] = $("#end").val()
                grant_info["pro_0_open"] = $("#pro_0_open").val()
                grant_info["pro_0_criterion"] = obj.data2
                grant_info["pro_1_criterion"] = $("#pro_1").text()
                grant_info["pro_2_criterion"] = $("#pro_2").text()

                console.log(grant_info)

                formData.append('json_data', JSON.stringify(grant_info));    
                obj.$http.post(`${obj.baseURI}/vue_set_grant_4/`, formData)
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
    data:function(){
        return {
            data:"",
            data2:"",
            grant_info:{
                apply_start:"",
                apply_end : "",
            },
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

   $.ajax({
                    url:vue_obj.baseURI+"/vue_get_grant_information?id="+vue_obj.$route.params.id,
                    success:function(res){
                        console.log("asdfasdf")
                        console.log(res)
                        vue_obj.grant_info = res
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
            $(document).off("click","#apply_next")
            $(document).on("click","#apply_next", function(){
                
                var formData = new FormData();
                var grant_info ={}
                grant_info["id"]=vue_obj.$route.params.id
                grant_info["pro_0_choose"] = vue_obj.grant_info.pro_0_choose
                grant_info["pro_0_start"] = vue_obj.grant_info.pro_0_start
                grant_info["pro_0_end"] = vue_obj.grant_info.pro_0_end
                grant_info["pro_0_open"] = vue_obj.grant_info.pro_0_open
                grant_info["pro_0_criterion"] = vue_obj.grant_info.pro_0_criterion
                grant_info["pro_1_choose"] = vue_obj.grant_info.pro_1_choose
                grant_info["pro_2_choose"] = vue_obj.grant_info.pro_1_choose
                grant_info["open_method"] = vue_obj.grant_info.open_method

                console.log(grant_info)

                formData.append('json_data', JSON.stringify(grant_info));    
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_grant_4/`, formData)
                .then((result) => {            
                     vue_obj.$router.push("/manager/make/grant/"+ vue_obj.$route.params.id +"/attached_file")
                })    
            })
            
             $(document).off("click","#apply_save")
            $(document).on("click","#apply_save", function(){
                
                var formData = new FormData();
                var grant_info ={}
                grant_info["id"]=vue_obj.$route.params.id
                grant_info["pro_0_choose"] = vue_obj.grant_info.pro_0_choose
                grant_info["pro_0_start"] = vue_obj.grant_info.pro_0_start
                grant_info["pro_0_end"] = vue_obj.grant_info.pro_0_end
                grant_info["pro_0_open"] = vue_obj.grant_info.pro_0_open
                grant_info["pro_0_criterion"] = vue_obj.grant_info.pro_0_criterion
                grant_info["pro_1_choose"] = vue_obj.grant_info.pro_1_choose
                grant_info["pro_2_choose"] = vue_obj.grant_info.pro_1_choose
                grant_info["open_method"] = vue_obj.grant_info.open_method

                console.log(grant_info)

                formData.append('json_data', JSON.stringify(grant_info));    
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_grant_4/`, formData)
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
    li{
    list-style: none;
    float: left;
    margin-right: 24px;
    line-height: 48px;
}
</style>
