<template>
    <div id="course_home">
        <Header></Header>
        <div id="course_con" >
            <div id="course_hd">
                <img id="c_logo" src="">
                <div id="text_con">
                    <div id="course_ttl">{{course.title}}</div>
                    <div id="sub_text">
                        <span>{{course.updated}}</span>|
                        <span>{{couerse.name}}</span>|
                        <span>{{course.dur}}</span>
                    </div>
                      <img class="heart" src="/static/img/like_d.png">
                      <div class="progress"><div class="bar"></div></div> 
                      <div id="percent"></div>  
                </div>
            </div>

            <div id="filter_p_con">
                <div class="seg_ttl">필터</div>
                <div class="tag_con"><span class="filter_p"># 디자인 강의</span></div>
            </div>

            <div id="intro_con">
                <div class="seg_ttl">추천 수강 대상</div>
                    <div class="text">{{}}</div>
                <div class="seg_ttl" style="padding-top:40px;">권장 수강기간</div>
                    <div class="text">초급 개발자</div>
                <div class="seg_ttl" style="padding-top:40px;">코스 소개</div>
                    <div class="text">초급 개발자</div>
            </div>

            <div id="clip_con">
                <div class="seg_ttl" style="margin-bottom:34px;">강의목록</div>
                <div class="clip_seg">
                    <div class="check">

                    </div>
                    <div class="clip_info">
                        <img src=""  class="clip_img">
                        <div class="text_con">
                            <div class="clip_ttl">course.first.name</div>
                            <div class="sub_text">
                                <span>date index</span>|
                                <span>author</span>|
                                <span>00:00:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../../common/Header.vue"

export default {
 components:{
     Header
 },
 mounted:function(){
     var vue_obj = this
     $(document).ready(function(){
     
     })
 }
}
</script>

<style scoped>
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


.clip_info{
    position: relative;
    float: left;
    margin-left: 16px;
    border: solid 1px #e7edfc;
    width:924px;
}
.clip_img{
    float: left;
     width: 164px;
  height: 94px;
}
.text_con{
    float: left;
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
.clip_seg{
    width:968px;
    height: 96px;
    margin-left: 24px;
    margin-bottom: 16px;
    }

#clip_con{
    width: 1016px;
    background-color: #ffffff;
  
    margin-top:24px;
}
.text{
    width: 968px;
    margin-left: 24px;
    font-size: 14px;
    margin-top:8px;
    line-height: 1.86;
    letter-spacing: -0.1px;
    color: #1a2a53;
}

#intro_con{
    margin-top: 15px;
    width: 1016px;
    min-height: 348px;
    background-color: #ffffff;
}
.filter_p{
    background-color: #f5f8ff;
    display: inline-block;
    padding: 13px 20px;
    margin-right:8px;
    border-radius: 30px;

}
.tag_con{
    position: absolute;
    top:68px;
    left: 24px;;
}

.seg_ttl{
    width:80%;
    height: 28px;
    font-family: NotoSansCJKkr;
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.65;
    letter-spacing: -0.3px;
    color: #1a2f53;
    padding-top:24px;
    margin-left:24px;
}
#filter_p_con{
    position: relative;
     width: 1016px;
  min-height: 140px;
  background-color: #ffffff;
  margin-top:24px;
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
  left: 320px;
  top:160px;
}
.progress{
    position: absolute;
    top:146px;
    left: 320px;
    width: 672px;
    height: 4px;
    background-color: #e7edfc;
}
.bar{
    width: 336px;
    height: 4px;
    background-color: #f54b94;
}
.heart{
    position: absolute;
    top:73px;
    right: 24px;;
}
#sub_text{
    position: absolute;
    top:72px;
    left: 320px;
}
#sub_text>span{
     height: 26px; 
  font-size: 14px; 
  line-height:26px;
  letter-spacing: -0.1px;
  color: #1a2a53;
  display: inline-block;
  margin-right: 12px;
  margin-left: 12px;
}
#sub_text>span:nth-child(1){
margin-left: 0px;
}
#course_ttl{
     height: 40px;
  font-family: NotoSansCJKkr;
  font-size: 24px;
  line-height: 1.67;
  letter-spacing: -0.6px;
  color: #1a2f53;
  position: absolute;
  top:24px;
  left: 320px;
}
#c_logo{
   width: 280px;
  height: 163px;
    position: absolute;
    top:24px;
    left: 24px;;
}
#course_hd{
    width: 1016px;
    height: 211px;
    background-color: #ffffff;
    position: relative;
}
#course_home{
    width: 100%;

}
#course_con{
    
    width:1016px;
  
    margin:0px auto;
    margin-top:55px;
    }
</style>
