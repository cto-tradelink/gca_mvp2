<template>
    <div id="make_clip_home">
        <Header></Header>
        <div id="make_clip_con">
            <div id="up_clip" class="make_seg">
                <img id="add_thumb"  style="cursor:pointer; width:281px; height:165px;"  src="/static/img/add_thumb.jpg">
       
                <input type="file" id="file_img" v-on:change="previewFile"  style="opacity:0">
                <input id="input_title" type="text"  placeholder="타이틀을 입력하세요">
                <div id="sub_ttl">
                            <span class="date">2018.08.08</span>|
                            <span class="name">게시자명</span>|
                            <span class="duration">00:20:35</span>           
                    </div>      
                        <div id="heart_con_"><img class="heart_" src="/static/img/like_p.png"></div>   
                        <div class="progress"><div class="bar"></div></div> 
                        <div id="percent">100%</div>  
            </div>
            
            <div id="select_filter_p">
                <div id="filter_p_title">필터선택</div>
                <div id="filter_p_con">
                   <span v-for="f in tag_list" class="filter_p">#  {{f.name}}</span>
                </div>
            </div>

            <div id="form">
                <div id="clip_ttl">추천 수강대상</div>
                <input class="lin" id="clip_ttl_input" placeholder="초급 개발자.">
                <div id="clip_object">권장수강기간</div>
                <input class="lin"  id="clip_object_input" placeholder="1달">
                <div id="clip_info">코스 소개</div>
                <textarea id="clip_info_input">제목</textarea>
             
            </div>

            <div id="add_clip">
                <div id="add_clip_ttl">강의목록</div>
                <div id="add_clip_btn">
                    <img id="plus" src="/static/img/plus.png" style="width:32px;height:32px;">
                    <div id="add_cp">내 강의에서 불러오기</div>
                </div>
                <div id="clip_wr">
             <div class="add_clip_seg_m" v-for="clip in result" :data-id="clip.id">
                    <div class="check">{{clip.index}}</div>
                    <div class="clip_info">
                        <img :src=" clip.thumb "  class="clip_img">
                        <div class="text_con">
                            <div class="clip_ttl">{{clip.title}}</div>
                            <div class="sub_text">
                                <span>{{clip.created}}</span>|
                                <span>{{clip.user}}</span>|
                                <span>{{clip.play}}</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     <div id="back_layer" class="hidden">
        </div>
        <div id="up_link" style="z-index:999" class="hidden">
            <div id="pop_hd">
                <span id="pop_ttl">내 강의 목록</span>
                <span id="x_btn">X</span>
            </div>
            <div id="link_con">
                   <div id="clip_con">
                   <ClipSeg class="clip_seg_m" :data-id="clip.id" v-for="clip in clip_seg_m" :clip="clip" v-if="clip != undefined" ></ClipSeg>    
                  
                   </div>             
                <div id="pop_submit">확인</div>
            </div>
        </div>

        <div id="bottom_control">
            <div id="control_con">
                <div id="cancel" style="cursor:pointer">취소</div>
                <div style="cursor:pointer" id="temp_save">임시저장</div>
                <div style="cursor:pointer" id="save">완료</div>                
            </div>
        </div>        
    </div>
</template>

<script>
import Header from "../../common/Header.vue"
import ClipSeg from "./Clip.vue"
import { setTimeout } from 'timers';

