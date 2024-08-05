'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        primary: {
            main: "#05003B",
            light: "#F4F4F4",
        },
        secondary: {
            main: "#047EEB",
            light: "#0187ff",
            dark: "#016fd2"

        }
    }
});

export default theme;
