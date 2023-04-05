<template lang="">
    <h4>MyComponent2 - methods API</h4>
    <button v-on:click="btn1Click">button1</button>
    <button v-on:click="btn2Click">button2</button>
    <button @click="btn3Click">button3</button>
</template>
<script>
export default {
    name : "MyComponent2",
    methods: {
        btn1Click (){
            alert("button1 Click!!");
        },
        btn2Click: function (){
            alert("button2 Click");
        },
        btn3Click: () => {
            alert("button3 Click!!");
        },
    },
}
</script>
<style lang="">
    
</style>