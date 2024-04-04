<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToJoinPage = () => {
    console.log('goToJoinPage')
    // @ts-ignore
    router.push('/join')
};
</script>

<template>
    <main class="Home-page">
        <h1>⭐️ Le jeu des étoiles ⭐️</h1>
        <p>
            Trouve la notation des avis avant tes amis!
        </p>
        <button @click="goToJoinPage">Jouer maintenant</button>
    </main>
</template>

<style scoped>

.Home-page {
    display: grid;
    align-content: center;
    place-items: center;
    min-height: 100vh;
}

.Home-page h1 {
    text-shadow: 1px 1px 0 #4f4f4f, 2px 2px 0 #4f4f4f, 3px 3px 0 #4f4f4f;
}
</style>
