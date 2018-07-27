<template>

    <div id="base_info">
        <div id="case_con">
            <div id="base_title">기본정보</div>
            <div class="wr_con_1">
                <table>
                    <tr>
                        <td>기업명</td>
                        <td> <input type="text"  class="input_normal" placeholder="기업명을 입력하세요" > </td>
                    </tr>
                    <tr>
                        <td>사업자 등록번호</td>
                        <td><input type="text" class="input_normal" placeholder="사업자 등록번호를 입력하세요."> </td>
                    </tr>
                    <tr>
                        <td>형태</td>
                        <td><span class="kind" id="kind_0">개인사업자</span><span class="kind"  id="kind_1">법인사업자</span><span class="kind"  id="kind_2">예비창업자</span></td>
                    </tr>
                    <tr>
                        <td>설립일</td>
                        <td><input type="date"  class="input_normal"></td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td><input type="text"  class="input_normal"></td>
                    </tr>                    
                </table>
            </div>
            <div class="wr_con_1">
                   <div class="seg_title">대표자 정보</div>    
                    <table style="margin-top:28px;">
                    <tr>
                        <td>대표자명</td>
                        <td><input type="text"   class="input_normal same_0" placeholder="대표자명을 입력하세요" value="트레이드링크"> </td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td><input type="text"   class="input_normal same_1"  placeholder="전화번호를 입력하세요."> </td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type="text"  class="input_normal same_2"  placeholder="이메일을 입력하세요."> </td>
                    </tr>                             
                </table>    
                <div style=" width: 1144px;height: 1px;border-top: solid 1px #ced4da;margin-top:24px;margin-bottom:40px;"></div>
                <div class="seg_title" style="display:inline-block">담당자 정보</div>    
                <div class="" style="display:inline-block; margin-left:95px;">
                        <input id="checkbox2" type="checkbox" checked="">
                            대표자 정보와 동일
                </div>
                <table style="margin-top:28px;">
                    <tr>
                        <td>담당자명</td>
                        <td><input type="text"  class="input_normal same_0" placeholder="담당자명을 입력하세요" value=""> </td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td><input type="text"  class="input_normal same_1"  placeholder="전화번호를 입력하세요."> </td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type="text"   class="input_normal same_2"  placeholder="이메일을 입력하세요."> </td>
                    </tr>                             
                </table>
            </div>

        </div>       
    </div>
</template>

<script>
var app_id ; 

export default {
    props:["startup"],
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){
          
            $(document).on("click",".kind",function(){
                $(".kind").removeClass("bold")
                $(this).addClass("bold")
                console.log($(this).text())
                vue_obj.$props.startup.kind = $(this).text()
            })
            $(document).on("click","#checkbox2",function(){
                if( $(this).is(":checked") == true ){
                $(".same_0:eq(1)").val( $(".same_0:eq(0)").val() )
                $(".same_1:eq(1)").val( $(".same_1:eq(0)").val() )
                $(".same_2:eq(1)").val( $(".same_2:eq(0)").val() )
                }
            })
              $(document).off("click","#apply_save" )            
       
            $(document).off("click","#apply_next")
      

        })
    }
}
</script>

<style scoped>
.bold{
    font-weight: bold;
}
.kind{
    cursor: pointer;
}
#base_info{
    position: relative;
    width:100%;
}
#case_con{
    width: 1224px;
        margin: 0px 54px;;
}
#base_title{
    width: 95px;
    height: 32px;  
    font-size: 24px; 
    letter-spacing: -1px;
    color: #a0a3bc;
    margin-top: 31px;
}
.wr_con_1{
    width: 1144px;
    padding: 40px;
    background-color: #ffffff;
    margin-top: 40px;
}
.wr_con_1:nth-child(1){
    height: 432px;
}

table>tr>td:nth-child(1){
    width: 172px;
}
table>tr>td{
    padding-bottom: 16px;;
}
.input_normal{
    width: 415px;
    height: 52px;
    border: solid 1px #ced4da;
    font-size: 14px;
    letter-spacing: normal;
    color: #1a2f53;
    padding-left: 16px;
    line-height: 56px;
}
td>span{
    color: #1b66f4;
    font-size: 14px;
     opacity: 0.8;
    display: inline-block;
    margin-right: 32px;
}
.seg_title{
    font-size: 16px;
    color: #a0a3bc;

}

</style>
