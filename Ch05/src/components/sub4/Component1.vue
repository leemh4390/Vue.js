<template lang="">
    <h4>Component1</h4>
    <p>
        query: {{ $route.quert }}
        name : {{ $route.query.name }}
        age : {{ $route.query.age}}
        addr : {{ $route.query.addr}}
    </p>
</template>
<script setup>
</script>
<style scoped></style>