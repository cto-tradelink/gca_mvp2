<template>
    <div style="margin-top:72px;margin-left:8px;">
        <span style="display:inline-block; margin-bottom:16px;">오늘 본 공고</span>
        <div v-for="view in viewed" style="position:relative; clear:both; margin-bottom:16px;overflow:auto">
            <img class="today_pic" v-if="view.img !=undefined " :src="view.img">
            <div class="today_viewed_ttl"><a v-bind:href="/grant/+view.src">{{view.title}}</a></div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            viewed:[
               
            ]
        }
    },
    created:function(){
            
    }
    ,
    mounted:
    function(){            
        var data =(this.viewed)  
        $(document).ready(function(){
             var obj = new Object()
             obj.src = localStorage.getItem("first_grant_src")
             obj.title =  localStorage.getItem("first_grant_title")
             data.push(obj)
             var obj2 = new Object()
             obj2.src = localStorage.getItem("second_grant_src")
             obj2.title =  localStorage.getItem("second_grant_title")
             data.push(obj2)
             if ( $(".today_pic:eq(0)").attr("src") == undefined || $(".today_pic:eq(0)").attr("src") == ""){
                $(".today_pic:eq(0)").addClass("hidden")
            
            }
                
        })
    }
}
</script>

<style scoped>
    /* span{
        font-size: 12px;
        font-weight: bold; 
        color: #1a2f53;
    }
    img{
        width: 72px;
        height: 108px;
        border: solid 1px #dddddd;
        float: left;
    } */
    .today_viewed_ttl{
        font-weight: bold;
        font-size: 12px;
        width: 80px;
        float: left;
        color: #243d68;
        margin-left:8px;
        opacity: 0.8;
    }
</style>
