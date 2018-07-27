<template>
    <div id="base_info">
        <div id="case_con">
            <div id="base_title">기업소개</div>            
            <div class="wr_con_1">
                <table>
                    <tr>
                        <td style="vertical-align:top; padding-top:16px;">주요경력<br><span class="text_num">최대 1000자 내외</span></td>
                        <td>
                            <textarea ></textarea>
                             </td>
                    </tr>                                    
                </table>
            </div>

            <div class="wr_con_1">
                <table>
                    <tr>
                        <td style="vertical-align:top; padding-top:16px;">기업소개<br><span class="text_num">최대 1000자 내외</span></td>
                        <td>
                            <textarea ></textarea>
                            </td>
                    </tr>                                    
                </table>
            </div>

            <div class="wr_con_1">
                <table>
                    <tr>
                        <td style="vertical-align:top; padding-top:16px;">사업소개<br><span class="text_num">최대 1000자 내외</span></td>
                        <td>
                            <textarea ></textarea>
                             </td>
                    </tr>                                    
                </table>
            </div>
              
        </div>       
    </div>
</template>
<script>
export default {
 mounted:function(){
        var vue_obj = this
        var seg = $(".wr_con_1.seg").detach()
        $(document).ready(function(){
            $(document).off("click","#apply_next")
                $(document).on("click","#apply_next", function () {
                    var formData = new FormData();
                    formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                    vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                    })
                    vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/attached_file")
                })
                $(document).on("click","#apply_prev", function () {
                    var formData = new FormData();
                    formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                    vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                    })
                    vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/oversea_info")
                })
        })
    }
}
</script>

<style scoped>
textarea{
    font-size: 14px;
    line-height: 1.71;
    color: #1a2f53;
    padding: 16px;
    width: 944px;
    height: 335px;
}
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
  height: 342px;
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
    position: relative;
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
    margin-top: 40px;
    width: 1160;
    position: relative;
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

#base_title{
    width: 200px;
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