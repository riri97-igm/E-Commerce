import LightMode from "@mui/icons-material/LightMode";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { DarkMode } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const midLinks =[
    {title: "catalog", path: "/catalog"},
    {title: "about", path: "/about"},
    {title: "contact", path: "/contact"}
]

const rightLinks =[
    {title: "login", path: "/login"},
    {title: "register", path: "/register"}
]

const NavStyles = {
  color: "inherit", 
  typography: "h6",
  textDecoration: "none",
  '&:hover': {
    color: "grey.500"
    },
    '&.active' :{
      color: "#ad023eff"
      }
  }
type Props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
}
export default function NavBar({ toggleDarkMode, darkMode }: Props) {
  return (
    <AppBar position="fixed">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Box display='flex' alignContent='center'>
            <Typography component={NavLink} to="/" variant="h6">E-Commerce</Typography>
            <IconButton onClick={toggleDarkMode}>
              {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
            </IconButton>
          </Box>
            <List sx={{display: "flex", gap: 2, ml: 4}}>
                {midLinks.map(({title, path}) => (
                    <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={NavStyles}
                      >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
            <Box display='flex' alignItems='center' gap={2}>
              <IconButton size="medium" sx={{color: "inherit"}}>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>
            <List sx={{display: "flex", gap: 2, ml: 4}}>
                {rightLinks.map(({title, path}) => (
                    <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={NavStyles}
                      >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
            </Box>
        </Toolbar>
    </AppBar>
  )
}