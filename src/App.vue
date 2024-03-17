<template>
    <div class="bg-slate-900 h-screen w-screen overflow-x-hidden">
        <Navbar class="sticky top-0" />
        <Level />
    </div>
</template>

<script setup lang="ts">
import Navbar from "./components/layout/Navbar.vue";
import Level from "./views/Level.vue";
</script>
