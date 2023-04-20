<template>
    <h4>user4 수정</h4>
    <form @submit.prevent="user4Modify">
        <table border="1">
            <tr>
                <td>이름</td>
                <td><input type="text" v-model="user4.name"></td>
            </tr>
            <tr>
                <td>성별</td>
                <td><input type="text" v-model="user4.gender"></td>
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
                <td><input type="text" v-model="user4.uid" readonly></td>
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
    seq : String,
    name : String,
    gender : String,
    age : String,
    addr : String,
    uid : String,
});

const user4 = reactive({
    seq : props.seq,
    name : props.name,
    gender : props.gender,
    age : props.age,
    addr : props.addr,
    uid : props.uid,
});

const user4Modify = () =>{
    axios
    .put("http://localhost:8089/Ch09/user4", user4)
    .then((response)=>{
        alert("수정완료1111!");
        router.push("/user4/user4List");    
    })
    .catch((error)=>{
        alert("에러발생111..")
    });
    
};

</script>
<style></style>