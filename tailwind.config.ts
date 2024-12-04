import type {Config} from "tailwindcss";
import daisyui from "daisyui";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                //'login': "url('/assets/images/image-login/login-desktop.png')",
            },
            colors: {
                primary: { // Azul
                    lighter: '#A7C7E7',
                    light: '#7FB1D3',
                    main: '#4A90E2',
                    dark: '#1D70B8',
                    darker: '#005A8D',
                },
                secondary: { // Verde
                    lighter: '#A8E4D2',
                    light: '#7DC7B4',
                    main: '#39B57E',
                    dark: '#238A5E',
                    darker: '#1B6B49',
                },
                terciary: { // Laranja
                    lighter: '#FFD6A1',
                    light: '#FFB579',
                    main: '#FF8C42',
                    dark: '#E75D0D',
                    darker: '#C43F00',
                },
                gray: { // Tons de cinza
                    lighter: '#F0F0F0',
                    light: '#D1D1D1',
                    main: '#B0B0B0',
                    dark: '#8A8A8A',
                    darker: '#4A4A4A',
                },
                white: { // Branco e tons primrose
                    lighter: '#FFFFFF',
                    light: '#F9F9F9',
                    main: '#F2F2F2',
                    dark: '#DCDCDC',
                    darker: '#D0D0D0',
                },
                yellow: {
                    lighter: '#F8F3E8',
                    light: '#F0E4CB',
                    main: '#D99031',
                    dark: '#99752E',
                    darker: '#664E1F',
                },
                red: {
                    lighter: '#F7E5E1',
                    light: '#EFC7BE',
                    main: '#CC4728',
                    dark: '#99351F',
                    darker: '#662314',
                },
            },
            scale: {
                '98': '0.98',
            },
        },
    },
    plugins: [
        daisyui,
    ],
} satisfies Config;
