<template>
    <div id="make_clip_home">
        <Header></Header>
        <div id="make_clip_con">
            <div id="up_clip" class="make_seg">
                <img id="add_thumb" style="cursor:pointer" src="/static/img/add_thumb.jpg">
                <input id="input_title" type="text" placeholder="타이틀을 입력하세요">
                
                <div id="sub_ttl">
                            <span class="date">2018.08.08</span>|
                            <span class="name">게시자명</span>|
                            <span class="duration">00:20:35</span> <input type="file" id="img" style="opacity:0">      
                    </div>      
                        <div id="heart_con"><img class="heart" src="/static/img/like_p.png"></div>   
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
                <input class="lin"  id="clip_ttl_input" placeholder="초급 개발자.">
                <div id="clip_object">권장수강기간</div>
                <input class="lin"  id="clip_object_input" placeholder="1달">
                <div id="clip_info">패스 소개</div>
                <textarea id="clip_info_input">제목</textarea>             
            </div>

            <div id="add_clip">
                <div id="add_clip_ttl">코스목록</div>
                <div id="add_clip_btn">
                    <img id="plus" src="/static/img/plus.png" style="width:32px;height:32px;">
                    <div id="add_cp">내 코스에서 불러오기</div>
                </div>
                 <div id="course_wr">
                     <div  v-for="r in result" class="course_seg add_course_seg on" :data-id="r.id">
                         <div class="course_ttl">{{r.title}}</div> 
                         <div class="course_sub_text">
                             <span class="date">{{r.created}}</span>|
                    <span  class="name">{{r.name}}</span>|
                    <span   class="duration">{{r.play}}</span></div>                     
                    <div class="number_badge">{{r.index}}</div>
                    </div>
                </div>
            </div>
        </div>
  <div id="back_layer" class="hidden">
        </div>
        <div id="up_link" class="hidden" style="z-index:999">
            <div id="pop_hd">
                <span id="pop_ttl">내 코스 목록</span>
                <span id="x_btn">X</span>
            </div>
            <div id="link_con">
                   <div id="clip_con">
                        <CourseSeg  v-for="course in course_list" :course="course" v-if="course != undefined" :data-id="course.id" ></CourseSeg>
                    </div>             
                        <div id="pop_submit">확인</div>
                    </div>
            </div>    
        <div id="bottom_control">
            <div id="control_con">
                <div id="cancel" style="cursor:pointer">취소</div>
                <div id="temp_save"  style="cursor:pointer">임시저장</div>
                <div id="save"  style="cursor:pointer">완료</div>                
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../../common/Header.vue"

import CourseSeg from "./Course.vue"

