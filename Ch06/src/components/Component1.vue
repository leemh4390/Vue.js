<template lang="">
    <h4>Component1</h4>
    <p>Vuex message : {{  store.getters.getMessage }}</p>
    <table border="1">
      <tr>
        <td>번호</td>
        <td>내용</td>
        <td>완료</td>
      </tr>
      <tr v-for="todo in todos">
        <td>{{ todo.no }}</td>
        <td>{{ todo.text }}</td>
        <td v-if="todo.done == false">실패</td>
        <td v-if="todo.done == true">성공</td>
        <td v-if="todo.done == '실패'">테스트</td>
      </tr>
    </table>
    <p>Vuex count : {{ store.state.count }}</p>
    <button @click="btnIncrement">증가</button>
</template>
<script setup>
    import { useStore } from "vuex";


    const store = useStore();
    const message = store.getters.getMessage;
    const todos = store.getters.getTodos;
    //const count = store.getters.getCount;

    const btnIncrement = function (){
        // store action 호출
        store.dispatch("increment");
    };

</script>
<style scoped></style>