<template lang="">
    <h4>Component2</h4>
    <p>
        name : {{props.name}}
        age : {{props.age}}
        addr : {{props.addr}}
    </p>

</template>
<script>
export default {
    name : "Component2",
    props : {
        name : String,
        age : Number,
        addr : String,
    },
    setup(props){
        return {
            props,
        };
    },

}
</script>
<style scoped>
    
</style>