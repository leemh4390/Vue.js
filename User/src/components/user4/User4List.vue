<template >
    <h4>user4 목록</h4>
    <table border="1">
        <tr>
            <td>seq</td>
            <td>이름</td>
            <td>성별</td>
            <td>나이</td>
            <td>주소</td>
            <td>아이디</td>
            <td>관리</td>
        </tr>
        <tr v-for="user in user4">
            <td>{{ user.seq }}</td>
            <td>{{ user.name }}</td>
            <td v-if="user.gender == 1">남자</td>
            <td v-else>여자</td>
            <td>{{ user.age }}</td>
            <td>{{ user.addr }}</td>
            <td>{{ user.uid }}</td>
            <td>
                <a href="#" @click.prevent="modiUser4(user)">수정</a>
                <a href="#" @click.prevent="deleteUser4(user)">삭제</a>
            </td>
        </tr>
    </table>
</template>
<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user4 = ref([]);

const modiUser4 = (user) => {
    router.push({name: "user4modi", params:user});
}

const deleteUser4 = (user) => {
    const result = confirm("삭제?");

    if(result == true){
        axios
        .delete(`http://localhost:8089/Ch09/user4/${user.uid}`)
        .then((response)=>{
            user4.value = response.data;
        })
        .catch((error)=>{
            alert(error + "오류발생..!");
        });
    }else{
        return;
    }

}

onBeforeMount(()=>{
    console.log("진입1..")
    axios
    .get("http://localhost:8089/Ch09/user4s")
    .then((response)=>{
        user4.value = response.data;
    })
    .catch((error)=>{
        alert("에러 발생..!");
    });
})
    



</script>
<style scoped></style>