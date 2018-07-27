<template>
    <div>
        <div id="page_ttl">강좌 관리하기</div> 
        <div id="upload_clip">강의 등록</div>
        <div id="channel_navi">
            <ul>
                <li data-target="all" class="on">전체</li>
                <li data-target="clip_con">강의</li>
                <li data-target="course_con">코스</li>
                <li data-target="path_con">패스</li>
            </ul>    
        </div>    
        <div id="clip_con" class="lec_con">
            <div class="channel_con_title" style="margin-top:25px;">강의</div>
            <div id="clip_wrp" style="clear:both; margin-top:16px;">
                <div class="" style="overflow:-webkit-paged-y">
                    <ClipSeg v-for="clip in clip_list" :clip="clip" style=""></ClipSeg>
                </div>
                <div id="clip_more" class="more">더보기</div>
            </div>
        </div>
        <div id="course_con" class="lec_con">
            <div class="channel_con_title">코스</div>
                <div id="course_wrp">
                    <CourseSeg  v-for="course in course_list" :course="course"></CourseSeg>                    
                </div>
            <div id="course_more" class="more">
                더보기
            </div>
        </div>
        <div id="path_con" class="lec_con">
            <div class="channel_con_title" style="margin-bottom:16px;">패스</div>
                <div id="path_wrp">
                    <PathSeg  v-for="path in path_list" :path="path"></PathSeg>
                </div>

            <div id="path_more" class="more">더보기</div>
        </div>       
        
    </div>
</template>

<script>
import ClipSeg from "./Clip.vue"
import CourseSeg from "./Course.vue"
import PathSeg from "./Path.vue"
var btn = "clip"
export default {
    components:{
        ClipSeg,CourseSeg,PathSeg
    },
    data:function(){
        return{
            clip_list_origin:[],
            path_list_origin:[],
            course_list_origin:[],
            clip_list:[
                ],
            course_list:[
                ],
            path_list:[
                ]  
        }
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){

            $(document).on("click","#upload_clip", function(){
                if(btn == "clip") vue_obj.$router.push("/make_clip")
                if(btn == "course") vue_obj.$router.push("/make_course")
                if(btn == "path") vue_obj.$router.push("/make_path")
            } )
            $.ajax({
                url:vue_obj.baseURI + "/vue_get_manager_lecture?id="+localStorage.getItem("id"),
                type:"get",
                success:function(res){
                    console.log(res)
                    vue_obj.clip_list = res.results.clip_list.slice(0,3)
                    vue_obj.path_list = res.results.path_list.slice(0,3)
                    vue_obj.course_list = res.results.course_list.slice(0,3)
                    vue_obj.clip_list_origin = res.results.clip_list.slice()
                    vue_obj.path_list_origin = res.results.path_list.slice()
                    vue_obj.course_list_origin = res.results.course_list.slice()

                }
            })
            $(document).on("click",".more:eq(0)", function(){
                $("#channel_navi>ul>li:eq(1)").click()
            })
            $(document).on("click",".more:eq(1)", function(){
                $("#channel_navi>ul>li:eq(2)").click()
            })
            $(document).on("click",".more:eq(2)", function(){
                $("#channel_navi>ul>li:eq(3)").click()
            })
            
            $(document).on("click","#channel_navi>ul>li", function(){
                $("#channel_navi>ul>li").removeClass("on")
                $(this).addClass("on")
                $(".lec_con").addClass("hidden")
                $(".lec_con").css("margin-top","32px")                
                $("#"+$(this).attr("data-target") ).removeClass("hidden")               
                $(".channel_con_title").addClass("hidden")
                $(".more").addClass("hidden")
                vue_obj.clip_list = vue_obj.clip_list_origin
                vue_obj.path_list = vue_obj.path_list_origin
                vue_obj.course_list = vue_obj.course_list_origin
                if($(this).attr("data-target") == "clip_con"){
                    $("#upload_clip").text("강의 등록")
                    btn="clip"
                }
                if($(this).attr("data-target") == "course_con"){
                    $("#upload_clip").text("코스 등록")
                    btn="course"
                }
                if($(this).attr("data-target") == "path_con"){
                    $("#upload_clip").text("패스 등록")
                    btn="path"
                }
                if($(this).attr("data-target") =="all" ){
                     btn="clip"
                    $(".lec_con").removeClass("hidden")
                    $(".channel_con_title").removeClass("hidden")
                    $(".lec_con").css("margin-top","0px")
                    vue_obj.clip_list = vue_obj.clip_list_origin.slice(0,3)
                    vue_obj.path_list = vue_obj.path_list_origin.slice(0,3)
                    vue_obj.course_list = vue_obj.course_list_origin.slice(0,3)   
                    $(".more").removeClass("hidden")
                }
             

            })
            $(".heart").remove()
            $(".percent").remove()
            $(".progress").remove()
            
        })
    },
    updated: function(){
            $(".heart").remove()
            $(".percent").remove()
            $(".progress").remove()
    }
}
</script>

<style scoped>
.op{
    margin-top:0px;
}
#upload_clip{
    cursor: pointer;
}
#page_ttl{
    margin-top:44px;
    font-size: 17px; 
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
}
#upload_clip{
    width: 112px;
  height: 40px;
  background-color: #1b49f4;
  font-size: 14px;
  font-weight: bold;
    border-radius: 30px;
 margin-left:904px;
  line-height: 1.86;
  letter-spacing: -0.1px;
  text-align: center;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  margin-bottom:23px;
}
#course_wrp{
    margin-top: 16px;
}
.course_seg{
    margin-bottom: 16px;
}

#clip_more,#course_more, #path_more{
    opacity: 0.8;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.86;
  letter-spacing: -0.1px;
  text-align: center;
  color: #1b49f4;
  display: inline-block;
margin-left: 485px;
cursor: pointer;
}
.clip_seg{
    margin-right:19px;
    float: left;
    margin-bottom:19px;
}
.clip_seg:nth-child(2n){
    margin-right:0px;
}
.clip_wrp{

    overflow: -webkit-paged-y;
}
#channel_navi{
    width: 1016px;
  height: 48px;
  background-color: #ffffff;
}

#channel_navi>ul>li{
    float: left;
    display: inline-block;
    line-height: 47px;
    border-bottom:2px solid transparent;
    cursor: pointer;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 14px;
  font-weight: bold;

  letter-spacing: -0.1px;
  text-align: center;
  color: rgba(26, 42, 83, 0.5);
}
#channel_navi>ul>li:hover, #channel_navi>ul>li.on {
    border-bottom: 2px solid #1b66f4 ;
     font-weight: bold;
  font-style: normal;
  font-stretch: normal;
    letter-spacing: -0.1px;
  text-align: center;
  color: #1a2a53;
}


</style>
