<template lang="">
    <h4>User2 목록</h4>
    <table border="#">
        <tr>
            <td>아이디</td>
            <td>이름</td>
            <td>연락처</td>
            <td>나이</td>
            <td>날짜</td>
            <td>관리</td>
        </tr>
        <tr v-for="user in user2s">
            <td>{{ user.uid }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.hp }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.rdate }}</td>
            <td>
                <a href="#" @click.prevent="modifyUser2(user)">수정</a>
                <a href="#">삭제</a>
            </td>
        </tr>
    </table>
</template>
<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

    const router = useRouter();
    const user2s = ref([]);

    const modifyUser2 = (user) => {
        router.push({name : "User2Modify", params : user});
    };

    onBeforeMount(()=> {
        console.log('진입 확인용1');
        axios
            .get("http://localhost:8089/Ch09/user2s")
            .then((response) => {
                user2s.value = response.data;
            })
            .catch((error)=> {
                console.log("에러발생1!");
            });
    });



</script>
<style scoped></style>