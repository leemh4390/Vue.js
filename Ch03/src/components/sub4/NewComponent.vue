<template lang="">
    <h4>NewComponent</h4>
    <p>
        카운터 : {{count}}
        <button @click="btnCountUp">증가</button>
    </p>
    
</template>
<script>
export default {
    name : "NewComponent",
    data(){
        return {
            count : 0,
        };
    },
    methods: {
        btnCountUp : function(){
            this.count++;
        },
    },
    // 컴포넌트 라이프사이클 함수(Hook)
    beforeCreate : function(){
        console.log('before Create....')
    },
    created : function(){
        console.log('before Create....')
    },
    beforeMount : function(){
        console.log('before Create....')
    },
    mounted : function(){
        console.log('before Create....')
    },
    beforeUpdate : function() {
        console.log('before Create....')
    },
    updated : function(){
        console.log('before Create....')
    },
    beforeUnmount : function(){
        console.log('before Create....')
    },
    unmounted : function() {
        console.log('before Create....')
    },
    
}
</script>
<style scoped>
    
</style>