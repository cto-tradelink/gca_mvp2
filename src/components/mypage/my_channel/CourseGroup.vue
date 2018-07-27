<template>
    <div id="course_group">
        <div id="ttl">
            <span class="num">1</span>
            <span class="course_ttl">{{con.title}}</span>
            <img class="arr" src="/static/img/arrow_D.png">
        </div>
        <div class="clip" v-for="an in con.another_clip">
                <a :href="'/course/view/'+$route.params.id+'/'+an.id">
                <div class="clip_ttl">{{an.title}}</div>
                 </a>
                <div class="duration">{{an.play |get_time_format }}</div>
        
                <div v-if="con.clip_id == an.id" class="sub_num2"><i class="far fa-play-circle"></i></div>
                <div v-else class="sub_num">{{an.index}}</div>
               
        
        </div>
    </div>
</template>

<script>
export default {
    props:["con"]
}
</script>

<style scoped>
    .arr{
        cursor: pointer;
        position: absolute;
        top:17px;
        right:16px;
    }
    .clip{
        width: 286px;
        height: auto;
        border-bottom: 1px solid #e7edfc;
        position: relative;
        overflow: auto
    }
    .clip_ttl{
        margin-top:14px;
        margin-left: 56px;
        line-height: 26px;
        font-size: 14px;
        letter-spacing: -0.1px;
        color: #1a2a53;
        width: 212px;
        cursor: pointer;
    }
    .duration{
        height: 22px;
        opacity: 0.7;
        font-size: 12px; 
        line-height: 1.83;
        color: #1a2a53;
        margin-top:8px;
        margin-left: 56px;
        margin-bottom:14px;
    }
    .sub_num{
        width: 24px;
        height: 24px;
        border: solid 1px #b3b6c9;
        position: absolute;
        border-radius: 15px;
        text-align: center;
        line-height: 22px;
        top:30px;
        left:18px;
        font-size: 16px;
        color:#b3b6c9
    }
    .sub_num2{
        font-size: 24px;
        width: 24px;
        height: 24px;
       color:#1b49f4;
        position: absolute;
        border-radius: 15px;
        text-align: center;
        line-height: 22px;
        top:30px;
        left:18px;
        
        
    }


    
    .course_ttl{
        font-size: 14px;
        font-weight: bold;
        line-height: 1.86;
        letter-spacing: -0.1px;
        color: #1a2a53;
        position: absolute;
        top:14px;
        left: 56px;
    }
    #ttl{
        width: 286px;
        height: 56px;
        background-color: #c1d1f7;
        line-height: 56px;
        position: relative;
        }
    .num{
        position: absolute;
        top: 16px;
        left: 18px;
        width: 24px;
        height: 24px;
        background-color: #243d68;
        border-radius: 12px;
        color:#fff;
        text-align: center;
        display: inline-block;
        line-height: 24px;
    }

</style>
