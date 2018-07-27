<template>


    <div id="filter_setting" style="width:100%; background-color:#f5f8ff">
        <div id=filter_conf_con style="width:1224px;margin:0px auto; overflow:auto; padding-bottom:10px; height:auto;border-bottom:1px solid #c1d1f7">
        <div id="filter_list" style="display:none">
            <ul class="top_tag_con">
                <li class="filter_conf" v-for="item in items">{{item.name}}&nbsp;<i class="fas fa-times x_tag"></i>  </li>
            </ul>
            <div><span id="save_btn" v-on:click="save_tag">설정 저장</span> <span v-on:click="tag_cancel" id="x_btn">X</span>   </div>
        </div>
        <div id="filter_result" style="overflow:auto;height:auto;width:100%;">
            <ul  class="top_tag_con">
                <li class="filter_res" v-for="item in items">{{item.name}}  </li>
            </ul>
            <div><span id="filter_add_btn" v-on:click="add_tag">필터 추가</span></div>
        </div>
    </div>

    <div id="filter_popup" style="display:none">    
        <div id="filter_panel">
        <table style="border-collapse:collapse">
            <tr>
                <td id="f_col" class="col_name" style="height:121px;">
                     <div>
                        <div></div>
                        기본장르
                    </div><br>                
                    <span class="filter" v-for="t in filter_table_item.base">{{t}}</span>
                </td>
            </tr>
            <tr>
                <td class="col_name" style="height:135px;">
                    <div>
                        <div></div>
                        영역
                    </div>
                  
                
                    <ul id="f_li">
                        <li><span class="filter_ttl">창작</span> <span class="filter"  v-for="t in filter_table_item.create">{{t}}</span></li>
                        <li><span class="filter_ttl">IT 관련</span> <span class="filter" v-for="t in filter_table_item.it">{{t}}</span></li>
                        <li><span class="filter_ttl">창업</span> <span class="filter" v-for="t in filter_table_item.startup">{{t}}</span></li>
                        <li><span class="filter_ttl">제조/융합</span> <span class="filter" v-for="t in filter_table_item.manufacture">{{t}}</span></li>
                        <li  style="clear:left"><span class="filter_ttl">신규산업</span> <span class="filter" v-for="t in filter_table_item.new">{{t}}</span></li>
                        <li><span class="filter_ttl">기타</span> <span class="filter" v-for="t in filter_table_item.etc">{{t}}</span></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="col_name" style="padding-bottom:33px;">
                     <div>
                        <div></div>
                        조건
                    </div>
              
                 <ul id="s_li">
                        <li><span class="filter_ttl">업력</span> <span class="filter" v-for="t in filter_table_item.year">{{t}}</span></li>
                        <li><span class="filter_ttl">소재지</span> <span class="filter" v-for="t in filter_table_item.local">{{t}}</span></li>
                        <li><span class="filter_ttl">기업형태</span> <span class="filter" v-for="t in filter_table_item.kind">{{t}}</span></li>
                        <li><span class="filter_ttl" style="vertical-align:top; margin-top:25px">구성원수</span> 
                         <div style="display: inline-block; width: 454px; ">
                        <input type="text" id="range_01" name="example_name" value=""/>
                    </div>
                         </li>                      
                    </ul>
                </td>
            </tr>
      
        </table>
        </div>
    </div>
    </div>
</template>
<script>

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}