export default {
 components:{
     Header, ClipSeg
 },
methods:{
        previewFile:function() {
    var preview = document.getElementById('add_thumb');
     var file    = document.getElementById('file_img').files[0];
     var reader  = new FileReader();
    reader.addEventListener("load", function () {
    preview.src = reader.result;
    }, false);

     if (file) {
      reader.readAsDataURL(file);
  }
  
},

},

 data:function(){
     return{
         clip_seg_m:[],
             tag_list:[],
             result:[]
     }
 },
 mounted:function(){
     var vue_obj =this
     var number_badge=1
     var clip_list=[]
     $(document).ready(function(){
         $(document).on("click","#cancel", function(){
           
         })
       
       $(document).on("click","#add_thumb",function(){
           $("#file_img").click()
       })

     $(document).off("click",".filter_p")
        $(document).on("click",".filter_p", function(){
            if($(this).hasClass("on_f")){
                $(this).removeClass("on_f")
            }
            else{
                $(this).addClass("on_f")
            }
        })
        $.ajax({
            url:vue_obj.baseURI+"/vue_get_lec_tag/",
            type:"GET",
            success:function(res){
                console.log(res)
             vue_obj.tag_list = res.tag.slice()
            
            }
        })

         $(document).off("click","#pop_submit")
         $(document).on("click","#pop_submit", function(){
                $("#up_link").addClass("hidden")
                     $("#back_layer").css("position","fixed!important")
                 $("#back_layer").css("width",0)
                 $("#back_layer").css("height",0)
                 $("#back_layer").css("top","0px")
                 $("#back_layer").css("left","0px")
                vue_obj.result=[]
                if(clip_list.length!= 0){
                    $("#add_clip_btn").addClass("hidden")   
                    console.log(clip_list)               
                    for(var k =0 ; k< clip_list.length; k++){
                        for(var j=0; j < vue_obj.clip_seg_m.length; j++){
                            if (vue_obj.clip_seg_m[j].id == clip_list[k]){
                                vue_obj.clip_seg_m[j].index = k+1
                                vue_obj.result.push(vue_obj.clip_seg_m[j])
                            }
                        }                  
                    }
                }
         })
         $(document).off("click", "#add_clip_btn")
         $(document).on("click", "#add_clip_btn", function(){
            if($("#up_link").hasClass("hidden")){
                 $("#up_link").removeClass("hidden")
                 console.log("here")
                $.ajax({
                    url:vue_obj.baseURI+"/vue_get_clip_uploaded/",
                    type:"post",
                    data:{"id":localStorage.getItem("id")},
                    success: function(res){
                            console.log(res)
                            vue_obj.clip_seg_m = res.clip.slice()
                    }
                })
                  $("#back_layer").removeClass("hidden")
                 $("#back_layer").css("position","fixed!important")
                 $("#back_layer").css("width",$(window).width())
                 $("#back_layer").css("height",$(window).height())
                 $("#back_layer").css("top","0px")
                 $("#back_layer").css("left","0px")
           
             }
             else{
                 $("#up_link").addClass("hidden")
                         $("#back_layer").addClass("hidden")
                 $("#back_layer").css("position","fixed!important")
                 $("#back_layer").css("width",0)
                 $("#back_layer").css("height",0)
                 $("#back_layer").css("top","0px")
                 $("#back_layer").css("left","0px")
             }
         })
          
          $(document).off("click", "#x_btn")
          $(document).on("click", "#x_btn", function(){
               if($("#up_link").hasClass("hidden")){
                 $("#up_link").removeClass("hidden")
             }
             else{
                 $("#up_link").addClass("hidden")
                                      $("#back_layer").addClass("hidden")
                 $("#back_layer").css("position","fixed!important")
                 $("#back_layer").css("width",0)
                 $("#back_layer").css("height",0)
                 $("#back_layer").css("top","0px")
                 $("#back_layer").css("left","0px")
             }
         }
         )


          $(document).on("click", "#temp_save", function(){
             var filter_p_num  = []
              var formData = new FormData();
            $(".filter_p.on_f").each(function(){
                filter_p_num.push($(this).text())
            })
            var clip_list=[]
            $(".add_clip_seg_m").each(function(){
                clip_list.push($(this).attr("data-id"))
            })
            var title =$("#input_title").val()
            var file1 = document.querySelector('#file_img');
            var info = $("#clip_info_input").text()
            var object = $("#clip_object_input").val()
            var object2 = $("#clip_ttl_input").val()
            vue_obj.clip=[]
            try{
               var thumb = $("#thumb_file").val().replace(/^.*[\\\/]/, '')
            }
            catch(e){
                var thumb =""
            }
            vue_obj.clip.push({
                "clip_list":clip_list,
                "filter_p":filter_p_num, "title":title, "object":object, "info":info,
                "object2":object2,
                "img_name": thumb,
                "user_id":localStorage.getItem("id")
            })       
            console.log(vue_obj)
            try{
            formData.append("file_1", file1.files[0]);
            }
            catch(e){}
            formData.append('json_data', JSON.stringify(vue_obj.clip[0]));    
            console.log(formData)
           
            vue_obj.$http.post(`${vue_obj.baseURI}/vue_upload_course/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
                if(result.data.result == "ok"){
                    //정상 등록 되었을떄 처리
                    alert("임시 저장 되었습니다.")
                }                
            })

          })
          
          $(document).off("click", "#save")
          $(document).on("click", "#save", function(){
             var filter_p_num  = []
              var formData = new FormData();
            $(".filter_p.on_f").each(function(){
                filter_p_num.push($(this).text())
            })
            var clip_list=[]
            $(".add_clip_seg_m").each(function(){
                clip_list.push($(this).attr("data-id"))
            })
            var title =$("#input_title").val()
            var file1 = document.querySelector('#file_img');
            var info = $("#clip_info_input").text()
            var object = $("#clip_object_input").val()
            var object2 = $("#clip_ttl_input").val()
            vue_obj.clip=[]
            try{
               var thumb = $("#file_img").val().replace(/^.*[\\\/]/, '')
            }
            catch(e){
                var thumb =""
            }
            vue_obj.clip.push({
                "clip_list":clip_list,
                "filter_p":filter_p_num, "title":title, "object":object, "info":info,
                "object2":object2,
                "img_name": thumb,
                "user_id":localStorage.getItem("id")
            })       
            console.log(vue_obj)
            try{
            formData.append("file_1", file1.files[0]);
            }
            catch(e){}
            formData.append('json_data', JSON.stringify(vue_obj.clip[0]));    
            console.log(formData)
           
            vue_obj.$http.post(`${vue_obj.baseURI}/vue_upload_course/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
                console.log(result)
                if(result.data.result == "ok"){
                    //정상 등록 되었을떄 처리
                    alert("정상 등록되었습니다.")
                    vue_obj.$router.push("/mypage/channel")
                }                
            })

          })

         $(document).off("click", ".clip_seg_m")
         $(document).on("click", ".clip_seg_m", function(){            
             console.log($(this).attr("data-id"))
             if($(this).hasClass("on")){
                 $(this).removeClass("on")
                 
                 number_badge=0
                 clip_list.splice(clip_list.indexOf($(this).attr("data-id")),1)
             }
             else{
                 $(this).addClass("on")
                 clip_list.push($(this).attr("data-id"))
             }
              console.log(clip_list)
              $(".number_badge").remove()
             for(var k=0; k < clip_list.length; k++){
                 $(".clip_seg_m[data-id='"+clip_list[k]+"']").append("<div class='number_badge'>"+(k+1)+"</div>")
             }
         })
     })
 }
}
</script>

