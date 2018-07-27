<template>
    <div id="channel_page">
        <Header></Header>
        <div class="channel_con">
            <div id="filter_con">
                <span class="filter"># 디자인 강의</span>
                <span class="filter"># 개발</span>
                    <span class="filter"># 기획 실무</span>
                    <span class="filter"># 회계</span>
                    <span class="filter"># 프론트 엔드</span>
                    <span class="filter"># 법-인사</span>
                    <span class="filter"># 세무</span>
                    <span class="filter"># 데이터 사이언스</span>
                    <span class="filter"># 법-노무</span>
               
            </div>
        </div>
     
     
     <div class="channel_con">
        <div class="title">강의</div>
        <router-link style="position:absolute; top:0px; right:0px;" to="/channel/clip"><div class="more">더보기</div></router-link>
        <div class="clip_con_ch">
             <div class="clip_seg_main seg_main" :data-url="c.id" v-for="c in clip_on">              
                <img class="thumb" :src="c.img">
                <span style="position:absolute; top:195px; right:10px;padding:2px 3px; background-color:#000; color:#fff; font-size:10px;font-weight: bold;line-height: 1.8;">{{c.dur}}</span>
                <div class="text_con">
                    <div class="seg_ttl">{{c.title}}</div>
                    <div class="seg_sub_ttl">{{c.sub}}</div>
                    <div class="hr">
                    </div>
                    <div class="sub_text">
                        <span>{{c.user}}</span>|
                        <span>{{c.date}}</span>
                    </div>
                <div class="heart heart_clip heart_con" data-target="clip"  :data-id="c.id"><img src="/static/img/like_d.png"></div>         
                 </div>
                 
            </div>
            
     </div>
     
     </div>
        <div class="row" style="background-color:#fff; width:100%" >
      <div class="channel_con" style="background-color:#fff; position:relative; height:auto;overflow:auto;">
          
        <div class="title">코스</div>
         <router-link style="position:absolute; top:41px; right:0px;"  to="/channel/course"><div class="more">더보기</div></router-link>
        <div class="clip_con_ch">
            <div class="course_seg_main  seg_main" :data-url="c.entry_point"  v-for="c in course_on">
                  
                <img class="thumb" :src="c.img">
                <span style="position:absolute; top:195px; right:10px;padding:2px 3px; background-color:#000; color:#fff; font-size:10px;font-weight: bold;line-height: 1.8;">{{c.dur}}</span>
               
                <div class="text_con">
                    <div class="seg_ttl">{{c.title}}</div>
                    <div class="seg_sub_ttl">{{c.sub}}</div>
                    <div class="hr">
                    </div>
                    <div class="user"></div>
                    <div class="sub_text">
                        <span>{{c.user}}</span>|
                        <span>{{c.date}}</span>
                    </div>
                <div class="heart_course heart_con heart" data-target="course" :data-id="c.id"><img src="/static/img/like_d.png"></div>         
            
                </div>
                 
            </div>                        
                 
        </div>
      </div> 
     </div>
      <div class="row" style="background-color:#f5f8ff; width:100%" >
      <div class="channel_con" style="background-color:#f5f8ff; position:relative; height:auto;overflow:auto;">
          
        <div class="title">패스</div>
           <router-link style="position:absolute; top:41px; right:0px;"  to="/channel/path"><div class="more">더보기</div></router-link>
        <div class="clip_con_ch">
                                    
            
               <div class="path_seg_main  seg_main" :data-url="clip.entry_point"  v-for="clip in path_on">
                    <img :src="clip.img" style="width:390px; height:227px; float:left">
                    <span style="position:absolute; top:195px; right:10px;padding:2px 3px; background-color:#000; color:#fff; font-size:10px;font-weight: bold;line-height: 1.8;">{{clip.dur}}</span>
               
                        <div class="text_con" style="position:relative">
                         <div class="seg_ttl">{{clip.title}}</div>
                         <div class="seg_sub_ttl">{{clip.sub}}</div>
                         <div class="hr"></div>
                         <div class="sub_text">   
                            <span>{{clip.user}}</span>|
                            <span>{{clip.date}}</span>
                        </div>
                         <div class="heart_path heart_con heart" data-target="path"  :data-id="clip.id"><img src="/static/img/like_d.png"></div>         
                     </div>           
                 </div>     
                 
            </div>           
             
                
            </div>
          
        </div>
     
      </div> 
     
     </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
