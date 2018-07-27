<template>
    <div >
        <span>마감직전 공고</span>
        
        <div v-for="grant in due_grant">
            <img src="http://oyster.ignimgs.com/wordpress/stg.ign.com/2018/04/dpposter-720x1050.jpg" style="width:100px;">
            <div>
                <span>D-7</span>
                <span>{{grant.title}}</span>
                <span>{{grant.sub_title}}</span>
            </div>
        </div>
        <span>더보기</span>


        <span>트레이드 링크에게 추천공고</span>        
        <div v-for="grant in recommend_grant">
            <img src="http://oyster.ignimgs.com/wordpress/stg.ign.com/2018/04/dpposter-720x1050.jpg" style="width:100px;">
            <div>
                <span>D-7</span>
                <span>{{grant.title}}</span>
                <span>{{grant.sub_title}}</span>
            </div>
        </div>
        <span>더보기</span>

        
        <span>GCA의 추천공고</span>        
        <div v-for="grant in gca_recommend_grant">
            <img src="http://oyster.ignimgs.com/wordpress/stg.ign.com/2018/04/dpposter-720x1050.jpg" style="width:100px;">
            <div>
                <span>D-7</span>
                <span>{{grant.title}}</span>
                <span>{{grant.sub_title}}</span>
            </div>
        </div>
        <span>더보기</span>

    </div>
</template>

<script>
export default {
    data:function(){
        return{
            due_grant:[
                {title:"스타트업실무 및 역량강화교육", sub_title:"G-START B 심화과정"},
                {title:"스타트업실무 및 역량강화교육", sub_title:"G-START B 심화과정"}
            ],
            recommend_grant:[
                    {title:"스타트업실무 및 역량강화교육", sub_title:"G-START B 심화과정"},
            ],
            gca_recommend_grant:[
                  {title:"스타트업실무 및 역량강화교육", sub_title:"G-START B 심화과정"},
            ]
        }
    }
}
</script>

<style>

</style>
