<template>
    <div>
        <div class="page_title" style="margin-bottom:32px;">
            알림
        </div>
        
        <div class="alarm_seg">
            <ul>
                <li>2018.08</li>
                <li>관심지원사업에 변동사항이 있습니다. 확인해 보세요. </li>
                <li><div><img></div></li>
                <li>프로젝트 사이(DDP 파일럿숍) 입점기업 모집</li>
            </ul>
        </div>       
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
ul{
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
}
ul>li{
    float: left;
    list-style: none;
    line-height: 72px;
}

ul>li:nth-child(1){
    width:112px;
    font-size: 14px;
    color: #1a2f53;
    padding-left: 32px;
}
ul>li:nth-child(2){
    width:519px;
    font-size: 14px;
    color: #1a2f53;
}
ul>li:nth-child(3){
   width: 40px;
}
ul>li:nth-child(4){
   margin-left: 24px;
   font-size: 14px;
  color: #1a2f53;
}

.page_title{
    opacity: 0.8;  
    font-size: 20px;
    font-weight: bold;  
    color: #1a2f53;
    margin-top:40px;
}
.alarm_seg{
    width: 1016px;
    height: 72px;
    background-color: #ffffff;
    margin-bottom: 16px;
}

</style>