<style scoped>
#back_layer{
    position: absolute;
    z-index: 99999;
    background-color: rgba(26, 47, 83, 0.8);
}

.filter_p{
    display: inline-block;
    margin-right: 10px;
}
.on_f.filter_p{
    cursor: pointer;
    display: inline-block;
    border-radius: 20px;
    padding: 0px 16px;
    height: 40px;
    background-color: #1b66f4;
    opacity: 0.7;
    font-size: 14px;
    letter-spacing: -0.1px;
    color: #fff;
    line-height: 40px;
}
.add_clip_seg_m{
    margin-bottom:16px;
    overflow: -webkit-paged-x
}
.check{
    text-align: center;
    color: #fff;
    background-color: #1a2f53!important;
    border:none!important;
}
#clip_wr{
    padding-top:94px;
    padding-bottom:40px;
    height: auto;
    overflow: auto;

}
.add_clip_seg_m:nth-child(1){
  
}

.clip_ttl{
    width: 500px;
    height: 28px;
    font-size: 17px;
    line-height: 1.65;
    letter-spacing: -0.3px;
    color: #1a2f53;
    position: absolute;
    top: 21px;
    left:188px;
}

.sub_text{
    opacity: 0.7;
    font-size: 12px;
    line-height: 1.83;
    letter-spacing: normal;
    color: #1a2a53;
    top:53px;
    position: absolute;
    left: 188px;
}
.sub_text>span{
    display: inline-block;
    margin: 0px 8px;
}
.sub_text>span:nth-child(1){
    margin-left: 0px;
}
.clip_img{
    float: left;
     width: 164px;
  height: 94px;
}
.text_con{
    float: left;
}
.clip_info{
    position: relative;
    float: left;
    margin-left: 16px;
    border: solid 1px #e7edfc;
    width:924px;
}
.check{
    float: left;
    width: 24px;
    height: 24px;
    background-color: #f54b94;
    border: solid 1px #f54b94;
    margin-top: 36px;
    border-radius: 12px;

}
.add_clip_seg_m{
       width:968px;
    height: auto;
    margin-left: 24px;
    margin-bottom: 16px;
}

.number_badge{
    position: absolute;
    top:24px;
    height: 24px;
    right:24px;
    text-align: center;
    width:24px;
    height: 24px;;
    line-height: 24px;
    background-color: #1a2f53;
    color:#fff;
    border-radius: 20px;
}

