<script setup lang="ts">
import { useGameState } from "../../stores/gameState";

const { gameState } = useGameState();

</script>
<template>
    <section class="Game-menu">
        <ul>
            <li v-for="player in gameState.players">
                {{ player.username }} score: {{ player.score }}
            </li>
        </ul>
    </section>
</template>
<style scoped lang="scss">
.Game-menu {
    display: grid;
    place-items: center;
    background: #0f01;
}
</style>
