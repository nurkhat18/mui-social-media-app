import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar'

import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("light")
  const themeMode = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={themeMode}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>

  
  );
}

export default App;
