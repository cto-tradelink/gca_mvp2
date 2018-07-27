<template>
    <div id="" class="startup_detail panel_0">
        <div id="service_product_pane" style="position:relative">
            <div class="servive_show_seg" v-for="s in startup.service">
                <div class="serive_show_ttl" >{{s.name}}</div>
                <div class="service_img_con"><img :src="baseURI+'/'+s.img" style="max-width:534px;max-height:274px;"></div>
                <div class="service_text" v-html='s.intro'></div>
                <div class="hr"></div>
                <div class="category_text" v-html='s.category'></div>
                <div class="file_show" v-if="s.file_name"><img src="/static/img/clip.png" style="width: 14px; height: 18px; margin-top:11px; margin-left:6px; ">
                    <span>{{s.file_name}}</span><img style="" src="/static/img/d.png" style="float:right; margin-top:10px;width:24px; height:24px;">
                    <div style="clear:both"></div>
                </div>
            </div>
            <div id="modi_btn" >수정하기</div>
        </div>
        <div id="service_product_modify" class="hidden">
            <div class="service_seg" v-for="s in startup.service">
                <div class="service_name_ttl">서비스 명</div>
                <input class="input_service" placeholder="서비스명을 입력하세요." v-model="s.name">
                <div class="img_ttl">이미지</div>
                <div class="add_img"><span><img src="/static/img/pluse@3x.png" style="width:24px; height:24px;margin-left:11px;float:left:margin-top:15px;"></span>추가하기</div>
                <input type="file" id="img_file" style="opacity:0">
                <div class="service_info_ttl">서비스 소개</div>
                <textarea class="service_info" placeholder="서비스 소개글을 입력하세요."  v-model="s.content"></textarea>
                <div class="category_ttl">서비스 카테고리</div>
                <input class="input_service" v-model="s.category">
                <div class="file_ttl">서비스 소개 파일</div>
                <div class="file">
                    <input class="service_info_file" type="file"><img src="/static/img/cancel@3x.png" style="width:24px; height:24px;">
                </div>
                <div class="remove" v-on:click="remove_service($event)" :data-id="s.id">삭제하기</div>
            </div>
            
            <div id="add_btn" v-on:click="add_service_seg">
                <span><img src="/static/img/pluse@3x.png"  style="width:24px; height:24px;margin-left:438px;float:left; margin-top:8px;"></span>
                서비스 추가 하기
            </div>

            <div id="btn_con">
                <div id="cancel" class="f4 bold">취소</div>
                <div id="save" v-on:click="complete_service">저장하기</div>                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
    },
    data:function(){
        return{            
        }
    },
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
        add_service_seg:function(){
            console.log("htis")
            this.startup.service.push({
                name:""
            })
        },        
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
        
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
        var text = $("#target_text").text().replace(expUrl, '<a target="_blank" href="$&">$&</a>');
        var formData = new FormData();
        var vue_obj= this
          
        for(var k=0; k < $(".service_info_file").length; k++){
            formData.append("file_"+k, $(".service_info_file:eq("+k+")")[0].files[0]);
        }   
           
            formData.append('json_data', JSON.stringify(this.$props.startup));    
            console.log(formData)
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
            $(document).on("click","#modi_btn", function(){
                $("#service_product_pane").addClass("hidden")
                $("#service_product_modify").removeClass("hidden")
                $("#modi_btn").addClass("hidden")
            })

        })
    },
 
}
</script>


<style scoped>
#add_btn{
    width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: solid 1px #1b49f4;
  line-height: 40px;
}
#add_btn_insa{
    float: left;

}

#btn_con{
    margin-top:32px;
}

#cancel{
    margin-left:404px;
    float: left;
    width: 100px;
    font-style: normal;
    font-stretch: normal;
    line-height: 40px;
    border-radius:   20px;   
    background-color: #4f5478;
    letter-spacing: -0.1px;
    text-align: center;
    color: #ffffff;
}

