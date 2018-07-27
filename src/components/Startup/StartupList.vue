<template>
    <div>
        <Header></Header>
        <FilterSetting style="margin-bottom:36px;"></FilterSetting>
        <div id="list_con">
           
            <StartupCard v-for="s in startup_list" :startup="s"></StartupCard>
        </div>
    </div>
</template>

<script>
import Header from "../common/Header.vue"
import StartupCard from "./StartupCard.vue"
import FilterSetting from "../common/FilterSetting.vue"
import axios from "axios"




    function check_fav(obj){
        $.ajax({
            url:obj.baseURI+"/vue_get_all_fav/",
            type:"post",
            data:{"id":localStorage.getItem("id")},
            success:function(res){
                console.log(res)
                 $(".heart").each(function(){
                    if($(this).attr("data-target")=="clip"){
                        if(res.clip.indexOf(parseInt($(this).attr("data-id"))) != -1){                            
                                $(this).find("img").attr("src","/static/img/like_p.png")
                        }
                        }
                    if($(this).attr("data-target")=="course"){
                        if(res.course.indexOf(parseInt($(this).attr("data-id"))) != -1){                            
                                $(this).find("img").attr("src","/static/img/like_p.png")
                                console.log("hgaga")
                        }
                        }
                    if($(this).attr("data-target")=="path"){
                        if(res.path.indexOf(parseInt($(this).attr("data-id"))) != -1){                            
                                $(this).find("img").attr("src","/static/img/like_p.png")
                                console.log("asdf")
                        }
                        }
                   if($(this).attr("data-target")=="startup"){
                        if(res.startup.indexOf(parseInt($(this).attr("data-id"))) != -1){                            
                                $(this).find("img").attr("src","/static/img/like_p.png")
                        }
                        } 

                    })
                
                    
                   
                }
        })
    }

export default {
    components:{
        Header, StartupCard, FilterSetting
    },

    mounted:function(){
        var vue_obj = this
        this.$http.get(`${this.baseURI}/vue_get_startup_list/`)
        .then((result) => {
            console.log(result)
            this.startup_list_pre = result.data
            this.startup_list = result.data
                 
            var data={
                "id":localStorage.getItem("id")
            }          
            $.ajax({
                        url:`${this.baseURI}/vue_my_interest_set/`,
                        method:"POST",
                        data:data,
                        success:function(res){console.log(res)
                           for(var k=0; k < res.length; k++){
                            $(".heart_icon[data-id='"+res[k].id+"']").css("color","#ff0000")
                           }                           
                             check_fav(vue_obj)
                        },
                        error:function(e){console.log(e)                       
                        }
         })
        })          

        
        $(document).ready(function(){

            $(document).on("click","#save_btn", function(){
                console.log("here")
                var result_filter = []
                 vue_obj.startup_list = []
                 for(var j =0 ;j < vue_obj.startup_list_pre.length;j++){
                    for(var k=0; k < $(".filter_res").length;k++){
                        var text = $(".filter_res:eq("+k+")").text().trim()
                        console.log(text)
                        console.log( vue_obj.startup_list_pre[j].filter.includes(text))
                        console.log(vue_obj.startup_list_pre[j].filter)
                        if( vue_obj.startup_list_pre[j].filter.indexOf(text) != -1 ){
                            vue_obj.startup_list.push(vue_obj.startup_list_pre[j])
                        }
                                               
                    }
                }
            })       
            $("body").css("background-color","#f5f8ff")
              $(document).off("click",".int")
                  $("li.menu_top").removeClass("menu_on")
              $("li.menu_top:eq(1)").addClass("menu_on")
                  $(document).off("click",".heart")
           $(document).on("click",".heart", function(e){
                var target = this
                 e.preventDefault();
                 e.stopPropagation()
                if(localStorage.getItem("user")!="u"){
                   if( localStorage.getItem("user") == "m" ||localStorage.getItem("user")=="ma"){ alert("관심담기를 할수 없는 계정입니다.")}
                    else alert("로그인을 해주세요.")   
                }
                var t = $(this).attr("data-target")
                if( t == "path")  {var url = "/toggle_int_path/"; var text="패스";}
                else if(t == "course") {var url = "/toggle_int_course/"; var text="코스";}
                else if(t == "clip") {var url = "/toggle_int_path/"; var text="강의";}
                else if(t == "startup") {var url = "/vue_toggle_interest_st/"; var text="스타트업";}
                else if(t == "sp") {var url = "/vue_toggle_interest_sb/"; var text="지우너사업";}
                if($(this).find("img").attr("src").indexOf("_p") != -1){
                    if(confirm("관심 "+text+"에서 삭제하시겠습니까?")){
                        $.ajax({
                            url:vue_obj.baseURI+url,
                            type:"post", 
                            data:{
                                "id":localStorage.getItem("id"),
                                "val":$(target).attr("data-id")
                            },
                            success:function(res){
                                alert("성공적으로 삭제 되었습니다.")
                                $(target).find("img").attr("src","/static/img/like_d.png")
                                                             
                            }
                        })
                    }
                    }
                    else{
                        $.ajax({
                            url:vue_obj.baseURI+"/toggle_int_clip/",
                            type:"post", 
                            data:{
                                "id":localStorage.getItem("id"),
                                "val":$(target).attr("data-id")
                            },
                            success:function(res){
                                alert("성공적으로 등록 되었습니다.")
                                 $(target).find("img").attr("src","/static/img/like_p.png")
                              
                            }
                        })
                    }                
            })

        })
    },
    data:function(){
        return{
            startup_list:[
                {"name":"", "short_desc":"", "tag":["",""], "logo":"" ,"id":1},
                {"name":"", "short_desc":"", "tag":["",""], "logo":"" ,"id":1},
                {"name":"", "short_desc":"", "tag":["",""], "logo":"" ,"id":1},
                {"name":"", "short_desc":"", "tag":["",""], "logo":"" ,"id":1},
                {"name":"", "short_desc":"", "tag":["",""], "logo":"" ,"id":1},
                {"name":"", "short_desc":"", "tag":["",""], "logo":"" ,"id":1},
            ]
        }
    },
  
}
</script>

<style scoped>
#list_con{
    width: 1224px;
    margin: 2px auto;
}
</style>
