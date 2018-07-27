<template>
    <div id="startup_hidden_info" class="startup_detail panel_3" >
    
    
    
    
    <div id="hidden_info_show">
        <div class="hidden_info_seg" style="margin-top:16px;">
            <div class="info_ttl">관심 지원사업</div>
            <div class="filter_con">
                <span class="filter">자금지원사업</span>    
            </div>        
        </div>

        <div class="hidden_info_seg">
            <div class="info_ttl">기업 형태</div>
            <div class="filter_con">
               <span class="filter">법인사업자</span> 
            </div>
        </div>

        <div class="hidden_info_seg">
            <div class="info_ttl">사업자 등록증</div>
            <div class="file">
                    <input class="service_info_file" type="file">
                </div>
        </div>

        <div class="hidden_info_seg">
            <div class="info_ttl">추가 입력사항</div>
            <div class="con">
                <div class="file_con"><input type="chechbox"> 지적재산권</div>
                <div class="file_con"><input type="chechbox"> 매출액</div>
                <div class="file_con"><input type="chechbox"> 수출액</div>
                <div class="file_con"><input type="chechbox"> 투자유치내역</div>
            </div>
        </div>

        <div class="hidden_info_seg">
            <div class="info_ttl">지적재산권</div>
                <div class="intel_file">특허권
               </div>
            <div class="file">
                    <input class="service_info_file" type="file"><img src="/static/img/cancel@3x.png" style="width:24px; height:24px;">
                </div>
        </div>
        <div class="hidden_info_seg">
            <div class="info_ttl">매출액</div>
            <ul>
                <li><span class="y">{{year}}</span> <span>{{size}}</span></li>
            </ul>
            
        </div>
   <div class="hidden_info_seg">
            <div class="info_ttl">수출액</div>
            <ul>
                <li><span class="y">{{year}}</span> <span>{{size}}</span></li>
            </ul>
        </div>
           <div class="hidden_info_seg">
            <div class="info_ttl">투자유치내역</div>
            <ul>
                <li><span class="y">{{year}}</span> <span>{{size}}</span></li>
            </ul>
        </div>
    </div>
            <div id="modify_btn">수정하기</div>
        
        <div id="hidden_info_input">
             <div class="hidden_info_seg" style="margin-top:16px;">
            <div class="info_ttl">관심 지원사업</div>
            <div class="tag_con">
                <span class="tag">자금지원</span><span class="tag">엑셀러레이팅 프로그램</span>  
            </div>
        </div>

        <div class="hidden_info_seg">
            <div class="info_ttl">기업 형태</div>
            <div class="tag_con">
                <span class="tag">법인사업자</span>  
            </div>
        </div>

        <div class="hidden_info_seg">
            <div class="info_ttl">사업자 등록증</div>
            <div class="file">
                    <input class="service_info_file" type="file"><img src="/static/img/cancel@3x.png" style="width:24px; height:24px;">
                </div>
        </div>

        <div class="hidden_info_seg">
            <div class="info_ttl">지적재산권</div>
            
            <div class="file">
                    <input class="service_info_file" type="file"><img src="/static/img/cancel@3x.png" style="width:24px; height:24px;">
                </div>
        </div>
        <div class="hidden_info_seg">
            <div class="info_ttl">매출액</div>
            <ul>
                <li><span class="y">{{year}}</span> <span>{{size}}</span></li>
            </ul>
              <div id="add_history"><img src="/static/img/pluse.png" style="float:left"> 추가하기</div>
        </div>
   <div class="hidden_info_seg">
            <div class="info_ttl">수출액</div>
            <ul>
                <li><span class="y">{{year}}</span> <span>{{size}}</span></li>
            </ul>
              <div id="add_history"><img src="/static/img/pluse.png" style="float:left"> 추가하기</div>
        </div>
           <div class="hidden_info_seg">
            <div class="info_ttl">투자유치내역</div>
            <ul>
                <li><span class="y">{{year}}</span> <span>{{size}}</span></li>
            </ul>
              <div id="add_history"><img src="/static/img/pluse.png" style="float:left"> 추가하기</div>
        </div>
        </div>
    </div>
</template>

