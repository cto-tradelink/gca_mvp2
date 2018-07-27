<template>
    <div id="application_top_info">
        <div id="app_info_con">
            <div id="app_title">{{title}}</div>
            <div id="due_info"> {{start |get_day_format }}~  {{end |get_day_format}}까지</div>
            <div id="app_sub_con">
                 <div class="sub_comp"><i class="fas fa-fire"></i>{{comp}}</div>
                 <div class="sub_d_day" ><i class="far fa-clock"></i>{{start, end | d_day_calc_short}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            title:"",
            start:"",
        comp:"",
        end:"",
        }
    },
    mounted:function(){
            this.$http.get(`${this.baseURI}/vue_get_grant_ttl/?&gr=`+this.$route.params.id)
            .then((result) => {            
                   console.log(result)
                   console.log(result.data)
                  this.title = result.data.title
                  this.start = result.data.start
                  this.end = result.data.end
                  this.comp = result.data.comp
                  
            })
    }
}
</script>
<style scoped>
    .sub_d_day{
        color: #28aeff!important;
    }
    #app_sub_con>div>i{
        font-size: 24px;
        margin-left: 20px;
        display: inline-block;
    }

   #app_info_con {
        width:100%;
        position: relative;   
        height: 144px;
        overflow: auto
        }
    
   
    #due_info{
        height: 28px;
        font-family: SpoqaHanSans;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.75;
        color: #2256b8;
        margin-top: 9px;
        font-family: Rubik;  
    }

    #app_sub_con>div{
        float: left;
        font-family: Rubik;
        font-size: 32px;
        font-weight: 300;
        line-height: 1.25;
        letter-spacing: -2px;
        color: #243d68;
    }
    #sub_d_day{
            width: 1224px;
            height:1800px;
  background-color: #fdfeff;
    }
    #app_sub_con{
        position: absolute;
        bottom: 24px;
        right: 0px;;
    }

    #app_title{
        height: 40px;
        font-size: 32px; 
        line-height: 1.25;
        color: #243d68;
        padding-top: 31px;
    }
    #app_info_con{
        width: 1224px;
        margin: 0px auto;
        height: 144px;
    }
    #application_top_info{
        background-color: #fdfeff;
       
            width: 100%;
    overflow: auto;
    }
</style>
