import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#895EE4',
            second: '#FEC01F'
        },
        secondary: {
            main: '#895EE4',
            second: '#FAFAFE'
        },
        tertiary: {
            main: '#111111'
        },
        error: {
            main: red.A400
        }
    }
});