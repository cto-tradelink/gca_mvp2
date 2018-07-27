<template>
    <div id="apply_page">
        <Header></Header>
        <ApplicationTopInfo></ApplicationTopInfo>
        <ApplicationNavigation></ApplicationNavigation>
        <router-view :startup="startup">
        </router-view>
        <BottomControl  :startup="startup"></BottomControl> 
    </div>
</template>

<script>
import Header from "../common/Header.vue"
import ApplicationTopInfo from "./common/ApplicationTopInfo.vue"
import ApplicationNavigation from "./common/ApplicationNavigation.vue"
import BaseInfo from "./BaseInfo.vue"
import BusinessInfo from "./BusinessInfo.vue"
import StartupInfo from "./StartupInfo.vue"
import Oversea from "./Oversea.vue"
import StartupIntro from "./StartupIntro.vue"
import AttachedFile from "./AttachedFile.vue"
import Complete from "./Complete.vue"
import BottomControl from "./BottomControl.vue"
export default {
    components:{
        Header,ApplicationTopInfo, ApplicationNavigation,BaseInfo, BusinessInfo, StartupInfo, Oversea,StartupIntro, AttachedFile, Complete,BottomControl, 
    },
    data:function(){
        return {
            startup:{
                "sb-id":"",
                "name":"트레이드 링크",
                "business_number":"30",
                "found_date":"2015.05.05",
                "repre_name":"문종해",
                "repre_tel":"010-010-010",
                "repre_email":"ceo@tradelink.kr",
                "mark_name":"문종해",
                "mark_tel":"123-123",
                "mark_email":"ceo@tradelink.kr",
                "keyword":"키워드",
                "service_category":"서비스 카테고리",
                "service_name":"서비스명",
                "service_intro":"서비스 소개",
                "homepage":"www.tradelink.kr",
                "sns":"트워터 계정",
                "total_employee":8,
                "hold_employee":9,
                "assurance_employee":10,
                "patent_file_name":"특허권파일 이름",
                "trademark_file_name":"상표권 파일 이름",
                "sub_patent_file_name":"실용신안권파일 이름",
                "design_file_name":"디자인권파일 이름",
                "exp":"주요 경력",
                "company_intro":"기업 소개",
                "business_intro":"사업 소개",
                "kind":"법인사업자",
                "service":[
                    {"intro":"트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다.",
                    "file_url":"",
                    "file_name":"트레이드링크_2018_통장사본.pdf",
                    "name":"쉐어 오피스 서비스",}
                ],
                "intro_text":"트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다.",
                "history":[
                    {"year":"2016" ,"month":"2" ,"content":"파드마브릿지 무역 중개 수주 진행" ,"id":1},
                    {"year":"2016","month":"1" ,"content":"트레이드링크 설립","id":2}
                ],
                "revenue":[
                    {"year":2015, "num":"1000","id":1},
                   
                ],
                 "trade":[
                    {"year":2015, "num":"1000","id":1},
                  
                ],
                "invest":[
                    {"year":2015,"currency":"USD","company":"세콰이어 캐피탈", "kind":"Series A", "num":"1000","id":1},
                    {"year":2016,"currency":"KRW","company":"세콰이어 캐피탈", "kind":"Series B", "num":"2000" ,"id":2}
                ],
                "tag":[],
                "information":{                 
                    "email":"info@tradlink.kr",
                    "tag":[
                        "무역","스타트업","3년차"
                    ]
                },
                "oversea":[
                  
                ],
                "location":"",
             
            }
           }
    },
    
}
</script>

<style scoped>

</style>
