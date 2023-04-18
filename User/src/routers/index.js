import { createRouter, createWebHistory  } from "vue-router";
import User1Main from "../components/user1/User1Main.vue";
// 자식 컴포넌트
import User1List from "../components/user1/User1List.vue";
import User1Register from "../components/user1/User1Register.vue";
import User1Modify from "../components/user1/User1Modify.vue";

import User2Main from "../components/user2/User2Main.vue";
// 자식 컴포넌트
import User2List from "../components/user2/User2List.vue";
import User2Register from "../components/user2/User2Register.vue";
import User2Modify from "../components/user2/User2Modify.vue";


import User3Main from "../components/user3/User3Main.vue";
import User4Main from "../components/user4/User4Main.vue";
import User5Main from "../components/user5/User5Main.vue";
import User6Main from "../components/user6/User6Main.vue";
import User7Main from "../components/user7/User7Main.vue";


const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/user1", 
            name: "User1Main", 
            component : User1Main,
            children : [
                {path : "list", component : User1List},
                {path : "register", component : User1Register},
                {path : "modify", name: "User1Modify", component : User1Modify, props:true},
            ],
        },
        {
            path : "/user2", 
            name: "user2", 
            component : User2Main,
            children : [
                {path : "user2list", component : User2List},
                {path : "user2register", component : User2Register},
                {path : "user2modify", component : User2Modify, props:true},
            ]
        },
        {path : "/user3", name: "user3", component : User3Main},
        {path : "/user4", name: "user4", component : User4Main},
        {path : "/user5", name: "user5", component : User5Main},
        {path : "/user6", name: "user6", component : User6Main},
        {path : "/user7", name: "user7", component : User7Main},
    ],
});

export default router;