<script setup lang="ts">
import GameMenu from "../../components/game/GameMenu.vue";
import GamePlayground from "../../components/game/GamePlayground.vue";
// import { useGameState } from "../../stores/gameState";

// const { gameState } = useGameState();
</script>
<template>
    <main class="Game-page">
        <GameMenu/>
        <GamePlayground/>
    </main>
</template>
<style scoped lang="scss">
body, .Game-page {
    overscroll-behavior: none;
}
.Game-page {
    display: flex;
    flex-direction: row-reverse;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    min-height: 100vh;

    > .Game-menu {
        order: 3;
        display: grid;
        place-items: center;
        background: #0f01;
        flex: 0 0 min(100ch, 100vw);
        scroll-snap-align: start;
    }
    > .Game-playground {
        order: 1;   
        display: grid;
        place-items: center;
        background: #f001;
        flex: 0 0 100vw;
        scroll-snap-align: end;
    }
}
</style>
