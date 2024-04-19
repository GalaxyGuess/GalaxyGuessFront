<script setup lang="ts">
import GalaxyForm from './GalaxyForm.vue';
import { createGame, joinGame } from "../../stores/GameAuth";
import { useLocalStorage } from "@vueuse/core";
import { ref } from 'vue';

const username = useLocalStorage("form_username", "");
const password = ref("");

async function verifyFormAndCreateGame() {
    const result = await createGame(username.value, password.value);
}

</script>

<template>
    <GalaxyForm class="create">
        <h2>Rejoindre une partie</h2>
        <input type="text" placeholder="Nom d'utilisateur" :value="username">
        <input type="text" placeholder="Mot de passe" :value="password">
        <button @click="verifyFormAndCreateGame">Rejoindre la partie</button>
    </GalaxyForm>
</template>

<style lang="scss">

</style>
