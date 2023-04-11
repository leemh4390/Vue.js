<template>
    <h3>Ch06.Vuex 실습</h3>

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
    <hr>
    <Component1></Component1>
    <hr>
    <Component2></Component2>
    <hr>
    <Component3></Component3>
    <hr>


</template>

<script setup>
  import { useStore } from "vuex";
  import Component1 from "./components/Component1.vue";
  import Component2 from "./components/Component2.vue";
  import Component3 from "./components/Component3.vue";

  const store = useStore();
  const todos = store.getters.getTodos;

</script>

<style scoped></style>