export default {
    data:function(){
        return{
            clip_on:[],
            course_on:[],
            path_on:[],
               clip:[
              { "entry_point":"/clip/123","id":57 ,"tag":"디자인 강의",  "user":"힘찬", "img":"/static/img/clip_0.jpg", "title":"AWS 기초", "dur":"09:19","date":"2018-07-08" ,"sub":"힘찬이의  aws 교실" },
              {"entry_point":"/clip/18","id":58 ,"tag":"개발" , "user":"AWS 에반젤리스트", "img":"/static/img/clip_1.jpg", "title":"AWS 스케일 확장", "dur":"08:19","date":"2018-06-08" ,"sub":"AWS 에반젤리스트" },
              {"entry_point":"/clip/124" ,"id":59,"tag":"기획 실무" , "user":"AWS 에반젤리스트", "img":"/static/img/clip_3.jpg", "title":"사용례로 알아보는 AWS", "dur":"20:19","date":"2018-08-08" ,"sub":"AWS 에반젤리스트" },
            ],
            course:[
              {"entry_point":"/course/view/4/8" ,"id":8,"tag":"프론트 엔드", "user":"AWS 에반젤리스트", "img":"/static/img/clip_4.jpg", "title":"AWS 로드밸런서", "dur":"39:19","date":"2018-07-08" ,"sub":"AWS 에반젤리스트" },
              {"entry_point":"/course/view/3/7","id":9, "tag":"회계", "user":"AWS 에반젤리스트", "img":"/static/img/clip_4.jpg", "title":"AWS 로드밸런서 2", "dur":"08:59","date":"2018-06-08" ,"sub":"AWS 에반젤리스트" },
              {"entry_point":"/course/view/6/21","id":10, "user":"AWS 에반젤리스트", "img":"/static/img/clip_5.jpg", "title":"AWS VS AZURE", "dur":"60:19","date":"2018-08-08" ,"sub":"AWS 에반젤리스트" },
            ],
            path:[
              {"entry_point":"/path/view/10/6/11" ,"id":7,"tag":"세무" ,"user":"AWS 에반젤리스트", "img":"/static/img/clip_6.jpg", "title":"AWS 하루만에 배우는 워드프레스", "dur":"39:19","date":"2018-07-08" ,"sub":"AWS 에반젤리스트" },
              {"entry_point":"/path/view/10/6/10","id":12, "tag":"데이터 사이언스", "user":"AWS 에반젤리스트", "img":"/static/img/clip_7.jpg", "title":"서버리스 안드로이드 앱", "dur":"08:59","date":"2018-06-08" ,"sub":"AWS 에반젤리스트" },
              {"entry_point":"/path/view/10/6/21","id":1 , "tag":"법-노무", "user":"AWS 에반젤리스트", "img":"/static/img/clip_8.jpg", "title":"Android 기초", "dur":"60:19","date":"2018-08-08" ,"sub":"AWS 에반젤리스트" },
            ]
        }
    },
    components:{
        Header
    },
    updated:function(){
         $(".clip_con_ch").each(function(){
                    console.log($(this).find(".seg_main").length)
                    console.log(parseInt($(this).find(".seg_main").length) === 0)
                    if( parseInt($(this).find(".seg_main").length) === 0 ){
                        $(this).parent().addClass("hidden")
                        console.log(this)
                    }else{
                        console.log("아닌데")
                        $(this).parent().eq(0).removeClass("hidden")
                        
                    }
                })
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){

        $(document).off("click",".clip_seg_main")
         $(document).on("click",".clip_seg_main", function(){
                    vue_obj.$router.push("/clip/"+$(this).attr("data-url"))
                })
        $(document).off("click",".course_seg_main")
         $(document).on("click",".course_seg_main", function(){
                    vue_obj.$router.push($(this).attr("data-url"))
                })
        $(document).off("click",".path_seg_main")        
        $(document).on("click",".path_seg_main", function(){
                    vue_obj.$router.push($(this).attr("data-url"))
                })

           $(document).off("click",".heart")
           $(document).on("click",".heart", function(e){
               console.log("heh")
                var target = this
                 e.preventDefault();
                 e.stopPropagation()
                if(localStorage.getItem("user")!="u"){
                   if( localStorage.getItem("user") == "m" ||localStorage.getItem("user")=="ma"){ alert("관심담기를 할수 없는 계정입니다."); return false; }
                    else alert("로그인을 해주세요."); return false;    
                }
                var t = $(this).attr("data-target")
                if( t == "path")  {var url = "/toggle_int_path/"; var text="패스";}
                else if(t == "course") {var url = "/toggle_int_course/"; var text="코스";}
                else if(t == "clip") {var url = "/toggle_int_clip/"; var text="강의";}
                else if(t == "startup") {var url = "/vue_toggle_interest_st/"; var text="스타트업";}
                else if(t == "sp") {var url = "/vue_toggle_interest_sb/"; var text="지우너사업";}
                
                if($(this).find("img").attr("src").indexOf("_p") != -1){
                    if(confirm("관심 "+text+"에서 삭제하시겠습니까?")){
                        $.ajax({
                            url:vue_obj.baseURI+url,
                            type:"post", 
                            data:{
                                "id":localStorage.getItem("id"),
                                "val":$(target).attr("data-id")
                            },
                            success:function(res){
                                alert("성공적으로 삭제 되었습니다.")
                                $(target).find("img").attr("src","/static/img/like_d.png")
                                                             
                            }
                        })
                    }
                    }
                    else{
                        $.ajax({
                            url:vue_obj.baseURI+url,
                            type:"post", 
                            data:{
                                "id":localStorage.getItem("id"),
                                "val":$(target).attr("data-id")
                            },
                            success:function(res){
                                alert("성공적으로 등록 되었습니다.")
                                 $(target).find("img").attr("src","/static/img/like_p.png")
                              
                            }
                        })
                    }                
            })



            vue_obj.clip_on = vue_obj.clip.slice()
            vue_obj.course_on = vue_obj.course.slice()
            vue_obj.path_on = vue_obj.path.slice()
            $(".menu_top").removeClass("menu_on")
            $(".menu_top:eq(2)").addClass("menu_on")
            $(document).off("click",".filter")
            $(document).on("click",".filter", function(){
                if($(this).hasClass("on"))  $(this).removeClass("on")
                else $(this).addClass("on")

                var filter_list = []
                $(".filter.on").each(function(){
                    filter_list.push($(this).text().replace("# ","").trim())
                })
                vue_obj.clip_on=[]
                for(var k = 0; k< vue_obj.clip.length; k++){
                    for (var j=0; j < filter_list.length; j++){
                    try{
                    if ( vue_obj.clip[k].tag.indexOf(filter_list[j]) != -1 ){
                        vue_obj.clip_on.push(vue_obj.clip[k])
                    }   }catch(e){console.log(e)}

                     }
                }
                  vue_obj.course_on=[]
                for(var k = 0; k< vue_obj.course.length; k++){
                    for (var j=0; j < filter_list.length; j++){
                    try{    
                    if ( vue_obj.course[k].tag.indexOf(filter_list[j]) != -1 ){
                        vue_obj.course_on.push(vue_obj.course[k])
                    }   
                    }catch(e){console.log(e)} 
                     }
                }
                  vue_obj.path_on=[]
                for(var k = 0; k< vue_obj.path.length; k++){
                    for (var j=0; j < filter_list.length; j++){
                    try{
                    if ( vue_obj.path[k].tag.indexOf(filter_list[j]) != -1 ){
                        vue_obj.path_on.push(vue_obj.path[k])
                    }
                    }catch(e){console.log(e)}    
                     }
                }
               if(filter_list.length===0){
                    vue_obj.path_on = vue_obj.path.slice(0)
                    vue_obj.course_on = vue_obj.course.slice(0)
                    vue_obj.clip_on = vue_obj.clip.slice(0)
                   
                }

       

            })
        })
    }
}
</script>

