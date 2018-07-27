<template>
    <div id="startup_my_page" style="position:relative">
          <div id="startup_content">
            <div id="page_title">기업페이지</div>
            <div id="startup_info_con">
                <StartupHead :startup="startup"></StartupHead>
                <StartupBody :startup="startup"></StartupBody>
            </div>
        </div>
    </div>
</template>

<script>
import Startup from "../Startup/Startup.vue"
import StartupHead from "../Startup/StartupHead.vue"
import StartupBody from "../Startup/StartupBody.vue"

export default {
    components:{
         StartupHead, StartupBody,
    },
    mounted:function(){
        
        $(document).ready(function(){
         $("#startup_header_con").css("margin-top","0")
         $("#startup_info_con").css("margin-top","32px")
        })
        this.$http.get(`${this.baseURI}/vue_get_startup_detail_manager/?id=`+localStorage.getItem("id"))
        .then((result) => {
            console.log(result)
            this.startup = result.data
        })
    },
    data:function(){
        return{
            startup:{
                "name":"트레이드링크",
                "logo":"",
                "short_desc":"제조사와 바이어를 연결하는 플랫폼",
                "service":[
                    {"intro":"트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다.",
                    "file_url":"",
                    "file_name":"트레이드링크_2018_통장사본.pdf",
                    "name":"쉐어 오피스 서비스",}
                ],
                "intro_text":"트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다.",
                // "history":[
                //     {"year":"2016" ,"month":"2" ,"content":"파드마브릿지 무역 중개 수주 진행" ,"id":1},
                //     {"year":"2016","month":"1" ,"content":"트레이드링크 설립","id":2}
                // ],
                // "revenue":[
                //     {"year":2015, "num":"1000","id":1},
                //     {"year":2016, "num":"2000","id":2}
                // ],
                //  "trade":[
                //     {"year":2015, "num":"1000","id":1},
                //     {"year":2016, "num":"2000","id":2}
                // ],
                // "invest":[
                //     {"year":2015,"currency":"USD","company":"세콰이어 캐피탈", "kind":"Series A", "num":"1000","id":1},
                //     {"year":2016,"currency":"KRW","company":"세콰이어 캐피탈", "kind":"Series B", "num":"2000" ,"id":2}
                // ],
                "tag":[],
                "information":{
                    "homepage":"www.tradelink.kr",
                    "email":"info@tradlink.kr",
                    "tag":[
                        "무역","스타트업","3년차"
                    ]
                },
                "location":"서울 서초구 방배동 854-17",
                "news":[
                    {
                        "date":"2018년 6월 30일 작성",
                        "content":"트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다.",
                        "like_num":"16",
                        "rep_num":6,
                        "rep":[                            
                            {
                            "logo":"",
                            "content":"댓글 내용",
                            "date":"4시간전",
                            }     ,
                             {
                            "logo":"",
                            "content":"댓글 내용",
                            "date":"4시간전",
                            }                            
                        ]
                    },
                    {
                        "date":"2018년 6월 30일 작성",
                        "content":"트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다. 트레이드링크는 무역과 IT로 세상을 연결합니다.",
                        "like_num":"16",
                        "rep_num":6,
                        "rep":[                            
                            {
                            "logo":"",
                            "content":"댓글 내용",
                            "date":"4시간전",
                            }                            
                        ]
                    }
                ]
            }
        }
    },
}
</script>
<style scoped>
    #page_title{
        opacity: 0.8;
        font-size: 20px;
        font-weight: bold;
        color: #1a2f53;
        margin-top: 40px;
    }
</style>
