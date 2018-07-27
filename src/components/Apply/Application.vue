<template>
    <div id="application" style="padding-bottom:100px;">
        <div class="title_con">
            <div class="seg_ttl">기본정보</div>
        
        </div>
        
        <div class="seg">
            <table id="base_0">
                <tr>
                    <td>기업명</td>
                    <td>{{startup.name}}</td>    
                </tr>
                <tr>
                    <td>형태</td>
                    <td><span class="kind">{{startup.kind}}</span></td>    
                </tr>
                <tr>
                    <td>설립일</td>
                    <td>{{startup.found_date}}</td>
                </tr>
                <tr>
                    <td>주소</td>
                    <td>
                        {{startup.location}}
                    </td>
                </tr>
            </table>
            <div style="width:1144px; height:1px; border-bottom:1px solid #c1d1f7;margin-top:40px;"></div>
            <div id="base_1_con">
                <span>대표자 정보</span>
                <table id="base_1">
                    <tr>
                        <td>
                            대표자 명
                        </td>
                        <td>
                            {{startup.repre_name}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            전화번호
                        </td>
                        <td>
                            {{startup.repre_tel}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            이메일
                        </td>
                        <td>
                            {{startup.repre_email}}
                        </td>
                    </tr>
                </table>
            </div>
            <div id="base_2_con">
                <span>담당자 정보</span>
                <table id="base_2">
                    <tr>
                        <td>
                            담당자 명
                        </td>
                        <td>
                            {{startup.mark_name}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            전화번호
                        </td>
                        <td>
                            {{startup.mark_tel}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            이메일
                        </td>
                        <td>
                            {{startup.mark_email}}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="title_con">
            <div class="seg_ttl">사업분야</div>
        </div>
        <div class="seg">
                <table class="tbl1">
                    <tr>
                        <td>
                            키워드 입력
                        </td>
                        <td>
                            {{startup.keyword}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            기본장르
                        </td>
                        <td>
                            <span class="filter">출판</span><span class="filter">만화</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            특수장르
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <span class="filter">만화</span><span class="filter">디자인</span><span class="filter">IT</span>
                                </li>
                               
                            </ul>
                        </td>
                    </tr>
                </table>
                <div class="hr"></div>
                <table class="tbl1">
                    <tr>
                        <td>
                            사업(서비스)카테고리
                        </td>
                        <td>
                            {{startup.service_category}}
                        </td>
                    </tr>    
                    <tr>
                        <td>
                            사업(서비스)명
                        </td>
                        <td>
                            {{startup.service_name}}
                        </td>
                    </tr>
                    <tr>
                        <td style="vertical-align:top;line-height:30px; ">사업(서비스)소개<br><span>최대 1000자 내외</span>
                        </td>
                        <td >
                        {{startup.service_intro}}
                        </td>
                    </tr>
                </table>
            </div>
             <div class="title_con">
            <div class="seg_ttl">기업정보</div>
        </div>
        <div class="seg">
                          <table class="tbl1">
                    <tr>
                        <td>
                            홈페이지
                        </td>
                        <td>
                            {{startup.homepage}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SNS
                        </td>
                        <td>
                            {{startup.sns}}
                        </td>
                    </tr>                    
                </table> 
                <div class="hr"></div>
                <span style="font-size: 16px;display:inline-block; font-weight: bold;  color: #1a2f53; margin-top:24px;">고용현황</span>
                <table class="tbl1">
                    <tr>
                        <td>총</td>
                        <td>{{startup.total_employee}} 명</td>
                    </tr>
                    <tr>
                        <td>상주직원 기준</td>
                        <td>{{startup.hold_employee}}명</td>
                    </tr>
                    <tr>
                        <td>고용보험 등록 기준</td>
                        <td>{{startup.assurance_employee}}명</td>
                    </tr>
                </table>
                <div class="hr"></div>
                <table class="tbl1">
                    <tr>
                        <td style="vertical-align:top; line-height:48px;">매출액
                        </td>
                        <td>
                            <ul>
                                <li v-for="r in startup.revenue"><div ><span style="width: 110px;line-height:48px; display:inline-block;  color: #1a2f53;">{{r.year}}</span><span style="font-size: 16px; color: #1a2f53;">{{r.num}}</span></div></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td style="vertical-align:top; line-height:48px;">수출액
                        </td>
                        <td>
                            <ul>
                                <li  v-for="t in startup.trade" ><div ><span style="width: 110px;line-height:48px; display:inline-block;  color: #1a2f53;">{{t.year}}</span><span style="font-size: 16px; color: #1a2f53;">{{t.num}}</span></div></li>
                            </ul>
                        </td>
                    </tr>
                </table>
                <div class="hr"></div>
                <span style="font-size: 16px;display:inline-block; font-weight: bold;  color: #1a2f53; margin-top:24px;">지식 재산권 보유현황</span>
                <table class="tbl1" style="margin-top:20px;">
                    <tr>
                        <td style="vertical-align:top; line-height:48px; height:73px;">특허권
                        </td>
                        <td>
                            <div class="file_no">
                                  <span v-if=" startup.patent_file_name == '' || startup.patent_file_name == undefined ">선택된 파일 없음</span>
                                  <span v-else ><a target="_blank" :href="baseURI+'/'+startup.patent_file_name" >{{startup.patent_file_name.split(/[/]+/).pop()}}</a></span>
                                    
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="vertical-align:top; line-height:48px; height:73px;">상표권
                        </td>
                        <td>
                            <div class="file_no">
                               <span v-if=" startup.trade_file_name == '' || startup.trade_file_name == undefined ">선택된 파일 없음</span>
                               <span v-else ><a target="_blank" :href="baseURI+'/'+startup.trade_file_name" >{{startup.trade_file_name.split(/[/]+/).pop()}}</a></span>
                            </div>
                        </td>
                    </tr>
                     <tr>
                        <td style="vertical-align:top; line-height:48px; height:73px;">실용신안
                        </td>
                        <td>
                            <div class="file_no">
                               <span v-if=" startup.sub_patent_file_name == '' || startup.sub_patent_file_name == undefined ">선택된 파일 없음</span>
                               <span v-else> <a target="_blank" :href="baseURI+'/'+startup.sub_patent_file_name" >{{startup.sub_patent_file_name.split(/[/]+/).pop()}}</a></span>
                            </div>
                        </td>
                    </tr>
                     <tr>
                        <td style="vertical-align:top; line-height:48px; height:73px;">디자인
                        </td>
                        <td>
                            <div class="file_no">
                               <span v-if=" startup.design_file_name == '' || startup.design_file_name == undefined ">선택된 파일 없음</span>
                               <span v-else ><a target="_blank" :href="baseURI+'/'+startup.design_file_name" >{{startup.design_file_name.split(/[/]+/).pop()}}</a></span>
                            </div>
                        </td>
                    </tr>
                </table>
        </div>
            <div class="title_con">
            <div class="seg_ttl">해외 진출 현황</div>
        </div>
        <div class="seg">
            <table class="tbl1"  v-for="o in startup.oversea">
                <tr >
                    <td>국가</td>
                    <td>{{o.nation}}</td>
                </tr>
                <tr>
                    <td style="vertical-align:top;line-height:30px;">진출현황<br><span>최대 1000자 내외</span></td>
                    <td style="width:500px;">{{ o.content }}</td>
                </tr>
            </table>
        </div>
        <div class="title_con">
            <div class="seg_ttl">기업 소개</div>
        </div>
        <div class="seg">
            <table class="tbl1">
                 <tr>
                    <td style="width:150px;vertical-align:top;line-height:30px;">주요 경력<br><span>최대 1000자 내외</span></td>
                    <td  style="width:500px;">{{startup.exp}}</td>
                </tr>
            </table>
            <div class="hr"></div>
                  <table class="tbl1">
                  <tr>
                    <td style="width:150px;vertical-align:top;line-height:30px;">기업 소개<br><span>최대 1000자 내외</span></td>
                    <td  style="width:500px;">{{startup.company_intro}}</td>
                </tr>
                  </table>
            <div class="hr"></div>
              <table class="tbl1">
                  <tr>
                    <td style="width:150px;vertical-align:top;line-height:30px;">사업 소개<br><span>최대 1000자 내외</span></td>
                    <td  style="width:500px;">{{startup.business_intro}}</td>
                </tr>
            </table>
        </div>    
    </div>      


    </div>
</template>

<script>
import jsPDF from 'jspdf'

export default {
    props:["startup"],
    methods:{
      
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
                    vue_obj.$http.get(`${vue_obj.baseURI}/vue_submit_application/?id=`+localStorage.getItem("id")+`&gr=`+vue_obj.$route.params.id)
                    vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/complete")
                })
                $(document).on("click","#apply_prev", function () {
                    vue_obj.$router.push("/apply/"+vue_obj.$route.params.id+"/attached_file")
                })

             
        })
    }
}
</script>

<style scoped>
.filter
.file_no{
     width: 431px;
  height: 56px;
  border: solid 1px #ced4da;
}
.file_no>span{
    font-size: 12px;
    line-height: 56px;
    color: #a0a3bc;
    display: inline-block;
    float: right;
    margin-right: 18px;
}
.hr{
    width: 1144px;
    height: 1px;
    border-top: solid 1px #ced4da;
    margin-top: 24px;
    margin-bottom: 24px;
}
.filter{
    font-size: 14px;
    font-weight: bold; 
    color: #1b66f4;
    margin-right: 43px;
}
.cate{
    display: inline-block;
    width: 95px;
    text-align: left;
    font-size: 14px;
    line-height: 41px;
    color: #7697ab;
}
.re{
    font-size: 14px;
    font-weight: bold;
    color: #1b66f4;
    line-height: 41px;
}

.tbl1>tr>td:nth-child(1){
    width:184px;
    height:56px;
    line-height: 56px;
    font-size: 16px;
    color: #1a2f53;
}
.tbl1>tr>td:nth-child(1)>span{
    font-size: 14px;
    color: #a0a3bc;

}

.tbl1>tr>td:nth-child(2){
    width: 888px;
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

#base_1_con,
#base_2_con{
    float: left;
    margin-top:24px;
}
#base_1_con>span,#base_2_con>span{
   font-size: 16px;
   color: #1a2f53;
   opacity: 0.5;
   font-size: 17px;
   line-height: 1.65;
   letter-spacing: -0.3px;
   color: #1a2f53;

}
#base_1,#base_2{
    margin-top: 21px;
    border-collapse: collapse;
}
#base_1>tr>td:nth-child(1),#base_2>tr>td:nth-child(1){
    width:184px;
    font-size: 16px;
    color: #1a2f53;
    height: 48px;;
}

