<template>
    <h4>User5 등록</h4>
    <form>
        <table>
            <tr>
                <td>이름</td>
                <td>
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td>성별</td>
                <td>
                    <input type="radio" name="gender">남자
                    <input type="radio" name="gender">여자
                </td>
            </tr>
            <tr>
                <td>나이</td>
                <td>
                    <input type="number">
                </td>
            </tr>
            <tr>
                <td>주소</td>
                <td>
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td colspan="2" align="right">
                    <input type="submit" value="등록하기">
                </td>
            </tr>
        </table>
    </form>
</template>
<script setup></script>
<style scoped></style>