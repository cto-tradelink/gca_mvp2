<template>
    <div id="bottom_control" style="width:100%; height:56px;position:fixed; bottom:0px;; background-color: #ced4da;margin-top:254px;" >
        <div style="width:1224px; margin:0px auto; height:56px;">
            <div id="apply_cancel" v-on:click="apply_cancel" style="  width: 119px;  height: 56px;  opacity: 0.7; font-size: 16px; font-weight: bold;  background-color: #4f5478;text-align:center; lien-height:56px;color:#fff; float:left;line-height:56px;">취소</div>
            <div id="apply_save" v-on:click="apply_save" style="  width: 119px;  height: 56px;  opacity: 0.7; font-size: 16px; font-weight: bold;  background-color: #28aeff;text-align:center; lien-height:56px;color:#fff; float:left;line-height:56px;">임시저장</div>
            <div id="apply_next" v-on:click="submit" style="  width: 231px; height: 56px;  opacity:1; font-size: 16px; font-weight: bold;  background-color: #1b49f4;text-align:center; lien-height:56px;color:#fff; float:right;line-height:56px;">승인요청</div>
            <div id="apply_prev" style="  width: 119px;  height: 56px;  opacity: 0.7;   font-size: 16px; font-weight: bold;  background-color: #4f5478;text-align:center; lien-height:56px;color:#fff; float:right;line-height:56px;">공고문</div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        apply_save:function(){
            
        },
        submit:function(){
            // 지원하기 함수 쓰기
            // 체크하는 정보들 meta 정보에 저장 하기
            // confirm count 1 증가 시킨다
            // 기관관리자는 confirm 이 0 이고 confirm count 가 1 이상인 지우너서만 열람 한다.
            // 쓴 사람은 매니저가 맞는가?
            if( localStorage.getItem("user") != "m" ){
                alert("올바른 작성계정이 아닙니다. 매니저 계정으로 작성해주세요.")
                return false
            } 
            $.ajax({
                url:this.baseURI + "vue_submit_application",
                type:"post",
                data:{
                        "id":this.$route.params.id, 
                        "user_id":localStorage.getItem("id"), 
                        "user_kind" : localStorage.getItem("user"),
                    },
                success:function(res){
                    console.log(res)
                }
            })
        },
        apply_cancel:function(){
        var result = confirm("공고문 작성을 취소하시겠습니까")  
        if(result = true) {
             this.$router.push("/manager/grant/all")
            }
        },
    
    }
}
</script>

<style scoped>
#apply_cancel, #apply_save, #apply_next, #apply_prev{
    cursor: pointer;
}
</style>
