<template>
   
</template>

<script>


</script>
<style >


.column>ul{
    display: block;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
    margin-top: 0px;
    margin-left: 0px;
}

.column>ul>li{
   list-style: none;
    height: auto;
    line-height: 16px;
    width: 100%;
    margin-bottom: 18px;
    float: left;
    font-size: 12px;
    }
    .column>ul>li:last-child{
          margin-bottom: 0px;
    }
.column>ul>li>span:nth-child(1){
    display: block;    
    width: 16px;
    height: 16px;
    float: left;
    margin-right: 7px;
        
    }
    .column>ul>li:nth-child(1)>span:nth-child(1){   
        background-color: rgb(148, 103, 189); 
    }
    .column>ul>li:nth-child(2)>span:nth-child(1){   
        background-color: rgb(214, 39, 40);
    } 
    .column>ul>li:nth-child(3)>span:nth-child(1){   
        background-color: rgb(44, 160, 44);
    }
    .column>ul>li:nth-child(4)>span:nth-child(1){   
        background-color: rgb(255, 127, 14);
    } 
     .column>ul>li:nth-child(5)>span:nth-child(1){   
        background-color: rgb(31, 119, 180);
    } 
    .column>ul>li:nth-child(6)>span:nth-child(1){   
        background-color: rgb(255, 127, 14);
    } 
;

    .column>ul>li>span{
        float: left;
        display: block;
        height: 16px;
        line-height: 16px;
        font-size: 12px;

    }
    .column>ul>li>span:nth-child(1){
        display: block;
        float: left;
    }
     .column>ul>li>span:nth-child(2){
        display: block;
        float: left;
    }
    .column{
        float: left;
     
        width:84px;
        height:100%;
    }

.pie>span{
    display: block;
    position: absolute;
    left:39px;
    width: 100px;
    height: 28px;
    font-size: 16px;
    color: #243d68;
    line-height: 28px;
}
  .line1,.line2,.line3,.line4 ,.line5,.line6,.line7,.line8,.line9{
        fill: none;
       
        stroke-width: 1.5px;
    }
    .line1{
        stroke: steelblue;
    }
    .line2{
        stroke: red;
    }
    .line3{
        stroke: black;
    }
    .line4{
        stroke: green;
    }
    .line5{
        stroke: yellow;
    }
    .line6{
        stroke: brown;
    }
    .line7{
        stroke: rosybrown;
    }
    .line8{
        stroke: orangered;
    }
    .line9{
        stroke: purple;
    }
.zoom {
  cursor: move;
  fill: none;
  pointer-events: all;
}

.file{
    cursor: pointer;
}
.hidden{
    display: none;
}
td>i{
    margin-top: 1px;
    vertical-align: top;
    cursor: pointer;
}

#list_tbl{
    width: 1112px;
    border-collapse: collapse;
    margin-top: 16px;
    margin-left: 16px;
}
#list_tbl>thead>tr{ 
    height: 40px;
  
}
#list_tbl>thead>tr>td{
    border-top:1px solid #4f5478;
    border-bottom:1px solid #4f5478;
    
    font-size: 14px; 
    color: #1a2f53;
    vertical-align: center;
    padding-left: 14px;
}
#list_tbl>tbody>tr>td{
     font-size: 12px; 
  color: #1a2f53;
  height:56px;
  border-bottom: solid 1px #ced4da;
  padding-left: 16px;
}


#sub_btn{
    width:1112px;
    overflow: auto;
    margin-top: 22px;
    margin-left: 16px;
}
#excel_down{
    display: block;
    font-size: 12px;
    color: #1b66f4;
    float: left;
    cursor: pointer;
    position: absolute;
    top:46px;
    right:16px;
}
#sub_btn>div{
    float: right;
    font-size: 12px;
    color: #243d68;
}
#sub_btn>div>span.num_on{
    font-weight: bold
}
#sub_btn>div>span{
    margin-right: 21px;
    cursor: pointer;
}
#sub_btn>div>span:nth-child(4){
    margin-right: 0px;
}
#tbl_pagination{
    width:1112px;
    margin-left:16px;
    text-align: center
}
#list_view{
    position: relative;
    width: 1144px;
    overflow: auto;
    margin-top: 40px;
 border: solid 1px #ced4da;
 padding-top: 40px;

}
#pie_con{
    overflow: auto;
}
#list{
    font-size: 20px;
  line-height: 1.2;
  letter-spacing: normal;
  color: #1a2f53;
      height:39px;
    width:1112px;
    margin-left:16px;
    line-height: 32px;
  
}
#pie_con{
    margin-top: 21px;
}
.pie_seg{
    /* width: 285px;
    height: 198px; */
    border-right:1px solid rgba(206, 212, 218, 0.7);
    float: left;
    position: relative;
    overflow: hidden;
}
.pie{
    float: left;
    /* width:199px;; */
    height: 197px;
   
}
.pie_seg:nth-child(4){
    margin-right: 0px;
}
#person_num{
  opacity: 0.8;
  font-family: Rubik;
  font-size: 34px;
  font-weight: 300;
  color: #243d68;
  margin-top: 24px;
  margin-left: 8px;
}
#person_num>span{
     font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.75;
  letter-spacing: normal;
  color: #243d68;
}

    .basic{
        width: 474px;
        height: 51px;
        font-size: 20px;
        font-weight: 900;
        color: #1a2f53;
        line-height: 51px;
        padding-left: 18px;
    
    }
    #select_zone{
        margin-top: 40px;
        width: 1144px;;
        height: 51px;;
    }
    #static_content{
        margin-left: 64px;        
        padding-top:40px;
        padding-left: 52px;
    }
    #top_banner{
        width:1224px;;
        overflow: auto;;
        border-bottom:1px solid #a0a3bc;
        margin-top:56px;
    }
    #top_banner>div{
        margin-top:15px;
        float: left;
        position: relative;
        cursor: pointer;
        color: #4f5478;
        font-size: 14px;
        border-bottom:2px solid transparent;
        margin-right:30px;
        padding-bottom:7px;

    }
    #top_banner>.on{
        border-bottom:2px solid #1b49f4;
        color:#1b49f4;
    }

    
    #static_pdf_down{
     width: 120px;
  height: 32px;
  border-radius: 16px;
  border: solid 1px #1b66f4;
        background-color: #ffffff;
        border: solid 1px #1b66f4;
        color: #1b66f4;
        font-size: 12px;
        line-height: 34px;
        text-align: center;
        margin-top:8px;
        float: right;
        cursor: pointer;
    }
    .list_btn{
        cursor: pointer;
        font-size: 15px; 
        color: #7697ab;
        margin: 8px;
    }
    .bold{
         color: #243d68;
        font-weight: bold;
        cursor: default;
    }

    
    #input_box{
        display: inline-block;
        width: 144px;
        height: 32px;
        background-color: #ffffff;
        border: solid 1px #ced4da;
        line-height:32px;
        margin-right:29px;
        float: left!important;
    }
    #input_box>i{
        color:#ced4da   
    }
    #input_box>input{
        width: 115px;
        border:none;
        outline: none;
    }
</style>
