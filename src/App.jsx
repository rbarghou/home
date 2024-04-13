import { useState } from 'react'

import { 
  AppBar,
  Box,
  Container,
  CssBaseline,
  Paper,
  Stack,
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


function App() {
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
        <Stack spacing={2}>
          <Paper>
            <Typography variant="h3" textAlign={"center"}>
              Software Engineering
            </Typography>
          </Paper>
          <Paper>
            <Typography variant="h3" textAlign={"center"}>
              MLOps
            </Typography>
          </Paper>
          <Paper>
            <Typography variant="h3" textAlign={"center"}>
              DevOPS
            </Typography>
          </Paper>
          <Paper>
            <Typography variant="h3" textAlign={"center"}>
              Art
            </Typography>
          </Paper>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App