<script>
var current_year
var current_year_trade
var min_year = 2200;
var min_year_trade =2200;
var revenue_flag = true
var year_alert = false
export default {
    props:["startup"],
    methods:{
            modi_file:function(e){
                if($(e.path[0]).text()=="수정"){
                    $("#file").addClass("hidden")
                    $("#submit_file").removeClass("hidden")
                    $(e.path[0]).text("완료")
                }
                else{
                     $("#file").removeClass("hidden")
                    $("#submit_file").addClass("hidden")
                    $(e.path[0]).text("수정")
                    var formData = new FormData();
            var file = document.querySelector('#business_file');
            this.$props.startup.business_file = $("#business_file").val().replace(/^.*[\\\/]/, '')

            formData.append("file", file.files[0]);
            formData.append('json_data', JSON.stringify(this.$props.startup));    
            this.$http.post(`${this.baseURI}/vue_update_startup_detail/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })

                }
            },
            add_invest:function(e){
            if($(e.path[0]).text()=="추가"){
                $(".add_invest_row").removeClass("hidden")
                $("td>#num").attr("contenteditable",true)
                $("td>#company").attr("contenteditable",true)
                $("td>#num").focus()
                $(e.path[0]).text("완료")
            }
            else{
            $(".add_invest_row").addClass("hidden")
                $(e.path[0]).text("추가")
                this.$props.startup.invest.push({
                    "year":$("#invest_year").val(),
                    "currency": $("#currency").val(),
                    "company":$("#company").text(),
                    "kind": $("#step").val(),
                    "num" : $("td>#num").text()
                })
            }
        },

         getNumbers:function(start,stop,step = 1){
             var result=[]
            for(var k = start ; k <= stop ; k = k + step){
                result.push(k)
            }
        return result.reverse();
        },
        modify_trade:function(e){
            if($(e.path[0]).text()=="수정"){
                $(e.path[0]).text("완료")
                $(e.path[0]).parent().find("div").attr("contenteditable",true)
                  $(e.path[0]).parent().find("div").focus()
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
             if(min_year_trade == 2200){
            try{
                             
                for(var k =0; k < this.$props.startup.history.length ; k++){
                if( parseInt(this.$props.startup.history[k].year) < min_year_trade )
                    min_year_trade =  parseInt(this.$props.startup.history[k].year)
                    current_year_trade = min_year_trade                
                }
                year_alert = false
            }   
            catch(e){
                console.log(e)
        
                year_alert = true
            }
            try
            {
            for(var k =0; k < this.$props.startup.trade.length ; k++){
                if( parseInt(this.$props.startup.trade[k].year) < min_year_trade )
                    min_year_trade =  parseInt(this.$props.startup.trade[k].year)
                if( parseInt(this.$props.startup.trade[k].year) > current_year_trade )
                    current_year_trade =  parseInt(this.$props.startup.trade[k].year)
              
                    }
            }
            catch(e){
                console.log(e)
            }
         
            }
            console.log(min_year_trade)
            console.log(current_year_trade)
            if( current_year_trade != 2017){
            if($(e.path[0]).text()=="추가" ){
                $(e.path[0]).text("완료")
                $(".add_trade_row").removeClass("hidden")
                $(".add_trade_row").focus()
                $("#cur_trade_year").text(current_year_trade+1);
                $("#cur_trade").focus()
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
                $(e.path[0]).parent().find("div").focus()
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
            console.log(min_year)
            if(min_year == 2200){
            try{
                console.log(this.$props.startup.history)
                console.log(this.$props.startup.history.length)
                
                for(var k =0; k < this.$props.startup.history.length ; k++){
                if( parseInt(this.$props.startup.history[k].year) < min_year )
                   
                    min_year =  parseInt(this.$props.startup.history[k].year)
                    current_year = min_year                
                }
                year_alert = false
            }   
            catch(e){
      
                year_alert = true
            }
            try
            {
            for(var k =0; k < this.$props.startup.revenue.length ; k++){
                if( parseInt(this.$props.startup.revenue[k].year) < min_year )
                    min_year =  parseInt(this.$props.startup.revenue[k].year)
                if( parseInt(this.$props.startup.revenue[k].year) > current_year )
                    current_year =  parseInt(this.$props.startup.revenue[k].year)
                console.log(min_year)
                console.log(current_year)              
                    }
            }
            catch(e){
                console.log(e)
            }
         
            }
            if(year_alert == true){
                alert("연혁을 입력하여 주세요.")
            }
             if( current_year != 2017){
            if($(e.path[0]).text()=="추가" ){
                $(e.path[0]).text("완료")
                $(".add_revenue_row").removeClass("hidden")
                $("#cur_year").text(current_year+1);
                $("#cur_rev").focus()
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
        modify_tag:function(e){
            console.log(e)
            if( $(e.path[0]).text() == "추가" ){
                $(".tag_table").removeClass("hidden")
                $(e.path[0]).text("완료")
            }
            else{
                $(".tag_table").addClass("hidden")
                $(e.path[0]).text("추가")
            }
        },
        add_tag:function(e){
    
            if(this.$props.startup.tag.indexOf($(e.path[0]).text().replace("#",""))==-1){
                this.$props.startup.tag.push($(e.path[0]).text().replace("#",""))
                $(e.path[0]).addClass("bold")
            } 
            else{
                var index = this.$props.startup.tag.indexOf($(e.path[0]).text().replace("#",""))
                this.$props.startup.tag.splice(index,1)
                $(e.path[0]).removeClass("bold")
            }            
            // 서버와 연동하는 코드 추가
        }
    },
    mounted:function(){
        min_year = 2200;
        current_year = 0
        min_year_trade = 2200;
        current_year_trade = 0
        
        var vue_obj = this
        $(document).ready(function(){
            if( $(".filter_r").length == 0){
                $("#startup_hidden_info > div:nth-child(1) > div.modi_btn").click()
            }

            try{
                for(var k =0; k <= vue_obj.$props.startup.history.length ; k++){
                if( parseInt(vue_obj.$props.startup.history[k].year) < min_year )
                    min_year =  parseInt(vue_obj.$props.startup.history[k].year)
                    current_year = min_year                
                }
                year_alert = false
            }   
            catch(e){
                console.log(e)
                year_alert = true
            }

            try
            {
            for(var k =0; k <= vue_obj.$props.startup.revenue.length ; k++){
                if( parseInt(vue_obj.$props.startup.revenue[k].year) < min_year )
                    min_year =  parseInt(vue_obj.$props.startup.revenue[k].year)
                if( parseInt(vue_obj.$props.startup.revenue[k].year) > current_year )
                    current_year =  parseInt(vue_obj.$props.startup.revenue[k].year)
                console.log(min_year)

                console.log(current_year)              
                    }
            }
            catch(e){
                console.log(e)
            }
            try{

           
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
            }
            catch(e){

            }

            for(var k =0; k < $(".filter_r").length; k++){
               $(".filter:contains('"+$(".filter_r:eq("+k+")").text().replace("#","")+"')").addClass("bold")
            }

        })
    },
    data:function(){
        return{      
              filter_table_item:{
                "base":["만화","출판","게임","애니메이션","방송","공연","광고","캐릭터","지식정보","콘텐츠 솔루션"],
                "create":["일러스트","전문디자인","디자인","콘텐츠기획"],
                "startup":["스타트업","1인기업","융합스타트업"],
                "new":["VR","AR","MCN"],
                "it":["IT","SW","ICT"],
                "manufacture":["메이커스","제조융복합","1인제조업"],
                "etc":["기획","개발","마케터"],
                "year":["3년이내","5년이내","7년이내","제한없음"],
                "local":["경기도기업","경기도 이전 예정","경기도 기업 이용기업","경기도 거주 임직원"],
                "kind":["개인사업자","법인사업자","경기도기업","MVP 보유기업","상용화 제품 보유기업"]
            }
        }
    }
}
</script>
<style scoped>
#modify_btn{
     width: 100px;
  height: 40px;
  border-radius: 28px;
  background-color: #ffffff;
  border: solid 1px #1b66f4;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  margin-left: 458px;
}

.tag_con{
    margin-top: 24px;
}
.bold{
    font-weight: bold;
}

span.filter_r{
    font-size: 14px;
    line-height: 1.71;
    color: #1b66f4!important;
    margin-right: 16px;
    display: inline-block;
}

#f_li>li{
    float: left;
    margin-right: 25px;
    display: inline-block;
    width:125px;
}
#f_li>li:last-child{
    margin-right: 0px;
}
.filter_ttl{
    display: inline-block;
    vertical-align: top;
    margin-top: 29px;
}
.filter_ul{
   
}
table>tr>td{
    height: 64px;;
    vertical-align: middle;
    border-bottom: 1px solid #ced4da
}
table>tr:last-child>td{
    border-bottom: none;
}
table>tr>td:nth-child(1){
    width: 89px;
}
td>span{
    font-size: 12px;
    line-height: 1.33;
    color: #a0a3bc;
    display: inline-block;
}


.input_normal{
    width: 415px;
    height: 52px;
    border:none;   
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

.finance_con{
    width: 927px;
    border: 1px solid #ced4da;
    background-color: #fff;
    position: relative;
    margin-bottom: 24px;
    overflow: auto;
    padding: 0px;
    padding-left: 24px;
    padding-right: 16px;
    margin-top: 24px;
    
}
#file{

    cursor: pointer;
    margin-top: 24px;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.71;
    color: #2256b8;
}
.hidden_info_seg{
        position: relative;
        width: 968px;
      
        height: auto;
        background-color: #ffffff;
        padding: 24px;
        margin-bottom: 24px;
}
.service_name{
    opacity: 0.8;
  font-size: 20px;
  font-weight: bold;
  color: #1a2f53;
  display: inline-block;
}
.service_name_sub{
    display: inline-block;
      font-size: 12px;
  color: #a0a3bc;
  margin-left: 7px;
}
.modi_btn{   
    font-size: 14px;   
    color: #1b66f4;   
    position: absolute;
    top:30px;
    right:24px;
    cursor: pointer;
}
.filter{
    opacity: 0.5;
    font-size: 14px;
    color: #1b66f4;
    cursor: pointer;
    margin-right: 40px;
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


.file_ttl{
   
  height: 32px;
  opacity: 0.8;
  font-family: NotoSansCJKkr;
  font-size: 17px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.65;
  letter-spacing: -0.3px;
  color: #1a2f53;
  margin-top:24px;
}

.file{
     width: 576px;
  height: 40px;
  background-color: #ffffff;
  border: solid 1px #c1d1f7;
}
.file>img{
     width: 24px;
  height: 24px;
  float: right;
  margin-top:8px;
  margin-right:8px;
}
.file>input{
    margin: 8px;
}
.filter{
    background-color: #f5f8ff;
    font-size: 14px;
    letter-spacing: -0.1px;
    text-align: center;
    color: #1a2a53;
    border-radius: 30px;
}
.filter_con{
    margin-top:16px;
}
</style>
