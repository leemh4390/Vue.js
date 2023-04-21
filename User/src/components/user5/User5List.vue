<template>
    <h4>User5 등록</h4>
        <table border="1">
            <tr>
                <td>이름</td>
                <td>성별</td>
                <td>나이</td>
                <td>주소</td>
                <td>관리</td>
            </tr>
            <tr v-for="user5 in user5s">
                <td>{{ user5.name }}</td>
                <td v-if="user5.gender == 1">남자</td>
                <td v-else-if="user5.gender == ''">정보없음</td>
                <td v-else>여자</td>
                <td>{{ user5.age }}</td>
                <td>{{ user5.addr }}</td>
                <td>
                    <a href="#" @click.prevent="user5Modify(user5)">수정</a>
                    <a href="#" @click.prevent="user5Delete(user5)">삭제</a>
                </td>
            </tr>
        </table>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";

const router = useRouter();
const user5s = ref([]);


const user5Modify = (user5) => {
    router.push({ name : "user5Modify123", params : user5});
}
    


const user5Delete = (user5) => {
    const result = confirm("삭제?");
    
    if(result){
        axios
        .delete(`http://localhost:8089/Ch09/user5/${user5.name}`)
        .then((response)=>{
            user5s.value = response.data;
        })
        .catch((error)=>{
            alert("삭제 에러발생..!");
        });
    }
}

    

onBeforeMount (() => {
    console.log("로그 확인...");
    axios
    .get("http://localhost:8089/Ch09/user5s")
    .then((response)=>{
        user5s.value = response.data;
    })
    .catch((error)=>{
        console.log("list 출력 에러...");
    });
})

</script>
<style scoped></style>