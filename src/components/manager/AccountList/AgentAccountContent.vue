<template>
    <div >
        <div id="title">기관회원</div>
        <div id="agent_con">
            <div id="under" class="cate acc_on" >소속회원</div>
            <div id="all" class="cate" >전체 기관회원</div>
            <div id="created">매니저 생성</div>
        </div>

        <div id="tbl_hd">
            <div id="input_box"><input id="input_text" type="text"><i class="fas fa-search"></i></div>
            <span id="list_excel">리스트 엑셀로 내보내기</span>
            <div id="list_num_con">
                <span id="list_10" class="list_num hover">10개 보기</span>
                <span id="list_50" class="list_num">50개 보기</span>
                <span id="list_100" class="list_num">100개 보기</span>
            </div>
           
        </div>
        <div class="tbl_con">
            <table id="list_tbl" class="tbl">
                <thead>
                    <tr>
                        <td>순서</td>
                        <td>계정 아이디</td>
                        <td>이름</td>
                        <td>직급</td>
                        <td>팀</td>
                        <td>기관</td>
                        <td>연락처</td>
                        <td>핸드폰 번호</td>                                         
                        <td>메일주소</td>                                         
                        <td>가입일</td>               
                    </tr>
                </thead>
                <tbody>
                     <tr v-for="ac in agent_account_list" v-if=" ac.index !=undefined ">
                        <td>{{ac.index}}</td>
                        <td>{{ac.id}}</td>
                        <td>{{ac.name}}</td>
                        <td>{{ac.position}}</td>
                        <td>{{ac.belong_to}}</td>
                        <td>경기 콘텐츠 진흥원</td>
                        <td>{{ac.tel}}</td>
                        <td>{{ac.phone}}</td>                                         
                        <td>{{ac.email}}</td>                                         
                        <td>{{ac.joined}}</td>                      
                    </tr>
                    <tr><td colspan="10">
                           <div id="tbl_pagination" style="margin-top:37px;">
                <i id="before_list" class="fas fa-chevron-left"></i>
                    <span class="list_btn" v-for="l in agent_account_nav" v-bind:data-num="l">{{l}}</span>
                <i id="after_list" class="fas fa-chevron-right"></i>
            </div>
                        </td></tr>
                </tbody>
            </table>

        </div>

        <div class="tbl_con hidden" >
            <table class="tbl">
                <thead>
                    <tr>
                        <td>순서</td>
                        <td>계정 아이디</td>
                        <td>이름</td>
                        <td>직급</td>
                        <td>팀</td>
                        <td>기관</td>
                        <td>연락처</td>
                        <td>핸드폰 번호</td>                                         
                        <td>메일주소</td>                                         
                        <td>가입일</td>               
                    </tr>
                </thead>
                <tbody>
                     <tr v-for="ac in agent_all_account_list" v-if=" ac.index !=undefined ">
                        <td>{{ac.index}}</td>
                        <td>{{ac.id}}</td>
                        <td>{{ac.name}}</td>
                        <td>{{ac.position}}</td>
                        <td>{{ac.belong_to}}</td>
                        <td>경기 콘텐츠 진흥원</td>
                        <td>{{ac.tel}}</td>
                        <td>{{ac.phone}}</td>                                         
                        <td>{{ac.email}}</td>                                         
                        <td>{{ac.joined}}</td>                      
                    </tr>
                    <tr><td colspan="10">
                           <div id="tbl_pagination" style="margin-top:37px;">
                <i id="before_list" class="fas fa-chevron-left"></i>
                    <span class="list_btn" v-on:click="go_nav($event)" v-for="l in agent_all_account_nav" v-bind:data-num="l">{{l}}</span>
                <i id="after_list" class="fas fa-chevron-right"></i>
                </div>
                        </td></tr>
                </tbody>
            </table>
        </div>

        <div id="back_layer">
            
        </div>
        <div id="create_manager" class="hidden">
            <div id="pop_hd">&nbsp;&nbsp;&nbsp;매니저 계정 생성
                <div id="x_btn">X</div>
            </div>
            <div id="pop_con">
                <table>
                    <tr>
                        <td style="height:88px;">아이디</td>
                        <td><input id="id" class="normal" placeholder="   example@company.com"></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input id="pw" class="normal" placeholder="   비밀번호를 입력하세요."></td>
                    </tr>
                    <tr>
                        <td>비밀번호확인</td>
                        <td><input class="normal" placeholder="   비밀번호를 입력하세요."></td>
                    </tr>
                    <tr><td colspan="2" style="border-bottom:1px solid #ced4da;height:27px"></td></tr>
                    <tr>
                        <td style="padding-top:27px;">이름</td>
                        <td style="padding-top:27px;"><input id="name" class="normal" placeholder="   이름을 입력하세요."></td>
                    </tr>
                    <tr>
                        <td>기관</td>
                        <td class="fix">GCA</td>
                    </tr>
                     <tr>
                        <td>소속(담당부서)</td>
                        <td class="fix">정책개발팀</td>
                    </tr>
                    <tr>
                        <td>직책</td>
                        <td><select><option>선택하세요</option></select></td>
                    </tr>
                   
                     <tr>
                        <td>전화번호</td>
                        <td><input id="tel" class="normal" placeholder="   전화번호"></td>
                    </tr>
                     <tr>
                        <td>핸드폰번호</td>
                        <td><input id="phone" class="normal" placeholder="   핸드폰 번호"></td>
                    </tr>
                     <tr>
                        <td>이메일 주소</td>
                        <td><input id="email" class="normal" placeholder="   이메일 주소"></td>
                    </tr>

                </table>
                <div id="create_btn">생성하기</div>
            </div>
        </div>
    </div>
