<template lang="">
    <h4>MyComponent1</h4>
    <p>
        이름 : {{name}} ,
        나이 : {{age}},
        주소 : {{addr}}
    </p>
</template>
<script>
export default {
    name : "MyComponent1",
    // 컴포넌트에서 사용할 data(상태값) 선언하는 API
    data() {
        return {
            name : "홍길동",
            age : 21,
            addr : "부산",
        };
    },
}
</script>
<style lang="">
    
</style>