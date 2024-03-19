<template>
    <button
        class="btn btn-ghost flex justify-between items-center w-3/5 h-32 mb-4 rounded-lg border"
    >
        <div class="w-36 flex">
            <div
                class="flex justify-center items-center text-4xl w-16 h-16 rounded-full text-white"
                :style="{ backgroundColor: levelColor }"
            >
                {{ level.level == "待评" ? "?" : levelLetter }}
            </div>
            <div class="top-10 left-10">
                <div
                    class="-ml-5 mt-9 flex justify-center items-center text-lg w-10 h-10 bg-black rounded-full font-light text-white"
                >
                    {{ level.difficulties == "0" ? "?" : level.difficulties }}
                </div>
            </div>
        </div>

        <div class="flex flex-col items-start flex-1 truncate">
            <p class="text-2xl text-white max-w-full truncate">
                {{ level.song }}
            </p>
            <p class="text-base mt-3 max-w-full truncate">
                音乐作者： {{ level.artist }}
            </p>
            <p class="text-base max-w-full truncate">
                关卡作者：<span>{{ level.author }}</span>
            </p>
        </div>
        <div :style="{ color: level.vluation_color }" class="text-lg">
            {{ level.vluation }}
        </div>
    </button>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
    level: Level;
}>();

interface Level {
    id: number;
    href: string;
    artist: string;
    song: string;
    author: string;
    level: string;
    levelColor?: string;
    difficulties: string;
    difficultiesColor?: string;
    vluation: string;
    vluation_color: string;
    video_herf: string;
}

const levelNum = computed(() => {
    return props.level.level.match(/\((.*?)\)/);
});
const levelLetter = computed(() => {
    return props.level.level.match(/^([^（]+)\([^）]+\)$/);
});

const levelColors: { [key: string]: string } = {
    "S+": "#32b16c",
    S: "#32b16c",
    "A+": "#f29b76",
    A: "#f29b76",
    B: "#84ccc9",
    C: "#8f82bc",
    D: "#7d7d7d",
    E: "#434343",
};

const levelColor = computed(() => {
    return levelColors[props.level.level] || "#000000";
});
</script>

<!-- 
{
    "id": "10001",
    "href": "https://vip.123pan.cn/1817094560/AQR%E8%B0%B1%E9%9D%A2/AQR10001%5B21.05%5D%5BC%5DLudicin-Fallen%20Symphony%28By%20Team%20FBI%29.zip",
    "artist": "ludicin",        音乐作者
    "song": "fallen symphony",  音乐名称
    "author": "Team FBI",       关卡作者
    "level": "C",               关卡等级
    "difficulties": "21+",      关卡难度
    "vluation": "可能卡",        关卡评价
    "vluation_color": "rgb(255,255,255)",
    "video_herf": "BV1ds4y1K7y3"
} 
-->
