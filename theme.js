import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';



// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
       'Ubuntu',
       'Galano Grotesque SemiBold',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