export default {
    methods:{
        add_tag:function(){
            $("#filter_result").css("display","none")
            $("#filter_list").css("display","")
            $("#filter_popup").css("display","")
            $("#filter_setting").css("background-color","#edf3ff")
            $("#filter_conf_con").css("border-bottom","none")        
            this.temporary = this.items.slice()
        },
        tag_cancel:function(){
            $("#filter_setting").css("background-color","rgba(237,243,255,0.5 )")
            $("#filter_result").css("display","")
            $("#filter_list").css("display","none")
            $("#filter_popup").css("display","none")
               $("#filter_conf_con").css("border-bottom","1px solid #a0a3bc")
                 $("#filter_conf_con").css("padding-bottom","17px")
        },
        save_tag:function(){
            $("#filter_setting").css("background-color","rgba(237,243,255,0.5 )")
            $("#filter_result").css("display","")
            $("#filter_list").css("display","none")
            $("#filter_popup").css("display","none")
              $("#filter_conf_con").css("border-bottom","1px solid #a0a3bc")
                       $("#filter_conf_con").css("padding-bottom","17px")
            // 서버에 저장하는 로직 추가 
        },
    },
 
    data:function(){
        return{
            items:[
                {"name":"창업", "id":"1"},
                {"name":"스타트업", "id":"2"},
                {"name":"1년 미만 창업", "id":"3"},
            ],
            temporary:[],
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
           },
           sel_item:["경기도","스타트업","제품"]
        }
    },
    
    mounted:function(){
        var data_target = this
        
                            $(document).on("click", ".filter" ,function(){
                                var target_text = $(this).text()
                                console.log(data_target.items)
                                if(data_target.items.find(function(obj){return obj.name == target_text}) == undefined){
                                    data_target.items.push({"name":$(this).text(),"id":""})
                                }      
                                else{
                                    var t_text = $(this).text().replace("#","").trim()
                                    var del_target = data_target.items.indexOf(data_target.items.find(function(obj){
                                        if(obj.name===t_text)console.log("여기있다.")
                                        ;return obj.name === t_text}))
                                    if(del_target > -1)  data_target.items.splice(del_target,1)
                                    }                                                
                               
                            })
                            $(document).on("click","#x_btn",function(){
                              
                            })
                            $(document).on("click",".x_tag", function(){
                                
                                var t_text = $(this).parent().text().replace("#","").trim()
                                var del_target = data_target.items.indexOf(data_target.items.find(function(obj){
                                    console.log(t_text)
                                    if(obj.name===t_text)console.log("여기있다.")
                                    ;return obj.name === t_text}))
                                console.log(del_target)
                                if(del_target > -1)  data_target.items.splice(del_target,1)
                            })

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
    }
}
</script>

<style scoped>
#filter_setting{
    background-color: #f6f6f6;
    overflow: auto;;
}
ul{
    display: inline;
    list-style: none;
        -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
    position: relative;
}
li{
    
    display: inline-block;
}
#f_li>li{
    float: left;    
    line-height: 60px;
    height: 60px;;
}
#s_li>li{
   
    line-height: 60px;
    height: 60px;; 
}


#filter_popup{
    width:100%;
    background-color:#e7edfc;
    position: absolute;
    z-index: 9999;

}
#filter_panel{
    width:1224px;
    margin: 0px auto;
    color: #fff;    
}
#f_col{
    width: 104px;
}
.col_name{
    font-size: 14px;
    font-weight: normal;
    color: #1a2a53;
    
}
.filter{
    height: 24px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: normal;
    margin-right: 6px;
    background-color: #ffffff;
    padding:13px 27px;; 
    border-radius: 40px;
}

.filter_ttl{
    width:81px;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
}
.filter_on{
    color: #ea8ab3!important;
}

.col_name>div>div{
    width: 8px;
    height: 8px;
    background-color: #1b66f4;
    display: inline-block;
    border-radius: 10px;
    margin-bottom: 2px;
    margin-right: 8px;
}

.sp_ttl{
    opacity: 0.9; 
    font-size: 13px;
    font-weight: normal;
    color: #f9fcff;
    margin-right: 42px;
}
#s_li{
    line-height: 28px;
    height:28px;
}
#s_li>li{
    width:800px
}
.filter{
    cursor: pointer;
}
.filter_conf{
     border-radius: 30px;
  background-color: rgba(27,73,244, 0.7);

  color: #fff;
  padding: 6px 13px;;
  font-size: 14px;
  margin-top: 17px;
  margin-right: 15px;
}
.filter_res{
        border-radius: 30px;
  background-color: #fff;
  color: #1a2f53;
  padding: 6px 13px;;
  font-size: 14px;
  margin-top: 14px;
  margin-right: 15px;
}
#x_btn{
    display: inline-block;
width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 16px;
  background-color: rgba(27, 102, 244, 0.2);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  cursor: pointer;
}

#save_btn{
    display: inline-block;
    text-align: center;
    width: 86px;
    color: #f7fcff;
     background-color:rgba(27,182,244,0.87) ;
     border-radius: 30px;
     margin-right: 10px;
     height: 32px;
     line-height: 32px;
      font-size: 12px;
      cursor: pointer;
}


#filter_add_btn{
    display: inline-block;
    text-align: center;
    width: 86px;
    color: #f7fcff;
     background-color:#1b49f4 ;
     border-radius: 30px;
     margin-right: 10px;
     height: 32px;
     line-height: 32px;
      font-size: 12px;
      margin-top: 17px;
      cursor: pointer;
}

#filter_list>div{
    float: right;
    margin-top: 17px;
}
#filter_result>div{
    float: right;
}
.top_tag_con{
    width:1070px;
    display: block;
    float: left;
}
</style>
