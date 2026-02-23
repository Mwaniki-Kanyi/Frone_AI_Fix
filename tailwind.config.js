/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                frone: {
                    green: '#05fc00',
                    black: '#080809',
                }
            }
        },
    },
    plugins: [],
}
