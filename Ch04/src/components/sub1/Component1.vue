<template lang="">
    <h4>Component1</h4>
    <p> message : {{ message }}
        <button v-on:click="changeMessage">수정</button>
    </p>
    <p>
        count : {{ count }}
        <button @click="btnCountUp">증가</button>
    </p>
    <p>
        name : {{user.name}} <br/>
        age : {{user.age}}  <br/>
        addr : {{user.addr}} <br/>
    </p>

    <Component2 name="홍길동" age="21" addr="부산"></Component2>
    <Component3 v-on:myEnver="receiveUser"></Component3>

</template>
<script>
import Component2 from './Component2.vue';
import Component3 from './Component3.vue';

export default {
    components : {Component2, Component3},
    name : "Component1",
    // 기존 옵션 API 를 통합한 Composition API
    setup(){
        // 변수 선언(반응성 없음)
        let message = "Hello";
        let count = 0;
        let user = {
            name : "홍길동",
            age : 21,
            addr : "부산",
        }

        // 메서드 
        function changeMessage(){
            message = "Welcome";
        };

        const btnCountUp = function(){
            count++;
        };

        const receiveUser = (data) => {
            console.log("data name : "+ data.name);
            console.log("data age : " + data.age);
        }


        // setup API 마지막에는 항상 return
        return { 
            message, 
            count,
            user,
            changeMessage,
            btnCountUp,
            receiveUser,
        };
    },
    data (){

    },

}
</script>
<style scoped>
    
</style>