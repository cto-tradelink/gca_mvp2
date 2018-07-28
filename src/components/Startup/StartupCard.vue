<template>

    <div v-on:click="detail(startup.id, $event)" class="startup_card" :data-id="startup.id">
        <div class="card_main">
            <div class="card_text_con">
                <div class="startup_name"><router-link v-bind:to="'/startup/'+startup.id">{{startup.name}}</router-link></div>
                <div class="startup_short_desc">{{startup.short_desc}}</div>
            </div>
            <img class="startup_logo" :src="this.baseURI + '/' +startup.logo">
        </div>
        <div class="startup_card_bottom">
            <div class="tag_con">
            <!-- <div class="tag_con" v-if=startup.filter.length <= 5 > -->
            <!-- <div class="tag_con" v-show=startup.filter.length <= 5 > -->
                <span v-for="t in startup.filter.slice(0,4)" class="tag">{{t}}</span>
            </div>
            <div class="heart_icon heart" data-target="startup" :data-id="startup.id"><img src="/static/img/like_d.png"></div>
        </div>
    </div>
</template>
<script>
export default {
    props:["startup"],
    methods:{
        detail:function(startup_id, e){
            this.$router.push("/startup/"+startup_id)
        },
    },
    mounted:function(){ 
            var vue_obj = this
    },
  
}
</script>

<style scoped>
    .modi_btn{
        font-size: 14px;
        color: #a0a3bc;
        position: absolute;
        top:28px;
        right:23px;
    }
    .tag_con{
        width:339px;
    }
    .heart_icon{
        position: absolute;
        bottom:4px;
        right:34px;
    }
    .tag{

        font-size: 14px;
        line-height: 1.71;
        color: #a0a3bc;
        display: inline-block;
        margin-right:10px; 
    }
    .startup_name{
        font-size: 20px;
        font-weight: bold;
        line-height: 1.6;  
        color: #1a2f53;
    }
    .startup_short_desc{
        opacity: 0.9;
        font-size: 14px;
        line-height: 1.71;
        color: #1a2f53;
        margin-top: 10px;
    }
    .startup_card{      
        float: left;
        width: 360px;
        height: 162px;
        background-color: #ffffff;
        margin-right: 24px;
        cursor: pointer;
        padding: 19px 16px;;
        margin-bottom: 24px;
        position: relative;
    }
    .startup_card:nth-child(3n){
        margin-right: 0px;
    }
    .startup_card:hover{
        box-shadow: 0 2px 4px -1px rgba(206, 212, 218, 0.5), 0 0 10px 4px rgba(34, 86, 184, 0.19), 0 -2px 5px 0 rgba(79, 84, 120, 0.26);
    }
    .startup_logo{
        width: 80px;
        height: 88px;
        border: solid 1px #ced4da;
        float: left;
        margin-left: 29px;
    }
    .card_main{
        width: 100%;
        height: 179px;
     
    }
    .card_text_con{
         width: 246px;
         height: auto;
         overflow: auto;
         float: left;
    }
    .startup_card_bottom{
        clear: both;
        width: 100%;
        position: absolute;
        bottom: 10px;
    }
    .startup_card_bottom>.tag_con{
        float: left;
    }
    .startup_card_bottom>.int{
        float: right;
    }
    .tag_con>span{
        background-color: #f5f8ff;
        font-size: 12px;
        line-height: 1.83;
        text-align: center;
        color: #1a2a53;
        padding:7px 16px;
        border-radius: 20px;
        margin-bottom: 5px;
    }
</style>
