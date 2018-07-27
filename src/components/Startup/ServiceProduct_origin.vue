<template>
    <div id="" class="startup_detail panel_0">
        <div class="service_intro" :data-show="service.show" v-for="service in startup.service">
         <div class="service_name"> {{service.name}}</div>  
          <div v-on:click="remove_service($event)" :data-id="service.id" class="remove_btn">삭제</div>   
             
             <div v-if = "service.show == '' " class="show"><i :data-id="service.id"  class="fas fa-eye"></i></div>
             <div v-else = "service.show == 'no' " class="show"><i :data-id="service.id"  class="fas fa-eye-slash"></i></div>


            <div class="service_text">
                <img :src="'http://13.209.21.165/'+service.img">
                <div v-html="service.intro" ></div>
                <div class="attached_file">
                    <div><i class="fas fa-paperclip"></i>서비스 소개서</div>
                    <div><a target="_blank" :href="service.file"> {{service.file_name}}</a></div>
                </div>
            </div>
        </div>
        <div class="add_service hidden">
             <div class="service_name"><input type="text" placeholder="서비스 타이틀"></div>        
            <div v-on:click="complete_service($event)" class="complete_btn">완료</div>
            <div class="service_text">
                <img id="blank" src="/static/img/blank.jpg" onclick="$('#service_img').click()" >
                <input type="file" style="opacity:0" v-on:change="previewFile" id="service_img" >
                <div class="service_text_con">
                    <div class="intro_div" id="target_text" contenteditable ></div>
                    <div class="input_file">&nbsp;&nbsp;&nbsp;&nbsp;서비스 소개서 파일을 업로드 해보세요<input id="file" class="file" type="file"></div>
                </div>
            </div>
        </div>
        <div class="pre_add_service hidden_info">
                <div class="service_name">서비스 타이틀</div>        
                <div class="add_btn" v-on:click="add_service">추가하기</div>
        </div>
    </div>
</template>
<script>



