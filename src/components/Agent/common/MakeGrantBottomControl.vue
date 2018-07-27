<template>
    <div id="bottom_control" style="width:100%; height:56px; background-color: #ced4da;margin-top:254px;" >
        <div style="width:1224px; margin:0px auto; height:56px;">
            <div id="apply_cancel" style="  width: 119px;  height: 56px;  opacity: 0.7; font-size: 16px; font-weight: bold;  background-color: #4f5478;text-align:center; lien-height:56px;color:#fff; float:left;line-height:56px;">취소</div>
            <div id="apply_save" v-on:click="apply_save" style="  width: 119px;  height: 56px;  opacity: 0.7; font-size: 16px; font-weight: bold;  background-color: #28aeff;text-align:center; lien-height:56px;color:#fff; float:left;line-height:56px;">임시저장</div>
            <div id="application"  style="  width: 119px; height: 56px;  opacity:1; font-weight: bold; text-align:center; font-size: 16px;color: #1b66f4;float:right;line-height:56px;">지원서 양식 > </div>
            <div id="apply_next" v-on:click="submit" style="  width: 120px; height: 56px;  opacity:1; font-size: 16px; font-weight: bold;  background-color: #1b49f4;text-align:center; lien-height:56px;color:#fff; float:right;line-height:56px;">다음</div>
            <div id="apply_prev" style="  width: 119px;  height: 56px;  opacity: 0.7;   font-size: 16px; font-weight: bold;  background-color: #4f5478;text-align:center; lien-height:56px;color:#fff; float:right;line-height:56px;">이전</div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        apply_save:function(){
            alert("임시저장되었습니다")
        },
        submit:function(){
            alert("다음단계로 넘어가시겠습니까?")
        }
    }
}
</script>

<style scoped>
#apply_cancel, #apply_save, #apply_next, #apply_prev{
    cursor: pointer;
}
</style>
