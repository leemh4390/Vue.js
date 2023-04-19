<template>
    <h4>user2 수정</h4>
    <form @submit.prevent="user2Modify">
        <table border="#">
            <tr>
                <td>아이디</td>
                <td><input type="text" v-model="user2.uid" readonly></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="password" v-model="user2.pass"></td>
            </tr>
            <tr>
                <td>이름</td>
                <td><input type="text" v-model="user2.name"></td>
            </tr>
            <tr>
                <td>연락처</td>
                <td><input type="text" v-model="user2.hp"></td>
            </tr>
            <tr>
                <td>나이</td>
                <td><input type="text" v-model="user2.age"></td>
            </tr>
            <tr>
                <td colspan="2" align="right"><input type="submit" value="수정"></td>
            </tr>
        </table>
    </form>
</template>
<script setup>
import axios from "axios";
import { reactive }  from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
    uid : String,
    pass : String,
    name : String,
    hp : String,
    age : Number,
});

const user2 = reactive({
    uid : props.uid,
    pass : props.pass,
    name : props.name,
    hp : props.hp,
    age : props.age,
});

const user2Modify = () => {
    
    axios.
        put("http://localhost:8089/Ch09/user2", user2)
        .then((response)=>{
            alert("수정완료!");
            router.push("/user2/list");
        })
        .catch((error)=>{
            alert("캔슬 실패");
            console.log("에러 발생");
        });
}



</script>
<style scoped></style>