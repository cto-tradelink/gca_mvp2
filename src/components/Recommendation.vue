<template>
    <div id="recommendation" style="position:relative; overflow:auto"> 
        <div id="rec_navi_con" style="width:100%">
        <div id="rec_navi" style="width:1224px; margin:0px auto; height:auto; overflow:auto;">
            <ul style="width:320px;margin-left:494px;margin-top:24px;">
                <li v-on:click="order(0)" class="rec_on">추천순</li>
                <li v-on:click="order(1)">관심순</li>
                <li v-on:click="order(2)">경쟁률순</li>
                <li v-on:click="order(3)" style="margin-right:0px;">마감임박순</li>
            </ul>
        </div>     
        </div>
        
        <div style="width:1224px; margin:0px auto;;margin-top:16px;">
            <div class="masonry" style="width:1224px;">
            <div v-for="d in grant">
                <CardWithPoster v-if="d.img != undefined"  v-bind:item="d"></CardWithPoster>
                <CardWithoutPoster  v-if="d.img == undefined" v-bind:item="d"></CardWithoutPoster>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardWithPoster from "./common/CardWithPoster.vue"
import CardWithoutPoster from "./common/CardWithoutPoster.vue"
var masonry;
var order_num=0;
   function compare_by_rec(a,b){
            if (a.rec > b.rec) {
                return 1;
            }
            if (a.rec < b.rec) {
                return -1;
            }
            
        return 0;
        }
    function compare_by_int(a,b){
            if (a.int > b.int) {
                return 1;
            }
            if (a.int < b.int) {
                return -1;
            }
            
        return 0;
        }
   function compare_by_comp(a,b){
            if (a.comp > b.comp) {
                return 1;
            }
            if (a.comp < b.comp) {
                return -1;
            }
            // a must be equal to b
        return 0;
        }
     function compare_by_due(a,b){
            var a_date = new Date(a.due.split("-")[0], a.due.split("-")[1], a.due.split("-")[2])
            var b_date = new Date(b.due.split("-")[0], b.due.split("-")[1], b.due.split("-")[2])
            if (a_date > b_date) {
                return 1;
            }
            if (a_date < b_date) {
                return -1;
            }
            // a must be equal to b
        return 0;
        }

  function order_arr(num,obj){
      console.log(obj)
            return new Promise(function(resolve,reject){
                console.log(num)
                $(".int").addClass("hidden")
                $(".comp").addClass("hidden")
                
                if(num == 0){obj.grant.sort(compare_by_rec).reverse()
                               
                }
                if(num == 1){obj.grant.sort(compare_by_int).reverse()
             
                }
                if(num == 2){obj.grant.sort(compare_by_comp).reverse()
               
                }
                if(num == 3){obj.grant.sort(compare_by_due).reverse()
               
                }
                resolve("data-1")

            })
        }

export default {
    components:{
        CardWithPoster,CardWithoutPoster
    },
    updated:function(){
        console.log("업데이트되었음.")
            masonry = new Macy({
            container: '.masonry',
            trueOrder: true,       
            columns: 3,
            breakAt: {
                3000: {
                     margin: {
                        x: 24,
                        y: 24,
                    },
                columns: 3
                },
            }
            });

          $(".int").addClass("hidden")
                $(".comp").addClass("hidden")
        if(order_num==0){

        }else if (order_num==1){
            $(".int").removeClass("hidden")
        }else if (order_num==2){
            $(".comp").removeClass("hidden")
        }else if (order_num==3){

        }
    },
    methods:{ 
        get_re_grant:function(){

        },      
        order:function(num){
            order_num = num 
            order_arr(num,this).then(function(data){
                
            })
            $("#rec_navi>ul>li").removeClass("rec_on")
            $("#rec_navi>ul>li:eq("+num+")").addClass("rec_on")
        }
        ,
        addItem:function(){
            console.log("asdfasdf")
            this.items.push(this.items[5])
        },
        before_change:function(){
            console.log("dddd")
        },
       
    },
    data:function(){return{
            origin_grant_list:[],
            grant:[
            ],
            tag_items:[
            {
                "name":"컨텐츠기업",
            },
            {
                "name":"초기창업",
            }
        ]
    }
    },
    mounted:function(){

        var vue_obj = this
        $(document).ready(function(){

        var tag_list=[]
        for(var k=0; k< $(".top_tag_con:eq(0)>li").length; k++){
            console.log($(".top_tag_con:eq(0)>li:eq("+k+")").text().replace("#","").trim())
            tag_list.push($(".top_tag_con:eq(0)>li:eq("+k+")").text().replace("#","").trim())
        }
        vue_obj.$http.get(`${vue_obj.baseURI}/vue_home_grant/?q=`+ tag_list.join(","))
        .then((result) => {
            vue_obj.grant=[]
            for(var k=0; k< result.data.data.length; k++){
                vue_obj.grant.push(result.data.data[k])                
            }           
        }).then((result=>{
             order_arr(order_num, vue_obj) 
        }))        
        })

        masonry = new Macy({
            container: '.masonry',
            trueOrder: true,       
            columns: 3,
            breakAt: {
                3000: {
                     margin: {
        x: 24,
        y: 24,
      },
      columns: 3
                },
            }
        });

        
        $(document).on("click","#save_btn",function() {                
        var tag_list=[]
        for(var k=0; k< $(".top_tag_con:eq(0)>li").length; k++){
            console.log($(".top_tag_con:eq(0)>li:eq("+k+")").text().replace("#","").trim())
            tag_list.push($(".top_tag_con:eq(0)>li:eq("+k+")").text().replace("#","").trim())
        }
        vue_obj.$http.get(`${vue_obj.baseURI}/vue_home_grant/?q=`+ tag_list.join(","))
        .then((result) => {
            vue_obj.grant=[]
            for(var k=0; k< result.data.data.length; k++){
                vue_obj.grant.push(result.data.data[k])                
            }           
        }).then((result=>{
             order_arr(order_num, vue_obj) 
        }))        
        })

        
     
    },
    created:function(){
        
    }
}
</script>

<style scoped>
    #recommendation{
         background-color: rgba(237,243,255,0.5 );
    }
    #rec_navi{
        width:317px;
        margin: 0px auto;
    }
    #rec_navi>ul{
        -webkit-margin-before: 0em;
        -webkit-margin-after: 0em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        -webkit-padding-start: 0px;
        margin: 0px auto;
        display: block;
    }
    #rec_navi>ul>li{
        float: left;
        list-style: none;
        margin-right: 24px;
         opacity: 0.7;
  font-size: 12px;
  color: #1a2f53;
  cursor: pointer;
    }
    .rec_on{
         font-size: 12px;
  font-weight: bold;
  letter-spacing: normal;
  color: #243d68;
    }
</style>
