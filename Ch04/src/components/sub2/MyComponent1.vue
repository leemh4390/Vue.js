<template lang="">
    <h4>MyComponent1</h4>
    <p>
        message : {{ message }}
        <button @click="changeMessage">수정</button>
    </p>
    <p>
        count : {{ count }}
        <button @click=updateCount>증가</button>
    </p>
    <p>
        name : {{user.name}}
        age : {{user.age}}
        addr : {{user.addr}}
        <button @click="changeUser">수정</button>
    </p>
</template>
<script>
import { ref , reactive } from "vue";
export default {
    name : "MyComponent1",
    setup() {

        // 변수 선언 (반응성을 갖는 상태값)
        // ref() -> 기본 타입을 반응형으로 처리하는 API
        // reactive() -> 참조타입을 반응형으로 처리하는 API(생략가능)
        const message = ref("Hello");
        const count = ref(0);
        const user = reactive({
            name : "홍길동",
            age : 0,
            addr : "부산",
        });

        // 함수 정의

        function changeMessage(){
            // ref 반응형 변수의 값 참조
            message.value = "권지영";
        };

        function updateCount(){
            count.value++;
        };

        function changeUser(){
            user.name = "김유진",
            user.age = 20,
            user.addr = "대전"
        };
        
        return {
            message,
            count,
            user,
            changeMessage,
            updateCount,
            changeUser,
        };
    },
}
</script>
<style lang="">
    
</style>