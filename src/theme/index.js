import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        background: {
            default: '#2B2B2B'
        },
        mode: 'dark',
        primary: {
            main: '#639EC2',
            600: '#201E1E',
            900: '#181717',
        },
        secondary: {
            main: '#8c8c8c',
        }
    }
});

export default theme