</template>
<script>
var gl_num = 10
export default {
    methods:{
        go_nav:function(e){
            $(".list_btn").css("font-weight","normal")
            $(e.path[0]).css("font-weight","bold")
            this.agent_account_list = this.agent_account_origin_list.slice( gl_num*(parseInt($(e.path[0]).attr("data-num"))-1),gl_num*(parseInt($(e.path[0]).attr("data-num")))  )
            this.agent_all_account_list = this.agent_all_account_origin_list.slice( gl_num*(parseInt($(e.path[0]).attr("data-num"))-1),gl_num*(parseInt($(e.path[0]).attr("data-num")))  )
       }
    },
    data:function(){
        return{
            agent_account_list:[],
            agent_account_origin_list:[],
            agent_account_orogin_2_list:[],
            
            agent_account_nav:[],
            agent_all_account_nav:[],            
        }
    },
    created:function(){
        var vue_obj = this
        $.ajax({
            method:"post",
            url:vue_obj.baseURI + "/vue_get_agent_account/",
            data:{
                id:84
            },
            success:function(res){
                vue_obj.agent_account_origin_list = res.account_set.slice()
                vue_obj.agent_account_origin_2_list = res.account_set.slice()
                vue_obj.agent_account_list = vue_obj.agent_account_origin_list.slice(0,10)
                vue_obj.agent_all_account_origin_list = res.all_account_set.slice()
                vue_obj.agent_all_account_list = vue_obj.agent_all_account_origin_list.slice(0,10)
                var num = 10
                gl_num = num
                vue_obj.agent_account_list = vue_obj.agent_account_origin_list.slice(0, num)
                vue_obj.agent_account_nav=[]
                for(var k=1; k <= Math.ceil(vue_obj.agent_account_origin_list.length/num); k++ ){
                   vue_obj.agent_account_nav.push(k)
                }
                vue_obj.agent_all_account_list = vue_obj.agent_all_account_origin_list.slice(0, num)
                vue_obj.agent_all_account_nav=[]
                for(var k=1; k <= Math.ceil(vue_obj.agent_all_account_origin_list.length/num); k++ ){
                   vue_obj.agent_all_account_nav.push(k)
                }

            },
            error:function(error){
                console.log(error)
            }
        })
    },
    mounted:function(){
        var vue_obj = this
        $(document).ready(function(){

             $(document).on("keyup", "#input_text", function(){
                    vue_obj.agent_account_list = []
                    vue_obj.agent_account_origin_list = []
                    var target = vue_obj
                    console.log(vue_obj)
                    vue_obj.agent_account_origin_2_list.forEach(function(o){
                        try{
                if( o.name.indexOf($("#input_text").val()) != -1 || 
                    o.id.indexOf($("#input_text").val()) != -1 ||
                    o.email.indexOf($("#input_text").val()) != -1)
                    {target.agent_account_origin_list.push(o)}
                        } catch(e){}
            })
            vue_obj.agent_account_list = vue_obj.agent_account_origin_list.slice(0,gl_num)

                })

            
    $(document).on("click","#list_excel", function(){     
        var ee = excelExport("list_tbl").parseToCSV().parseToXLS("excelexport sheet");
       location.href = ee.getXLSDataURI();

        })


            $(document).on("click","#under", function(){
                $(".cate").removeClass("acc_on")
                $(this).addClass("acc_on")
                $(".tbl_con").addClass("hidden")
                $(".tbl_con:eq(0)").removeClass("hidden")
                
            })
             $(document).on("click","#all", function(){
                $(".cate").removeClass("acc_on")
                $(this).addClass("acc_on")
                $(".tbl_con").addClass("hidden")
                $(".tbl_con:eq(1)").removeClass("hidden")
            })

            $(document).on("click","#created", function(){
                $("#create_manager").removeClass("hidden")
                $("#back_layer").css("position","fixed")
                $("#back_layer").css("width",$(window).width())
                $("#back_layer").css("height",$(window).height())
                $("#back_layer").css("top","0")
            })
            $(document).on("click","#x_btn", function(){
                $("#back_layer").css("position","fixed")
                $("#back_layer").css("width",0)
                $("#back_layer").css("height",0)
                $("#back_layer").css("top","0")
                $("#create_manager").addClass("hidden")
            })
            $(document).on("click",".list_num", function(){
                $(".list_num").removeClass("hover")
                $(this).addClass("hover")
                var num = parseInt($(this).attr("id").replace("list_",""))
                gl_num = num
                vue_obj.agent_account_list = vue_obj.agent_account_origin_list.slice(0, num)
                vue_obj.agent_account_nav=[]
                for(var k=1; k <= Math.ceil(vue_obj.agent_account_origin_list.length/num); k++ ){
                   vue_obj.agent_account_nav.push(k)
                }
                
                vue_obj.agent_all_account_list = vue_obj.agent_all_account_origin_list.slice(0, num)
                vue_obj.agent_all_account_nav=[]
                for(var k=1; k <= Math.ceil(vue_obj.agent_all_account_origin_list.length/num); k++ ){
                   vue_obj.agent_all_account_nav.push(k)
                }
            })

            $(document).on("click","#create_btn", function(){
                vue_obj.$http.post(`${vue_obj.baseURI}/vue_get_grant_info/`, {
                    "user":"user", // 로그인 프로세스 진행후 본인의 파라미터를 넣어야 기관 소속으로 등록됨
                    "name":$("#name").val(),                    
                    "belong_to":"GCA",
                    "position":"정책개발팀",
                    "tel":$("#tel").val(),
                    "phone":$("#phone").val(),
                    "additional_email":$("#email").val(),
                })
                .then((result) => {            
                    vue_obj.data = result.data
                })   
            })
            console.log(vue_obj)
            console.log(vue_obj.$route.fullPath)
            if(vue_obj.$route.fullPath != "/agent/account/agent"){
                $("#agent_con").addClass("hidden")
            }

})
    }
}
</script>

