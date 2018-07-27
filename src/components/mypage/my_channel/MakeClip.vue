<template>
    <div id="make_clip_home">
        <Header></Header>
        <div id="make_clip_con">
            <div id="page_ttl">강의 등록</div>
            <div id="up_clip" class="make_seg">
                <div id="up_ttl">영상등록</div>
                <div id="up_con">
                    <div id="direct_up" onclick="$('#clip').click()">업로드</div>
                    또는
                    <div id="link_up">링크 등록</div> <div style="display:inline-block" id="result"></div>
                    <input class="in" type="file" id="clip" style="opacity:0"> 
                    <input type="hidden" id="youtube_id" style="opacity:0">        
                    <input type="hidden" id="time" style="opacity:0">                   
                </div>
            </div>
            <div id="up_thumb">
                <div id="up_thumb_ttl">썸네일 이미지 등록</div>
                <div id="up_thumb_file">
                    <input class="in"  id="thumb_file" type="file">
                </div>
                <div id="thumb_cap">390px x 227px 크기의 이미지등록을 권장합니다. 파일 용량 1MB이내, jpeg, jpg, png 파일 가능.</div>
            </div>

            <div id="select_filter_p">
                <div id="filter_p_title">필터선택</div>
                <div id="filter_p_con">
                    <span v-for="f in tag_list" class="filter_p">#  {{f.name}}</span>
                </div>
            </div>

            <div id="form">
                <div id="clip_ttl">제목</div>
                <input class="in"  id="clip_ttl_input" placeholder="영상제목을 입력하세요.">
                <div id="clip_object">추천 수강대상</div>
                <input  class="in"  id="clip_object_input" placeholder="신입디자이너">
                <div id="clip_info">강의설명</div>
                <textarea id="clip_info_input">제목</textarea>
                
            </div>
            <div id="btn_con">
                 <div id="cancel">취소하기</div>
                 <div id="submit">등록하기</div>
            </div>
           
        </div>
        <div id="back_layer" class="hidden">
        </div>
        <div id="up_link" style="z-index:999" class="hidden">
            <div id="pop_hd">
                <span id="pop_ttl">링크 등록</span>
                <span id="x_btn">X</span>
            </div>
            <div id="link_con">
                <input class="in"  id="link_input" type="text">
                <div id="pop_submit">확인</div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../../common/Header.vue"

function youtubeId(url) {
    var tag = "";
    if(url)  {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var matchs = url.match(regExp);
        if (matchs) {
            tag += matchs[7];
        }
            $("#result").html("유튜브 영상 :  <a target='_blank' href='"+url+"')>"+url+"</a>")

        return tag;
    }
    
}

    function convertISO8601ToSeconds(input) {

        var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
        var hours = 0, minutes = 0, seconds = 0, totalseconds;

        if (reptms.test(input)) {
            var matches = reptms.exec(input);
            if (matches[1]) hours = Number(matches[1]);
            if (matches[2]) minutes = Number(matches[2]);
            if (matches[3]) seconds = Number(matches[3]);
            totalseconds = hours * 3600  + minutes * 60 + seconds;
        }

        return (totalseconds);
    }


