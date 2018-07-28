<template>
    <div id="startup_intro_con" class="startup_detail panel_1 ">
        <div id="startup_info">

             <div class="info_con">
            <div class="info_ttl">회사 소개</div>
            <div  style="margin-top:16px;">
             {{startup.intro_text}}
            </div>

            <div  style="margin-top:16px; width:962px;height:1px ; border-bottom:1px solid #c1d1f7"></div>
            
            <div id="filter_con" style="margin-top:16px;">
                <span class="filter" v-for="f in selected_filter">{{f}}</span> 
                <span class="filter_b">융합디자인</span> 
                <span class="filter_b">만화</span>
            </div>     
             </div>

            <div class="info_con">
                <div class="info_ttl">연혁(주요경력)</div>
                <div class="inner_wr" style="">
                    <ul class="inner_ul">
                        <li class="inner_li" >
                            <span class="h_ttl" >2016.08</span>
                            <span class="h_content"></span>

                        </li>
                        <li  class="inner_li" style="height: 46px;width:939px; border-bottom:1px solid #c1d1f7;font-size: 14px;;color: #1a2a53;line-height:46px; ">
                            <span class="h_ttl" style="width:166px;display:inline-block; opacity:0.8; ">2016.08</span>
                            <span class="h_content">파드마 브릿지</span>
                        </li>
                    </ul>
                </div> 
            </div>
            <div class="info_con">
                <div class="info_ttl">기업정보</div>
                <div class="inner_wr">
                    <ul class="inner_ul">
                        <li class="inner_li">
                            <span class="h_ttl"><img src="/static/img/Homepage.png">홈페이지</span>
                            <span class="h_content">홈페디</span>
                        </li>
                        <li class="inner_li">
                            <span class="h_ttl" style="vertical-align:top;"><img src="/static/img/SNS.png">SNS</span>
                            <div class="h_content" style="display:inline-block">
                                <ul>
                                    <li class="sns"><img src="/static/img/facebook_1.png" >페북</li>
                                    <li class="sns"><img src="/static/img/insta.png" >인스타</li>
                                    <li class="sns"><img src="/static/img/youtube.png" >페북</li>
                                </ul>
                            </div>
                        </li>
                        <li class="inner_li">
                            <span class="h_ttl"><img src="/static/img/com_start.png">설립일</span>
                            <span class="h_content">홈페디</span>
                        </li>
                        <li class="inner_li">
                            <span class="h_ttl"><img src="/static/img/Man.png">대표자명</span>
                            <span class="h_content">홈페디</span>
                        </li>
                        <li class="inner_li">
                            <span class="h_ttl"><img src="/static/img/Mail2.png">대표메일</span>
                            <span class="h_content">홈페디</span>
                        </li>
                        <li class="inner_li">
                            <span class="h_ttl"><img src="/static/img/Phone.png">전화번호</span>
                            <span class="h_content">홈페디</span>
                        </li>
                        <li class="inner_li">
                            <span class="h_ttl"><img src="/static/img/Work.png">사업분야</span>
                            <span class="h_content">홈페디</span>
                        </li>
                        <li class="inner_li">
                            <span class="h_ttl"><img src="/static/img/Tag.png">관련태그</span>
                            <span class="h_content">홈페디</span>
                        </li>
                    </ul>
                </div>  
            </div>
            <div class="info_con">
                    <div class="info_ttl">소재지</div>
                    <span style="font-size:14px;display:block; margin-top:16px;"><img src="/static/img/Address.png" style="float:left;margin-top:3px;margin-right:8px;">주소주소주소</span>
            
            </div>
        <div id="modi_btn">수정하기</div>
        </div>
        <div  id="startup_modi" class="hidden">
        <div class="info_con">
            <div class="info_ttl">회사 소개</div>
            <textarea  placeholder="회사 소개글을 입력하세요." v-model="startup.intro_text"></textarea>
            <div class="=info_ttl">필터 선택</div>
            <div id="filter_con"></div>
            <div class="hr" ></div>
            <div id="add_filter">추가하기</div>    
        </div>

        <div class="info_con">
            <div class="info_ttl">연혁</div>
            
            <datetime v-model="date"  style=" display:inline-block; border:1px silid #000; height:40px;"> </datetime>
            <input type="text" placeholder="연혁을 입력하세요" class="input_normal">
            <div class="hr"></div>
            <div id="add_history"><img src="/static/img/pluse4.png" style="float:left; margin-top:12px;margin-left:252px;cursor:pointer"> 추가하기</div>
        </div>

        <div class="info_con">
            <div class="info_ttl">기업정보</div>
            <div class="info_seg"><img src="/static/img/Homepage.png"><span>홈페이지</span><input v-model="startup.homepage"  class="input_normal"></div>
            <div class="info_seg"><img src="/static/img/SNS.png"><span>SNS</span>
                <div class="sns_con"><img src="/static/img/facebook_1.png"> <input class="input_normal"> </div>
                <div class="sns_con"><img src="/static/img/insta.png"> <input class="input_normal"> </div>
                <div class="sns_con"><img src="/static/img/youtube.png"> <input class="input_normal"> </div>                
            </div>
            <div class="info_seg"><img src="/static/img/com_start.png"><span>설립일</span><input class="input_normal" id="pick_month"></div>
            <div class="info_seg"><img src="/static/img/Man.png"><span>대표자명</span><input placeholder="대표자명을 입력하세요" class="input_normal"></div>
            <div class="info_seg"><img src="/static/img/Mail2.png"><span>대표메일</span><input placeholder="대표 메일을 입력하세요" class="input_normal"></div>
            <div class="info_seg"><img src="/static/img/Phone.png"><span>전화번호</span><input placeholder="000-000-0000" class="input_normal"></div>
            <div class="info_seg"><img src="/static/img/Work.png"><span>사업분야</span><input class="input_normal" placeholder="사업분야를 입력하세요"></div>
            <div class="info_seg"><img src="/static/img/Tag.png"><span>관련태그</span><input v-on:keyup="make_hash_string($event)" placeholder="#해시태그 #입력 #해주세요 #띄어쓰기로구분" class="input_normal"></div>
        </div>
        <div class="info_con">
            <div class="info_ttl">소재지</div>
            <div id="add_local">주소검색</div>
            <input readonly placeholder="주소검색을 이용하세요">
            <input placeholder="상세 주소 입력">
        </div>

       <div id="modi_btn">수정</div>

        
        <div id="filter_seg" class="">
            <div id="filter_hd"><span>필터 선택 </span> <span class="x_btn" id="filter_x_btn" >X</span><div ></div></div>
            <div id="filter_popup_wr" style="clear:both">
                <div class="filter_ttl"><div></div>기본장르</div>
                <span  v-for="sp in filter_table_item.base" class="filter_a">{{sp}}</span>
                <div class="filter_ttl" style="margin-top:16px;"><div></div>영역</div>
                <div  style="display:inline-block">창작 &nbsp;&nbsp;<span  v-for="sp in filter_table_item.create"  class="filter_a">{{sp}}</span></div>
                <div style="display:inline-block" >&nbsp;&nbsp;&nbsp;IT관련&nbsp;&nbsp;&nbsp; <span  v-for="sp in filter_table_item.it"  class="filter_a">{{sp}}</span></div>
                <div  style="display:inline-block">창업&nbsp;&nbsp;&nbsp;&nbsp; <span  v-for="sp in filter_table_item.startup"  class="filter_a">{{sp}}</span></div>
                <div  style="display:inline-block">제조/융합 <span  v-for="sp in filter_table_item.manufacture"  class="filter_a">{{sp}}</span></div>
                <div style="display:inline-block" >신규사업 &nbsp;&nbsp;&nbsp;&nbsp;<span  v-for="sp in filter_table_item.new"  class="filter_a">{{sp}}</span></div>
                <div class="filter_ttl"  style="margin-top:16px;"><div></div>조건</div>
                <div  style="display:inline-block">업력&nbsp;&nbsp;&nbsp;&nbsp; <span  v-for="sp in filter_table_item.year"  class="filter_a">{{sp}}</span></div>
                <div style="display:inline-block" >기업형태&nbsp;&nbsp;&nbsp;<span  v-for="sp in filter_table_item.kind"  class="filter_a">{{sp}}</span></div>
                <div  style="display:inline-block">기업단계 &nbsp;&nbsp;<span   v-for="sp in filter_table_item.step" class="filter_a">{{sp}}</span></div>
                <div style="display:inline-block" >소재지 <span  v-for="sp in filter_table_item.local"  class="filter_a">{{sp}}</span></div>
                <div > <div style="display:inline-block">구성원</div> 
                        <div style="display: inline-block; width: 454px; margin-left:30px; ">
                        <input type="text" id="range_01" name="example_name" value=""/>
                    </div>
                </div>                
            </div>
        </div>

        <div id="int_sp" class="hidden">
       <div id="sp_hd"><span class="ttl">관심지원사업</span> <span id="sp_x_btn" class="x_btn">x</span> </div>
            <div id="filter_popup_wr">              
                <div >자금지원 <span v-for="sp in sp_table_item.money" class="filter_a">{{sp}}</span></div>
                <div >투자연계 <span v-for="sp in sp_table_item.fund"  class="filter_a">{{sp}}</span></div>
                <div >교육 <span  v-for="sp in sp_table_item.edu"  class="filter_a">{{sp}}</span></div>
                <div >판로 <span v-for="sp in sp_table_item.channel"  class="filter_a">{{sp}}</span></div>
                <div >네트워킹 <span  v-for="sp in sp_table_item.network"  class="filter_a">{{sp}}</span></div><br>
                <div >공간지원 <span  v-for="sp in sp_table_item.space" class="filter_a">{{sp}}</span></div>
                <div >피칭 <span v-for="sp in sp_table_item.etc"  class="filter_a">{{sp}}</span></div>
            </div>
        </div>  
        </div >


    </div>
