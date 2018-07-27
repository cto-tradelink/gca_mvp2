<template>
    <div class="row" style="width:100%;; height:56px; margin:0px auto;">
            <div id="header" >
              <span v-on:click="back">&lt;</span> <span id="page_ttl"></span>
            </div>
        </div>    
</template>

<script>
export default {
    methods:{
        back:function(){
            console.log("back")
            this.$router.go(-1)
        }
    }
}
</script>

<style>
    #header{
        width: 1224px;
        height: auto;
        margin: 0px auto;
        height: 56px;
        background-color: #ffffff;
        line-height: 56px;
  
    }
    .row{
        background-color: #fff;
        border-bottom: solid 1px #ced4da;
    }
    
</style>