export default {
 components:{
     Header
 },
 data:function(){
     return{
        clip:[],
        tag_list:[]
     }
 },
 mounted:function(){
    $("body").css("background-color","#f4f7fa")
    $("#gca_content").css("background-color","#f4f7fa")

      var vue_obj = this
     $(document).ready(function(){
     
        console.log(vue_obj.baseURI+"/vue_get_lec_tag")
        $.ajax({
            url:vue_obj.baseURI+"/vue_get_lec_tag/",
            type:"GET",
            success:function(res){
                console.log(res)
             vue_obj.tag_list = res.tag.slice()
            
            }
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
    
 
    //
        $(document).off("click","#submit")
        $(document).on("click","#submit", function(){
           
            
            var formData = new FormData();
            var file1 = document.querySelector('#clip');
            var file2 = document.querySelector('#thumb_file');
            var filter_p_num  = []
            $(".filter_p.on_f").each(function(){
                filter_p_num.push($(this).text())
            })
            var title =$("#clip_ttl_input").val()
            var clip = $("#clip_object_input").val()
            var info = $("#clip_info_input").val()
            var object = $("#clip_object_input").val()
            vue_obj.clip=[]
            vue_obj.clip.push({
                "filter_p":filter_p_num, "title":title, "object":object, "info":info,
                "time":$("#time").val(),
                "youtube_id":youtubeId($("#link_input").val()),
                "file_name":$("#clip").val().replace(/^.*[\\\/]/, ''),
                "img_name":$("#thumb_file").val().replace(/^.*[\\\/]/, ''),
                "user_id":localStorage.getItem("id")
            })       
            console.log(vue_obj)
            formData.append("file_1", file1.files[0]);
            formData.append("file_2", file2.files[0]);
            formData.append('json_data', JSON.stringify(vue_obj.clip[0]));    
            console.log(formData)
           
            vue_obj.$http.post(`${vue_obj.baseURI}/vue_upload_clip/`, formData, {
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
        $(document).on("click","#pop_submit", function(){
                var url_id = youtubeId($("#link_input").val())
                $("#youtube_id").val(url_id);
                 $.ajax({
            url:'https://www.googleapis.com/youtube/v3/videos?id='+url_id+'&part=contentDetails&key=AIzaSyDQt1e_0DUVFiR8288ALtZWyVRlad45-Rc',
            type:"get",
            success:function(res){
                console.log(res)
                alert("강의가 정상 등록되었습니다.");
                console.log(res.items[0].contentDetails.duration)
                $("#time").val(convertISO8601ToSeconds(res.items[0].contentDetails.duration))
                $("#up_link").addClass("hidden")
                  $("#back_layer").addClass("hidden")
                 $("#back_layer").css("position","fixed!important")
                 $("#back_layer").css("width",0)
                 $("#back_layer").css("height",0)
                 $("#back_layer").css("top","0px")
                 $("#back_layer").css("left","0px")
                
                }

        })


               
        })
        $(document).off("click","#link_up")
         $(document).on("click","#link_up",function(){
             if($("#up_link").hasClass("hidden")){
                 $("#up_link").removeClass("hidden")                 

                 $("#back_layer").removeClass("hidden")
                 $("#back_layer").css("position","fixed!important")
                 $("#back_layer").css("width",$(window).width())
                 $("#back_layer").css("height",$(window).height())
                 $("#back_layer").css("top","0px")
                 $("#back_layer").css("left","0px")
             }
             else{
                $("#up_link").addClass("hidden")
                var url_id = youtubeId($("#link_input").val())
                  $("#back_layer").addClass("hidden")
                 $("#back_layer").css("position","fixed!important")
                 $("#back_layer").css("width",0)
                 $("#back_layer").css("height",0)
                 $("#back_layer").css("top","0px")
                 $("#back_layer").css("left","0px")
             }
         })
           $(document).off("click","#x_btn")
          $(document).on("click","#x_btn",function(){
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
    
        })
    
    }
}
</script>



<style scoped>
#cancel{
    width: 100px;
    height: 40px;
    background-color: #4f5478;
    text-align: center;
    line-height: 40px;
    color:#fff;
    float: left;
    border-radius: 30px;
    margin-right: 8px;
    margin-left:508px;
}
#btn_con{

}


#back_layer{
    position: absolute;
    z-index: 99999;
    background-color: rgba(26, 47, 83, 0.8);
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

.filter_p{
    display: inline-block;
    margin-right: 10px;
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
  margin-left:245px;
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

#link_con{
    height:224px;
    width: 564px;
}
#up_link{
    top:300px;
    left:50%;
    margin-left: -282px;
    position: fixed;
    border:1px solid   #e7edfc;
    width: 564px;
    height: 281px;
    background-color: #ffffff;
}
#select_filter_p{
    margin-top:16px;
    margin-bottom:16px;
}
#up_thumb{
    margin-top:16px;
}
#page_ttl{
    opacity: 0.8;
    font-size: 24px;
    color: #1a2f53;
    line-height: 1.33;
    letter-spacing: -1px;
    padding-top: 40px;
    margin-bottom: 32px;
}



#submit{
    width: 100px;
    height: 40px;
    background-color: #c1d1f7;
    color: #fff;
    text-align: center;
    float: left;
  line-height: 40px;
  border-radius: 20px;
  cursor: pointer;
}

textarea{
    position: absolute;
    top:176px;
    left: 208px;;
    width: 912px;
        height: 170px;
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
  top:24px;
  left: 208px;;
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
    top:96px;
    left: 208px;;
    margin: 0px;
}



#clip_ttl, #clip_object, #clip_info{
     opacity: 0.8;
    width: 124px;
    height: 26px;
    font-size: 17px;
    line-height: 1.86;
    letter-spacing: -0.1px;
    color: #1a2f53;
    position: absolute;
    left:44px;
    }
#clip_ttl{
    top:39px;
   }
#clip_object{
    top:111px;
}
#clip_info{
    top:176px;
}

#form{
    position: relative;
    width: 1224px;
    height: 466px;
    background-color: #ffffff;
}

#filter_p_con{
    position: absolute;
    top:24px;
    left: 206px;
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
    height: 26px;
     font-size: 17px;
    line-height: 1.86;
    letter-spacing: -0.1px;
    position: absolute;
    top:30px;
    left: 44px;;
    color:#1a2f53;
    opacity: 0.8;
}

#select_filter_p{
    width: 1224px;
    height: 88px;
    background-color: #ffffff;
    position: relative;
}
#up_thumb_ttl{
    height: 26px;

    line-height: 1.86;
    letter-spacing: -0.1px;
    color: #1a2a53; 
    position: absolute;


  opacity: 0.8;

  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
    top:44px;
    left: 44px;
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
    width: 1224px;
    height: 137px;
    background-color: #ffffff;
}
#up_ttl{
    height: 26px;
  
    line-height: 1.86;
    letter-spacing: -0.1px;
    color: #1a2a53;
    top:31px;
    left:44px;
    position: absolute;

    opacity: 0.8;
    font-size: 17px;
    letter-spacing: -0.3px;
    color: #1a2f53;
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
    color:#1b49f4;
    margin-right: 16px;
    cursor: pointer;
}
#link_up{
    width: 101px;
    height: 40px;
    border-radius: 28px;
    background-color: #ffffff;
    border: solid 1px #1b49f4;
    line-height: 38px;
    text-align: center;
    color: #1b66f4;
    display: inline-block;
    margin-left: 16px;
    cursor: pointer;
}



#make_clip_con{
    width:1224px;
    margin: 0px auto;
}
#up_clip{
    width: 1224px;
    height: 88px;
    background-color: #ffffff;
    position: relative;
}
</style>