.clip_seg_m{
    position: relative;
    float: left;
    width:484px!important;
    margin-left: 10px;
    margin-top:16px;
    cursor: pointer;
    background-color: #fff;
}
.clip_seg_m.on{
    background-color: #e7edfc!important;
}
.clip_seg_m>.text_con>.heart_{
    display: none;
}



.clip_seg_m>.text_con{
    width:319px!important;
}

#link_input{
     width: 411px;
  height: 56px;
  border: solid 1px #ced4da;
  margin-top:40px;
  margin-left:80px;
  padding-left: 20px;
}
#pop_submit{
    width: 74px;
    height: 40px;
    border-radius: 28px;
    background-color: #ffffff;
     border: solid 1px #1b66f4;
     text-align: center;
     height: 38px;
     font-size: 14px;
  font-weight: bold;
  line-height: 38px;
  letter-spacing: -0.1px;  
  color: #1b49f4;
  cursor: pointer;
  margin-top:40px;
  margin-left:471px;
}
#pop_submit:hover{
background-color: #1b49f4;
color:#fff
}



#pop_ttl{
    display: inline-block;
    float: left;
    line-height: 56px;
    margin-left: 24px;
}
#x_btn{
    display: inline-block;
    float: right;
    line-height: 56px;
    margin-right: 24px;
    cursor: pointer;
}

#pop_hd{
    width:100%;
    height: 56px;
    border-bottom:1px solid   #e7edfc;
}


#clip_con{
    overflow-y: scroll;
    height:304px;
    width: 1016px;
}
#link_con{
    min-height:424px;
    width: 1016px;
}
#up_link{
    width:1016px;
    left:50%;
    margin-left: -508px;
    position: fixed;
    border:1px solid   #e7edfc;
    top: 250px;
    min-height: 281px;
    background-color: #ffffff;
}


#cancel{
    float: left;
    width: 118px;
  height: 56px;
  opacity: 0.7;
  background-color: #4f5478;
    line-height: 56px;
    text-align: center;color: #fff
}
#temp_save{
    float: left;
    width: 119px;
  height: 56px;
  opacity: 0.7;
  background-color: #28aeff;
  line-height: 56px;
  text-align: center;color: #fff
}
#save{
    width: 118px;
  height: 56px;
  background-color: #b3b6c9;
  float: right;
  text-align: center;
  color: #fff;
  line-height: 56px;
}

#control_con{
    width: 1224px;
    height: 56px;
    margin:0px auto;
}
#bottom_control{
    margin-top:303px;
    width: 100%;
    height: 56px;
    background-color: rgba(206,212,218,0.5);
}
#plus{
    position: absolute;
    top:16px;
    left:468px;
}
#add_cp{
    position: absolute;
    top:56px;
    left:423px;
    font-size: 14px;
  font-weight: bold;
  line-height: 1.86;
  letter-spacing: -0.1px;

  color: #1b49f4;
}
#add_clip_ttl{
    font-size: 17px;
    font-weight: bold;
    line-height: 1.65;
    letter-spacing: -0.3px;
    color: #1a2f53;
    position: absolute;
    top:24px;
    left:24px;
}
#add_clip{
     width: 1016px;
  min-height: 200px;
  background-color: #ffffff;
  position: relative;
  margin-top: 24px;;
}
#add_clip_btn{
      width: 968px;
  height: 96px;
  background-color: #ffffff;
  border: solid 1px #c1d1f7;
  position: absolute;
  top:60px;
  left: 24px;
  cursor: pointer;
}
#percent{
  height: 26px;
  font-family: Rubik;
  font-size: 25px;
  font-weight: 300;
  line-height: 1.04;
  letter-spacing: -0.2px;
  color: #a0a3bc;
  position: absolute;
  top:160px;
  left: 320px;
}

#heart_con_{
     width: 24px;
  height: 24px;
  position: absolute;
  top:89px;
  right: 24px;;
}
.progress{
     width: 672px;
  height: 4px;
  background-color: #f54b94;
  position: absolute;
  top:146px;
  left: 320px;
}


#add_thumb{
    position: absolute;
    top:24px;
    left: 24px;
}
#input_title{
    width: 660px;
    height: 56px;
    border: solid 1px #ced4da;
    padding-left:20px;
    font-size: 24px;
    letter-spacing: -0.6px;
    color: #1a2f53;
    line-height: 56px;
    position: absolute;
    top:24px;
    left: 312px;
    margin:0px;
}
#sub_ttl{
    width: 600px;
  height: 26px;
  font-size: 14px;
  line-height: 1.86;
  letter-spacing: -0.1px;
  color: #1a2a53;
  position: absolute;
  top: 88px;
  left:320px;

}
#sub_ttl>span{
    display: inline-block;
    margin: 0px 12px;
}
#sub_ttl>span:nth-child(1){
    margin-left: 0px;
}



