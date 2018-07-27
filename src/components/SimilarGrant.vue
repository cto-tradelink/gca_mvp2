<template>
    <div style="background-color: #f5f8ff; overflow:auto">
        <div style="width:1224px; margin:0px auto">
        <div id="sim_ttl" style="margin-top:64px;">
            이런 지원사업은 어떠세요?
        </div>
        <div style="width:1224px;margin-top:24px;">
            <div class="masonry" style="width:1224px;">
            <div v-for="d in similar_list" >
                <CardWithPoster v-if="d.img != undefined"  v-bind:item="d"></CardWithPoster>
                <CardWithoutPoster  v-if="d.img == undefined" v-bind:item="d"></CardWithoutPoster>
            </div>
            </div>
       
        </div>
        </div>
    </div>
</template>

<script>
import CardWithoutPoster from "./common/CardWithoutPoster.vue"
import CardWithPoster from "./common/CardWithPoster.vue"

export default {
    components:{
        CardWithoutPoster, CardWithPoster
    },
    props:["similar_list"],
    data:function(){
        return{
            grant:[ ]
        }
    },
    updated:function(){
        $(document).ready(function(){
         var masonry = new Macy({
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

        })
    }
}
</script>

<style>
.card{
    width:392px;
}
.cards{
    width: 1224px;
}
#sim_ttl{
    font-size: 20px;
    font-weight: bold;
    line-height: 1.6; 
    color: #1a2f53;
    font-size: 20px;
}

</style>
