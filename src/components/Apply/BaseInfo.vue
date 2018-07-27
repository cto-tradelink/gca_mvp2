<template>

    <div id="base_info" style="padding-bottom:200px;">
        <div id="case_con">
            <div id="base_title">기본정보</div>
            <div class="wr_con_1">
                <table>
                    <tr>
                        <td>기업명</td>
                        <td> <input type="text" v-model="startup.name"  class="input_normal" placeholder="기업명을 입력하세요" > </td>
                    </tr>
                
                    <tr>
                        <td>형태</td>
                        <td><span class="kind" id="kind_0">개인사업자</span><span class="kind"  id="kind_1">법인사업자</span><span class="kind"  id="kind_2">예비창업자</span></td>
                    </tr>
                    <tr>
                        <td>설립일</td>
                        <td>
                           <datetime v-model="startup.found_date"></datetime></td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td><input type="text" v-model="startup.location_1" style="width:192px;margin-right:8px;" class="input_normal"><input type="text" style="width:196px;"  v-model="startup.location_2"  class="input_normal"></td>

                    </tr>                    
                </table>
            </div>
            <div class="wr_con_1">
                   <div class="seg_title">대표자 정보</div>    
                    <table style="margin-top:28px;">
                    <tr>
                        <td>대표자명</td>
                        <td><input type="text" v-model="startup.repre_name"  class="input_normal same_0" placeholder="대표자명을 입력하세요" value="트레이드링크"> </td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td><input type="text" v-model="startup.repre_tel"  class="input_normal same_1"  placeholder="전화번호를 입력하세요."> </td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type="text" v-model="startup.repre_email"  class="input_normal same_2"  placeholder="이메일을 입력하세요."> </td>
                    </tr>                             
                </table>    
                <div style=" width: 1144px;height: 1px;border-top: solid 1px #ced4da;margin-top:24px;margin-bottom:40px;"></div>
                <div class="seg_title" style="display:inline-block">담당자 정보</div>    
                <div class="" style="display:inline-block; margin-left:95px;">
                    <input id="checkbox2" type="checkbox" >
                            대표자 정보와 동일
                </div>
                <table style="margin-top:28px;">
                    <tr>
                        <td>담당자명</td>
                        <td><input type="text" v-model="startup.mark_name"  class="input_normal same_0" placeholder="담당자명을 입력하세요" value=""> </td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td><input type="text" v-model="startup.mark_tel"  class="input_normal same_1"  placeholder="전화번호를 입력하세요."> </td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type="text"  v-model="startup.mark_email"  class="input_normal same_2"  placeholder="이메일을 입력하세요."> </td>
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
            $("body").css("backgorund-color","#f4f7fa")
            $(document).off("keyup",".same_0")        
            $(document).on("keyup",".same_0", function(){
                if( $("#checkbox2").is(":checked")){
                   vue_obj.startup.mark_name =   vue_obj.startup.repre_name
                } 
            })   
             $(document).off("keyup",".same_1")
             $(document).on("keyup",".same_1", function(){
                if( $("#checkbox2").is(":checked")){
                 vue_obj.startup.mark_tel =   vue_obj.startup.repre_tel
                } 
            })   
             $(document).off("keyup",".same_2")
             $(document).on("keyup",".same_2", function(){
                if( $("#checkbox2").is(":checked")){
                   vue_obj.startup.mark_email =   vue_obj.startup.repre_email
                } 
            })   



            vue_obj.$http.get(`${vue_obj.baseURI}/vue_get_application/?id=`+localStorage.getItem("id")+`&gr=`+vue_obj.$route.params.id)
            .then((result) => {            
                   console.log(result)
                   vue_obj.$props.startup = result.data
                   console.log(vue_obj.$props.startup.kind)
                   $(".kind:contains('"+vue_obj.$props.startup.kind+"')").addClass("bold2")
            })
            $(document).on("click",".kind",function(){
                $(".kind").removeClass("bold2")
                $(this).addClass("bold2")
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
            $(document).on("click","#apply_save", function(){
                var formData = new FormData();
                formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                console.log(vue_obj.$props.startup)
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                }).then((result)=>{
                    alert("임시 저장되었습니다.")
                })                
            })
            $(document).off("click","#apply_next")
            $(document).on("click","#apply_next", function () {
                var result = confirm("해당 정보를 토대로 기업 정보를 업데이트 하시겠습니까?")
                if(result == true){
                      var formData = new FormData();
                        formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                        vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_startup_with_application_1/`, formData)
                        .then((result) => {            
                            console.log(result)
                        })
                }
                 var formData = new FormData();
                formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                }).then( (result) =>{
                    console.log(result)
                } )
                vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/business_info")
            })

        })
    }
}
</script>
<style>
.vdatetime{
    display: inline-block;
}
.vdatetime-input{
        width: 415px;
    height: 40px;
    border: solid 1px #ced4da;
    font-size: 14px;
    letter-spacing: normal;
    color: #1a2f53;
    padding-left: 16px;
    line-height: 40px;
}
</style>

<style scoped>
.vdatetime{
    display: inline-block;
}
.vdatetime-input{
        width: 258px;
    height: 38px;
    background-color: #ffffff;
    border: solid 1px #ced4da;
    line-height: 38px;
    padding-left: 20px;
    font-size: 14px;
    display: inline-block;
}
.bold{
   
}
.bold2{
    background-color: #c1d1f7!important;
}
.kind{
    cursor: pointer;
    background-color: #f5f8ff;
    padding:13px 16px;
    border-radius:30px;
    margin-right:8px!important;
}
#base_info{
    position: relative;
    width:100%;
}
#case_con{
    width: 1224px;
    margin: 0px auto;
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
    height: 40px;
    border: solid 1px #ced4da;
    font-size: 14px;
    letter-spacing: normal;
    color: #1a2f53;
    padding-left: 16px;
    line-height: 40px;
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
