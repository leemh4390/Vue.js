<template>
  <v-app>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-app-bar-title>회원가입</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="border mx-auto mt-16">
          <v-card class="mb-2">
            <v-card-item>
              <v-card-title>사용자 이용정보 입력</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6" class="">
                    <v-text-field
                      label="아이디 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.uid"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6" class="">
                    <v-btn color="success" @click="btnCheckUid">중복확인</v-btn>
                    <v-chip
                      class="ma-2"
                      color="red"
                      text-color="white"
                      v-if="isAlreadyUid"
                    >
                      이미 사용중인 아이디입니다.
                    </v-chip>

                    <v-chip
                      class="ma-2"
                      color="green"
                      text-color="white"
                      v-if="isReadyUid"
                    >
                      사용 가능한 아이디입니다.
                    </v-chip>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="비밀번호 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.pass1"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="비밀번호 확인"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.pass2"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-item class="mb-2">
              <v-card-title>개인정보 입력</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="이름 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.name"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" class="">
                    <v-text-field
                      label="닉네임 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.nick"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-btn color="success">중복확인</v-btn>
                    <v-chip class="ma-2" color="red" text-color="white">
                      Red Chip
                    </v-chip>

                    <v-chip class="ma-2" color="green" text-color="white">
                      Green Chip
                    </v-chip>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="이메일 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.email"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="휴대폰 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.hp"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      label="주소 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.zip"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-btn color="primary" block>주소 검색</v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      label="우편번호 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.addr1"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      label="상세주소 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.addr2"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-sheet>
        <v-sheet max-width="800" class="border mx-auto mt-16 text-center">
          <v-btn @click="btnCancel">취소</v-btn>
          <v-btn class="" color="primary" @click="btnRegister">등록</v-btn>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app color="grey">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import axios from "axios";

const router = useRouter();

const user = reactive({
  uid: null,
  pass1: null,
  pass2: null,
  name: null,
  nick: null,
  email: null,
  hp: null,
  zip: null,
  addr1: null,
  addr2: null,
});

const btnCancel = () => {
  router.push("/user/login");
};

const isAlreadyUid = ref(false);
const isReadyUid = ref(false);
const loading = ref(false);

const btnCheckUid = () => {
  loading.value = true;

  axios
    .get("http://localhost:8080/Voard/user/countUid", {
      params: { uid: user.uid },
    })
    .then((response) => {
      setTimeout(() => {
        loading.value = false;

        if (response.data > 0) {
          isAlreadyUid.value = true;
          isReadyUid.value = false;
        } else {
          isAlreadyUid.value = false;
          isReadyUid.value = true;
        }
      }, 500);
    })
    .catch((error) => {});
};

const btnRegister = () => {
  axios
    .post("http://localhost:8080/Voard/user/register", user)
    .then((response) => {
      console.log(response);
      alert("등록완료!");
      router.push("/list");
    })
    .catch((error) => {
      console.log(error);
      alert("등록실패!");
    });
};
</script>
<style scoped></style>
