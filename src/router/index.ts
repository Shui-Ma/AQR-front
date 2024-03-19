import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "关卡",
        component: () => import("../views/Level.vue"),
    },
    {
        path: "/ranking",
        name: "排位",
        component: () => import("../views/Ranking.vue"),
    },
    {
        path: "/levelUpload",
        name: "谱面上传",
        component: () => import("../views/LevelUpload.vue"),
    },
    {
        path: "/rankingUpload",
        name: "排位上传",
        component: () => import("../views/RankingUpload.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(_to, _from, _savedPosition) {
        return { top: 0 };
    },
});

export default router;