export default {
    props:["startup"],
    updated:function(){
        var vue_obj = this
        $(".service_intro").each(function(){
            console.log(vue_obj.$route.fullPath)
            if(  $(this).attr("data-show")== "no" &&  vue_obj.$route.fullPath.indexOf("mypage") == -1  ){
                $(this).addClass("hidden")
               
            }
            if (vue_obj.$route.fullPath.indexOf("mypage") == -1){
                        
            }
        })

    }
    ,    methods:{
        
        remove_service:function(e){
            var vue_obj=this
            var result = confirm("해당 서비스/프로덕트를 삭제하시겠습니까?")
            if(result == true){
                var data={
                    'id':localStorage.getItem("id"),
                    "service_id":$(e.path[0]).attr("data-id")
                }
                $.ajax({
                    url:this.baseURI + "/vue_remove_service_product/",
                    type:"post",
                    data:data,
                    success:function(res){
                        console.log(res)
                        vue_obj.$router.go()
                    }
                })
            }
        },
 previewFile:function() {
  var preview = document.getElementById('blank');
  var file    = document.getElementById('service_img').files[0];
  var reader  = new FileReader();
  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
},

        complete_service:function(e){
            var name = $(e.path[0]).parent().find(".service_name>input").val();
            var expUrl = /(((http(s)?:\/\/)\S+(\.[^(\n|\t|\s,)]+)+)|((http(s)?:\/\/)?(([a-zA-z\-_]+[0-9]*)|([0-9]*[a-zA-z\-_]+)){2,}(\.[^(\n|\t|\s,)]+)+))+/gi;
            console.log( $("#target_text").text())
            var text = $("#target_text").text().replace(expUrl, '<a target="_blank" href="$&">$&</a>');
            console.log(text)
            console.log($("#file").val())
            console.log($("#file").name)


            var formData = new FormData();
            var file1 = document.querySelector('#file');
            var file2 = document.querySelector('#service_img');
            var vue_obj= this
            this.$props.startup.service.push({
                "name":name , "intro":text,"file":"",
                "file_name":$("#file").val().replace(/^.*[\\\/]/, ''),
                "img_name":$("#service_img").val().replace(/^.*[\\\/]/, ''),
            })       

            formData.append("file_1", file1.files[0]);
            formData.append("file_2", file2.files[0]);
            
            formData.append('json_data', JSON.stringify(this.$props.startup));    
            this.$http.post(`${this.baseURI}/vue_update_startup_detail/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
               
            $("#right_back").css("height",$("#content").css("height"))
            $("#left_back").css("height",$("#content").css("height"))
            $("#file").val("")
            $(".add_service").addClass("hidden")      
             this.$router.go()     
        })
        },
        add_service:function(){
             $("#right_back").css("height",$("#content").css("height"))
             $("#left_back").css("height",$("#content").css("height"))
             $(".add_service.hidden").removeClass("hidden")
        }
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
                $(document).on("click",".show", function(){
                    console.log("test")
                    if($(this).children().hasClass("fa-eye")){
                        $(this).children().removeClass("fa-eye")
                        $(this).children().addClass("fa-eye-slash")
// 비공개 설정
                        $.ajax({
                            url:vue_obj.baseURI+"/vue_set_service_show/",
                             type:"post",
                            data:{
                                    "id":$(this).children().attr("data-id"),
                                    "show":"no"
                            },
                            success:function(res){
                                console.log(res)
                            }
                        })
                        
                    }else{
                         $(this).children().removeClass("fa-eye-slash")
                        $(this).children().addClass("fa-eye")
              // 공개 설정
                     $.ajax({
                            url:vue_obj.baseURI+"/vue_set_service_show/",
                            type:"post",
                            data:{
                                    "id":$(this).children().attr("data-id"),
                                    "show":""
                            },
                            success:function(res){
                                console.log(res)
                            }
                        })

              
              
              }
                })

                // $(document).on("keyup",".intro_div", function(){
                //     var doc= $(this).val()
                //     var regURL = new RegExp("(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()]+)","gi");
                //     var regEmail = new RegExp("([xA1-xFEa-z0-9_-]+@[xA1-xFEa-z0-9-]+\.[a-z0-9-]+)","gi");
                //     $(this).html( doc.replace(regURL,"<a href='$1://$2' target='_blank'>$1://$2</a>").replace(regEmail,"<a href='mailto:$1'>$1</a>") );
                // })
           
        })
    },
 
}
</script>

<style scoped>
.show{
    position: absolute;
    right: 63px;
    top: 24px;
}

.remove_btn{
    position: absolute;
    top:24px;
    right:24px;
    cursor: pointer;
}
.add_btn{
    width: 84px;
    height: 32px;
    border-radius: 16px;
    border: solid 1px #1b66f4;
    font-size: 14px;
    text-align: center;
    color: #1b66f4;
    line-height: 32px;
    position: absolute;
     top:24px;
    right:24px;
    cursor: pointer;
}
.input_file{
    line-height: 48px;
   
}
.file{
    float: right;
    margin-top: 10px
}
.input_file{
    width:100%;
    height: 48px;
    border-top:1px solid #ced4da;
}
.service_text_con>.intro_div{
    width:948px;
    height: 98px;
    padding: 10px;
    border: none;

}
.service_text_con{
     width: 968px;
  height: 169px;
  border-radius: 6px;
  border: solid 1px #ced4da;
}

.add_service,.pre_add_service{
        position: relative;
        width: 968px;
        overflow: auto;
        height: auto;
        background-color: #ffffff;
        padding: 24px;
        margin-bottom: 24px;
}

.complete_btn{
    width: 68px;
    height: 32px;
    border-radius: 16px;
    background-color: #1b66f4;
    font-size: 14px; 
    line-height: 1.71;  
    text-align: center;
    color: #f7fcff;
    line-height: 32px;
    position: absolute;
    top:24px;
    right: 24px;   
    cursor: pointer;
}

.service_name{
    opacity: 0.8;
    font-size: 20px;
    font-weight: bold;
    color: #1a2f53;
}
    .service_intro{
        position: relative;
        width: 968px;
        overflow: auto;
        height: auto;
        background-color: #ffffff;
        padding: 24px;
        margin-bottom: 24px;
    }
    .service_text>div{
        width: 100%;
        font-size: 14px;
        line-height: 1.71;
        color: #1a2f53;
    }
    .service_text>img{
        display: block;
        width: 534px;
        height: 274px;
        border-radius: 6px;
        margin: 24px auto;
    }
    .attached_file
    {
         width: 968px;
  height: 56px;
  background-color: #ffffff;
  border: solid 1px #ced4da;
 margin-top: 32px;
    }
    .attached_file>div:nth-child(1){
        float: left;
        line-height: 56px;
        margin-left: 20px;
    }
    .attached_file>div:nth-child(2){
        float: right;
         line-height: 56px;
         margin-right: 20px;
    }
    .service_text>div>a{
color:#1a0dab;
    }
</style>
