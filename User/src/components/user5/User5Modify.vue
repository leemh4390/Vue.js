<template>
    <h4>User5 수정</h4>
    <form @submit.prevent="user5Modify">
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
                    <input type="input" name="gender" v-model="user5.gender">
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
                    <input type="submit" value="수정하기">
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

const props = defineProps({
    name : String,
    gender : Number,
    age : Number,
    addr : String,
});

const user5 = reactive({
    name : props.name,
    gender : props.gender,
    age : props.age,
    addr : props.addr,
});

const user5Modify = () => {
    axios
    .put("http://localhost:8089/Ch09/user5", user5)
    .then((response)=>{
        alert("수정완료");
        router.push("/user5/user5List")
    })
    .catch((error)=>{
        console.log(" 에러 발생...")
    });
}


</script>
<style scoped></style>