<template>
    <div >
        <div id="title">전체 공고문</div>
      
        <div id="tbl_hd">
            <div id="input_box"><input id="input_text" type="text"><i class="fas fa-search"></i></div>
            <span id="select_excel">선택 다운로드</span>
            <span id="list_excel" onclick="location.href='http://127.0.0.1:890/vue_get_grant_list_excel/'" >리스트 엑셀로 내보내기</span>
            <div id="list_num_con">
                 <span id="list_10" v-on:click="list(10,$event)" class="list_num hover">10개 보기</span>
                <span id="list_50" v-on:click="list(50,$event)"  class="list_num">50개 보기</span>
                <span id="list_100" v-on:click="list(100,$event)"  class="list_num">100개 보기</span>
            </div>
           
        </div>
        <div class="tbl_con" data-panel="2">
            <table class="tbl">
                <thead>
                    <tr>
                        <td><input  type="checkbox"></td>
                        <td v-on:click="data.sort_by('index')">순서</td>
                        <td v-on:click="data.sort_by('title')">공고명</td>
                        <td v-on:click="data.sort_by('created_at')">게시일</td>
                        <td v-on:click="data.sort_by('author')">담당자</td>
                        <td v-on:click="data.sort_by('belong_to')">부서</td>                        
                        <td v-on:click="data.sort_by('team')">기관</td>
                        <td v-on:click="data.sort_by('tel')">연락처</td>
                        <td v-on:click="data.sort_by('apply_num')">지원기업수</td>                                         
                        <td>선정기업수</td>                                         
                        <td v-on:click="data.sort_by('status')">상태</td>               
                    </tr>
                </thead>
                <tbody>
                  
                     <tr v-for="s in data">
                      <td><input :data-id="s.id" class="chk" type="checkbox"></td>
                        <td>{{s.index}}</td>
                        <td style="cursor:pointer"><router-link :to="'/agent/grant/'+s.id">{{s.title}}</router-link></td>
                        <td>{{s.created_at.split("T")[0]}}</td>
                        <td>{{s.author}}</td>
                        <td>{{s.belong_to}}</td>
                        <td>{{s.team}}</td>
                        <td>{{s.tel}}</td>
                        <td>{{s.apply_num}}</td>                                         
                        <td>{{s.award_num}}</td>                                         
                        <td>{{s.status}}</td>                     
                    </tr>
                </tbody>
            </table>
             <div id="tbl_pagination" style="margin-top:37px;">
                <i id="before_list" class="fas fa-chevron-left"></i>
                    <span class="list_btn" v-for="l in list_nav" v-bind:data-num="l">{{l}}</span>
                <i id="after_list" class="fas fa-chevron-right"></i>
            </div>
        </div>   
        
    </div>
</template>

<script>
var gl_num = 10;

Array.prototype.sort_by = function(key){
    this.sort(function(a, b){
        if(a[key] < b[key]){
            return 1;
        }else if(a[key] > b[key]){
            return -1;
        }
        return 0;
    });
}


export default {
     methods:{
        list:function(num,e){
            $(".list_num").removeClass("hover")
            $(e.path[0]).addClass("hover")
            gl_num = num 
            this.data = []
            this.pre_data = []
            this.list_nav= []
            var target = this
            this.origin_data.forEach(function(o){
                if(  o.author.indexOf($("#input_text").val()) != -1 || 
                    o.belong_to.indexOf($("#input_text").val()) != -1 ||
                    o.status.indexOf($("#input_text").val()) != -1 ||
                    o.team.indexOf($("#input_text").val()) != -1 ||
                    o.title.indexOf($("#input_text").val()) != -1)
                    {target.pre_data.push(o)}
            })
            this.data = this.pre_data.slice(0,num)       
            for (var k = 1; k <= Math.ceil(this.pre_data.length/num); k++)
            this.list_nav.push(k)       

        }
    },
    data:function(){
        return{
            data:[],
            pre_data:[],
            origin_data:[],
            list_nav:[]
            
        }
    },
    mounted:function(){
        var vue_obj = this        
        $(document).ready(function(){
                vue_obj.$http.get(`${vue_obj.baseURI}/vue_get_grant_list/`)
                .then((result) => {        
                    console.log(result)    
                    vue_obj.origin_data = result.data       
                    vue_obj.pre_data = result.data        
                    vue_obj.data = vue_obj.pre_data.slice(0,10)    
                    for (var k = 1; k <= Math.ceil(vue_obj.pre_data.length/10); k++){
                        vue_obj.list_nav.push(k)
                    }
                    console.log(vue_obj)
                })               
                //  vue_obj.$http.post(`${vue_obj.baseURI}/vue_make_excel/`)
                // .then((result) => {        
                //     console.log(result)    
                //     vue_obj.data = result.data                    
                //     console.log(vue_obj)
                // }) 
                 $(document).off("keyup", "#input_text")
                  $(document).on("keyup", "#input_text", function(){
                    
                    vue_obj.data = []
                    vue_obj.pre_data = []
                    vue_obj.list_nav=[]
                    var target = vue_obj
                    vue_obj.origin_data.forEach(function(o){
                        console.log(o.author)
                    try{
                if( o.author.indexOf($("#input_text").val()) != -1 || 
                    o.belong_to.indexOf($("#input_text").val()) != -1 ||
                    o.status.indexOf($("#input_text").val()) != -1 ||
                    o.team.indexOf($("#input_text").val()) != -1 ||
                    o.title.indexOf($("#input_text").val()) != -1)
                    {target.pre_data.push(o)}
                    }catch(e){}
                    })
                    vue_obj.data = vue_obj.pre_data.slice(0,gl_num)
                    for (var k = 1; k <= Math.ceil(vue_obj.pre_data.length/gl_num); k++)
                    vue_obj.list_nav.push(k)                   
            })
            $(document).on("click", ".list_btn", function(){
                    vue_obj.data = vue_obj.pre_data.slice( (parseInt($(this).attr("data-num"))-1)*gl_num,(parseInt($(this).attr("data-num")))*gl_num)  
                 
            }) 
        }
    )
    }
}
</script>

<style scoped>
.list_btn{
    cursor: pointer;
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
  background-color: #4c76c6;
  color:#fff;
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
