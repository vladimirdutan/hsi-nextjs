'use client';
import { Lato, Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const lato = Lato({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: [lato.style.fontFamily, 'sans-serif'].join(','),
    },
    palette: {
        primary: {
            main: "#009fe3",
            dark: "#203059",
            light: "#009fe3",

        },
        secondary: {
            main: "#047EEB",
            light: "#0187ff",
            dark: "#016fd2"
        },

    }
});

export default theme;
