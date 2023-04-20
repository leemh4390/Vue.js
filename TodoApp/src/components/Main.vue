<template>
    <main>
      <ul></ul>
    </main>
</template>
<script>
import Item from "./Item.vue";
  export default {
    name : "Main",
    components : {
      Item,
    },
    setup (){
      return {};
    }
  };
</script>
<style>
main {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}

main > ul {
  width: 100%;
  height: auto;
  padding-left: 0;
  box-sizing: border-box;
}

main > ul > li {
  width: 100%;
  height: 40px;
  line-height: 250%;
  list-style: none;
  border: 0px solid orange;
  padding: 0 6px;
  margin: 6px 0px;
  box-sizing: border-box;
  background-color: white;
}

main button {
  float: right;
  width: 40px;
  height: 40px;
  border: none;
  background-color: #e9e9e9;
  color: #de4343;
}

</style>