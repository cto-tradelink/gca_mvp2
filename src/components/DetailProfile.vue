<template>
    <div>
        <table>
            <tr>
                <td rowspan="2">
                    내정보
                </td>
                <td>
                    <ul>
                        <li class="label">아이디 <span>{{id}}</span></li>
                        <li class="label">패스워드 <span> 변경하기 </span></li>
                    </ul>
                </td>
            </tr>
            <tr>                
                <td>
                    <ul>
                        <li class="label">이름 <span>{{name}}</span></li>
                        <li class="label">핸드폰 번호 <span> 010-7***-**** </span></li>
                        <li class="label">추가 이메일 <span> 추가하기</span></li>
                        <li class="label">수신동의 <span> 네 </span></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td rowspan="2">
                    sns 연동
                </td>
                <td>
                    <img alt="카카오톡 이미지"> kshradio@nate.com
                    <img alt="페이스북 이미지"> 추가하기 | <img alt="트위터 이미지"> 추가하기
                    
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            id:"kshradio@nate.com",
            name:"김은아",
        }
    }

}
</script>

<style>

</style>
