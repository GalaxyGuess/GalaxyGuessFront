<script setup lang="ts">
import Play from "./phase/Play.vue";
import Wait from "./phase/Wait.vue";
import { GamePhase, useGameState } from "../stores/gameState";
import { computed } from "vue";

const { gameState } = useGameState();

const CurrentPhaseComponent = computed(() => {
    switch (gameState.phase) {
        case GamePhase.Waiting: return Wait;
        case GamePhase.Playing: return Play;
    }
    return Wait;
})
</script>
<template>
    <component :is="CurrentPhaseComponent" />
</template>