export default {
 components:{
     Header, CourseSeg
 },
  data:function(){
     return{       
        tag_list:[],
        course_list:[],
        result:[]
    }
 },
 mounted:function(){
    var number_badge=1
    var course_list=[]
    var vue_obj = this
     $(document).ready(function(){
         $(document).on("click","#add_thumb",function(){
             $("#img").click()
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

          $(document).off("click", "#add_clip_btn")
          $(document).on("click", "#add_clip_btn", function(){
            console.log("Asdfas")
            number_badge=1
            if($("#up_link").hasClass("hidden")){
                 $("#up_link").removeClass("hidden")

             $.ajax({
                    url:vue_obj.baseURI+"/vue_get_course_uploaded/",
                    type:"post",
                    data:{"id":localStorage.getItem("id")},
                    success: function(res){
                            console.log(res)
                            vue_obj.course_list = res.course_set.slice()
                            console.log(vue_obj.course_list)
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
         })

        $(document).off("click", ".course_seg")
        $(document).off("click", "#clip_con>.course_seg")
        $(document).on("click", "#clip_con>.course_seg", function(){            
             console.log($(this).attr("data-id"))
             if($(this).hasClass("on")){
                 $(this).removeClass("on")
                 number_badge=0
                 course_list.splice(course_list.indexOf($(this).attr("data-id")),1)
             }
             else{
                 $(this).addClass("on")
                 course_list.push($(this).attr("data-id"))
             }
             
              $(".number_badge").remove()
             for(var k=0; k < course_list.length; k++){
                 $(".course_seg[data-id='"+course_list[k]+"']").append("<div class='number_badge'>"+(k+1)+"</div>")
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
         })

         $(document).on("click", "#temp_save", function(){
               var filter_p_num  = []
              var formData = new FormData();
            $(".filter_p.on_f").each(function(){
                filter_p_num.push($(this).text())
            })
            var course_list=[]
            $(".add_course_seg").each(function(){
                course_list.push($(this).attr("data-id"))
            })
             var title =$("#input_title").val()
            var file1 = document.querySelector('#img');
            var info = $("#clip_info_input").text()
            var object2 = $("#clip_ttl_input").val()
            var object = $("#clip_object_input").val()
            vue_obj.clip=[]
            try{
               var thumb = $("#thumb_file").val().replace(/^.*[\\\/]/, '')
            }
            catch(e){
                var thumb =""
            }
            vue_obj.clip.push({
                "course_list":course_list,
                "filter_p":filter_p_num, "title":title, "object":object, "info":info,"object2":object2,
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
           
            vue_obj.$http.post(`${vue_obj.baseURI}/vue_upload_path/`, formData, {
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
        $(document).off("click","#save")
        $(document).on("click","#save", function(){
              var filter_p_num  = []
              var formData = new FormData();
            $(".filter_p.on_f").each(function(){
                filter_p_num.push($(this).text())
            })
            var course_list=[]
            $(".add_course_seg").each(function(){
                course_list.push($(this).attr("data-id"))
            })
             var title =$("#input_title").val()
            var file1 = document.querySelector('#img');
            var info = $("#clip_info_input").text()
            var object2 = $("#clip_ttl_input").val()
            var object = $("#clip_object_input").val()
            vue_obj.clip=[]
            try{
               var thumb = $("#thumb_file").val().replace(/^.*[\\\/]/, '')
            }
            catch(e){
                var thumb =""
            }
            vue_obj.clip.push({
                "course_list":course_list,
                "filter_p":filter_p_num, "title":title, "object":object, "info":info,"object2":object2,
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
           
            vue_obj.$http.post(`${vue_obj.baseURI}/vue_upload_path/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
                if(result.data.result == "ok"){
                    //정상 등록 되었을떄 처리
                       alert("정상 등록되었습니다.")
                       vue_obj.$router.push("/mypage/channel")
                }                
            })


        })
        $(document).off("click","#pop_submit")
        $(document).on("click","#pop_submit", function(){
                $("#up_link").addClass("hidden")
                                     $("#back_layer").addClass("hidden")
                 $("#back_layer").css("position","fixed!important")
                 $("#back_layer").css("width",0)
                 $("#back_layer").css("height",0)
                 $("#back_layer").css("top","0px")
                 $("#back_layer").css("left","0px")
                if(course_list.length!= 0){
                    $("#add_clip_btn").addClass("hidden")           
                    vue_obj.result=[]
                    console.log(course_list)
                    for(var k =0 ; k< course_list.length; k++){
                        for(var j = 0; j < vue_obj.course_list.length; j++){
                            if (course_list[k] == vue_obj.course_list[j].id  ){
                                console.log("dfdf")
                                vue_obj.course_list[j].index= k+1
                                vue_obj.result.push(vue_obj.course_list[j])
                            }
                        }
                    }
                }
         })
     })
 }
}
</script>
<style scoped>

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

.course_sub_text{
     opacity: 0.7;
  font-size: 12px;
  line-height: 1.83;
  color: #1a2a53;
  position: absolute;
  top:50px;
  left:56px;
}


.course_seg{
    position: relative;
}

#course_wr{
    padding-top:94px;
    padding-bottom:40px;
    height: auto;
    overflow: auto;
}
#course_wr>.course_seg{
    width: 968px;
    height: 96px;
    background-color: #e7edfc;
    border: solid 1px #c1d1f7;
}
#course_wr>.course_seg>.course_ttl{
    left:56px;
    width: 319px;
  height: 28px;
  font-size: 17px;
  font-weight: bold;
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
  position: absolute;
  top:18px;
  left:56px;
}




.number_badge{
    position: absolute;
    top:36px;
    height: 24px;
    left:20px;
    text-align: center;
    width:24px;
    height: 24px;;
    line-height: 24px;
    background-color: #1a2f53;
    color:#fff;
    border-radius: 20px;
}

.course_seg.on{
    background-color: #e7edfc!important;
}
.course_seg.on>.course_ttl{
    left:56px;
}
.course_seg.on>.course_sub_text{

left:56px;
}

.course_seg{
    width:968px!important;
    margin-bottom:16px;
    margin-left: 24px;
}
.course_seg.on{
    background-color: #e7edfc!important;
}
.course_seg>.heart{
    display: none;
}
.course_seg>.percent{
    display: none;
}
.course_seg>.progress{
    display: none;
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
    margin-bottom:48px;
}
#pop_submit:hover{
    background-color: #1b49f4;
    color:#fff
}


#clip_con{
    margin-top:16px;
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

#add_clip_btn{
    cursor: pointer;
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
    left:492px;
}
#add_cp{
    position: absolute;
    top:56px;
    left:447px;
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
    min-height:188px;
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

#heart_con{
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
