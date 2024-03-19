<template>
    <div class="bg-slate-900 h-screen w-screen overflow-x-hidden pl-3 pr-1">
        <div class="flex flex-col min-h-screen">
            <Navbar class="sticky top-0 rounded-b-lg" />

            <router-view class="mt-4" v-slot="{ Component }">
                <transition name="router_animate" mode="out-in">
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                </transition>
            </router-view>

            <Footer class="mt-auto rounded-t-lg -mb-56" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<style scoped>
.router_animate-enter-active {
    animation: fadeInLeft 0.5s;
}
.router_animate-leave-active {
    animation: fadeOutRight 0.3s;
}
</style>
