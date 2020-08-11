import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    breakpoints: {
        keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1450
            
        },
    },
    typography: {
        fontFamily: 'Roboto'
    },
    palette: {
        primary: {
            light: '#63ccff',
            main: '#07a102',
            contrastText: '#fff !important',
        },
        secondary: {
            main: '#ff00a6'
        }
    }
});

export default theme;