import LightMode from "@mui/icons-material/LightMode";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { DarkMode } from "@mui/icons-material";

type Props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
}
export default function NavBar({ toggleDarkMode, darkMode }: Props) {
  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">E-Commerce</Typography>
            <IconButton onClick={toggleDarkMode}>
              {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}