#save{
    float: left;
    text-align: center;
    line-height: 40px;
    width: 100px;
    height: 40px;
    background-color: #1b49f4;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: -0.1px;
    text-align: center;
    color: #ffffff;
    display: inline-block;
    margin-left: 8px;
    line-height: 40px;
    border-radius: 30px;
}

#modi_btn{
    width: 100px;
    height: 40px;
    border-radius: 28px;
    background-color: #ffffff;
    border: solid 1px #1b66f4;
    text-align: center;
    line-height: 40px;
    color:#1b66f4;
    margin-left: 458px;
    cursor: pointer;
    margin-bottom:200px;
}

.servive_show_seg{
  width: 984px;
  padding:24px 16px;
  height: auto;
  background-color: #ffffff;
  position: relative;
  margin-bottom: 24px;
}
.service_seg{
  width: 984px;
  padding:24px 16px;
   height: 698px;
  background-color: #ffffff;
  position: relative;
  margin-bottom: 24px;
  position: relative;
}
.service_name_ttl{
     height: 32px;
  opacity: 0.8;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
}

.input_service{
    width: 952px;
    height: 24px;
    background-color: #ffffff;
    border: solid 1px #ced4da;
    padding: 8px;
    color:rgba(26, 42, 83, 0.5);
    margin-top:8px;
    
}
.img_ttl{
  width: 54px;
  height: 32px;
  opacity: 0.8;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
  margin-top:24px;
}
.add_img{
    cursor: pointer;
    width: 94px;
  height: 52px;
  border-radius: 6px;
  background-color: #ffffff;
  border: solid 1px #b3b6c9;
  line-height: 52px;
  font-size: 12px;
}

.service_info_ttl{
    width: 160px;
  height: 32px;
  opacity: 0.8;
  font-family: NotoSansCJKkr;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
  margin-top:24px;
}

textarea{
   width: 952px;
  height: 78px;
  padding: 8px;
  background-color: #ffffff;
  border: solid 1px #ced4da;
}

.category_ttl{
     width: 160px;
  height: 32px;
  opacity: 0.8;
  font-family: NotoSansCJKkr;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
  margin-top:24px;
}

.file_ttl{
   
  height: 32px;
  opacity: 0.8;
  font-family: NotoSansCJKkr;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
  margin-top:24px;
}

.file{
     width: 576px;
  height: 40px;
  background-color: #ffffff;
  border: solid 1px #c1d1f7;
}
.file>img{
     width: 24px;
  height: 24px;
  float: right;
  margin-top:8px;
  margin-right:8px;
}
.file>input{
    margin: 8px;
}

.remove{
    cursor: pointer;
    width: 103px;
    height: 40px;
    border-radius: 28px;
    background-color: #ffffff;
    border: solid 1px rgba(26, 47, 83, 0.5); 
    text-align: center;
    line-height: 40px;
    opacity: 0.5;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: bold;
    color: #1a2f53;
    position: absolute;
    right:24px;
    bottom:32px;
}


.serive_show_ttl{
   margin-left: 8px;
   height: 32px;   
   opacity: 0.7; 
   font-size: 17px;
   font-weight: bold; 
   line-height: 1.65;
   letter-spacing: -0.3px;
   color: #1a2f53;
}
.service_img_con{
    margin: 24px auto;
    text-align: center;
}
.service_text{
    width: 968px; 
    font-family: NotoSansCJKkr;
    font-size: 14px; 
    line-height: 1.86;
    letter-spacing: -0.1px;
    color: #1a2a53;
    margin-left: 8px;
}
.hr{
    width: 962px;
    height: 1px;
    border-top: #c1d1f7;
    margin-top:16px;
    margin-bottom: 8px;
}
.file_show>span{
    font-size: 12px;
    line-height: 1.83;
    color: #1a2a53;
    float: left;
    margin-top: 10px;
    margin-left: 2px;

}
.file_show{
     width: 280px;
  height: 40px;
  background-color: #f1f6ff;
  border: solid 1px #1b49f4;
}
.file_show>img{
    float: left;

}


</style>
