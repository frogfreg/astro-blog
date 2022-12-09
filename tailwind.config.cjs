/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                mydark: "#131b24",
                enf: "#3EFA93",
                textenf: "#021b09",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
