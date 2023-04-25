<template>
    <v-app>
       <v-app-bar>
            <v-spacer></v-spacer>
            <v-app-bar-title>게시글 작성</v-app-bar-title>
       </v-app-bar> 
       <v-main>
            <v-container>
                <v-sheet max-width="800" class="mx-auto mt-5">
                    <v-row>
                        <v-col cols="8" border>
                            <v-text-field 
                                variant="outlined" 
                                label="제목"
                                hide-details="true" 
                                density="compact"
                                >           
                                제목입니다.             
                            </v-text-field> 
                        </v-col>
                        <v-col cols="4" border></v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-select
                                class=""
                                label="카테고리"
                                :items="['한식', '일식', '중식', '양식', '잡식']"
                                variant="solo"
                            ></v-select>
                        </v-col>
                        <v-col cols="8"></v-col>
                    </v-row>
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
                    <v-btn class="mr-2">취소</v-btn>
                    <v-btn color="success">등록</v-btn>
                </v-sheet>
            </v-container>
       </v-main>
       <v-footer app color="grey">copyright &copy;Voard v1.0</v-footer>
    </v-app>
</template>
<script setup></script>
<style></style>