<style scoped>
.clip_seg_main:hover,.course_seg_main:hover, .path_seg_main:hover{
 box-shadow: 0 2px 4px -1px rgba(206, 212, 218, 0.5), 0 0 10px 4px rgba(34, 86, 184, 0.19), 0 -2px 5px 0 rgba(79, 84, 120, 0.26);
}

.clip_seg_main,.course_seg_main,.path_seg_main{
      float: left;
    margin-right: 26px;
    cursor: pointer;
    position: relative;
}

.filter{
    cursor: pointer;
}
.filter.on{
    cursor: pointer;
    color:#fff;
    background-color: #1b66f4!important;
}
.more{
    clear: both;
    width: 56px;
  height: 26px;
  opacity: 0.8;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.86;
  letter-spacing: -0.1px;
  text-align: center;
  color: #1b49f4;

  margin-left:544px;

}
.clip_seg_main, .course_seg_main, .path_seg_main{
    float: left;
    margin-right: 23px;
}
.clip_seg_main:nth-child(3n), .course_seg_main:nth-child(3n), .path_seg_main:nth-child(3n){
    margin-right: 0px;
}

.heart{
    position: absolute;
    top:108px;
    right:23px;
}

.sub_text{
    opacity: 0.7;
    font-size: 12px;
    line-height: 1.83;
    color: #1a2a53;
    position: absolute;
    top:127px;
    
    left:24px;
}
.sub_text>span{
    display: inline-block;
    margin: 0px 8px;
}
.sub_text>span:nth-child(1){
    margin-left: 0px;
}

