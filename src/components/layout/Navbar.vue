<template>
    <div class="bg-slate-950 bg-opacity-50 backdrop-blur navbar">
        <div class="navbar-start">
            <div
                class="btn btn-lg btn-ghost text-2xl font-bold no-animation text-white"
            >
                <span style="color: #00ffff">冰</span>
                与
                <span style="color: #ff0000">火</span>
                之舞质量评级
            </div>
        </div>
        <div class="navbar-center flex items-center">
            <button class="btn btn-lg btn-ghost text-2xl">
                <RouterLink :to="{ name: '关卡' }"> 关卡 </RouterLink>
            </button>
            <button class="btn btn-lg btn-ghost text-2xl">
                <RouterLink :to="{ name: '排位' }">排位</RouterLink>
            </button>
            <div class="dropdown dropdown-hover">
                <div
                    tabindex="0"
                    role="button"
                    class="btn btn-lg btn-ghost text-2xl"
                >
                    上传
                </div>
                <ul
                    tabindex="0"
                    class="dropdown-content z-[1] menu shadow bg-slate-800 rounded-box w-28"
                >
                    <li>
                        <RouterLink :to="{ name: '谱面上传' }">
                            谱面上传
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: '排位上传' }">
                            排位上传
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navbar-end mx-4">
            <div class="dropdown dropdown-end">
                <div
                    tabindex="0"
                    role="button"
                    class="btn btn-ghost btn-circle avatar"
                >
                    <div class="w-14 rounded-full">
                        <img
                            src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
                        />
                    </div>
                </div>
                <ul
                    tabindex="0"
                    class="menu dropdown-content z-[1] p-2 shadow bg-slate-900 rounded-box w-28"
                >
                    <li><a>设置</a></li>
                    <li><a>退出登录</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
