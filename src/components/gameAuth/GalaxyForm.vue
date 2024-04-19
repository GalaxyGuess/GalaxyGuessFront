<script setup lang="ts">

</script>

<template>
    <form class="galaxy-form">
        <slot />
    </form>
</template>

<style lang="scss">

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

.galaxy-form button {
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

</style>
