<template lang="">
    <h4>DiComponent</h4>
    <p>
        이름 : {{ user.name }}<br/>
        나이 : {{ user.age }}<br/>
        주소 : {{ user.addr }}
    </p>

    <DiComponent2></DiComponent2>
</template>
<script setup>
import { inject } from "vue";
import DiComponent2 from "./DiComponent2.vue";

// 상위 컴포넌트에서 procide 한 데이터를 주입
const user = inject("user");
    
</script>
<style scoped></style>