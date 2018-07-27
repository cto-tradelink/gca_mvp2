<template>
    <div id="base_info">
        <div id="case_con">
            <div id="base_title">기업정보</div>
            <div id="wr_con_1">
                <table>
                    <tr>
                        <td>홈페이지</td>
                        <td> <input v-model="startup.homepage" class="input_normal" type="text" placeholder="홈페이지를 입력하세요" > </td>
                    </tr>
                    <tr>
                        <td>SNS</td>
                        <td><input class="input_normal" v-model="startup.sns"  type="text" placeholder="SNS를 입력하세요."> </td>
                    </tr>                                    
                </table>
            </div>
            <div id="wr_con_2">
                <div class="seg_ttl">고용현황</div>
                <table style="margin-top:20px;">
                    <tr>
                        <td>총</td>
                        <td><input v-model="startup.total_employee" class="input_normal" style="margin-bottom:20px;"  type="text" placeholder="총 고용인원을 입력하세요" value="0"> </td>
                    </tr>
                    <tr>
                        <td>상주직원 기준</td>
                        <td><input v-model="startup.hold_employee"  class="input_normal" style="margin-bottom:20px;"  type="text" placeholder="상주직원 기준 고용인원을 입력하세요"> </td>
                    </tr>
                    <tr>
                        <td>고용보험 등록기준</td>
                        <td><input v-model="startup.assurance_employee"  class="input_normal"  type="text" placeholder="고용보험 등록 기준 고용인원을 입력하세요"> </td>
                    </tr>               
                </table>
            </div>
            
            <div class="wr_con_finance">
             <div class="seg_ttl">매출액</div>      
             <div v-on:click="add_revenue($event)" class="modi_btn">추가</div> 
                <div class="finance_con">
                <table class="finance">
                    <tr v-for="r in startup.revenue">
                        <td>{{r.year}}</td>
                        <td>
                            <div class="" style="height: 52px;color: #1a2f53;;font-size: 14px;  line-height: 52px; width: 415px;;display:inline-block;font-size: 16px; color: #1a2f53; width:600px; margin-right:175px;" >{{r.num}}</div>
                            <span v-on:click="modify_revenue($event)" style="cursor:pointer" :data-id="r.id">수정</span>
                        </td>
                    </tr>
                    <tr class="add_revenue_row hidden">
                        <td id="cur_year"></td>
                        <td><div id="cur_rev" class="" contenteditable=true style="height: 52px; font-size: 14px; line-height: 52px;color: #1a2f53;;font-size: 14px; width: 415px;;display:inline-block;font-size: 16px; color: #1a2f53; width:600px; margin-right:175px;" ></div>
                        <span style="cursor:pointer">완료</span></td>
                    </tr>                         
                </table>
                </div>
            </div>

            <div class="wr_con_finance">
             <div class="service_name">수출액</div>      
             <div v-on:click="add_trade($event)" class="modi_btn">추가</div> 
                <div class="finance_con">
                <table class="finance">
                    <tr v-for="r in startup.trade">
                        <td>{{r.year}}</td>
                        <td>
                            <div class="" style="height: 52px;color: #1a2f53;;font-size: 14px;  line-height: 52px; width: 415px;;display:inline-block;font-size: 16px; color: #1a2f53; width:600px; margin-right:175px;" >{{r.num}}</div>
                            <span v-on:click="modify_trade($event)" style="cursor:pointer" :data-id="r.id">수정</span>
                        </td>
                    </tr>
                    <tr class="add_trade_row hidden">
                        <td id="cur_trade_year"></td>
                        <td><div id="cur_trade" class="" contenteditable=true style="height: 52px;color: #1a2f53;;font-size: 14px;  line-height: 52px; width: 415px;;display:inline-block;font-size: 16px; color: #1a2f53; width:600px; margin-right:175px;" ></div>
                        <span style="cursor:pointer">완료</span></td>
                    </tr>                         
                </table>
                </div>
        </div>


              <div id="wr_con_3">
                <div class="seg_ttl">지식재산권 보유현황</div>
                <table style="margin-top:20px;">
                    <tr>
                        <td style="padding-bottom:20px;">특허권</td>
                        <td style="padding-bottom:20px;"><input id="patent" class="file" type="file"> </td>
                    </tr>
                    <tr style="padding-bottom:20px;">
                        <td style="padding-bottom:20px;">상표권</td>
                        <td style="padding-bottom:20px;"><input id="trademark" class="file" type="file"> </td>
                    </tr>
                    <tr style="padding-bottom:20px;">
                        <td style="padding-bottom:20px;">실용신안</td>
                        <td style="padding-bottom:20px;"><input id="subpatent" class="file" type="file"> </td>
                    </tr>    
                     <tr style="padding-bottom:20px;">
                        <td style="padding-bottom:20px;">디자인</td>
                        <td style="padding-bottom:20px;"><input id="design" class="file" type="file"> </td>
                    </tr>                 
                </table>
            </div>
        </div>       
    </div>
</template>

<script>

var current_year
var current_year_trade

var min_year
var min_year_trade

