import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            light: '#0277bd',
            main: '#12374C',
            dark: '#0c2635',
            contrastText: '#fff',
        },
        secondary: {
            main: '#039be5'
        }
    },
});

export default theme;