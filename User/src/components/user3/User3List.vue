<template>
    <h4>user3 목록</h4>
    <table border="1">
        <tr>
            <td>아이디</td>
            <td>이름</td>
            <td>연락처</td>
            <td>나이</td>
            <td>관리</td>
        </tr>
        <tr v-for="user3 in user3s">
            <td>{{ user3.uid }}</td>
            <td>{{ user3.name }}</td>
            <td>{{ user3.hp }}</td>
            <td>{{ user3.age }}</td>
            <td>
                <a href="#" @click.prevent="modiUser3(user3)">수정</a>
                <a href="#" @click.prevent="deleteUser3(user3)">삭제</a>
            </td>
        </tr>
    </table>
</template>
<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user3s = ref([]);

const modiUser3 = (user3) => {
    router.push({name:"User3Modi", params:user3});
}

const deleteUser3 = (user) => {
    const result = confirm("삭제?");

    if(result == false){
        return;
    }else{
        axios.delete(`http://localhost:8089/Ch09/user3/${user.uid}`)
        .then((response)=>{
            alert("삭제완료");
            user3s.value = response.data;
        })
        .catch((error)=>{
            alert("삭제실패");
        });
    }
}

onBeforeMount(()=>{
    console.log("mount 확인");
    axios
    .get("http://localhost:8089/Ch09/user3s")
    .then((response)=>{
        user3s.value = response.data;
    })
    .catch((error)=>{
        console.log("에러발생..!");
    });
})


</script>
<style scoped></style>