export default {
    props:["startup"],
    methods:{        
        modify_trade:function(e){
            if($(e.path[0]).text()=="수정"){
                $(e.path[0]).text("완료")
                $(e.path[0]).parent().find("div").attr("contenteditable",true)
            }else{
                $(e.path[0]).text("수정")
                $(e.path[0]).parent().find("div").attr("contenteditable",false)
                var r = $(e.path[0]).parent().find("div").text()
                for(var k=0; k <= this.$props.startup.trade.length ; k++ ){
                    if(this.$props.startup.trade[k].id == parseInt( $(e.path[0]).attr("data-id") )){
                        this.$props.startup.trade[k].num=r
                    } 
                }
            }
        },
        add_trade(e){
            if( current_year_trade != 2017){
            if($(e.path[0]).text()=="추가" ){
                $(e.path[0]).text("완료")
                $(".add_trade_row").removeClass("hidden")
                $("#cur_trade_year").text(current_year_trade+1);
                
            }
            else{
                $(e.path[0]).text("추가")
                $(".add_trade_row").addClass("hidden")
                current_year_trade = current_year_trade + 1;
                this.$props.startup.trade.push({
                    "year":$("#cur_trade_year").text(), "num":$("#cur_trade").text()
                })
            }
            }
         
        },
             modify_revenue:function(e){
            if($(e.path[0]).text()=="수정"){
                $(e.path[0]).text("완료")
                $(e.path[0]).parent().find("div").attr("contenteditable",true)
            }else{
                $(e.path[0]).text("수정")
                $(e.path[0]).parent().find("div").attr("contenteditable",false)
                var r = $(e.path[0]).parent().find("div").text()
                for(var k=0; k <= this.$props.startup.revenue.length ; k++ ){
                    if(this.$props.startup.revenue[k].id == parseInt( $(e.path[0]).attr("data-id") )){
                        this.$props.startup.revenue[k].num=r
                    } 
                }
            }
        },
         add_revenue(e){
            if( current_year != 2017){
            if($(e.path[0]).text()=="추가" ){
                $(e.path[0]).text("완료")
                $(".add_revenue_row").removeClass("hidden")
                $("#cur_year").text(current_year+1);
                
            }
            else{
                $(e.path[0]).text("추가")
                $(".add_revenue_row").addClass("hidden")
                current_year = current_year + 1;
                this.$props.startup.revenue.push({
                    "year":$("#cur_year").text(), "num":$("#cur_rev").text()
                })
            }
            }
         
        },
    },
    mounted:function(){
        min_year = 2018;
        current_year = 0
        min_year_trade = 2018;
        current_year_trade = 0
        
        var vue_obj = this
        $(document).ready(function(){

            vue_obj.$http.get(`${vue_obj.baseURI}/vue_get_application/?id=60&gr=147`)
            .then((result) => {            
                   console.log(result)
                   vue_obj.$props.startup = result.data
            })

                $(document).off("click","#apply_next")
                $(document).on("click","#apply_next", function () {
                var result = confirm("해당 정보를 토대로 기업 정보를 업데이트 하시겠습니까?")
                if(result == true){
                        var formData = new FormData();
                        
                        var file1 = document.querySelector('#patent');
                        var file2 = document.querySelector('#trademark');
                        var file3 = document.querySelector('#subpatent');
                        var file4 = document.querySelector('#design');
            
                        formData.append("file_1", file1.files[0]);
                        formData.append("file_2", file2.files[0]);
                        formData.append("file_3", file3.files[0]);
                        formData.append("file_4", file4.files[0]);

                        formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                        vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_startup_with_application_3/`, formData)
                        .then((result) => {
                            console.log(result)
                        })

                }
                 var formData = new FormData();
                formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                console.log(vue_obj.$props.startup)
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                }).then((result)=>{
                   
                })

                vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/oversea_info")
                })
                $(document).off("click","#apply_prev")
                $(document).on("click","#apply_prev", function () {
                var result = confirm("해당 정보를 토대로 기업 정보를 업데이트 하시겠습니까?")
                if(result == true){
                      var formData = new FormData();
                        
                        var file1 = document.querySelector('#patent');
                        var file2 = document.querySelector('#trademark');
                        var file3 = document.querySelector('#subpatent');
                        var file4 = document.querySelector('#design');
            
                        formData.append("file_1", file1.files[0]);
                        formData.append("file_2", file2.files[0]);
                        formData.append("file_3", file3.files[0]);
                        formData.append("file_4", file4.files[0]);

                        formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                        vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_startup_with_application_3/`, formData)
                        .then((result) => {
                            console.log(result)
                        })
                }
                 var formData = new FormData();
                formData.append('json_data', JSON.stringify(vue_obj.$props.startup)); 
                console.log(vue_obj.$props.startup)
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_update_application/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
                })
                    vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/business_info")
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



            for(var k =0; k <= vue_obj.$props.startup.revenue.length ; k++){
                try{
                if( parseInt(vue_obj.$props.startup.revenue[k].year) < min_year )
                    min_year =  parseInt(vue_obj.$props.startup.revenue[k].year)
                if( parseInt(vue_obj.$props.startup.revenue[k].year) > current_year )
                    current_year =  parseInt(vue_obj.$props.startup.revenue[k].year)
                console.log(min_year)
                }
                catch(e){
                    console.log(e)
                }
            }
            for(var k =0; k <= vue_obj.$props.startup.trade.length ; k++){
                try{
                if( parseInt(vue_obj.$props.startup.trade[k].year) < min_year_trade )
                    min_year_trade =  parseInt(vue_obj.$props.startup.trade[k].year)
                if( parseInt(vue_obj.$props.startup.trade[k].year) > current_year_trade )
                    current_year_trade =  parseInt(vue_obj.$props.startup.trade[k].year)
                console.log(min_year_trade)
                }
                catch(e){
                    console.log(e)
                }
            }
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
   
}

.modi_btn{   
    font-size: 14px;   
    color: #1b66f4;   
    position: absolute;
    top:30px;
    right:24px;
    cursor: pointer;
}

</style>