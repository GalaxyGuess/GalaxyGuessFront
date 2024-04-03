<script setup lang="ts">
import { ref } from 'vue';

const chatEnabled = ref(true); // Modifier la valeur pour activer ou désactiver le chat
const nbPlayers = ref(4); // Modifier la valeur pour changer le nombre de joueurs
</script>

<template>
    <main class="Waiting-room-page">
        <div class="column-1">
            <div class="players">
                <h2>Joueurs</h2>
                <ul>
                    <li>Joueur 1 <button>Exclure</button></li>
                    <li>Joueur 2 <button>Exclure</button></li>
                    <li>Joueur 3 <button>Exclure</button></li>
                    <li>Joueur 4 <button>Exclure</button></li>
                </ul>
            </div>
            <div v-if="chatEnabled" class="chat">
                <h2>Chat</h2>
                <ul>
                    <li>Joueur 1: Salut!</li>
                    <li>Joueur 2: Salut!</li>
                    <li>Joueur 3: Salut!</li>
                    <li>Joueur 4: Salut!</li>
                    <li>Joueur 1: Super partie!</li>
                    <li>Joueur 2: Oui, c'est génial!</li>
                    <li>Joueur 3: Je m'amuse beaucoup!</li>
                    <li>Joueur 4: Moi aussi, c'est super amusant!</li>
                </ul>
                <input type="text" placeholder="Envoyer un message">
                <button>Envoyer</button>
            </div>
        </div>
        <div class="column-2">
            <div class="game-info">
                <h2>Informations de la partie</h2>
                <div>
                    <p>Nombre de joueurs: {{ nbPlayers }}</p>
                    <p>Nombre de tours: 5</p>
                    <p>Temps par tour: 30s</p>
                </div>
            </div>
            <div class="game-settings">
                <h2>Paramètres de la partie</h2>
                <div>
                    <label for="rounds">Nombre de tours</label>
                    <input type="number" id="rounds" min="1" max="10">
                </div>
                <div>
                    <label for="time">Temps par tour</label>
                    <input type="number" id="time" min="10" max="60">
                </div>
                <div>
                    <label for="maxPlayers">Nombre de joueurs maximum</label>
                    <input type="number" id="maxPlayers" min="2" max="15" v-model="nbPlayers">
                </div>
                <div>
                    <label for="chatEnabled">Activer le chat</label>
                    <input type="checkbox" id="chatEnabled" v-model="chatEnabled">
                </div>
                <button>Commencer la partie</button>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.Waiting-room-page {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    min-height: 100vh;
}
.column-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 40ch;
}
.column-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
}
</style>
