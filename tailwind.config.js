/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",       // Next.js 13 app directory
        "./pages/**/*.{js,ts,jsx,tsx}",     // Next.js pages directory
        "./components/**/*.{js,ts,jsx,tsx}",// Components folder
    ],
    theme: {
        extend: {
            width: {
                '1/2': '50%',
                '3/10': '30%',
                '3/5': '60%',
                '7/10': '70%',
                '9/10': '90%',
            },
        },
    },
    plugins: [],
};
