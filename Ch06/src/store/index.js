/**
 * Vuex 저장소 생성
 * 
 */

import { createStore } from "vuex";

export const store = createStore({

    // state : store 에서 관리하는 상태를 정의
    state : {
        message : "Hello Vuex",
        count : 0,
        todos : [
            { no : 1, text:'코딩하기', done : "실패"},
            { no : 2, text:'공부하기', done : false},
            { no : 3, text:'운동하기', done : true},
            { no : 4, text:'청소하기', done : true},
            { no : 5, text:'게임하기', done : true},
        ]
    },

    // mutation : store 의 상태값을 변경하는 메서드
    mutations : {
        INCREMENT : function(state){
            state.count++;
        },

        DECREMENT : function(state){
            state.count--;
        },

        INITCOUNT : function(state){
            state.count = 0;
        }
    },

    // actions : 비동기 방식으로 mutations 메서드를 실행하는 메서드 정의
    actions : {
        increment : function(context){
            context.commit("INCREMENT");
        },
        decrement : function(context){
            context.commit("DECREMENT");
        },
        initCount : function(context){
            context.commit("INITCOUNT");
        }
    },

    // getters : 외부에 상태값을 전달하는 메서드 정의
    getters : {

        getMessage : function(state){
            return state.message;
        },

        getTodos : function(state){
            return state.todos;
        },

        getCount : function(state){
            return state.count;
        }
    },
});