textarea{
     width: 968px;
  height: 110px;
  border: solid 1px #ced4da;
    position: absolute;
    top:268px;
    left: 24px;;
   
}
#clip_ttl_input{
    width: 431px;
  height: 56px;
  border: solid 1px #ced4da;
  line-height: 56px;
  font-size: 14px;
  letter-spacing: -0.1px;
  color: rgba(26, 42, 83, 0.5);
  position: absolute;
  top:52px;
  left: 24px;;
  margin: 0px;
}
#clip_object_input{
     width: 431px;
  height: 56px;
  border: solid 1px #ced4da;
  line-height: 56px;
  font-size: 14px;
  letter-spacing: -0.1px;
  color: rgba(26, 42, 83, 0.5);
  position: absolute;
  top:160px;
  left: 24px;;
   margin: 0px;
}

#clip_ttl, #clip_object, #clip_info{
    width: 124px;
    height: 26px;
    font-size: 17px;
    font-weight: bold;
    line-height: 1.65;
    letter-spacing: -0.3px;
    color: #1a2f53;
    position: absolute;
    left:24px;
    }
#clip_ttl{
    top:16px;
   }
#clip_object{
    top:124px;
}
#clip_info{
    top:232px;
}

#form{
    margin-top:24px;
    position: relative;
    width: 1016px;
    height: 416px;
    background-color: #ffffff;
}

#filter_p_con{
    position: absolute;
    top:68px;
    left: 24px;
}
.filter_p{
    cursor: pointer;
    display: inline-block;
    border-radius: 20px;
    padding: 0px 16px;
    height: 40px;
    background-color: #f5f8ff;
    opacity: 0.7;
    font-size: 14px;
    letter-spacing: -0.1px;
    color: #1a2a53;
    line-height: 40px;
}

#filter_p_title{
   width: 107px;
  height: 28px;
  font-family: NotoSansCJKkr;
  font-size: 17px;
  font-weight: bold;
 
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
    position: absolute;
    top:24px;
    left: 24px;
}

#select_filter_p{
    margin-top: 24px;
    width: 1016px;
    height: 140px;
    background-color: #ffffff;
    position: relative;
}
#up_thumb_ttl{
    height: 26px;
    font-size: 14px;
    line-height: 1.86;
    letter-spacing: -0.1px;
    color: #1a2a53; 
    position: absolute;
    top:44px;
    left: 24px;
}
#up_thumb_file{
    width: 431px;
    height: 56px;
    border: solid 1px #ced4da;
    position: absolute;
    top:24px;
    left: 208px;
}
.lin{
    border: none;
    margin-top:15px;
    margin-left: 16px;
}
#thumb_cap{
    width: 500px;
    height: 25px;
    font-size: 12px;
    line-height: 2.08;
    color: #a0a3bc;
    position: absolute;
    top:88px;
    left:208px;
}

#up_thumb{
    margin-top:16px;
    position: relative;
    width: 1016px;
    height: 137px;
    background-color: #ffffff;
}
#up_ttl{
    height: 26px;
    font-size: 14px;
    line-height: 1.86;
    letter-spacing: -0.1px;
    color: #1a2a53;
    top:31px;
    left:44px;
    position: absolute;
}

#up_con{
    position: absolute;
    top:24px;
    left:208px;
}

#direct_up{
    width: 95px;
    height: 38px;
    border-radius: 28px;
    background-color: #ffffff;
    border: solid 1px #1b66f4;
    line-height: 38px;
    text-align: center;
    display: inline-block;
    color:#1b66f4;
    margin-right: 16px;
    cursor: pointer;
}
#link_up{
    width: 101px;
    height: 40px;
    border-radius: 28px;
    background-color: #ffffff;
    border: solid 1px #1b66f4;
    line-height: 38px;
    text-align: center;
    color: #1b66f4;
    display: inline-block;
    margin-left: 16px;
    cursor: pointer;
}



#make_clip_con{
    width:1016px;
    margin: 0px auto;
}
#up_clip{
    margin-top:56px;
    width: 1016px;
    height: 211px;
    background-color: #ffffff;
    position: relative;
}
</style>
