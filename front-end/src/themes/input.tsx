import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8475ed',
      dark: '#000000',
      light: '#f7fafc'
    },
    text: {
      primary: '#333333',
      secondary: '#999999',
      disabled: '#CCCCCC',
    },
  },
});

export default theme;
