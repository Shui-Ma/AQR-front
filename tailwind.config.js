/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["dark"],
    },
};
