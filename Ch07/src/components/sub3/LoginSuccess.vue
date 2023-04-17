<template lang="">
    <h4>로그인 성공</h4>
        <p>
            {{ user.nick}} 님 반갑습니다.
        </p>
        <a href="#" @click.prevent="logout">로그아웃</a>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import {computed } from "vue";

    const router = useRouter();
    const store = useStore();
    const user = computed(()=>{
        return store.getters.getUser;
    });


    const logout = () => {
        localStorage.removeItem("accessToken");
        router.push("/jwt/login");
    };
</script>
<style scoped></style>