<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const createGame = () => {
    console.log('createGame');
    // @ts-ignore
    router.push('/waiting');
};

const joinGame = () => {
    console.log('joinGame');
    // @ts-ignore
    router.push('/waiting');
};


</script>

<template>
    <main class="Join-page">
        <h1>Créer ou rejoindre une partie</h1>
        <ul class="galaxy-list">
            <li>Partie de John - 2/3 joueur(s)    <button>Rejoindre</button></li>
            <li>Partie de Jane - 1/3 joueur(s)    <button>Rejoindre</button></li>
            <li>Partie de Bob - 3/3 joueur(s)     <button>Rejoindre</button></li>
            <li>Partie 1 - 0/3 joueur(s)          <button>Rejoindre</button></li>
            <li>Partie de John - 2/3 joueur(s)    <button>Rejoindre</button></li>
            <li>Partie de Jane - 1/3 joueur(s)    <button>Rejoindre</button></li>
            <li>Partie de Bob - 3/3 joueur(s)     <button>Rejoindre</button></li>
            <li>Partie 1 - 0/3 joueur(s)          <button>Rejoindre</button></li>
        </ul>
        <form class="galaxy-form create">
            <h2>Créer une partie</h2>
            <input type="text" placeholder="Nom d'utilisateur">
            <input type="text" placeholder="Mot de passe">
            <button @click="createGame">Créer ma partie</button>
        </form>
        <form class="galaxy-form join">
            <h2>Rejoindre une partie</h2>
            <input type="text" placeholder="Nom d'utilisateur">
            <input type="text" placeholder="Code de la partie">
            <input type="text" placeholder="Mot de passe">
            <button @click="joinGame">Rejoindre la partie</button>
        </form>

    </main>
</template>

<style scoped lang="scss">

$text: #382b22;
$light-pink: #fff0f0;
$pink: #ffe9e9;
$dark-pink: #f9c4d2;
$pink-border: #b18597;
$pink-shadow: #ffe3e2;

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.Join-page {
    display: grid;
    gap: 10px;
    grid-template-areas:
        "h h"
        "l c"
        "l j";
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-content: center;
    width: auto;
    min-height: 100vh;
    padding: 15px;
    box-sizing: border-box; /* Inclure padding dans la hauteur et largeur calculées */
}

@media (max-width: 1100px) {
    .Join-page {
        grid-template-areas:
            "h h"
            "c j"
            "l l";
    }
}

@media (max-width: 800px) {
    .Join-page {
        grid-template-areas:
            "h h"
            "c c"
            "j j"
            "l l";
    }
}

.Join-page h1 {
    grid-area: h;
    text-align: center;
    text-shadow: 1px 1px 0 #4f4f4f, 2px 2px 0 #4f4f4f, 3px 3px 0 #4f4f4f;
}

.Join-page h2 {
    text-align: center;
    margin: 5px;
}

.galaxy-list {
    grid-area: l;
    list-style: none;
    max-width: 90vw;
    width: 75ch;
    justify-self: center;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.galaxy-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25em;
    border: 1px solid #636363;
    border-radius: 12px;
    width: 100%;
    padding-left: 15px;
}

.galaxy-list li:hover {
    border-color: gold;
}
.galaxy-list button {
    padding: 6px 12px;
}

.galaxy-list li:nth-child(2n) {
    background: #fff1;
}

.galaxy-form {
    display: flex;
    color: #ddd;
    flex-direction: column;
    min-width: 40ch;
    max-width: 90vw;
    width: 50%;
    gap: 1em;
    background: #1b1b1b;
    border-radius: 20px;
    padding: 1em;
    margin: 0;
}

.galaxy-form button, .galaxy {
    color: #000;
    background: #fff;
    transition: all ease-in-out .2s;


    background-image: linear-gradient(to right, #283c86 0%, #45a247  51%, #283c86  100%);
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    background-size: 200% auto;
    color: white;            
    border-radius: 12px;
    //display: block;
}

.galaxy-form button:hover {
    border-color: #ddd;
    outline: 1.5px solid gold;
    outline-offset: 2px;

    background-position: right center; 
    color: #fff;
    text-decoration: none;
}

.galaxy-form input {
    padding: 0.80em;
    color: #ddd;
    border: 1.5px solid #ccc;
    border-radius: 12px;
    outline: none;
    transition: all ease-in-out .2s;
}

.galaxy-form input:focus  {
    outline: 1.5px solid gold;
    outline-offset: 2px;
    background-color: #414141;
    color: black;
}

.galaxy-form.join {
    grid-area: j;
}
.galaxy-form.create {
    grid-area: c;
}
</style>
