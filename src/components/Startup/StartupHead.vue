<template>

    <div id="startup_header_con">
         <div id="startup_head_img" style="position:relative;">
             <img id="back_img" :src="this.baseURI+ '/' + startup.back_img">
             <div id="modi_back" onclick="$('#img_back').click()"  class="hidden">수정</div>
         </div>
         <div id="startup_head_bottom">
             
             <div id="st_logo"><img id="st_logo_img" :src="this.baseURI + '/' +startup.logo">
             <div id="modi_logo" onclick="$('#img_logo').click()" class="hidden">수정</div></div>
           
             <div id="startup_head_text">
                 <div id="startup_name">{{startup.name}}</div>
                 <div id="startup_desc">{{startup.short_desc}}</div>
                 <div v-on:click="follow($event)"   :data-id="startup.startup_id" id="heart"><i class="fas fa-heart"></i></div>
                 <!-- <div v-on:click="modi_con($event)" id="modi_btn">수정</div>  -->
             </div>
            <input type="file" v-on:change="previewFile_back" id="img_back" style="width:1px ; height:1px; opacity:0">
            <input type="file" v-on:change="previewFile_logo" id="img_logo" style="width:1px ; height:1px; opacity:0">         
        
        </div>
      
         
    </div>
</template>
<script>
export default {
  
    props:["startup"],
    data:function(){
        return{            
        }
    },
    mounted:function(){
        var vur_obj=this
              if(this.$route.fullPath.indexOf("mypage") != -1 ){
            $("#heart").remove()
        }else{
            $("#modi_btn").remove()
        }
          $(document).ready(function(){
      
        setTimeout(function(){
                  var data={
                  "id":localStorage.getItem("id")
              }
              console.log(`${vur_obj.baseURI}/vue_my_interest_set/`)
                 $.ajax({
                        url:`${vur_obj.baseURI}/vue_my_interest_set/`,
                        method:"POST",
                        data:data,
                        success:function(res){console.log(res)
                           for(var k=0; k < res.length; k++){
                            console.log($("#heart[data-id='"+res[k].id+"']"))
                            $("#heart[data-id='"+res[k].id+"']").css("color","#ff0000")
                           }
                        },
                        error:function(e){console.log(e)
                        }
                        })
                    }, 1000)



            $(document).on("mouseenter","#startup_head_img", function(){
                if( $("#modi_btn").text()=="완료" ){
                    $("#modi_back").removeClass("hidden")
                }
            })
            $(document).on("mouseleave","#startup_head_img", function(){
                    $("#modi_back").addClass("hidden")
            })
            $(document).on("mouseenter","#st_logo", function(){
                if( $("#modi_btn").text()=="완료" ){
                    $("#modi_logo").removeClass("hidden")
                }
            })
            $(document).on("mouseleave","#st_logo", function(){
                    $("#modi_logo").addClass("hidden")
            })


        })
    },
    methods:{
         previewFile_back:function() {
  var preview = document.getElementById('back_img');
  var file    = document.getElementById('img_back').files[0];
  var reader  = new FileReader();
  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
},
 previewFile_logo:function() {
  var preview = document.getElementById('st_logo_img');
  var file    = document.getElementById('img_logo').files[0];
  var reader  = new FileReader();
  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
},
         modi_con:function(e){
            if( $(e.path[0]).text() == "수정"){
                $(e.path[0]).text("완료")
                $("#startup_name").attr("contenteditable", true)
                $("#startup_desc").attr("contenteditable", true)
                $("#startup_name").focus()
              
            }
            else{
                $(e.path[0]).text("수정")
                this.$props.startup.name = $("#startup_name").text()
                this.$props.startup.short_desc = $("#startup_desc").text()
                $("#startup_name").attr("contenteditable", false)
                $("#startup_desc").attr("contenteditable", false)
                var formData = new FormData();    
                var file1 = document.querySelector('#img_back');
                var file2 = document.querySelector('#img_logo');
                formData.append("img_back", file1.files[0]);
                formData.append("img_logo", file2.files[0]);

                                  
                formData.append('json_data', JSON.stringify(this.$props.startup));    
                this.$http.post(`${this.baseURI}/vue_update_startup_detail/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            }
        },
            follow:function(e){
      
    
                // 스타트업 아이디
                console.log(e)
                console.log( $(e.path[1]))
                 if(localStorage.getItem("user") == "u" ){
                     var data = {
                         "val": $(e.path[1]).attr("data-id"),
                         "id":localStorage.getItem("id")
                     }
                     $.ajax({
                        url:`${this.baseURI}/vue_add_interest_st/`,
                        method:"POST",
                        data:data,
                        success:function(res){console.log(res)
                            if(res=="ok-add"){alert("관심 목록에 추가되었습니다.")
                             $(e.path[0]).css("color","#ff0000")
                            }else{
                                alert("관심목록에서 삭제되었습니다.")
                                $(e.path[0]).css("color","#000000") 
                            }
                        },
                        error:function(e){console.log(e)
                       
                        }
                     })
                 }
                 else{
                     if(localStorage.getItem("user") == "m" || localStorage.getItem("user") == "ma"  ){
                         alert("매니저나 기관관리자는 스타트업을 팔로우하실수 없습니다.")
                     }else{
                         alert("로그인을 진행해주세요.")
                     }
                 }
            }
    },

}
</script>
<style scoped>
#st_logo_img{
    width: 80px;
    height: 80px;
}
#modi_back{
    position: absolute;
    top: 130px;
    right: 21px;
    cursor: pointer;
}
#modi_logo{
    position: absolute;
    top: 79px;
    left: 79px;
    cursor: pointer;
}

#modi_btn{
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 24px;
    color: #a0a3bc;
    font-size: 14px;
}

#heart{
    cursor: pointer;
    position: absolute;
    top:25px; 
    right:24px;
    color:black
}
#heart.on{
   color:red;
}

#startup_head_bottom{
    position: relative;
}
#startup_header_con{
    width: 1016px;
    height: auto;   
    margin: 80px auto 40px; ;
}
    #startup_head_img{
         width: 1016px;
  height: 168px;
    }
    #startup_head_img>img{
         width: 1016px;
  height: 168px;
    }
    #startup_head_bottom{     
        height:132px;
        width: 1016px;
        background-color:#fff; 
    }
    #st_logo{
        width: 80px;
  height: 80px;
  border: solid 1px #ced4da;
  margin-top: 24px;
  margin-left: 32px;
  float: left;
    }
    #startup_head_text{
        float: left;
        margin-left: 24px;
        margin-top: 24px;
    }
    #startup_name{
        width: 800px;
        height: 40px;  
        font-size: 32px; 
        line-height: 1.25;
        letter-spacing: -2px;
        color: #243d68;
    }
    #startup_desc{
         width: 800px;
  height: 28px;

  font-size: 16px;

  color: #a0a3bc;
  margin-top: 8px;
    }
</style>
