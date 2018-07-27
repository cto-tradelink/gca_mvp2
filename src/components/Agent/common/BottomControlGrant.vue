<template>
    <div id="bottom_control" class="bto" style="z-index:999;width:100%; height:56px; background-color: #ced4da;margin-top:254px;" >
        <div style="width:1224px; margin:0px auto; height:56px;">
            <div id="apply_cancel" style="  width: 119px;  height: 56px;  opacity: 0.7; font-size: 16px; font-weight: bold;  background-color: #4f5478;text-align:center; lien-height:56px;color:#fff; float:left;line-height:56px;">취소</div>
            <div id="apply_next" style="  width: 231px; height: 56px;  opacity:1; font-size: 16px; font-weight: bold;  background-color: #1b49f4;text-align:center; lien-height:56px;color:#fff; float:right;line-height:56px;">승인하기</div>
            <div id="apply_prev" style="  width: 119px;  height: 56px;  opacity: 0.7;   font-size: 16px; font-weight: bold;  background-color: #4f5478;text-align:center; lien-height:56px;color:#fff; float:right;line-height:56px;">블라인드</div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
      
    }
}
</script>

<style scoped>
#apply_cancel, #apply_save, #apply_next, #apply_prev{
    cursor: pointer;
}
</style>
