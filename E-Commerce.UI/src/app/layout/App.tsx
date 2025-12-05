import { useState } from "react"
import { Box, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';

    const tooggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar toggleDarkMode={tooggleDarkMode} darkMode={darkMode} />
      <Box 
        sx={{
          minHeight: '100vh',
          background: darkMode 
            ? 'radial-gradient(circle at 0% 0%, #21a5fdff, #111B27)'
            : 'radial-gradient(circle at 0% 0%, #80cfe2ff, #5288acff)',
          paddingTop: '80px'
        }}>
          <Container maxWidth='xl' sx={{mt:8, mb:4}}>
            <Outlet />
          </Container>
      </Box>

    </ThemeProvider>
  )
}

export default App
