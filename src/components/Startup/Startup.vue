<template>
    <div>
        <Header></Header>
        <div id="startup_content">
            <div id="startup_back_top"></div>
            <div id="startup_back_bottom"></div>
            <div id="startup_info_con">
                <StartupHead :startup="startup"></StartupHead>
                <StartupBody :startup="startup"></StartupBody>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../common/Header.vue"
import StartupHead from "./StartupHead.vue"
import StartupBody from "./StartupBody.vue"

export default {
    components:{
        Header, StartupHead, StartupBody
    },
    data:function(){
        return{
           startup:{
                "name":"",
                "logo":"",
                "short_desc":"",
                "service":[
                    {"intro":"",
                    "file_url":"",
                    "file_name":"",
                    "name":"",}
                ],
                "intro_text":"",
                "history":[
                    {"year":"" ,"month":"" ,"content":"" ,"id":1},
                    {"year":"","month":"" ,"content":"","id":2}
                ],
                "revenue":[
                    {"year":"", "num":"","id":1},
                    {"year":"", "num":"" ,"id":2}
                ],
                 "trade":[
                    {"year":"", "num":"","id":1},
                    {"year":"", "num":"" ,"id":2}
                ],
                "invest":[
                    {"year":"","currency":"","company":"", "kind":"", "num":"","id":1},
                    {"year":"","currency":"","company":"", "kind":"", "num":"" ,"id":2}
                ],
                "tag":[],
                "information":{
                    "id":1,
                    "homepage":"",
                    "email":"",
                    "tag":[
                      
                    ]
                },
                "location":"",
                "news":[
                    {
                        "date":"",
                        "content":"",
                        "like_num":"",
                        "rep_num":"",
                        "rep":[                            
                            {
                            "logo":"",
                            "content":"",
                            "date":"",
                            }     ,
                                           
                        ]
                    },
                  
                ]
            }
        }
    },
    mounted:function(){
         
        $("body").css("background-color","#f5f8ff")
        console.log(this.$route.fullPath)
        if(this.$route.fullPath.indexOf("mypage")==-1){
            $(".hidden_info").css("display","none")
        }
        console.log(this)
        var vue_obj=this
        $(document).ready(function(){
                   $("li.menu_top").removeClass("menu_on")
              $("li.menu_top:eq(1)").addClass("menu_on")
        vue_obj.$http.get(`${vue_obj.baseURI}/vue_get_startup_detail/?id=`+vue_obj.$route.params.id)
        .then((result) => {            
            vue_obj.startup = result.data        
           
        })    
        })
    },
    
}
</script>
<style scoped>
    #startup_content{
        min-width: 1224px;;
        height: auto;
        overflow: auto;
    }
    #startup_back_top{
        width: 100%;
        height: 287px;
        background-color: #819fd7;
    }
    #startup_back_bottom{
        min-height: 800px;
         background-color: #f5f8ff;
    }
    #startup_info_con{
        width:100%;
        position: absolute;
        top:56px;
        min-height: 1000px;
        margin-bottom:100px;
    }
</style>
