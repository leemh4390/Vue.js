<template>
  <h3>Ch05.Router 실습</h3>

  <h4>Router 기본</h4>
  <router-link to="/hello">Hello</router-link> /
  <router-link to="/welcome">Welcome</router-link> /
  <router-link to="/greeting">Greeting</router-link>
  <hr>

  <h4>Nested Router</h4>
  <router-link to="/parent">Parent</router-link>

  <hr>

  <h4>Named View</h4>
  <router-link to="/main1">Main1</router-link> <br/>
  <router-link to="/main2">Main2</router-link> <br/>
  <router-link to="/main3">Main3</router-link>
  <hr>

  <h4> router 데이터 전송</h4>
  <router-link :to="{
    name : 'Component1', 
    query: {name:'홍길동', age:21, addr:'부산'}
  }">Componet1</router-link><br>

  <router-link :to="{
    name: 'Component2',
    params: {name:'홍길동', age:21, addr:'부산'}
  }">Componet2</router-link><br>


  <router-link to="/form1">Form1</router-link>

  <h4>router 컴포넌트 출력</h4>
  <router-view name="header"></router-view>
  <router-view></router-view>
  <router-view name="footer"></router-view>



</template>

<script setup>
</script>

<style scoped>
</style>
