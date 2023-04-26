<template>
    <v-app>
      <v-app-bar>
        <v-spacer></v-spacer>
        <v-app-bar-title>약관</v-app-bar-title>
      </v-app-bar>
      <v-main>
        <v-container>
            <v-sheet max-width="800" class="mx-auto mt-16">
                <v-textarea label="이용약관" variant="outlined" hide-details="true" rows="10" v-model="state.data.terms"></v-textarea>
                <v-checkbox label="동의합니다" class="d-flex justify-end" v-model="state.isCheck1"></v-checkbox>
                <v-textarea label="개인정보취급방침" variant="outlined" hide-details="true" rows="10" v-model="state.data.privacy"></v-textarea>
                <v-checkbox label="동의합니다" class="d-flex justify-end" v-model="state.isCheck2"></v-checkbox>
            </v-sheet>
            <v-sheet max-width="800" class="mx-auto text-center">
                <v-btn @click="btnCancel">취소</v-btn>
                <v-btn class="ml-2" color="primary" @click="btnNext">다음</v-btn>
            </v-sheet>
        </v-container>
      </v-main>
      <v-footer app color="grey">copyright &copy;Voard v1.0</v-footer>
    </v-app>
  </template>
<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount, reactive } from "vue";
import axios from "axios";

const router = useRouter();

const state = reactive({
  data : {},
  isCheck1 : false,
  isCheck2 : false,
})

const btnCancel = () => {
    router.push("/user/login")
}

const btnNext = () => {
  if( state.isCheck1 && state.isCheck2 ){
    router.push("/user/register");
  }else{
    alert("동의 체크!")
  }
}

onBeforeMount(()=>{
  axios
    .get("http://localhost:8080/Voard/user/terms")
    .then((response)=>{
      console.log(response);
      state.data = response.data;
    })
    .catch((error)=>{
      console.log("에러발생..")
    })
})
</script>
  <style scoped></style>