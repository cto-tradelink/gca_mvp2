<template>
    <div id="account_page" >
        <div id="page_ttl">내 계정 관리</div>
        <div id="account_info_con">
            <div id="modi_btn">수정하기</div>
            <ul>
                <li><span class="ttl">ID</span><span class="text">gone0310@gdca.or.kr</span></li>
                <li><span class="ttl">PW</span><span class="pw text" id="pw">*******</span></li>
                <li class="hidden"><span class="ttl">현재 비밀 번호</span><span class="pw text" id="pw1"></span></li>
                <li class="hidden"><span class="ttl">변경할 비밀번호</span><span class="pw text" id="pw2"></span></li>
                <li class="hidden"><span class="ttl">변경할 비밀번호 확인</span><span class="pw text" id="pw3"></span></li>
                
                <li><span class="ttl">이름</span><span class="text">우지원</span></li>
                <li><span class="ttl">기관</span><span class="text">GCA</span></li>
                <li><span class="ttl">소속(담당부서)</span><span class="text">정책 개발팀</span></li>
                <li><span class="ttl">직급</span><span class="text">매니저</span></li>
                <li><span class="ttl">전화번호</span><span class="text">032-623-8046</span></li>
                <li><span class="ttl">핸드폰 번호</span><span class="text">010-0000-0000</span></li>
                <li><span class="ttl">홈페이지</span><span class="text">www.gon.or.kr</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    mounted:function(){
        $(document).ready(function(){
            $(document).on("click","#modi_btn", function(){
                if($(this).text() == "수정하기"){
                    $(".text").attr("contenteditable", true)
                    $(".text").css("border", "1px solid #ced4da")
                    $(".text").css("margin-bottom", "16px")
                    
                    $("#pw").text("변경하기")
                    $("#pw").css("border","none")
                    $("#pw").attr("contenteditable", false)          
                    $(this).text("완료")
                }
                else{
                    $(".text").attr("contenteditable", false)
                    $(".text").css("border", "none")
                    $(".pw").parent().addClass("hidden")
                    $("#pw").text("******")
                    $("#pw").parent().removeClass("hidden")
                     $(".text").css("margin-bottom", "0px")
                    $(this).text("수정하기")
                }
                
            })
            $(document).on("click","#pw", function(){
                $(this).text("")
                $("li.hidden").removeClass("hidden")
            })
        })
    }
}
</script>

<style scoped>
    #pw{
        cursor: pointer;
    }
    ul{
        
        margin-left: 42px;
    }
    span.text{
        font-size: 14px;
        color: #1a2f53;
        margin-left: 79px;
        width: 200px;
        padding : 10px;
    }
    span.ttl{

        width:130px;
        font-size: 14px;
        color: #1a2f53;
        line-height: 46px;
    }

    li>span{
        display: inline-block;
    }
    #page_ttl{
        font-size: 24px;
        color: #1a2f53;
      
    }
    #modi_btn{
        font-size: 12px;
        color: #1b66f4;
        position: absolute;
        top:16px;
        right:24px;   
        cursor:pointer;
    }
    #account_page{
        margin-left:94px;
        position: relative;
        padding-top: 32px;
        padding-left: 52px;
    }
    #account_info_con{
        position: relative;
        width: 808px;
        margin-top: 42px;
        background-color:#fff;
        padding-top:51px;
        padding-bottom:51px;
      
    }

</style>
