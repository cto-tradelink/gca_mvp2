<template>
    <div class="clip_seg">
            <img src="">    
                    <div class="text_con">
                        <div class="clip_title">{{clip.title}}</div>
                        <div class="clip_sub_text">
                            <span class="date">{{clip.created}}</span>|
                            <span class="name">{{clip.user}}</span>|
                            <span class="duration">{{clip.play}}</span>                            
                        </div>
                        <img class="heart" src="/static/img/like_p.png">
            </div>
    </div>
</template>
<script>
export default {
    props:["clip"]
}
</script>
<style scoped>
.clip_seg{ 
    background-color: #ffffff;
    border: solid 1px #e7edfc;
}
.clip_seg>img{
    width: 164px;
    height: 96px;
    float: left;
}
.text_con{
    float: left;
    position: relative;
    width:331px;
    height: 97px;;

}
.clip_title{
    position: absolute;
    font-size: 17px; 
    letter-spacing: -0.3px;
    color: #1a2f53;
    left:24px;
    top: 21px;
    height: 28px;
    line-height: 28px;    
}
.clip_sub_text{
    height: 22px;
    position: absolute;
    top: 53px;
    left: 24px;
    font-size: 12px;
    line-height: 22px;;
    color: #1a2a53;
    opacity: 0.7;
    display: inline-block;
}
.clip_sub_text>span{
    display: inline-block;
    margin-right:5px;
}
.heart{
    position: absolute;
    width: 24px;
  height: 24px;
  top:24px;
  right:24px;
}

</style>
