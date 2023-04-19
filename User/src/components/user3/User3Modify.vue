<template>
    <h4>user4 수정</h4>
    <form @submit.prevent="user3Modify">
        <table border="1">
            <tr>
                <td>아이디</td>
                <td>
                    <input type="text" v-model="user3.uid" readonly>
                </td>
            </tr>
            <tr>
                <td>이름</td>
                <td>
                    <input type="text" v-model="user3.name">
                </td>
            </tr>
            <tr>
                <td>연락처</td>
                <td>
                    <input type="text" v-model="user3.hp">
                </td>
            </tr>
            <tr>
                <td>나이</td>
                <td>
                    <input type="text" v-model="user3.age">
                </td>
            </tr>
            <tr>
                <td colspan="2" align="right">
                    <input type="submit" value="수정">
                </td>
            </tr>
        </table>
    </form>
</template>
<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
// router 설정에서 props: true 설정
const props = defineProps({
    uid : String,
    name : String,
    hp : String,
    age : Number,
});
const user3 = reactive({
    uid : props.uid,
    name : props.name,
    hp : props.hp,
    age : props.age,
});

const user3Modify = () => {
    alert("진입확인");
    axios
    .put("http://localhost:8089/Ch09/user3",user3)
    .then((response)=>{
        alert("수정완료!");
        router.push("/user3/user3list");
    })
    .catch((error)=>{
        alert("에러발생!")
    });
}
</script>
<style></style>