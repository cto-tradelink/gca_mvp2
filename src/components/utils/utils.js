export function test(){
    console.log("dddd")
}

// 유저  유틸리티 함수, 클래스


export class HeartAdd{
    

    check_user() {
        
        return true
    }
    gettemp(){
        return this.temp;
    }
    toggle_heart(){
        console.log("하트를 토글합니다.")
    }
    action_heart(){
        console.log("test!!!")
        if(this.check_user()){
            //유저가 참이라면
            this.toggle_heart();
        }else{
            // 유저가 거짓이라면
            alert("관심담기가 안되는 계정입니다.")
        }
    }   
} 

// 태시 태그 문자열 만들어주는 함수
export function make_hash_string(e){
    e= e.target
    $(e).val("#"+$(e).val().slice(1,$(e).val().length).replace("##","#").replace(/\s/g,"#"));
    $(e).val($(e).val().replace("##","#"));
}







//매니저, 기관 관리자 유틸리티 함수


// 파이그래프 만들기
export function make_pie_graph(target, arr,arr2){
    $(target).empty()
    var group = d3.select(target)
                  .attrs({ width: 300, height: 300 })
                  .append('g')
                  .attr('transform', 'translate(100, 100)');
    var data = arr;
    var pieSegments = d3.pie()(data);
    var arcGenerator = d3.arc()
                         .innerRadius(70)
                         .outerRadius(100)
                         .startAngle(function (d) { return d.startAngle; })
                         .endAngle(function (d) { return d.endAngle; });
    var colors = d3.scaleOrdinal(d3.schemeCategory10);
    group.selectAll('path')
         .data(pieSegments)
         .enter()
         .append('path')
         .attrs({ d: arcGenerator, stroke: 'white',
                  'stroke-width': 0, fill: function (d, i) {
                      return colors(i);
                  },
         });
         $(target).parent().parent().find(".column").find("ul").empty()
         for(var k=0; k < arr2.length;k++){
             var $seg =  "<li><span style='background-color:"+colors(k)+"'></span><span>"+arr2[k]+":"+arr[k]+"</span></li>"
              $(target).parent().parent().find(".column").find("ul").append($seg)
         }
}