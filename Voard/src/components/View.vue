<template>
    <v-app>
        <v-app-bar>
            <v-spacer></v-spacer>
            <v-app-bar-title>게시글 보기</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container class="mt-7">
                <v-sheet max-width="800" class="mx-auto">
                    <v-text-field 
                        variant="outlined" 
                        hide-details="true" 
                        density="compact"
                        label="제목"
                        class="mb-6"
                        >           
                        제목입니다.             
                    </v-text-field>                
                    <v-textarea 
                        label="내용" 
                        variant="outlined" 
                        hide-details="true" 
                        rows="10"                        
                        v-model="content"
                        readonly="readonly"
                        >
                    </v-textarea>                    
                </v-sheet>
                <v-sheet max-width="800" class="mx-auto text-right pt-4">
                    <v-btn class="mr-2">삭제</v-btn>
                    <v-btn class="mr-2">수정</v-btn>
                    <v-btn color="primary">목록</v-btn>
                </v-sheet>
                <v-sheet max-width="800" class="mx-auto">
                    <v-row>
                        <v-col cols="6">
                            댓글작성
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10">
                            <v-textarea label="댓글내용" variant="outlined" hide-details="true" rows="10"></v-textarea>
                        </v-col>
                        <v-col cols="2">
                            <v-btn>댓글등록</v-btn>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-container>
        </v-main>
        <v-footer app color="grey">copyright &copy;Voard v1.0</v-footer>
    </v-app>
</template>
<script setup>
    import { ref } from "vue";

    const content = ref("내용입니다.");

    function processData(){
        console.log(content.value);
    }
</script>
<style></style>