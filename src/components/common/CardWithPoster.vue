<template>
    <div class="card_with_poster_con ">
        <a :href="'/grant/'+item.id">
        <div class="card_top">
            <div class="titlew">{{item.title}}</div>
            <div class="grant_sub_info">
                   <div class="due">{{item.due.split("-")[0]}}년 {{item.due.split("-")[1]}}월 {{item.due.split("-")[2]}}일 까지</div>
                <div class="int hidden"><i class="fas fa-heart"></i>&nbsp;&nbsp;{{item.int}}</div>
                <div class="comp hidden"><i class="fas fa-fire"></i>&nbsp;&nbsp;1:{{item.comp}}</div>
            </div>
        </div>
        <div class="card_bottom">
            <img :src="item.img">
            <div class="text_con">
                <div class="grant_text">{{item.short_desc}}</div>
                <div class="tag"><span v-for="t in item.tag.slice(0, 10)">{{t}}</span></div>
            </div>
        </div> 
        </a>       
    </div>
</template>

<script>
export default {
    props:["item"]
}
</script>

<style scoped>

.card_top{

}
#card_without_poster_con{
    width:344px;
    padding: 24px;
}
.due{
    font-family: SpoqaHanSans;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: #2256b8;
}
.grant_text_full{
    opacity: 0.8;
  font-size: 14px;
   line-height: 1.71;
  color: #1a2f53;
  width:344px;
  min-height: 150px;
}
.text_con_full{
    position: relative;
}
.titlew{
    font-size: 20px;
    color: #1a2f53;
     font-weight: 900;
     min-height: 84px;
}

.card_top{
    border-bottom:1px solid rgba(36,61,104,0.2);
    padding-bottom: 16px;

}
.card_without_poster_con{
    width:344px;
    padding: 24px;
    padding-bottom: 36px;
    position: relative;
    background-color: #fff;
    height: auto;
    /* overflow: auto; */
    cursor: pointer;
}

.card_without_poster_con:hover{
     box-shadow: 0 2px 4px -1px rgba(206, 212, 218, 0.5), 0 0 10px 4px rgba(34, 86, 184, 0.19), 0 -2px 5px 0 rgba(79, 84, 120, 0.26);
}


.due{
    font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #1b49f4;
  margin-top: 8px;
}
.card_bottom{
    padding-top:24px;
    
}
.card_bottom>.text_con_full{
    
}

.card_bottom>.text_con_full>.tag{    
    font-size: 14px;
    font-weight: bold;
    color: #243d68;
    position: absolute;
    bottom: 0px;
}
.card_bottom>.text_con_full>.grant_text{
    opacity: 0.8;
    font-family: SpoqaHanSans;
    font-size: 14px;
    color: #1a2f53;    
    min-height: 145px;
}
.due{
    float: left;
}
.int,.comp{
    float: right;
    margin-top: 8px;
}
.grant_sub_info{
    height:30px;
    width:100%
}
.int,.comp{
    font-size: 14px;
  text-align: right;
  color: #a0a3bc;
}
.tag_seg{
    background-color: #f5f8ff;
    padding:6px 16px;
    border-radius: 20px;
    font-size: 12px;
    line-height: 1.83;
    text-align: center;
    color: #1a2a53;
    margin-bottom:8px;
    margin-right:6px;
}
.titlew{
    font-size: 20px;
    color: #1a2f53;
     font-weight: 900;
}

.card_top{
    border-bottom:1px solid rgba(36,61,104,0.2);
    padding-bottom: 16px;

}
.card_with_poster_con{
    width:344px;
    padding: 24px;
    padding-bottom: 40px;
    position: relative;
    background-color: #fff;
    height: auto;
    overflow: auto;
    cursor: pointer;
}

.card_with_poster_con:hover{
     box-shadow: 0 2px 4px -1px rgba(206, 212, 218, 0.5), 0 0 10px 4px rgba(34, 86, 184, 0.19), 0 -2px 5px 0 rgba(79, 84, 120, 0.26);
}

.due{
    font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #2256b8;
  margin-top: 8px;
}
.card_bottom{
    padding-top:24px;
    
}
.card_bottom>img{
    width: 126px;
    height: 189px;
    border: solid 1px #dddddd;
    float: left;
}
.card_bottom>.text_con{
    float: left;
    width:191px;
    margin-left: 17px;
    position: relative;
    height: 189px;;
}
.card_bottom>.text_con>.grant_text{
    opacity: 0.8;
    font-family: SpoqaHanSans;
    font-size: 14px;
    color: #1a2f53;    
    min-height: 145px;
}
.card_bottom>.text_con>.tag{    
    font-size: 14px;
    font-weight: bold;
    color: #243d68;
    position: absolute;
    bottom: 0px;
}

.due{
    float: left;
}
.int,.comp{
    float: right;
    margin-top: 9px;
}
.grant_sub_info{
    height:30px;
    width:100%
}
.int,.comp{
    font-size: 14px;
  text-align: right;
  color: #a0a3bc;
}
.tag{
    background-color: #f5f8ff;
    padding:6px 16px;
    border-radius: 20px;
    font-size: 12px;
    line-height: 1.83;
    text-align: center;
    color: #1a2a53;
}
</style>
