<script setup lang="ts">
</script>

<template>
    <main class="Home-page">
        <h1>Galaxy Guess</h1>
        <p>
            Trouve la notation des avis google avant tes amis!
        </p>
        <button>Jouer maintenant</button>
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

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #2b2d50aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
