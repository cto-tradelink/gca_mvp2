<template>
    <div id="clip_view">
        <Header></Header>
        <div id="content">
        <div id="view_con">
            <div id="view_left" >
                <div id="view_hd">
                    <div id="ttl">{{con.title}}</div>
                    <div id="sub_ttl">
                            <span class="date">{{con.created}}</span>|
                            <span class="name">{{con.user}}</span>|
                            <span class="duration">{{con.play | get_time_format}}</span>           
                    </div>         
                     
                    <div id="heart_con">
                        <img class="heart" v-if="con.int_clip == 'true'" src="/static/img/like_p.png">
                        <img class="heart" v-else src="/static/img/like_d.png">
                     
                        {{con.int}} </div>   
                </div>
                <div id="view_main">
                    <div id="clip">
                        <div style="margin:24px;padding-top:24px;">
                        <div id="ytplayer"></div>
                        </div>
                    </div>
                    <div id="exp">
                      <div id="exp_object" style="margin:24px;"> 
                            <div class="sub_ttl">
                                추천 수강 대상
                            </div>
                            {{con.info}}
                        </div>
                        <div id="exp_text" style="margin:24px;"> 
                            <div class="sub_ttl">
                                코스 소개
                            </div>
                            
                            {{con.info}}
                        </div>
                    </div>
                    <div id="filter_p_con">                       
                           <div class="filter_p" v-for="t in con.tag"># {{t}}</div>
                         
                    </div>
                </div>
            </div>
            <div id="view_right" >
                <CourseGroup :con="con"></CourseGroup>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import CourseGroup from "./CourseGroup.vue"
import Header from "./common/Header.vue"
export default {
    components:{
        Header,  CourseGroup
    }, 
    data:function(){
        return {
            con:{}
        }
    },
   mounted:function(){
        var vue_obj = this
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
 var player;
  function onYouTubePlayerAPIReady(id) {
    player = new YT.Player('ytplayer', {
        height: '500',
        width: '866',
        videoId: id,
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
  }
 var write_log
    function onPlayerStateChange(event) {
        console.log("event change!")
        if (event.data == YT.PlayerState.PLAYING ) {
           write_log = setInterval(watch_course_history, 6000);// 6초마다 서버에 로그를 저장한다.
        }else {
            clearInterval(write_log)
        }
        if(event.data == YT.PlayerState.ENDED){
            clearInterval(write_log)
        }
      }

    function watch_course_history(){
         $.ajax({
                url:vue_obj.baseURI + "/vue_watch_course_history/",
                type:"post",
                data:{
                    "id":localStorage.getItem("id"),
                    "val" : vue_obj.$route.params.clip,  
                    "course" : vue_obj.$route.params.id,
                    },
                success:function(res){
                    // 강의 수강 기록
                }
            })
        }


        $(document).ready(function(){

            $("#view_right").css("min-height",(window.innerHeight-57))

            $.ajax({
                url:vue_obj.baseURI + "/vue_hit_course_log/",
                type:"post",
                data:{
                    "id":localStorage.getItem("id"),
                    "val" : vue_obj.$route.params.clip,   
                    "course": vue_obj.$route.params.id
                    },
                success:function(res){
                    // 강의 수강 기록
                }
            })
               $(document).off("click","#heart_con")
            $(document).on("click","#heart_con", function(){
                console.log("here")
                if($("#heart_con>img").attr("src").indexOf("_p") != -1){
                    if(confirm("관심 강의에서 삭제하시겠습니까?")){
                        $.ajax({
                            url:vue_obj.baseURI+"/toggle_int_clip/",
                            type:"post", 
                            data:{
                                "id":localStorage.getItem("id"),
                                "val":vue_obj.$route.params.clip
                            },
                            success:function(res){
                                alert("성공적으로 삭제 되었습니다.")
                                $("#heart_con>img").attr("src","/static/img/like_d.png")
                                vue_obj.con.int =  parseInt(vue_obj.con.int)  - 1
                            }
                        })
                    }
                    }
                    else{
                        console.log("add")
                        $.ajax({
                            url:vue_obj.baseURI+"/toggle_int_clip/",
                            type:"post", 
                            data:{
                                "id":localStorage.getItem("id"),
                                "val":vue_obj.$route.params.clip
                            },
                            success:function(res){
                                alert("성공적으로 등록 되었습니다.")
                                $("#heart_con>img").attr("src","/static/img/like_p.png")
                                vue_obj.con.int =  parseInt(vue_obj.con.int)  + 1
                            }
                        })
                    }
                
            })




             $.ajax({
            url:vue_obj.baseURI+"/vue_get_course/",
            type:"POST",
            data:{"id":vue_obj.$route.params.id, "clip":vue_obj.$route.params.clip},
            success:function(res){
                console.log(res)
                    vue_obj.con = res
              // Load the IFrame Player API code asynchronously.

  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
onYouTubePlayerAPIReady(res.youtube)
  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
 
             }
            })
        })
    }
}
</script>

<style scoped>
#view_right{
    background-color: #fff;
}
#exp{
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.86;
    letter-spacing: -0.1px;
    color: #1a2a53;
}
.sub_ttl{
    opacity: 0.8;
    font-family: NotoSansCJKkr;
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.65;
    letter-spacing: -0.3px;
    color: #1a2f53;
}

#filter_p_con{
    margin:24px;
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
#clip_view{
    width: 100%;
    overflow: auto;
}
#content{
    width:1224px;;
    margin: 0px auto;
}
#view_left{
    width: 912px;
    height: auto;
    overflow: auto;
    float: left;
}
#view_right{
    float: left;
    margin-left: 24px;
}
#view_hd{
    width: 912px;
    height: 118px;
    background-color: #ffffff;
    position: relative;
}
#ttl{
    font-size: 24px;
    line-height: 1.67;
    letter-spacing: -0.6px;
    color: #1a2f53;
    position: absolute;
    height: 40px;
    top:20px;
    left:24px;
}
#sub_ttl{
     width: 500px;
  height: 22px;
  opacity: 0.7;
  font-size: 12px; 
  line-height: 1.83;
  color: #1a2a53;
    position: absolute;
    top:68px;
    left: 24px;;
}
#sub_ttl>span{
    display: inline-block;
    margin-right: 8px;
}

#heart_con{
    position: absolute;
    top:74px;
    left:849px;
}
#heart_con>img{
    width: 16px;
  height: 16px;
}

#view_main{
    margin-top:16px;
    width: 912px;
    min-height: 698px;
    background-color: #ffffff;
}




</style>
