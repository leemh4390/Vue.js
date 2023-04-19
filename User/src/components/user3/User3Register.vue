<template>
    <h4>user3 등록</h4>
    <form @submit.prevent="user3Register">
        <table border="1">
            <tr>
                <td>아이디</td>
                <td><input type="text" v-model="user3.uid"></td>
            </tr>
            <tr>
                <td>이름</td>
                <td><input type="text" v-model="user3.name"></td>
            </tr>
            <tr>
                <td>연락처</td>
                <td><input type="text" v-model="user3.hp"></td>
            </tr>
            <tr>
                <td>나이</td>
                <td><input type="number" v-model="user3.age"></td>
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
import { reactive }  from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user3 = reactive({
    uid : "",
    name : "",
    hp : "",
    age : 0,
});

const user3Register = () => {
    alert("진입확인");
    axios
    .post("http://localhost:8089/Ch09/user3", user3)
    .then((response)=>{
        alert("등록완료!");
        router.push("/user3/user3list");
    })
    .catch((error)=>{
        alert("등록실패");
    });
    
};

</script>
<style scoped></style>