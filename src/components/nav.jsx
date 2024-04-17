import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../styles/headerStyle";

const pages = [{name:"דף הבית", url:'/'}, {name:"מחלקות" , url:'/categories'}, {name:"מוצרים", url:'/products'},
 {name:"אודות", url:'/about'}, {name:"צור קשר", url:'/contact'}];

const Nav = () => {
  const navigate = useNavigate();
  const handleClickNavigate = (url) => {
    console.log(url);
    navigate(url);
  }
  return (
    <>
    {/* <AppbarContainer> */}
    {/* <AppbarHeader variant="h6">Shin's Stock</AppbarHeader> */}
    {/* <List type="column">
      <ListItemText primary="דף הבית" />
      <ListItemText primary="מחלקות" />
      <ListItemText primary="מוצרים" />
      <ListItemText primary="אודות" />
      <ListItemText primary="צור קשר" /> */}
      {/* <ListItemButton onClick={() => setShowSearchBox(true)}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
      </ListItemButton>       */}
        {/* </List> */}
     {/* <Actions matches={matches} onLogin={onLoginClick} onLogout={onLogoutClick} />    */}
  {/* </AppbarContainer> */}
      {/* //  <div style={{display:'flex', justifyContent:'space-between', margin:'10px'}}>
      //     <Link to="/">דף הבית</Link>
      //     <Link to="/signIn">התחברות</Link>
      //     <Link to="/signUp">הרשמה</Link>
      //     <Link to="/products">המוצרים שלנו</Link>
      //     <Link to="/cart">עגלת קניות</Link>
      //     <Link to="/contact">צור קשר</Link>
      // </div> */}
       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handleClickNavigate(page.url)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
      </>
  );

};

export default Nav;


