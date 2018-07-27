<template>
    <div id="make_application_page" style=" padding-bottom:200px;">
             <div id="application_header">
                <div id="title"><i style="font-size=20px;" class="fas fa-chevron-left"></i> &nbsp;&nbsp;&nbsp;공고문 작성중</div>
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
                <li  v-on:click="go_link_2" >
                     <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/check.png"><div style="float:left; margin-left:8px;">모집개요</div>
                    </div>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li v-on:click="go_link_3" >
                    <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/check.png"><div style="float:left; margin-left:8px;">선정개요</div>
                    </div>
                </li>
                <li><i class="fas fa-chevron-right"></i></li>
                <li v-on:click="go_link_4" >
                    <div>
                        <img style="float:left; margin-top:12px;" src="/static/img/pen.png"><div style="float:left; margin-left:8px;">제출서류</div>
                    </div>
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
                <div id="page_title">제출서류</div>              
                 <div class="grant_info_con">
                    <div class="grant_info_title">제출서류 </div>
                     <span class="file" meta-data ="file_0">사업계획서</span>
                     <span class="file" meta-data ="file_1">사업자등록증</span>
                     <span class="file" meta-data ="file_2">지방세/국세납입증</span>
                     <span class="file" meta-data ="file_3">투자 유치 증빙서류</span>
                     <span class="file" meta-data ="file_4">발표심사 PPT</span>
                     <span id="etc" meta-data ="file_5" style="margin-right:0px;">
                         <input id="etc_file" type="checkbox" >
                         <span id="etc_text">기타</span>
                         <input type="file" id="file" class="hidden" style="width:164px;">
                         </span>
                </div>
            </div>
    </div>
</template>

<script>

function save(obj){
      var file_arr=[]
                $(".file.hover").each(function(){
                    file_arr.push($(this).text())
                })
                if( $("input:checked").length == 1 ) file_arr.push("file_5")
                var formData = new FormData();
                var grant_info ={}
                grant_info["id"]=obj.$route.params.id
                grant_info["file_list"]= file_arr
                formData.append('json_data', JSON.stringify(grant_info));    
                obj.$http.post(`${obj.baseURI}/vue_set_grant_5/`, formData)
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
              var result = confirm("현재 작성 내용을 저장후 이동하시겠습니까?")
            if (result == true){
                save(this);
            }
            this.$router.push("/manager/make/grant/"+this.$route.params.id+"/support_content")     
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
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){

                $.ajax({
                    url:vue_obj.baseURI+"/vue_get_grant_information?id="+vue_obj.$route.params.id,
                    success:function(res){
                        vue_obj.grant_info = res
                        for (var k=0; k < vue_obj.grant_info.meta_file_info.length; k++){
                            $(".file:contains('"+vue_obj.grant_info.meta_file_info[k]+"')").addClass("hover")
                        }
                    }
                })

            $(document).on("click","#etc_file", function(){
                if($(this).is(":checked")){
                    $("#etc_text").addClass("hidden")
                    $("#file").removeClass("hidden")
                }else{
                    $("#etc_text").removeClass("hidden")
                    $("#file").addClass("hidden")
                }
            })
            $("#gca_content").css("background-color","#fdfeff")
            $(document).off("click", ".file")
            $(document).on("click", ".file", function(){
                if( $(this).hasClass("hover")) $(this).removeClass("hover")
                else $(this).addClass("hover")
            })


            $(document).off("click","#apply_next")
            $(document).on("click","#apply_next", function(){
                var file_arr=[]
                $(".file.hover").each(function(){
                    file_arr.push($(this).text())
                })
                if( $("input:checked").length == 1 ) file_arr.push("file_5")
                var formData = new FormData();
                var grant_info ={}
                grant_info["id"]=vue_obj.$route.params.id
                grant_info["file_list"]= file_arr
                formData.append('json_data', JSON.stringify(grant_info));    
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_grant_5/`, formData)
                .then((result) => {            
                        vue_obj.$router.push("/manager/make/grant/"+ vue_obj.$route.params.id +"/etc")
                })
            })

            $(document).off("click","#apply_save")
            $(document).on("click","#apply_save", function(){
                var file_arr=[]
                $(".file.hover").each(function(){
                    file_arr.push($(this).text())
                })
                if( $("input:checked").length == 1 ) file_arr.push("file_5")
                var formData = new FormData();
                var grant_info ={}
                grant_info["id"]=vue_obj.$route.params.id
                grant_info["file_list"]= file_arr
                formData.append('json_data', JSON.stringify(grant_info));    
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_grant_5/`, formData)
                .then((result) => {            
                       alert("저장되었습니다.")
                })
            })



        })
    }
}
</script>

<style scoped>
.file{
    cursor: pointer;
}

.hover{
    font-weight: bold;
}
.grant_info_con>span{
    color: #1b66f4;
    font-size: 14px;
    margin-top: 24px;
    margin-right: 115px;
    display: inline-block;
}
#etc{
  font-size: 16px;
  color: #a0a3bc;
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
