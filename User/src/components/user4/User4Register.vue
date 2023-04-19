<template>
    <h4>user4 등록</h4>
    <form @submit.prevent="user4Register">
        <table border="1">
            <tr>
                <td>이름</td>
                <td><input type="text" v-model="user4.uid"></td>
            </tr>
            <tr>
                <td>성별</td>
                <td>
                    <input type="radio" name="gender" value="1" checked="checked">남자
                    <input type="radio" name="gender" value="2">여자
                </td>
            </tr>
            <tr>
                <td>나이</td>
                <td><input type="text" v-model="user4.age"></td>
            </tr>
            <tr>
                <td>주소</td>
                <td><input type="text" v-model="user4.addr"></td>
            </tr>
            <tr>
                <td>아이디</td>
                <td><input type="text" v-model="user4.uid"></td>
            </tr>
            <tr>
                <td colspan="2" align="right">
                    <input type="submit" value="등록하기">
                </td>
            </tr>
        </table>
    </form>
</template>
<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user4 = reactive({
    name : "",
    age : 0,
    addr : "",
    uid : "",
});

const user4Register = () => {
    alert("등록 진입...1");
    axios.post()
    .then((response)=>{
        alert("등록 완료...");
        router.push("http://localhost:8089/Ch09/user4", user4)
    })
    .catch((error)=>{
        alert("등록 실패..")
    });
} 

</script>
<style></style>