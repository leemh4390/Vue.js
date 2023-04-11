<template lang="">
    <h4>Component3</h4>
    <p>Vuex count : {{ store.state.count }}</p>
    <button @click="btnInit">초기화</button>
</template>
<script setup>
    import { useStore } from "vuex";

    const store = useStore();
    const message = store.getters.getMessage;
    const todos = store.getters.getTodos;
    //const count = store.getters.getCount;

    const btnInit = function(){
        store.dispatch("initCount");
    }


</script>
<style scoped></style>