.user{
    opacity: 0.7;
    font-family: NotoSansCJKkr;
    font-size: 12px;
    line-height: 1.83;
    color: #1a2a53;
    position: absolute;
    left:24px;
    top:105px;
}

.hr{
    position: absolute;
    left:24px;
    top:88px;
     width: 344px;
  height: 1px;
  border-bottom: solid 1px #e7edfc;
}
.seg_sub_ttl{
    opacity: 0.8;
  font-size: 14px;
  line-height: 1.86;
  letter-spacing: -0.1px;
  color: #1a2a53;
  position: absolute;
  top:52px;
  left:24px;
}
.seg_ttl{
    position: absolute;
    font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
  top:16px;
  left: 24px;;
}
.title{
    font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
  margin-top:40px;
  margin-bottom:25px;
}
#filter_con{
    margin-top:56px;
}
.filter{
    background-color: #fff;
    display: inline-block;
    padding: 6px 20px;
    margin-right:8px;
    border-radius: 30px;

}
.channel_con{
    width:1224px;
    margin: 0px auto;
    position: relative;
}
    .thumb{
        width: 390px;
        height: 227px;
        float: left;
    }
    .clip_seg_main{
        width: 390px;
        height: 409px;
        cursor: pointer;
    }
    .text_con{
        float: left;
        position: relative;
        width:100%;
        height: 181px;
        background-color: #fff;
         border: solid 1px #e7edfc;
    }
    .clip_con_ch{
        height: 508px;;
    }


</style>
