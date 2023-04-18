<template lang="">
    <h4>user2 등록</h4>
    <form @submit.prevent="user2Register">
        <table border="#">
            <tr>
                <td>아이디</td>
                <td><input type="text" v-model="user.uid"></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="password" v-model="user.pass"></td>
            </tr>
            <tr>
                <td>이름</td>
                <td><input type="text" v-model="user.name"></td>
            </tr>
            <tr>
                <td>연락처</td>
                <td><input type="text" v-model="user.hp"></td>
            </tr>
            <tr>
                <td>나이</td>
                <td><input type="text" v-model="user.age"></td>
            </tr>
            <tr>
                <td colspan="2" align="right"><input type="submit" value="등록"></td>
            </tr>
        </table>
    </form>
</template>
<script setup>
import axios from "axios";
import { reactive }  from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = reactive({
    uid : "",
    pass : "",
    hp : "",
    age : 0,
});

const user2Register = () => {
    axios
    .post("http://localhost:8089/Ch09/user2", user)
    .then((response)=>{
        alert("등록완료");
        router.push("/user2/user2list");
    })
    .catch((error)=>{
        alert("에러!!");
    });
};

</script>
<style scoped></style>