<template>
    <div id="static_content">
        <StaticNavigation></StaticNavigation>

    </div>    
</template>

<script>
import StaticNavigation from "./StaticNavigation.vue"
export default {
    components:{
        StaticNavigation,
    }
}
</script>

<style scoped>
   #static_content{
        margin-left: 64px;        
        padding-top:40px;
        padding-left: 52px;
    }
    #user_static_con{
        margin-top:56px;
        width: 1144px;
        padding: 40px;
        height: 670px;
        background-color: #ffffff;
        position: relative;
    }
    #static_pdf_down{
        width: 120px;
        height: 32px;
        border-radius: 16px;
        font-size: 14px;
        text-align: center;
        color: #1b66f4;
        position: absolute;
        top:32px;
        right:40px;
        border: solid 1px #1b66f4;
        line-height: 32px;
    }
    .static_row_seg{
        width: 100%;       
        overflow: auto; 
    }
    .static_ttl{
        font-size: 18px;
        color: #1a2f53;
    }
    .static_seg{
        float: left;
        width: 285px;
        height: 114px;
        border-right:1px solid #ced4da;
        margin-top:20px;
        position: relative;
    }
   .sub_ttl{
        position: absolute;
        left: 24px;
        top:8px;
        font-size: 15px;
        color: #243d68;
    } 
    .number{
        font-family: Rubik;
        font-size: 24px;
        font-weight: 300;
        color: #1b49f4;
        line-height: 60px;
        position: absolute;
        top:48px;
        right: 71px;
    }



</style>
