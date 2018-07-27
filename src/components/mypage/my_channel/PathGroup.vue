<template>

    <div id="course_group">
        <div style="cursor:pointer" v-for="an in con.another_course">
        <div class="ttl" :data-id="an.id" >
            <span class="num">{{an.index}}</span>
            <span class="course_ttl">{{an.title}}</span>
            <img class="arr" src="/static/img/arrow_D.png">
        </div>
        <div :data-id="an.id" class="clip" v-for="cl in an.clips">
                <a :href="'/path/view/'+$route.params.id+'/'+an.id+'/'+cl.id"><div class="clip_ttl">{{cl.title}}</div></a>
                <div class="duration">{{cl.play | get_time_format}}</div>
               <div v-if="con.clip_id == cl.id" class="sub_num2"><i class="far fa-play-circle"></i></div>
                <div v-else class="sub_num">{{an.index}}</div>
        </div>
        </div>       
         
        
    </div>
</template>

<script>
export default {
    props:["con"],
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
            $(document).off("click", ".ttl")
            $(document).on("click", ".ttl", function(){
                $(".clip[data-id='"+$(this).attr("data-id")+"']").each(function(){
                    if($(this).hasClass("close"))$(this).removeClass("close")
                    else $(this).addClass("close")
                })
               
            })
            console.log(vue_obj.$route.params.course)
            setTimeout(function(){
                $(".clip[data-id='"+vue_obj.$route.params.course+"']").each(function(){
                    if($(this).hasClass("close"))$(this).removeClass("close")
                    else $(this).addClass("close")
                })
            },1000)
         
        })
    }
}
</script>

<style scoped>
    .clip.close{
        height:0px;
    }
    .arr{
        cursor: pointer;
        position: absolute;
        top:17px;
        right:16px;
    }
    .clip{
        width: 286px;
        height:auto;
        border-bottom: 1px solid #e7edfc;
        position: relative;
        overflow: auto;
        -webkit-transition: height 1s; /* Safari */
        transition: height 1s;
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
        color:#b3b6c9
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
    .ttl{
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


</style>
