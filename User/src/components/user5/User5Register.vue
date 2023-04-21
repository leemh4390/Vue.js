<template>
    <h4>User5 등록</h4>
    <form @submit.prevent="user5Register">
        <table border="1">
            <tr>
                <td>이름</td>
                <td>
                    <input type="text" v-model="user5.name">
                </td>
            </tr>
            <tr>
                <td>성별</td>
                <td>
                    <input type="radio" name="gender" v-model="user5.gender" value="1" checked="checked">남자
                    <input type="radio" name="gender" v-model="user5.gender" value="2">여자
                </td>
            </tr>
            <tr>
                <td>나이</td>
                <td>
                    <input type="number" v-model="user5.age">
                </td>
            </tr>
            <tr>
                <td>주소</td>
                <td>
                    <input type="text" v-model="user5.addr">
                </td>
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
const user5 = reactive({
    name : "",
    gender : 1,
    age : 0,
    addr : "",
});

const user5Register = () => {
    axios
    .post("http://localhost:8089/Ch09/user5", user5)
    .then((response)=>{
        router.push("/user5/user5List");
    })
    .catch((error)=>{
        console.log("에러 발생...1");
    });
}

</script>
<style scoped></style>