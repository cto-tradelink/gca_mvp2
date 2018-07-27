<template>
    <div class="path_seg">
        <div class="path_ttl"><router-link :to="path.entry_point">{{path.title}}</router-link></div>
        <div class="path_sub_text">
            <span class="date">{{path.created}}</span>|
            <span class="name">{{path.user}}</span>|
            <span class="duration">{{path.play | seconds2time}}</span>           
        </div>
        <div class="pct"></div>
        <div class="heart_icon heart" data-target="path" :data-id="path.id"><img src="/static/img/like_d.png"></div>
     <div class="percent">0%</div>
        <div class="progress"><div class="bar"></div></div>                    
    </div>
</template>

<script>

export default {
    props:["path"]
}
</script>

<style scoped>
.path_seg{
     width: 1016px;
  height: 96px;
  background-color: #ffffff;
  border: solid 1px #e7edfc;
  position: relative;
  margin-bottom:24px;
}
.path_ttl{
    width: 717px;
    height: 28px;
    font-size: 17px;
    font-weight: bold;
    line-height: 1.65;
    letter-spacing: -0.3px;
    color: #1a2f53;
    position: absolute;
    top: 21px;
    left: 24px;
}
.path_sub_text{
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
.path_sub_text>span{
      display: inline-block;
    margin-right:5px;
}
.heart{
    position: absolute;
    width: 24px;
  height: 24px;
  top:36px;
  right:16px;
}
.progress{
    width: 245px;
    height: 3px;
    opacity: 0.43;
    background-color: #ced4da;
    position: absolute;
    top:63px;
    right: 111px;
}
.bar{
     width: 2px;
  height: 3px;
  background-color: #1b49f4;
}

</style>
