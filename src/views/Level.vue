<template>
    <div class="flex flex-col items-center">
        <LevelCard v-for="item in data" :level="item" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import LevelCard from "../components/level/LevelCard.vue";

interface Level {
    id: number;
    href: string;
    artist: string;
    song: string;
    author: string;
    level: string;
    difficulties: string;
    vluation: string;
    vluation_color: string;
    video_herf: string;
}

const data = ref<Array<Level>>();

onMounted(() => {
    axios.get("/public/data.json").then(res => {
        data.value = res.data.data;
    });
});
</script>
