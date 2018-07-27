<template>
    <div id="bottom_control" style="position:fixed;bottom:0px;;width:100%; height:56px; background-color: #ced4da;margin-top:254px;" >
        <div style="width:1224px; margin:0px auto; height:56px;">
            <div id="apply_cancel" style="  width: 119px;  height: 56px;  opacity: 0.7; font-size: 16px; font-weight: bold;  background-color: #4f5478;text-align:center; lien-height:56px;color:#fff; float:left;line-height:56px;">취소</div>
            <div id="apply_save" style="  width: 119px;  height: 56px;  opacity: 0.7; font-size: 16px; font-weight: bold;  background-color: #28aeff;text-align:center; lien-height:56px;color:#fff; float:left;line-height:56px;">임시저장</div>
            <div id="apply_next" style="  width: 119px;  height: 56px;  opacity:1; font-size: 16px; font-weight: bold;  background-color: #1b49f4;text-align:center; lien-height:56px;color:#fff; float:right;line-height:56px;">다음</div>
            <div id="apply_prev" style="  width: 119px;  height: 56px;   font-size: 16px; font-weight: bold;  background-color: #a0a3bc;text-align:center; lien-height:56px;color:#fff; float:right;line-height:56px;">이전</div>
        </div>
    </div>
</template>

<script>
export default {
    props:["startup"],

    mounted:function(){
        var vue_obj = this;
        $(document).ready(function(){
            $(document).off("click","#apply_cancel") 
            $(document).on("click","#apply_cancel", function(){
                if(confirm("취소하시겠습니까?"))
                vue_obj.$router.push("/mypage/apply")
            })
        })
    }
}
</script>

<style scoped>
#apply_cancel, #apply_save, #apply_next, #apply_prev{
    cursor: pointer;
}
</style>
