<template>
  <div id="gca_content">   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'gca_content'
}
</script>

<style>
#gca_content {
  background-color: #f5f8ff;
  padding: 0px;
  margin: 0px;
}
body{
  margin: 0px;
  padding: 0px;
 
}

   #header>ul>a>li{
      font-weight: normal; 
    /* //  color: #a0a3bc; */
    }
    .menu_on{
      color: #1a2f53!important;
      font-weight: bold!important;
    }
    .hidden{
      display: none!important;
    }
    a{
      color: inherit;
      text-decoration: none;
    }
    ul{
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
    margin: 0px;
    }
    li{
      list-style: none;
    }
    #application_header_bottom>ul>li{
      cursor: pointer;
    }
    ul{
      padding-left: 0px;
    }
    .more{
      cursor: pointer;
    }
    .hr{
          clear: both;
        margin-top: 48px;
        width: 1016px;
        height: 1px;
        border-bottom:1px solid rgba(206, 212, 218, 0.5);
    }
   
    .filter{
      margin-right: 6px;
cursor: pointer;
border-radius: 100px;
padding-left: 26px;
padding-right: 26px;
padding-top:11px;
padding-bottom:11px;
display: inline-block;
background-color: #f5f8ff;
height: 18px;
line-height: 18px;
opacity: 0.7;
font-size: 14px;
letter-spacing: -0.1px;
text-align: center;
color: #1a2a53;
margin-bottom:12px;
    }
    .bold{
      font-weight: bold;
    }

.page_title{
    opacity: 0.8;  
    font-size: 20px;
    font-weight: bold;  
    color: #1a2f53;
    margin-top:40px;

}

.app_btn{
    width: 124px;
    height: 38px;
    border-radius: 20px;
    background-color: #ffffff;
    border: solid 1px #1b66f4;
    font-weight: normal;
    line-height:40px;
    letter-spacing: normal;
    text-align: center;
    color: #1b66f4;
    margin-top: 42px;
    margin-left: 43px;
    cursor: pointer;
}

.f0{
  font-size: 32px;
}
.f1{
  font-size: 24px;
  }
  .f2{
    font-size: 17px
  }
  .f3{
    font-size: 16px;
  }
  .f4{
    font-size: 14px;
  }
  .f5{
    font-size: 12px;
  }
  .f6{
    font-size: 10px;
  }
.b1{
  color:rgba(26,42,83,1)
}
.b2{
  color:rgba(26,42,83,0.8)
}
.b3{
  color:rgba(26,42,83,0.5)
}
.pr1{
  color:rgba(27,73, 244, 1 )
}
.pr2{
  color:rgba(27,73, 244, 0.7 )
}
.se{
  color:#F54B94
}
.l1{
  color: #F1F6FF
}
.l2{
  color: #C1D1F7
}
.l3{
  color: rgba(193,209,247,0.8 );
}
.base1{
  color:#F5F8FF
}
.base2{
  color:#E7EDFC
}
.g1{
  color:#A0A3BC
}
.gr2{
  color:#4F5478
}
.gr3{
  color:#CAD1DD
}
.err{
  color:#D0021B
}



.gnb_space{width:100%}
.gnb_conn{width:1224px;}
.my_profile{margin:10px;}
.jumbotrn_img{width:100%}
.jb_text{font-size: 32px;}
.jb_sub_text{font-size :27px;}
.login_btn{position: relative;}
.sc_title{}
.sb_card{}
.show{display:block}
.row{width:100%}
.content{
  width:1224px;
}
.channel_bg{
  background: #A0A3BC
}
.clip{
  -ms-block-progression: bt
}
.rgt_nav{-webkit-mask-attachment:10px}

.comp{font-size: 10px;}


.percent{
     font-family: Rubik;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.92;
  letter-spacing: normal;
  text-align: right;
  color: #1a2a53;
  position: absolute;
  top: 53px;
  right: 56px;
    height: 22px;
}

</style>
