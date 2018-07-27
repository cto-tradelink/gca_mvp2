<template>
    <div id="grant_detail_card" >
        
        <div id="grant_title">{{grant_info.title}}</div>
        <div id="grant_ttl_cp">
            <div id="date_info">{{grant_info.apply_start | get_day_format}}부터 ~ {{grant_info.apply_end | get_day_format}}까지 </div>
            <div id="like_compete">
                <div id="like_con"><img src="/static/img/like_gr.png"><span>{{grant_info.int}}</span></div>
                <div id="compe_con"><img src="/static/img/comp_2.png"><span>{{grant_info.comp}}:1</span></div>
                <div id="d_day_con"><img src="/static/img/clock.png" style="float:left"><span>{{ grant_info.apply_end,grant_info.apply_start | d_day_calc }}</span></div>

                 
            </div>
        </div>
        <div id="cp" style="clear:both;padding-top:14px;">{{grant_info.short_desc}}</div> 
        <div class="hr" style="margin-top:8px;border-bottom:1px solid #c1d1f7;"></div>
    </div>
</template>

<script>

export default {
    props:["grant_info"],
    data:function(){
        return{
            agency_name:"경기 콘텐츠 진흥원",
            f_num:"100명",
            tag_list:["출판","만화","음악","영화","애니메이션"],
            grant:{
                title:"2018년 제8회 게임 창조오디션",
                sub_title:"G-START B 심화과정",
                short_desc:"간략한 내용입니다 간략한 내용입니다. 간략한 내용입니다 간략한 내용입 간략한 내용입니다 간략한 내용입니다.간략한 내용입니다. 간략한 내용입니다.간략한 내용입니다. ",
                due_date:"6월 01일(금) 까지",
                view:"3",
                tag_list:[
                    "출판","만화","음악","영화","애니메이션"
                ],
                reg_date:"2018-05-08"
            }
        }
    },
    filters:{
    }
}
</script>

<style scoped>
    #like_con{
        margin-right: 16px;
    }
    #like_con>img,  #compe_con>img, #d_day_con>img{
        float: left;
        margin-right: 4px;
        width:24px;
        height:24px;
    }
    #cp{
        opacity: 0.8;
        font-size: 14px;
        line-height: 1.86;
        letter-spacing: -0.1px;
        color: #1a2a53;
    }
    #like_con>span,  #compe_con>span,#d_day_con>span{
        display: block;
        float: left;
        margin-top:5px;
        font-family: Rubik;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 16px;;
        letter-spacing: normal;
        text-align: right;
        color: #243d68;
        margin-right:12px
    }

 
    #grant_detail_card{
        padding-top:1px;
        margin-left: 184px; 
        background-color: #fff;
        width: 1016px;
        height: auto;
        overflow: -webkit-paged-y;
        padding-left:24px;
    }
    #grant_title{
        font-size: 32px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.25;
        letter-spacing: -2px;
        color: #243d68;
        margin-top: 64px;
        width: 1016px;
    }
    #grant_ttl_cp{
        margin-top: 18px;
        height:13px;
    }
    #date_info{
        font-size: 16px;
        line-height: 1.75;
        letter-spacing: normal;
        color: #1b66f4;
        float: left;
      
     }
     #like_compete{
         float: right;
     }
     #like_compete>div{
        font-size: 18px;
        font-weight: 300;
        text-align: right;
        color: #4f5478;
        display: inline-block;
     }
    .hr{
        clear: both;
        margin-top: 48px;
        width: 1016px;
        height: 1px;
        border-bottom:1px solid rgba(206, 212, 218, 0.5);
    }
    #like_compete{
        font-family: 'Rubik';
        font-size: 18px;
        font-weight: 300;

        color: #4f5478;
    }
</style>
