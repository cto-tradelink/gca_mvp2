<template>
    <div id="base_info">
        <div id="case_con">
            <div id="base_title">첨부서류</div>
            <div id="wr_con_3">
                <table >
                    <tr>
                        <td style="padding-bottom:20px;">첨부서류1</td>
                        <td style="padding-bottom:20px;"><input id="patent" class="file" type="file"> </td>
                    </tr>
                    <tr style="padding-bottom:20px;">
                        <td style="padding-bottom:20px;">회사소개 PPT</td>
                        <td style="padding-bottom:20px;"><input id="business_file" class="file" type="file"> </td>
                    </tr>
                    <tr style="padding-bottom:20px;">
                        <td style="padding-bottom:20px;">서비스 소개서</td>
                        <td style="padding-bottom:20px;"><input id="service_intro" class="file" type="file"> </td>
                    </tr>    
                     <tr style="padding-bottom:20px;">
                        <td style="padding-bottom:20px;">등기부등본</td>
                        <td style="padding-bottom:20px;"><input id="paper" class="file" type="file"> </td>
                    </tr>                 
                </table>
            </div>
        </div>       
    </div>
</template>
<script>
export default {
    props:["startup"],
      beforeRouteLeave (to, from, next) {
        if(confirm("페이지를 벗어나시겠습니까?")){
            next()
        }
  },
    mounted:function(){
        var vue_obj = this
        var seg = $(".wr_con_1.seg").detach()
        $(document).ready(function(){
                  vue_obj.$http.get(`${vue_obj.baseURI}/vue_get_application/?id=`+localStorage.getItem("id")+`&gr=`+vue_obj.$route.params.id)
            .then((result) => {            
                   console.log(result);
                   vue_obj.$props.startup = result.data
                   console.log(vue_obj.$props.startup)
                   }                      
                   )
            $(document).off("click","#apply_next")
                $(document).on("click","#apply_next", function () {
                var formData = new FormData();
                var file5 = document.querySelector('#patent');
                var file6 = document.querySelector('#business_file');
                var file7 = document.querySelector('#service_intro');
                var file8 = document.querySelector('#paper');
                formData.append("file_5", file5.files[0]);
                formData.append("file_6", file6.files[0]);
                formData.append("file_7", file7.files[0]);
                formData.append("file_8", file8.files[0]);
                formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                console.log(vue_obj.$props.startup)
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                headers: {'Content-Type': 'multipart/form-data' }
                })
                    vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/application")
                })
                $(document).on("click","#apply_prev", function () {                    
                    var formData = new FormData();
                    var file5 = document.querySelector('#patent');
                    var file6 = document.querySelector('#business_file');
                    var file7 = document.querySelector('#service_intro');
                    var file8 = document.querySelector('#paper');
                    formData.append("file_5", file5.files[0]);
                    formData.append("file_6", file6.files[0]);
                    formData.append("file_7", file7.files[0]);
                    formData.append("file_8", file8.files[0]);
                formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                console.log(vue_obj.$props.startup)
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                })
                vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/startup_intro")
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
                    alert(" 저장되었습니다.")
                    vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/application")
                })             
              
            })

        })
    }
}
</script>

<style scoped>
td>span{
    font-size: 12px;
    color: #a0a3bc;
}
.finance{
  background-color: #ffffff; 
  border-collapse: collapse;
  width: 100%;

}
.finance_con{
  margin-top: 26px;
  width:936px;
  padding: 8px 16px;
  margin-left: 206px;
  border:1px solid #ced4da
}
.finance>tr>td{
  border-bottom: 1px solid #ced4da;
}
.finance>tr:last-child>td{
  border-bottom: none;
}
.finance>tr>td:nth-child(1){
  width: 94px;
}

.finance>tr>td>input{
  border: none
}

table{
    border-collapse: collapse;
}
textarea{
    font-size: 14px;
    line-height: 1.71;
    color: #1a2f53;
    padding: 16px;
    width: 944px;
    height: 335px;
}
.text_num{
    font-size: 14px;
    line-height: 1.71;
    color: #a0a3bc;
    margin-top: 2px;
}

tr>td:nth-child(1){
    font-size: 16px;  
    color: #1a2f53;
}
#wr_con_3{
     width: 1144px;
  height: 298px;
  background-color: #ffffff;
  padding: 40px;
  margin-top: 24px;

}
.file{
    padding: 10px;
    border: 1px solid #ced4da;
    padding-left: 176px;
    padding-right: 0px;
    height:36px;
    line-height: 36px;
  
}
#f_li>li>div{
    width:322px; 
    height: 170px;    
    float: left;
}
.filter_ttl{
    display: block;
    float: left;
    width: 106px;
    font-size: 14px;
  color: #7697ab;
  line-height: 35px;
}
.filter_ul{
    display: inline-block;

}
.filter_ul>li{
    line-height: 35px;
    cursor: pointer;
}

#wr_con_2>table{
    margin-top: 40px;
}
.filter{
    font-size: 14px;
  color: #1b66f4;
  margin-right: 58px;
  opacity: 0.5;
  cursor: pointer;
}
.filter:hover{
      font-size: 14px;
  font-weight: bold;
  color: #1b66f4!important;
  opacity: 1!important;
}

.seg_title{
    font-size: 16px;
    color: #a0a3bc;

}
#wr_con_2{
    width: 1144px;
    height: 260px;;
    background-color: #ffffff;
    margin-top: 24px;
    padding: 40px;
    margin-bottom: 24px;
}
tr>td:nth-child(1){
    width: 172px;
}
ul{
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
}
li{
    list-style: none;
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
#wr_con_1{
    margin-top: 40px;
    width: 1160;
    height: 128px;

    background-color: #ffffff;
    padding : 40px 32px; 
}

#wr_con_1>table{
    
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

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #1a2f53;
    opacity: 0.5; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #1a2f53;
    opacity: 0.5; /* Firefox */
}

::-ms-input-placeholder { /* Microsoft Edge */
    color: #1a2f53;
    opacity: 0.5; /* Firefox */
}



.wr_con_finance{
    width: 1160px;
    background-color: #fff;
    position: relative;
    margin-bottom: 24px;
    overflow: auto;
    padding: 40px;
    padding-left: 24px;
}
.add_btn{
    position: absolute;
     font-size: 14px; 
  color: #1b66f4;
  top:40px;
  right: 24px;
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
.seg_ttl{
    font-size: 16px;
    color: #a0a3bc;
}

</style>