<style scoped>
.acc_on{
        background-color: #4c76c6!important;
    color: #fff!important;
}
#create_btn{
     width: 128px;
  height: 29px;
  background-color: #1b66f4;
   font-size: 13px;  
  color: #ffffff;
  line-height: 29px;
  border-radius: 100px;
  text-align: center;
  margin-left: 220px;
  margin-top:40px;
  cursor:pointer;
}
#created{
    cursor: pointer;
}
.fix{
    font-size: 13px;
  color: #a0a3bc;
}
.normal{
    width: 320px;
    height: 40px;
    background-color: #ffffff;
    border: solid 1px #ced4da;
}
#pop_con>table{
    width:500px;
    margin-left: 32px;
}
#pop_con>table>tr>td:nth-child(1){
    width:114px;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #1a2f53;
    height: 49px;
}
#pop_hd{
    position: relative;
    width:100%;
    border-bottom:1px solid #a0a3bc;
    height:55px;
    line-height: 55px;
   
}
#x_btn{
    position: absolute;
    top:0px;
    right:22px;
    cursor: pointer;
}
select{
    width: 320px;
    height: 40px;
}
#create_manager
{   
    z-index: 999999999;
    border: solid 1px #a0a3bc;
    position: fixed;
    top:60px;
    left:50%;
    margin-left: -282px;
    background-color:#fff;
    width: 564px;
    height: 818px;
}
#created_manager{
     width: 564px;
  height: 818px;
  background-color: #ffffff;
  border: solid 1px #a0a3bc;
}
#back_layer{
    position: absolute;
    z-index: 99999;
    background-color: rgba(26, 47, 83, 0.8);
}
#agent_con{
    margin-left:114px;
    margin-top:40px;
}
#under{
     width: 125px;
  height: 53px;
  border-radius: 4px;
 background-color: #fff;
  color:#1a2f53;

  font-size: 16px;
 text-align: center;
 line-height: 53px;
 display: inline-block;
 margin-right: 4px;
    cursor: pointer;
}
#created{
    width: 112px;
    height: 40px;
    background-color: #1b66f4;
    font-size: 13px;
    text-align: center;
    line-height:40px;
    color:#fff;
    border-radius: 20px;
    margin-left:1159px;
}
#all{
 width: 161px;
  height: 53px;
  border-radius: 4px;
  background-color: #fff;
  color:#1a2f53;
  font-size: 16px;
 text-align: center;
 line-height: 53px;
 display: inline-block;
   cursor: pointer;
   
}


