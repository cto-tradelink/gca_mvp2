<template>
        <div>
    <Header></Header>
    <div>
        <LeftNavi></LeftNavi>
        <div id="page_con">
            <div id="brd_cum"> <span class="op">지원사업 관리  > 공고중 > </span> <span style="color: #1a2f53;">2018 제8회 경기콘텐츠 진흥원 게인창조 오디션</span> </div>
            <div id="grant_title">2018 제8회 경기콘텐츠진흥원 게임 창조오디션</div>
            <div id="due">2018년 7월 16일(월)~  2018년 8월 2일(목) 12시 까지<i class="fas fa-share-square"></i></div>
            <div id="sub"> <span style="color:#ea8ab3">지원기업수</span>&nbsp;<span style="color:#243d68">10</span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-eye"></i>
            &nbsp;
            <span style="color:#243d68">10</span>  </div>
            <div id="sub2">
              <i class="fas fa-fire"></i>  50:1 &nbsp;&nbsp;<i class="fas fa-clock"></i><span style="font-family:Rubik;color: #28aeff;">D+3</span>
            </div>
            <div id="hr" style="overflow:auto">
                 <div id="export">공고문 내보내기 PDF</div>
                <div id="show_static">통계보기<i class="fas fa-chart-pie"></i></div>
            </div>
            <div id="nav">
                <ul>
                    <li data-panel="0" style="color:#243d68">지원기업 리스트</li>
                    <li data-panel="1" style="color:#243d68; font-weight:normal">관심 유저 리스트</li>
                    <li data-panel="2" style="color:#243d68; opacity:0.5">선정자 리스트</li>
                </ul>
            </div>

            <div id="tbl_hd" style="margin-left:54px;">
            <div id="input_box"><input type="text"><i class="fas fa-search"></i></div>
           
            <span id="list_excel">리스트 엑셀로 내보내기</span>
            <div id="list_num_con">
                <span id="list_10" class="list_num">10개 보기</span>
                <span id="list_50" class="list_num">50개 보기</span>
                <span id="list_100" class="list_num">100개 보기</span>
            </div>           
        </div>

            <div class="tbl_con hidden" data-panel="0" style="margin-left:54px;">
            <table class="tbl">
                <thead>
                    <tr style=" background-color: #f2f5f7;">
                        <td>순서</td>
                        <td>기업명</td>
                        <td>업종</td>
                        <td>대표자명</td>
                        <td>사업자등록번호</td>
                        <td>연락처</td>
                        <td>제출일</td>
                        <td>전체 지원서류</td>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>순서</td>
                        <td>기업명</td>
                        <td>업종</td>
                        <td>대표자명</td>
                        <td>사업자등록번호</td>
                        <td>연락처</td>
                        <td>제출일</td>
                        <td>전체 지원서류</td>                  
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="tbl_con" data-panel="1"  style="margin-left:54px;">
            <table class="tbl">
                <thead>
                    <tr style=" background-color: #f2f5f7;">
                        <td>순서</td>
                        <td>기업명</td>
                        <td>업종</td>
                        <td>대표자명</td>
                        <td>회원 아이디</td>
                        <td>연락처</td>
                        <td>메일주소</td>
                      
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>순서</td>
                        <td>기업명</td>
                        <td>업종</td>
                        <td>대표자명</td>
                        <td>사업자등록번호</td>
                        <td>연락처</td>
                        <td>제출일</td>
                                
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import Header from "./common/Header.vue"
import LeftNavi from "./common/LeftNavi.vue"

export default {
    components:{
        Header, LeftNavi, 
    },
    mounted:function(){
        $(document).ready(function(){
            $("#gca_content").css("background-color","#fff")
        })
    }
    
}
</script>
<style scoped>
#nav{
    width:1224px;
    border-bottom:1px solid #4f5478;
    height:30px;
    margin-left:53px;
}
#nav>ul>li{
    float: left;
    display:inline-block;
    border-bottom:2px solid transparent;
    padding-bottom: 8px;
    margin-right:32px;
    font-size: 14px;
    cursor:pointer;
}
#nav>ul>li:hover{
    float: left;
    display:inline-block;
    border-bottom:2px solid #f54b94;
}
#export{
    width: 152px;
    height: 29px;
    background-color: #ffffff;
    border: solid 1px #1b66f4;
    font-size: 13px; 
    color: #1b66f4;
    text-align: center;
    line-height: 29px;
    margin-left: 8px;
    float: right;
    margin-top:16px;
}
#show_static{
     width: 119px;
  height: 29px;
  background-color: #ffffff;
  border: solid 1px #1b66f4;
  text-align: center;
  line-height: 29px;
   color: #1b66f4;
    float: right;
    margin-top:16px;
}

 #page_con{
     width:100%;
     margin-left:64px;
     position: relative;
 }
 #brd_cum{
    font-size: 12px;
    color: #1a2f53;
    padding-top:25px;
    margin-left:52px;
 }
 .op{
opacity: 0.5;
 }
#grant_title{
    position: absolute;
    font-size: 32px;
    color: #243d68;
    left:52px;
    top:82px;
}
#due{
    position: absolute;
    font-size: 32px;
    color: #243d68;
    left:52px;
    top:130px;
    font-size: 14px;
  font-weight: bold; 
  color: #2256b8;
}
#sub{
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    top:143px;left:971px;
}
#sub2{
    font-size: 24px;
    color: #243d68;
    font-family: Rubik;
    position: absolute;
    top:141px;
    left:1115px;
}
#hr{
    width: 1224px;
   
    border-top:1px solid #ced4da;
    margin-top: 150px;
    margin-left:54px;
}

#tbl_hd{
    margin-top:25px;
}

.tbl_con{
    margin-top: 16px;
}
    .list_num{
        display: inline-block;
        margin-top:17px;
        margin-left:18px;
        cursor: pointer;
    }
    .list_num:hover{
        font-weight: bold!important;
        color: #243d68!important;
    }

    #list_num_con{
        float: right;
        font-size: 12px;
        color: #243d68;
        height:34px;
    }

    #select_excel,#list_excel {
        display: inline-block;
        font-size: 12px;
        color: #1b66f4;
        vertical-align: bottom;
        margin-right:16px;
        cursor: pointer;
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

    #tbl_hd{
        width:1224px;
        margin-left:3px;
    }
    .tbl{
        border-collapse: collapse;  
        width:1224px;
        margin-left: 3px;
    }
    .tbl>tbody>tr>td{
        font-size: 12px;
        color: #1a2f53;
        height: 54px;
        line-height: 54px;
    }
    thead>tr>td{
        font-size: 14px;
        letter-spacing: normal;
        color: #1a2f53;
        height:40px;
    }
</style>