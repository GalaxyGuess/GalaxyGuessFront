<script setup lang="ts">
import GalaxyForm from './GalaxyForm.vue';
import { joinGame } from "../../stores/GameAuth";
import { useLocalStorage } from "@vueuse/core";
import { ref } from 'vue';

const username = useLocalStorage("form_username", "");
const gameId = ref("");
const password = ref("");
const needGameId = ref(false);

async function verifyFormAndJoinGame() {
    if (gameId.value.length == 0) {
        needGameId.value = true;
        return;
    }
    const result = await joinGame(username.value, password.value, gameId.value);
}

</script>

<template>
    <GalaxyForm class="join">
        <h2>Rejoindre une partie</h2>
        <input type="text" placeholder="Nom d'utilisateur" :value="username">
        <input type="text" placeholder="Code de la partie" :value="gameId">

        <input type="text" placeholder="Mot de passe" :value="password">
        <button @click="verifyFormAndJoinGame">Rejoindre la partie</button>
    </GalaxyForm>
</template>

<style lang="scss">

</style>
