<template>
  <h3>Hello Directive</h3>
  <h4>1)v-text</h4>
    <p v-text="tit1"></p>
    <p>{{ tit2 }}</p>
  <hr/>
  <h4>2)v-show</h4>
    <p v-show="result1">show Directive1</p>
    <p v-show="result2">show Directive2</p>
  <hr/>
  <h4>3)v-if</h4>
    <p v-if="result1">if Directive1</p>
    <p v-if="result2">if Directive2</p>
    <p v-else>else Directive</p>
    <p v-if="score >= 90">A입니다.</p>
    <p v-else-if="score >= 80">B입니다.</p>
    <p v-else-if="score >= 70">C입니다.</p>
    <p v-else-if="score >= 60">D입니다.</p>
    <p v-else="score >= 50">F입니다.</p>

    <p v-if="tit3">{{ tit3 }}</p>
    <p v-else>tit3 emplty...</p>

  <hr/>
  <h4>4)v-for</h4>
    <ul>
      <li v-for="i in 3">i : {{ i }}</li>
    </ul>
    <ul>
      <li v-for="i in cities">{{ i }}</li>
    </ul>
    <table border="#">
      <tr>
        <td>아이디</td>
        <td>이름</td>
        <td>나이</td>
      </tr>
      <tr v-for="person in persons">
        <td>{{ person.uid }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
      </tr>
    </table>
  <hr/>
  <h4>5)v-on</h4>
    <h4>click 예제</h4>
      <button v-on:click="handler1">버튼1</button>
      <button v-on:click="handler2(30)">버튼2</button>
      <button v-on:click="handler3">버튼3</button>
    <h4>count 예제 </h4>
      <p>{{ count }}</p>
      <button v-on:click="counterHandler">카운트</button>
    <h4>change 예제 </h4>
      <select v-on:change="changeHandler">
        <option value="부산">부산</option>
        <option value="서울">서울</option>
        <option value="광주">광주</option>
        <option value="대구">대구</option>
      </select>
    <h4>submit 예제</h4>
      <form v-on:submit.prevent="submitHandler1">
        <table border="#">
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" name="uid">
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input type="text" name="name">
            </td>
          </tr>
          <tr>
            <td>나이</td>
            <td>
              <input type="text" name="age">
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              <select name="addr">
                <option value="부산">부산</option>
                <option value="서울">서울</option>
                <option value="광주">광주</option>
                <option value="대구">대구</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right">
              <input type="submit" value="전송">
            </td>
          </tr>
        </table>
      </form>

  <hr/>
  <h4>6)v-bind</h4>
    <img v-bind:src="path1"/>
    <img v-bind:src="path2"/>

    <a :href="url1">네이버</a>
    <a :href="url2">카카오</a>

    <button @click="oneClick" :disabled="isActive">한번만 클릭되는 버튼</button>

  <hr/>
  <h4>7)v-model</h4>
      <h4>input</h4>
      <p>이름 : {{ name }}</p>
      <input type="text" v-model="name" placeholder="이름 입력">

      <p>textarea</p>
      <p>{{ message }}</p>
      <p> 문자수 : {{ message.length }}</p>
      <textarea v-model="message"></textarea>

      <h4>checkbox</h4>
      <p>
        <input type="checkbox" v-model="isChecked">
        체크상태 : {{ isChecked }}
      </p>

      <p>
        <label><input type="checkbox" value="등산" v-model="hobbies">등산</label>
        <label><input type="checkbox" value="영화" v-model="hobbies">영화</label>
        <label><input type="checkbox" value="독서" v-model="hobbies">독서</label>
        <label><input type="checkbox" value="운동" v-model="hobbies">운동</label>
        <label><input type="checkbox" value="게임" v-model="hobbies">게임</label>
        <br/>
        선택값 : {{  hobbies }}
        <br/>
        체크 수 : {{ hobbies.length }}
      </p>

      <h4>select</h4>
      <select v-model="country">
        <option value="한국">한국</option>
        <option value="미국">미국</option>
        <option value="중국">중국</option>
        <option value="일본">일본</option>
        <option value="호주">호주</option>
      </select>
      <p>선택값 : {{ country }}</p>
    
      <form v-on:submit.prevent="submitHandler2">
        <table border="#">
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" v-model="user.uid">
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input type="text" v-model="user.name">
            </td>
          </tr>
          <tr>
            <td>나이</td>
            <td>
              <input type="text" v-model="user.age">
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              <select v-model="user.addr">
                <option value="부산">부산</option>
                <option value="서울">서울</option>
                <option value="광주">광주</option>
                <option value="대구">대구</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right">
              <input type="submit" value="전송">
            </td>
          </tr>
        </table>
      </form>


  <hr/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
/**
 *  날짜 : 2023/04/03
 *  이름 : 이민혁
 *  내용 : Ch02. Vue Directive 실습
 *  
 *  프로젝트 생성/실행
 *  - npm init vite-app Ch02
 *  - cd Ch02
 *  - npm install
 *  - npm run dev
 */


  name: 'App',
  data(){
    return {
      tit1 : "Hello",
      tit2 : "Welcome",
      tit3 : "",
      result1 : true,
      result2 : false,
      score : 80,
      cities: ["서울","대전","대구","부산","광주"],
      persons: [
        {uid : "a101", name : "김유신", age : 23},
        {uid : "a102", name : "김춘추", age : 22},
        {uid : "a103", name : "장보고", age : 21},
        {uid : "a104", name : "강감찬", age : 24},
        {uid : "a105", name : "이순신", age : 25},
      ],
      count : 0,

      path1 : '/img/flower1 (1).jpg',
      path2 : '/img/flower3.jpg',

      url1 : "https://www.naver.com",
      url2 : "https://www.daum.net",

      isActive : false,
      name : "",
      message : "",
      isChecked : false,
      hobbies : [],
      country : "한국",

      user : {
        user : '',
        name : '',
        age : 0,
        addr : '',
      }

    };
  }, // data end
  methods: {
    handler1 : function(){
      alert('buntton click!');
    },
    handler2 : function(value){
      alert("button2 click : " + value);
    },
    handler3 : function(e){
      alert("buntton3 click " + e);
    },

    counterHandler : function(){
     this.count++;
    },

    changeHandler : function(e){
      alert(e.target.value);
    },

    submitHandler1 : function(e){
      let uid = e.target.elements.uid.value;
      let name = e.target.elements.name.value;
      let age = e.target.elements.age.value;
      let addr = e.target.elements.addr.value;

      console.log("uid : " + uid);
      console.log("name : " + name);
      console.log("age : " + age);
      console.log("addr : " + addr);
    },

    submitHandler2 : function(){
      console.log("uid : " + this.user.uid);
      console.log("name : " + this.user.name);
      console.log("age : " + this.user.age);
      console.log("addr : " + this.user.addr);
    },

    oneClick : function(){
      alert('한번만 클릭할 수 있습니다.');
      this.isActive = true;

    },
    

  }, // method end



}
</script>
