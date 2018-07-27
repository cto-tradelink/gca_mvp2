<template>
    <div id="make_application_page" style=" padding-bottom:200px;">
            <div id="application_header">
                <div id="title"><i style="font-size=20px;"  onclick="history.back();" class="fas fa-chevron-left"></i> &nbsp;&nbsp;&nbsp;지원서 양식 지정</div>
            </div>
            <div id="application_header_bottom">
                    <i class="far fa-check-circle"></i> 선택  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i style="font-size=20px;" class="fas fa-chevron-right"></i> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;승인 요청
            </div>
            
            <div id="choose_spec">
                <div id="choose_title">양식 선택</div>
                <div class="hr">
                    기본 수집사항 <span class="caption">필수적으로 수집해야하는 수집정보 입니다.(해제불가)</span>
                </div>
                <table id="tbl1">
                    <tr>
                        <td>기본정보</td>
                        <td>
                            <ul>
                            <li>기업명</li>
                            <li>사업자 등록번호</li>
                            <li>형태</li>
                            <li>설립일</li>
                            <li>주소</li>
                            </ul>
                        </td>
                        <td>사업분야</td>
                        <td><ul>
                            <li>사업관련 키워드 입력</li>
                            <li>기본장르</li>
                            <li>특수 장르</li>
                            <li>사업(서비스)카테고리</li>
                            <li>사업(서비스)명</li>
                            <li>사업(서비스)소개</li>
                        </ul></td>
                        <td>대표자 정보</td>
                        <td><ul>
                            <li>대표자 명</li>
                            <li>전화번호</li>
                            <li>이메일</li>
                        </ul></td>
                        <td>담당자 정보</td>
                        <td>
                            <ul>
                                <li>담당자 명</li>
                                <li>전화번호</li>
                                <li>이메일</li>
                            </ul>
                        </td>
                    </tr>
                </table>
                <div class="hr" style="margin-top:10px;">
                    선택 수집사항 <span class="caption">추가적으로 수집해야하는 수집정보 입니다.(선택)</span>
                </div>
                <table id="tbl2">
                    <tr>
                        <td>기업정보</td>
                        <td>
                            <ul>
                            <li><input data-name="meta_0"  type="checkbox">홈페이지</li>
                            <li><input data-name="meta_1"  type="checkbox">SNS</li>
                            <li><input data-name="meta_2"  type="checkbox">고용현황</li>
                            <li><input data-name="meta_3"  type="checkbox">매출액</li>
                            <li><input data-name="meta_4"  type="checkbox">투자유치</li>
                            <li><input data-name="meta_5"  type="checkbox">지적재산권 보유현황</li>
                            </ul>
                        </td>
                        <td>수출관련</td>
                        <td><ul>
                            <li><input data-name="meta_6"  type="checkbox">국가</li>
                            <li><input data-name="meta_7"  type="checkbox">진출현황</li>
                        </ul></td>
                        <td>추가정보</td>
                        <td><ul>
                            <li><input data-name="meta_8"  type="checkbox">주요경력</li>
                            <li><input data-name="meta_9"  type="checkbox">기업소개</li>
                            <li><input data-name="meta_10" type="checkbox">사업소개</li>
                        </ul></td>
                      
                    </tr>
                </table>
            </div>
    <BottomControl></BottomControl>
    </div>
</template>

<script>
import BottomControl from "./common/BottomControl.vue"

export default {
    components:{
        BottomControl
    },
         beforeRouteLeave (to, from, next) {
        if(confirm("페이지를 벗어나시겠습니까?")){
            next()
        }
  },
    mounted:function(){
        var vue_obj = this
        console.log(vue_obj)
        $(document).ready(function(){
            var meta_val = []
             
   
                   $.ajax({
                    url:vue_obj.baseURI+"/vue_get_grant_information?id="+vue_obj.$route.params.id,
                    success:function(res){
                        vue_obj.grant_info = res
                         for(var k =0; k < vue_obj.grant_info.meta.split(",").length; k++){
                             console.log("?")
                             $("input[data-name='"+ vue_obj.grant_info.meta.split(",")[k]+"']").each(function(){
                              $(this).click()
                             })
                           

                         }
                    }
                })
            

            $(document).off("click","#apply_save")
            $(document).on("click","#apply_save", function(){
                meta_val=[]
                $("input:checked").each(function(){
                        meta_val.push( $(this).attr("data-name") )
                })
                var data={}
                data["meta"]=meta_val
                data["id"]= vue_obj.$route.params.id
                console.log(data)
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_application/`, data)
                .then((result) => {            
                                alert("수정하였습니다.")
                })    
            })

            $(document).off("click","#apply_next")
            $(document).on("click","#apply_next", function(){
                meta_val=[]
                $("input:checked").each(function(){
                        meta_val.push( $(this).attr("data-name") )
                })
                var data={}
                data["meta"]=meta_val
                data["id"]= vue_obj.$route.params.id
                console.log(data)
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_set_application/`, data)
                .then((result) => {   
                    alert("승인 요청 하였습니다.")         
               var supply_tag = [] 
                $("#tbl1>tr>td>ul>li.hover").each(function(){
                    supply_tag.push($(this).text())
                grant_info["supply_tag"] = supply_tag
                })    
            })
            })
    })
    }
    }

</script>

<style scoped>
    #tbl1,#tbl2{
        width:1224px;
        border-collapse: collapse;
        margin-left: 54px;
        margin-top:38px;
    }
    #tbl1>tr>td{
        vertical-align: top;
        font-size: 14px;
        color: #1a2f53;
    }
    #tbl2>tr>td{
        vertical-align: top;
        font-size: 14px;
        color: #1a2f53;
    }
    

    #tbl1>tr>td:nth-child(2n){
        text-align: left;
        width:206px;
    }
    #tbl1>tr>td:nth-child(2n+1){
        text-align: left;
        width:100px;
    }
    #tbl1>tr>td>ul>li{
        font-size: 14px;
        color: #7697ab;
        margin-bottom: 24px;
    }

     #tbl2>tr>td:nth-child(2n){
        text-align: left;
        width:206px;
    }
    #tbl2>tr>td:nth-child(2n+1){
        text-align: left;
        width:100px;
    }
    #tbl2>tr>td>ul>li{
        font-size: 14px;
       color: #1b66f4;
        margin-bottom: 24px;
    }


    .hr{
        margin-top: 24px;
        width:1224px;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        color: #243d68;
        border-bottom: 1px solid #d8d8d8;
        margin-left:54px;
    }
    .hr>span{
        display: inline-block;
        vertical-align: unset;
        font-size: 14px;
        color: #a0a3bc;
        margin-left: 36px;
    }
    #choose_title{
        font-size: 20px;
        font-weight: 900;
        color: #1a2f53;
        margin-top:44px;
        margin-left:56px;
    }

    #choose_spec{
        width:100%; 
        margin-left: 64px;
        position: relative;
       
    }

    #make_application_page{
        overflow-x: hidden;
    }
    #application_header_bottom{
        width: 100%;
        height: 48px;
        background-color: rgba(206, 212, 218, 0.35);
        margin-left: 64px;
        padding-left: 52px;
        line-height: 48px;
        font-size: 16px;
        color: #243d68;
    }
    #application_header{
        width:100%;
        position: relative;
        overflow: auto;
        height:96px;
        background-color: #2256b8;
        margin-left: 64px;
        font-size: 24px;
        letter-spacing: -1px;
        color: #f9fcff;

    }
    #title{
        color: #fff;
        margin-top:32px;
        margin-left:52px;
    }
</style>
