import { useState } from 'react'

import { 
  AppBar,
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#00203',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    mode: 'dark'
  },
});


function FiberApp() {
  const [count, setCount] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container>
        <AppBar>
          <Toolbar>
            <Typography variant="h5">
              Ramsey Barghouti
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar/>
      </Container>
      <Box>
      </Box>
    </ThemeProvider>
  )
}

export default FiberApp
