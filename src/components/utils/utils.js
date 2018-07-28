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

