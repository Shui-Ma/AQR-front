<template>
    <button
        class="btn btn-ghost flex justify-between items-center w-3/5 h-32 mb-4 rounded-lg border"
    >
        <div class="w-32 border"></div>
        <div class="flex flex-col items-start flex-1">
            <p class="text-2xl text-white">{{ level.song }}</p>
            <p class="text-base mt-2">音乐作者： {{ level.artist }}</p>
            <p class="text-base">关卡作者： {{ level.author }}</p>
        </div>
        <div :style="{ color: level.vluation_color }" class="text-lg">
            {{ level.vluation }}
        </div>
    </button>
</template>

<script setup lang="ts">
defineProps<{
    level: Level;
}>();

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
