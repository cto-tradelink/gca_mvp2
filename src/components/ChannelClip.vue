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
        <div class="clip_con_ch">
             <div class="clip_seg_main" :data-url="c.id" v-for="c in clip_on">
             
                <img class="thumb" :src="c.img">
                <div class="text_con">
                    <div class="seg_ttl">{{c.title}}</div>
                    <div class="seg_sub_ttl">{{c.sub}}</div>
                    <div class="hr">
                    </div>
                    <div class="user">{{c.user}}</div>
                    <div class="sub_text">
                        <span>{{c.dur}}</span>|
                        <span>{{c.date}}</span>
                    </div>
                    <div class="heart_clip heart"  :data-id="c.id"><img src="/static/img/like_d.png"></div>   
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
              {"id":"10", "tag":"디자인 강의",  "user":"힘찬", "img":"/static/img/clip_0.jpg", "title":"AWS 기초", "dur":"09:19","date":"2018-07-08" ,"sub":"힘찬이의  aws 교실" },
              {"id":"11","tag":"개발" , "user":"AWS 에반젤리스트", "img":"/static/img/clip_1.jpg", "title":"AWS 스케일 확장", "dur":"08:19","date":"2018-06-08" ,"sub":"AWS 에반젤리스트" },
              {"id":"12","tag":"기획 실무" , "user":"AWS 에반젤리스트", "img":"/static/img/clip_3.jpg", "title":"사용례로 알아보는 AWS", "dur":"20:19","date":"2018-08-08" ,"sub":"AWS 에반젤리스트" },
            ],         
        }
    },
    components:{
        Header
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
            vue_obj.clip_on = vue_obj.clip.slice()
            $.ajax({
                url:vue_obj.baseURI+"/vue_get_clip_all/",
                success:function(res){
                    console.log(res)
                    for(var k = 0; k< res.length; k++){
                        vue_obj.clip.push(res[k])
                        vue_obj.clip_on.push(res[k])
                    }
                }
            })            
            $(".menu_top").removeClass("menu_on")
            $(".menu_top:eq(2)").addClass("menu_on")

            $(document).on("click",".filter", function(){
                if($(this).hasClass("on"))  $(this).removeClass("on")
                else $(this).addClass("on")

                var filter_list = []
                $(".filter.on").each(function(){
                    filter_list.push($(this).text().replace("# ",""))
                })
                vue_obj.clip_on=[]
                for(var k = 0; k< vue_obj.clip.length; k++){
                    for (var j=0; j < filter_list.length; j++){
                    if ( vue_obj.clip[k].tag.indexOf(filter_list[j]) != -1 ){
                        vue_obj.clip_on.push(vue_obj.clip[k])
                    }    
                     }
                }
              
            })
            $(document).off("click",".clip_seg_main")
            $(document).on("click",".clip_seg_main", function(){
                vue_obj.$router.push("/clip/"+$(this).attr("data-url"))
            })


              $(document).off("click",".heart_clip")
           $(document).on("click",".heart_clip", function(e){
                console.log("here")
                e.stopPropagation();
                e.preventDefault();
                var target = this
                if($(this).find("img").attr("src").indexOf("_p") != -1){
                    if(confirm("관심 패스에서 삭제하시겠습니까?")){
                        $.ajax({
                            url:vue_obj.baseURI+"/toggle_int_clip/",
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
                        console.log("add")
                        $.ajax({
                            url:vue_obj.baseURI+"/toggle_int_clip/",
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
                    return false;                
            })

        })
    }
}
</script>

<style scoped>
.clip_seg_main:hover{
 box-shadow: 0 2px 4px -1px rgba(206, 212, 218, 0.5), 0 0 10px 4px rgba(34, 86, 184, 0.19), 0 -2px 5px 0 rgba(79, 84, 120, 0.26);
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
    width: 134px;
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
  padding-top:38px;
  margin-left:544px;

}
.clip_seg_main{
    float: left;
    margin-right: 26px;
    margin-bottom: 26px;
}
.clip_seg_main:nth-child(3n){
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
    padding: 13px 20px;
    margin-right:8px;
    border-radius: 30px;

}
.channel_con{
    width:1224px;
    margin: 0px auto;
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
        overflow: hidden;
    }


</style>
