<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-title>글목록</v-app-bar-title>
            <p>
                OOO님 반갑습니다.
                <v-btn>로그아웃</v-btn>
            </p>
        </v-app-bar>
        <v-main>
            <v-container>
                <v-sheet max-width="800" class="mx-auto mt-10">
                    <v-table>
                        <thead>
                        <tr>
                            <th class="text-center">번호</th>
                            <th class="text-center">제목</th>
                            <th class="text-center">글쓴이</th>
                            <th class="text-center">조회수</th>
                            <th class="text-center">등록일</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="text-center">1</td>
                            <td class="text-center" @click="btnView"><a href="#" style="text-decoration: none;">제목</a></td>
                            <td class="text-center">글쓴이</td>
                            <td class="text-center">1</td>
                            <td class="text-center">2023/04/25</td>
                        </tr>
                        <tr>
                            <td class="text-center">1</td>
                            <td class="text-center" @click="btnView">제목</td>
                            <td class="text-center">글쓴이</td>
                            <td class="text-center">1</td>
                            <td class="text-center">2023/04/25</td>
                        </tr>
                        <tr>
                            <td class="text-center">1</td>
                            <td class="text-center" @click="btnView">제목</td>
                            <td class="text-center">글쓴이</td>
                            <td class="text-center">1</td>
                            <td class="text-center">2023/04/25</td>
                        </tr>
                        </tbody>
                    </v-table>
                    <v-sheet class="text-right pt-6">
                        <v-btn color="primary" @click="btnWrite">글쓰기</v-btn>
                    </v-sheet>
                    <v-pagination
                        :length="5"
                        :total-visible="5"
                        rounded="circle"
                    ></v-pagination>
                </v-sheet>
            </v-container>
        </v-main>
        <v-footer></v-footer>
    </v-app>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const btnView = () => {
  router.push("/view");
};

const btnWrite = () => {
    router.push("/write");
}

</script>
<style>
    a:hover {
        text-decoration: underline;
    }
</style>