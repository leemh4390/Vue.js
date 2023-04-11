<template lang="">
    <h4>Component2</h4>
    <p>Vuex count : {{ store.state.count }}</p>
    <button @click="btnDecrement">증가</button>
</template>
<script setup>
    import { useStore } from "vuex";

    const store = useStore();
    const message = store.getters.getMessage;
    const todos = store.getters.getTodos;
    //const count = store.getters.getCount;

    const btnDecrement = function(){
        store.dispatch("decrement");
    };

</script>
<style scoped></style>