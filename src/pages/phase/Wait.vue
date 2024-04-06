<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { GamePhase, useGameState } from "../../stores/gameState";

const { gameState } = useGameState();


const nbRounds = ref(7); // Modifier la valeur pour changer le nombre de joueurs
const timePerRound = ref(30); // Modifier la valeur pour changer le nombre de joueurs
const nbPlayers = ref(4); // Modifier la valeur pour changer le nombre de joueurs
const chatEnabled = ref(true); // Modifier la valeur pour activer ou désactiver le chat
const difficulty = ref('medium'); // Modifier la valeur pour changer la difficulté

interface Message {
  id: number;
  text: string;
  timestamp: Date;
}

// Ajouts pour le chat
const newMessage = ref('');
const messages = ref<Message[]>([]);
const nextId = ref(1);

messages.value.push({id: 0, text:"Bienvenue dans cette partie !", timestamp: new Date()});

const sendMessage = () => {
  if (newMessage.value.trim() !== '') { // Vérifie que le message n'est pas vide
    // Ajoute le message à la liste des messages
    messages.value.push({ id: nextId.value++, text: newMessage.value, timestamp: new Date() });
    newMessage.value = ''; // Réinitialise le champ de saisie du message
    // COPILOT QUI PUE SA MERE
    // Utilise nextTick pour attendre la prochaine mise à jour du DOM
    nextTick(() => {
      const messagesContainer = document.querySelector(".messages-container");
      if (messagesContainer) {
        // Fait défiler le conteneur des messages vers le bas pour afficher le dernier message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    });
  }
};

const formatDate = (date: Date) => {
  return date.getHours() + ':' + String(date.getMinutes()).padStart(2, '0');
};

function startGame() {
  gameState.phase = GamePhase.Playing;
}

</script>

<template>
    <main class="Waiting-room-page">
        <section class="column-1">
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
                <div class="chat-container">
                    <div class="messages-container">
                    <div v-for="message in messages" :key="message.id" class="message">
                    {{message.id}} à {{ formatDate(message.timestamp) }}: {{ message.text }}
                    </div>
                    </div>
                    <div class="input-container">
                    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Tapez votre message ici..." />
                    <button @click="sendMessage">Envoyer</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="column-2">
            <div class="game-info">
                <h2>Informations de la partie</h2>
                <div>
                    <p>Difficulté : {{ difficulty }}</p>
                    <p>Nombre de joueurs: {{ nbPlayers }}</p>
                    <p>Nombre de tours: {{ nbRounds }}</p>
                    <p>Temps par tour: {{ timePerRound }} secondes</p>
                    <p>Chat activé {{ chatEnabled }}</p>
                </div>
            </div>
            <div class="game-settings">
                <h2>Paramètres de la partie</h2>
                <div>
                  <label for="difficulty">Difficulté</label>
                  <select id="difficulty" v-model="difficulty">
                    <option value="easy">Facile</option>
                    <option value="medium">Moyenne</option>
                    <option value="hard">Difficile</option>
                  </select>
                </div>
                <div>
                    <label for="maxPlayers">Nombre de joueurs maximum</label>
                    <input type="number" id="maxPlayers" min="2" max="15" v-model="nbPlayers">
                </div>
                <div>
                    <label for="rounds">Nombre de tours</label>
                    <input type="number" id="rounds" min="1" max="10" v-model="nbRounds">
                </div>
                <div>
                    <label for="time">Temps par tour</label>
                    <input type="number" id="time" min="10" max="60" v-model="timePerRound">
                </div>
                <div>
                    <label for="chatEnabled">Activer le chat</label>
                    <input type="checkbox" id="chatEnabled" v-model="chatEnabled">
                </div>
                <button @click="startGame">Commencer la partie</button>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
.Waiting-room-page {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    min-height: 100vh;
    flex-wrap: wrap;
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

.players {
    background-color: #1b1b1b;
    padding: 0 20px 20px 20px;
    border-radius: 12px;
    margin-top: 20px;
    min-width: 500px;
}

.chat {
    background-color: #1b1b1b;
    padding: 20px;
    border-radius: 12px;
    margin-top: 20px;
    min-width: 500px;
}

.game-info {
    background-color: #1b1b1b;
    padding: 0 20px 20px 20px;
    border-radius: 12px;
    margin-top: 20px;
    min-width: 350px;
}

.game-settings {
    background-color: #1b1b1b;
    padding: 0 20px 20px 20px;
    border-radius: 12px;
    margin-top: 20px;
    min-width: 350px;
}

//////

.chat-container {
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid #1b1b1b;
  border-radius: 8px;
  overflow: hidden;
}

.messages-container {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  max-height: 300px;
  background-color: #1b1b1b;
}

.message {
  margin-bottom: 10px;
  padding: 5px;
  background-color: rgb(75, 75, 75);
  border-radius: 4px;
}

.input-container {
  display: flex;
  padding: 10px;
}

.input-container input {
  flex-grow: 1;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid rgb(75, 75, 75);
  border-radius: 4px;
}

.input-container button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.input-container button:hover {
  background-color: #0056b3;
}

::-webkit-scrollbar, ::-webkit-scrollbar:hover {
  width: 12px; /* Largeur de la scrollbar */
  background-color: #272727; /* Couleur de fond de la scrollbar */
}

/* Le track de la scrollbar (la piste) */
::-webkit-scrollbar-track, ::-webkit-scrollbar-track:hover {
  background-color: #272727; /* Couleur de fond du track */
  border-radius: 20px; /* Arrondit les angles du track */
}

/* Le thumb de la scrollbar (la partie que l'on peut déplacer) */
::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb:hover {
  background-color: #5f5f5f; /* Couleur du thumb */
  border-radius: 20px; /* Arrondit les angles du thumb */
  border: 3px solid #383838; /* Bordure autour du thumb, de la même couleur que le fond du track pour l'effet "coulé" */
}
</style>
