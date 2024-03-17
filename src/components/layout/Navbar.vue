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
            <button class="btn btn-lg btn-ghost text-2xl">关卡</button>
            <button class="btn btn-lg btn-ghost text-2xl">
                <a href="https://www.kdocs.cn/l/cqjnLaNTfZdC">排位</a>
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
                    class="dropdown-content z-[1] menu shadow bg-slate-900 rounded-box w-28"
                >
                    <li>
                        <a
                            href="https://docs.qq.com/form/page/DZEpoc1RkUmVjbmt4#/fill"
                        >
                            铺面上传
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://docs.qq.com/form/page/DZG9RV3FDdVhwRE9l#/fill"
                        >
                            排位上传
                        </a>
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