</template>
<script>
import * as utils from "../utils/utils"
   var mapContainer  
     var  mapOption
    //지도를 미리 생성
    var map  
    //주소-좌표 변환 객체를 생성
    var geocoder 
    //마커를 미리 생성
    var marker

export default {
    props:["startup"],
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
                "kind":["개인사업자","법인사업자","경기도기업"],
                "step":["기획/개발","MVP 보유기업","상품/상용화"]
           },
            sp_table_item:{
                "money":["자금지원","R&D지원"],
                "fund":["엑셀러레이팅 프로그램","데모데이 프로그램(투자연계)"],
                "edu":["교육 프로그램","전문가 양성 프로그램"],
                "channel":["해외 진출 지원","전시회 참가지원","유통지원"],
                "network":["네트워킹 프로그램", "데모데이 프로그램(네트워킹)","전문가 컨설팅&멘토링"],
                "space":["스타트업 오피스 지원","가상오피스 지원"],
                "pitch":["기업피칭"],
                "etc":["마케팅지원","퍼블리싱 지원","B2B 상담 지원","번역지원"],
            }

        }
    },
    methods:{
        make_hash_string:function(e){
            console.log("asdfasd")
            utils.make_hash_string(e)
        },

            modify_local:function(e){
                 if($(e.path[0]).text()=="수정"){
                     $(e.path[0]).parent().find(".intro_text").attr("contenteditable",true)
                     $(e.path[0]).parent().find(".intro_text").focus()
                    $(e.path[0]).text("완료")
                 }else{
                      $(e.path[0]).parent().find(".intro_text").attr("contenteditable",false)
                      this.startup.location = $(e.path[0]).parent().find(".intro_text").text()                      
                    $(e.path[0]).text("수정")
            var formData = new FormData();
           
           formData.append('json_data', JSON.stringify(this.$props.startup));    
            this.$http.post(`${this.baseURI}/vue_update_startup_detail/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
                this.$http.get(`${this.baseURI}/vue_get_startup_detail/?id=60`)
                .then((result) => {
                    console.log(result)
                    this.startup = result.data
                })
                })
                 }
            }
            ,
            modify_tag:function(e){
                 if($(e.path[0]).text()=="수정"){
                    $(".tag").addClass("hidden")
                    
                    $("#tag_modi").text($(".tag_bag>.tag").text())
                    $("#tag_modi").removeClass("hidden")
                    $("#tag_modi").attr("contenteditable", true)
                    $("#tag_modi").focus()
                    $(e.path[0]).text("완료")
            }else{                           
                    $(".tag").removeClass("hidden")
                    var text = $("#tag_modi").text()
                    this.startup.information.tag = []
                    console.log(this.startup.information.tag)
                    for(var k=1;k<text.split("#").length; k++){
                        if(text.split("#")[k]!="")
                        this.startup.information.tag.push(text.split("#")[k])
                    }
                    $("#tag_modi").text("")
                    $("#tag_modi").addClass("hidden")
                    $("#tag_modi").attr("contenteditable", false)
                     $(e.path[0]).text("수정")
                            var formData = new FormData();
          
            formData.append('json_data', JSON.stringify(this.$props.startup));    
            this.$http.post(`${this.baseURI}/vue_update_startup_detail/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
                this.$http.get(`${this.baseURI}/vue_get_startup_detail/?id=60`)
                .then((result) => {
                    console.log(result)
                    this.startup = result.data
                    
                })
            })
            }
            },
            modify_email:function(e){
            if($(e.path[0]).text()=="수정"){
                $("#email").attr("contenteditable", true)
                 $("#email").focus()
                $(e.path[0]).text("완료")
            }else{
                $("#email").attr("contenteditable", false)
                this.startup.information.email =  $("#email").text()
                $(e.path[0]).text("수정")
                       var formData = new FormData();
            formData.append('json_data', JSON.stringify(this.$props.startup));    
            this.$http.post(`${this.baseURI}/vue_update_startup_detail/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
                this.$http.get(`${baseURI}/vue_get_startup_detail/?id=60`)
                .then((result) => {
                    console.log(result)
                    this.startup = result.data
                })
            })
            }
        },
        modify_hompage:function(e){
            if($(e.path[0]).text()=="수정"){
                $("#homepage").attr("contenteditable", true)
                $("#homepage").focus()
                
                $(e.path[0]).text("완료")
            }else{
                $("#homepage").attr("contenteditable", false)
                this.startup.information.homepage =  $("#homepage").text()
                $(e.path[0]).text("수정")
                       var formData = new FormData();
            formData.append('json_data', JSON.stringify(this.$props.startup));    
            this.$http.post(`${this.baseURI}/vue_update_startup_detail/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
                this.$http.get(`${baseURI}/vue_get_startup_detail/?id=60`)
                .then((result) => {
                    console.log(result)
                    this.startup = result.data
                })
            })
            }
        },
        modify_history:function(e){
            if($(e.path[0]).text()=="수정"){
                $(e.path[0]).text("완료")
                $(e.path[0]).parent().find("span>select").removeClass("hidden")
                $(e.path[0]).parent().find(".date").addClass("hidden")
                $(e.path[0]).parent().find(".history_content").attr("contenteditable",true)
                $(e.path[0]).parent().find(".history_content").focus()
            }else{
                $(e.path[0]).text("수정")
                $(e.path[0]).parent().find("span>select").addClass("hidden")
                $(e.path[0]).parent().find(".date").removeClass("hidden")
                $(e.path[0]).parent().find(".history_content").attr("contenteditable",false)
                for( var k = 0; k < this.startup.history.length ; k++){
                    if(this.startup.history[k].id ==  parseInt($(e.path[0]).attr("data-id"))){
                        this.startup.history[k].year = $(e.path[0]).parent().find("span>.year_select").val()
                        this.startup.history[k].month = $(e.path[0]).parent().find("span>.month_select").val()
                        this.startup.history[k].content = $(e.path[0]).parent().find(".history_content").text()
                    }
                }
                var formData = new FormData();
            formData.append('json_data', JSON.stringify(this.$props.startup));    
            this.$http.post(`${this.baseURI}/vue_update_startup_detail/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
                this.$http.get(`${baseURI}/vue_get_startup_detail/?id=60`)
                .then((result) => {
                    console.log(result)
                    this.startup = result.data
                })
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
      add_history_2:function(){
                this.startup.history.unshift({
                    "year": $("#year").val(),"month": $("#month").val(),
                    "content" : $("#history_content").text()
                    })
                $("#history_content").text("연혁을 입력하세요")
                $("#history_content").focus()
                $(".intro_box.history").addClass("hidden")
                $(".modify.year").text("추가")
                var formData = new FormData();
            formData.append('json_data', JSON.stringify(this.$props.startup));    
            this.$http.post(`${this.baseURI}/vue_update_startup_detail/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
                this.$http.get(`${this.baseURI}/vue_get_startup_detail/?id=60`)
                .then((result) => {
                    console.log(result)
                    this.startup = result.data
                })
            })
      },
        add_history:function(e){
            if($(e.path[0]).text()=="추가"){
                console.log("here")
                $(".intro_box.hidden.history").removeClass("hidden")
                $("#history_content").focus()
                $(".modify.year").text("완료")
            }else{
                $("#year").val()
                $("#month").val()
                this.$props.startup.history.unshift({
                    "year": $("#year").val() ,"month": $("#month").val(),
                    "content" : $("#history_content").text() 
                })

                var formData = new FormData();
            formData.append('json_data', JSON.stringify(this.$props.startup));    
            this.$http.post(`${this.baseURI}/vue_update_startup_detail/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
                this.$http.get(`${this.baseURI}/vue_get_startup_detail/?id=60`)
                .then((result) => {
                    console.log(result)
                    this.startup = result.data
                })
            })
                $("#history_content").text("연혁을 입력하세요")
                $(".intro_box.history").addClass("hidden")
                $(".modify.year").text("추가")
            }
        },
        modyfy_intro:function(e){
            if($(e.path[0]).text()=="수정"){
                $(e.path[0]).parent().find(".intro_text").attr("contentEditable",true)
                $(e.path[0]).parent().find(".intro_text").focus()
                $(e.path[0]).text("완료")
            }else{
                this.$props.startup.intro_text = $(e.path[0]).parent().find(".intro_text").text()
            var formData = new FormData();
            formData.append('json_data', JSON.stringify(this.$props.startup));    
            this.$http.post(`${this.baseURI}/vue_update_startup_detail/`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
                })
            .then((result) => {
                this.$http.get(`${this.baseURI}/vue_get_startup_detail/?id=60`)
                .then((result) => {
                    console.log(result)
                    this.startup = result.data
                })
            })
                $(e.path[0]).parent().find(".intro_text").attr("contentEditable",false)
                $(e.path[0]).text("수정")               
        }
        },
     
    sample5_execDaumPostcode :function () {
        new daum.Postcode({
            oncomplete: function(data) {
                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullAddr = data.address; // 최종 주소 변수
                var extraAddr = ''; // 조합형 주소 변수
                // 기본 주소가 도로명 타입일때 조합한다.
                if(data.addressType === 'R'){
                    //법정동명이 있을 경우 추가한다.
                    if(data.bname !== ''){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있을 경우 추가한다.
                    if(data.buildingName !== ''){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }
                // 주소 정보를 해당 필드에 넣는다.
                document.getElementById("map").value = fullAddr;
                // 주소로 상세 정보를 검색
                geocoder.addressSearch(data.address, function(results, status) {
                    // 정상적으로 검색이 완료됐으면
                    if (status === daum.maps.services.Status.OK) {
                        var result = results[0]; //첫번째 결과의 값을 활용
                        // 해당 주소에 대한 좌표를 받아서
                        var coords = new daum.maps.LatLng(result.y, result.x);
                        // 지도를 보여준다.
                        mapContainer.style.display = "block";
                        map.relayout();
                        // 지도 중심을 변경한다.
                        map.setCenter(coords);
                        // 마커를 결과값으로 받은 위치로 옮긴다.
                        marker.setPosition(coords)
                    }
                });
            }
        }).open();
        }
    },
    mounted: function(){
        var vue_obj = this
        $(document).ready(function(){

            $(document).on("click","#add_history", function(){

            })
            $("#history_month_picker").MonthPicker({ StartYear: 2020, ShowIcon: false });

            $(document).on("click","#modi_btn", function(){
                $("#startup_info").addClass("hidden")
                $("#startup_modi").removeClass("hidden")
                
            })
            setTimeout(function(){
                $(".vdatetime-input").attr("maxlength",'9')
            },1000)
           
                    var values = ["제한없음"]
                            for (var k = 1; k < 100; k++) {
                                values.push(k + "명 이하")
                            }
                            values.push("100명 이상")
                            $("#range_01").ionRangeSlider({
                                values: values,
                                type: "single",
                                min: 0,
                                max: 100,
                                from:0,
                                onFinish:
                                    function (data) {
                                        console.log(data);
                                        $("#range_01").val(data.from)
                                    },
                            });

            try{
                    //
                 var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };
        // 지도를 생성합니다
        var map = new daum.maps.Map(mapContainer, mapOption);
        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new daum.maps.services.Geocoder();
        var address_start = vue_obj.$props.startup.location
        console.log(vue_obj.$props.startup.location)
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address_start, function(result, status) {

            // 정상적으로 검색이 완료됐으면
            if (status === daum.maps.services.Status.OK) {

                var coords = new daum.maps.LatLng(result[0].y, result[0].x);

                console.log("1.다음지도====="+result[0].y); /// 위도
                console.log("2.다음지도====="+result[0].x); /// 경도


                $("#order_start_lat").val(result[0].y);  //order_start_lat 필드에 위도 값 저장
                $("#order_start_lon").val(result[0].x);  //order_start_lon 필드에 경도 값 저장

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new daum.maps.Marker({
                    map: map,
                    position: coords
                });


                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            }
        });

                $("#startup_intro_con").addClass("hidden")
                }
                catch(e){}
         
           

            console.log(vue_obj.$route.fullPath.indexOf("mypage"))
            if(vue_obj.$route.fullPath.indexOf("mypage") == - 1){
                $(".modify").remove()
                $(".modi_seg").remove()
               
                  $(document).off("click","#local_map")
            }else{
                 $(document).on("click","#local_map", function(){
                vue_obj.sample5_execDaumPostcode()
                })
            }
        })
    },
    updated:function(){
        console.log("업데이트 되었습니다.")
            
    }
}
</script>
<style>
.vdatetime{
    display: inline-block;
}

.vdatetime>input{
    height: 38px!important;
    background-color: #ffffff!important;
    border: solid 1px #ced4da!important;
    line-height: 38px!important;
    padding-left: 20px!important;
    font-size: 14px;
    display: inline-block;
}


</style>


<style scoped>
#add_history{
    cursor: pointer;
    margin-top:16px;
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
.vdatetime-input{
    width: 392px;
    height: 40px;
}

textarea{
    margin-top:8px;
    width: 952px;
    height: 94px;
    background-color: #ffffff;
    border: solid 1px #ced4da;
    padding:8px;
}
#filter_popup_wr{
    width:888px;
    padding:24px;
}
#filter_hd{
    height:40px;
    background-color: #e7edfc;
    width:100%
}
#filter_hd>.x_btn{
    float: right;
    cursor: pointer;
}
#filter_hd>span{
    float: left;
    margin:9px;

}
#filter_seg{
    background-color: #fff;
    width:936px;
    margin:8px;
}
.filter_ttl>div{
    width: 8px;
    height: 8px;
    background-color: #1b66f4;
    border-radius: 10px;
    margin-top:2px;
    display: inline-block;
    margin-right:8px;
}
.filter_ttl{
    font-size: 14px!important; 
    line-height: 1.86;
    letter-spacing: -0.1px;
    color: #1a2a53;
}

#int_sp{
    background-color: #fff;
}
#filter_popup_wr>div{   
    margin-bottom:12px;
    font-size: 12px;
    line-height: 1.83;
    color: #1a2a53;
}

.filter_a{
    margin-right: 6px;
    cursor: pointer;
    border-radius: 100px;
    padding-left: 26px;
    padding-right: 26px;
    padding-top:11px;
    padding-bottom:11px;
    display: inline-block;
    background-color: #f5f8ff;
    height: 18px;
    line-height: 18px;
    opacity: 0.7;
    font-size: 14px;
    letter-spacing: -0.1px;
    text-align: center;
    color: #1a2a53;
    margin-bottom:12px;
}

#add_filter{
    cursor: pointer;
    height: 40px;
    border-radius: 28px;
    background-color: #ffffff;
    border: solid 1px #1b66f4;
    width:100px;
    text-align: center;
    line-height: 40px;
    color: #1b66f4;
}
#add_history{
    width: 576px;
    height: 40px;
    border: solid 1px #1b49f4;  
    font-size: 12px;
    color: #1b49f4;
    line-height: 40px;
}
.info_con{
    width: 968px;
    padding: 24px;
    height: auto;
    overflow: auto;
    background-color: #ffffff;
    margin-bottom:16px;
}
.info_ttl{
    width: 160px;
    height: 28px;
    opacity: 0.8;
    font-size: 17px;
    font-weight: bold;
    line-height: 1.65;
    letter-spacing: -0.3px;
    color: #1a2f53;
}

.input_normal{
      width: 392px;
  height: 40px;
  background-color: #ffffff;
  border: solid 1px #e7edfc;
  outline:none;
}




.modify{
    position: absolute;
    top:28px;
    right:24px;
    cursor: pointer;
    color: #1b66f4;
    font-size: 14px;
}
.intro_con{
    position: relative;
    width:1016-48px;
    background-color: #ffffff;
    padding:24px;
    height: auto;
    overflow: auto;
    margin-bottom: 24px;
}
.intro_ttl{ 
  opacity: 0.8;
  font-size: 20px;
  font-weight: bold;
  color: #1a2f53;
}
.intro_text{
    margin-top: 24px;
}
.intro_box{
    width: 968px;
    height: 56px;
    border: solid 1px #ced4da;
    margin-top: 24px;
}
.intro_box>div{
    line-height: 56px;
    margin:0px 12px;
    margin-left: 56px;
}
.intro_box>div:nth-child(1){float: left;
 font-size: 16px; 
  color: #1a2f53; }
.intro_box>div:nth-child(2){float: left;
 font-size: 16px; 
  color: #1a2f53;}
.modi_seg{
    float: right;
    margin-right: 24px!important;
        color: #1b66f4;
    font-size: 14px;
    cursor: pointer;
}
.filter_b{
    background-color: #f5f8ff;
    padding:7px 21px;
    opacity: 0.7;  
    font-size: 14px; 
    line-height: 1.86;
    letter-spacing: -0.1px;
    text-align: center;
    color: #1a2a53;
    border-radius:30px; 
    display: inline-block;
    margin-right: 8px;
}
.inner_wr{
    padding:0px 16px; width:939px; border:1px solid #c1d1f7; 
    margin-top:16px;

}

.inner_li{
min-height: 46px;width:939px; border-bottom:1px solid #c1d1f7;font-size: 14px;;color: #1a2a53;line-height:46px;
}
.inner_ul{

}
.h_ttl{
    width:166px; display:inline-block ; opacity:0.8;
}
.inner_li:last-child{
    border:none!important;
}
.h_ttl>img{
    float:left;
    margin-top:13px;
    margin-right:7px;
}
.sns>img{
    width:24px;
    margin-right:24px;
    float: left;
    margin-top:8px
}
.sns{
    line-height: 36px;
    height:36px;
}
#modi_btn{
    margin-bottom:200px;
    width: 100px;
    height: 40px;
    border-radius: 28px;
    background-color: #ffffff;
    border: solid 1px #1b66f4;
    text-align: center;
    line-height: 40px;
    color:#1b66f4;
    margin-left: 458px;
    margin-top:32px;    
    cursor: pointer;
}
#intro_text{

}
.hr{
    width: 968px;
    height: 1px;

    border-bottom: solid 1px #e7edfc;
    margin-top:16px;
    margin-bottom:16px;
}
.add_local{
    width: 160px;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #1b49f4;
}

</style>