#base_1>tr>td:nth-child(2),#base_2>tr>td:nth-child(2){
    width:268px;
    height: 48px;;
    border-right:1px solid #ced4da;
    font-size: 14px;
    color: #1a2f53;
}

#base_2>tr>td:nth-child(2){
    border: none;
}
#base_2_con{
    margin-left: 53px;
}



.seg{
    width: 1144px;
    padding:38px 40px;
    height: auto;
    overflow: auto;
    background-color: #fff;
    margin: 0px auto;
    margin-top: 24px;
}
#base_0>tr>td{
    font-size: 14px;
    color: #1a2f53;
}
#base_0>tr>td:nth-child(1){
    width: 180px;
    height: 48px;
    line-height: 48px;
    text-align: left;
    font-size: 16px; 
    color: #1a2f53;
}

.title_con{
    width:1224px;
    margin: 0px auto;  
}
.seg_ttl{
    margin-top: 31px;
    font-size: 24px;
    line-height: 1.33;
    color: #a0a3bc;

}

.unknown{
    opacity: 0.4;
    font-size: 14px;
    color: #1a2f53;
}


.kind{
    opacity: 0.7;
    font-size: 14px;
    color: #1a2a53;
    background-color: #c1d1f7!important;
    cursor: pointer;
    background-color: #f5f8ff;
    padding:13px 16px;
    border-radius:30px;
    margin-right:8px!important;
}
</style>
