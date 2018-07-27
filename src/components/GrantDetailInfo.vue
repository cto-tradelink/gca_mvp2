<template>

    <div id="grant_detail_con">
        <div class="gr_seg_ttl" style="display:none"></div>
        <div class="gr_seg" style="">
            <img :src="img" id="grant_poster" >
            <div id="grant_info_con">
                <ul style="margin-top:0px;">
                    <li class="sub_info" style="margin-bottom:0px;"><span class="label"><img>지원내용</span><div style="width:900px;">
                        <span class="filter" v-for="t in grant_info.top_support_tag" style="margin-right:5px; color:#2256b8">#{{t}}</span>
                        </div>
                    </li>
                    <li class="sub_info" style="margin-bottom:0px;"><span class="label"><img>모집조건</span><div  style="width:900px;">
                        <span class="filter" v-for="t in grant_info.object_tag" style="margin-right:5px; color:#2256b8">#{{t}}</span>
                        </div>
                    </li>
                    <li class="sub_info" style="border-bottom:none; height:40px;line-height:50px;margin-bottom:0px;"><span class="label" style="margin-top:12px">주최기관</span><div id="holder">
                        <img><span id="agency"><img src="/static/img/gca_logo_16.png" style="margin-right:6px;">경기도 콘텐츠 진흥원</span></div> 
                    </li>
                    <li class="sub_info" style="border-bottom:none; height:40px;line-height:50px;"><span class="label" style="margin-top:12px">담당자</span><div id="holder">
                        <img><span id="manager" class="manager" style=" opacity: 0.8; color: #1a2a53;"><img src="/static/img/Man.png" style="margin-right:6px;">{{grant_info.author}}매니저</span>
                        <img src="/static/img/Phone.png" style="margin-right:6px;margin-left:24px;"><span style="color:#1b49f4; opacity:0.8;">{{grant_info.tel}}</span>

                        <img src="/static/img/mail.png" style="margin-right:6px; vertical-align:middle;margin-left:24px;">{{grant_info.email}}
                        </div> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["grant_info"],    
    data:function(){
        return{
        }
    },
    updated:function(){
        var data_target = this     
        $(document).ready(function(){
            var k = 0
            for(var k=0; k <$(".sub_info>div").length;k++ ){                
                if($(".sub_info:eq("+k+")>div").text().replace(/(^\s*)|(\s*$)/gi, "") == ""){
                    $(".sub_info:eq("+k+")>div").parent().css("display","none")
                }
            }      
            localStorage.setItem("first_grant_title",localStorage.getItem("second_grant_title") )        
            localStorage.setItem("second_grant_title",data_target.grant_info.title)
            localStorage.setItem("first_grant_src",localStorage.getItem("second_grant_src") )        
            localStorage.setItem("second_grant_src",data_target.grant_info.id)          
           
        })
    },
    mounted:function(){
        $.ajax({
            url:`${this.baseURI}+/hit_sb/`,
            type:"post",
            data:{
                "target" : this.$route.params.id,
                "id" : localStorage.getItem("id")
            },
            success:function(res){
                console.log(res);
            }
        })

       if($("#grant_poster").attr("src") == "" ||$("#grant_poster").attr("src") == undefined){
           $("#grant_poster").remove()
           $("#grant_info_con").css("margin-left","0px")
       }
    }
}
</script>

<style scoped>
.filter{
    background-color: #f5f8ff;
    opacity: 0.7; 
    font-size: 14px;
    line-height: 1.86;
    letter-spacing: -0.1px;
    text-align: center;
    color: #1a2a53;
    padding: 7px 17px;
    border-radius: 30px;
      color: #1a2a53!important;
      display: inline-block;
      margin-right:8px;
}
    .sub_info>.label{
        opacity: 0.8;
        font-size: 17px;
        line-height: 1.65;
        letter-spacing: -0.3px;
        color: #1a2f53;
    }
    #grant_detail_con{
        margin-left: 184px; 
        background-color: #fff;
        width: 1016px;
        height: auto;
        overflow: auto;
        padding-left: 24px;
    }
    .gr_seg{
        height: auto;
        overflow: auto;
        border-bottom: 1px solid rgba(206, 212, 218, 0.5);
        position: relative;
    }
    #grant_poster{
        width: 207px;
        height: 285px;
        border: solid 1px #d0d0d0;
        float: left;
    }
    #grant_info_con{
        float: left;
        width:1016px;
        margin-left: 40px;
    }
    #d-day{
        line-height: 68px;
        height: 68px;
        font-size: 68px;
        font-weight: 300;
        color: #28aeff;
        font-family: 'Rubik', sans-serif;
    }
    #range{
        margin-top: 5px;
        width: 769px;
        
        background-color: rgba(206,212,218,0.43 ) ;
        height: 3px;
    }
    #inner_range{
        width: 440px;
        height: 3px;
        background-color: #1b82f4;
    }
    li{
        list-style: none;
    }
    #cp{
        opacity: 0.6;
        font-family: SpoqaHanSans;
        font-size: 14px;
        color: #1a2f53;
        width: 584px;
        word-break: keep-all;
        margin-top: 16px;
    }
    ul{
       
        -webkit-margin-before: 0em;
        -webkit-margin-after: 0em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        -webkit-padding-start: 0px;
        margin-top: 16px;
    }
    .sub_info>.label{
        width:107px;
        text-align: left;
   
        display: inline-block;
        vertical-align: top;
        margin-top: 20px;
    }
    .sub_info>div{
        display: inline-block;
        font-size: 14px;
        line-height: 1.71;
        color: #7697ab;
        margin: 4px;
        width: 500px;
        word-break: keep-all;
    }
    .sub_info{
        margin-bottom: 16px;
        border-bottom:1px solid #c1d1f7;
    }
    .sub_info>div>span{
        margin: 4px;
        font-size: 14px;
    }
    #email{
         color: #1b66f4;
    }
    #agency{
         
          color: #1b49f4;
    }
    #marker,#tel{
          color: #243d68;
    }
</style>
