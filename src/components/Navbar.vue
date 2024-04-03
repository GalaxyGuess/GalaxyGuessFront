<template>
    <div class="navbar">
        <h1 class="navbar-title" @click="goHome">Galaxy Guess</h1>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goHome = () => {
    console.log('goHome')
    // @ts-ignore
    router.push('/')
};
</script>

<style scoped>
.navbar {
    background-color: #333;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
}

.navbar-title {
    padding: 10px;
    border: 2px solid #333;
    border-radius: 12px;
    text-shadow: 1px 1px 0 #4f4f4f, 2px 2px 0 #4f4f4f, 3px 3px 0 #4f4f4f;
}

.navbar-title:hover {
    cursor: pointer;
    background-color: #232323;
    border-radius: 12px;
}
</style>