#title{
    padding-top: 32px;
    margin-left:114px;
}

    .tbl{
        border-collapse: collapse;  
        width:1224px;
      
    }
    .tbl>tbody>tr>td{
        font-size: 12px;
        color: #1a2f53;
        height: 54px;
        line-height: 54px;
    }
    .tbl_con{   
      
        width: 1224px;
        height:auto;
        overflow: auto;
        padding:24px;
        background-color: #ffffff;
        margin-left: 114px;
    }
    #tbl_hd{
        width:1224px;
        margin-left:114px;
        margin-top:48px;
        padding: 24px;
        background-color: #fff;

    }
    

    #select_excel,#list_excel {
        display: inline-block;
        font-size: 12px;
        color: #1b66f4;
        vertical-align: bottom;
        margin-right:16px;
        cursor: pointer;
    }
    thead>tr>td{
        border-top:1px solid #4f5478;
        border-bottom : 1px solid #4f5478;
        font-size: 14px;
        letter-spacing: normal;
        color: #1a2f53;
        height:40px;
    }
    #input_box{
        display: inline-block;
        width: 144px;
        height: 32px;
        background-color: #ffffff;
        border: solid 1px #ced4da;
        line-height:32px;
        margin-right:29px;
    }
    #input_box>i{
        color:#ced4da   
    }
    #input_box>input{
        width: 115px;
        border:none;
        outline: none;
    }
    .tbl_con{

    }


     .list_num{
        display: inline-block;
        margin-top:17px;
        margin-left:18px;
        cursor: pointer;
    }
    .list_num:hover, .list_num.hover{
        font-weight: bold!important;
        color: #243d68!important;
    }

    #list_num_con{
        float: right;
        font-size: 12px;
        color: #243d68;
        height:34px;
    }
</style>
