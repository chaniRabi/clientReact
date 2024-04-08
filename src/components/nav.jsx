import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
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


const Nav = () => {
  return (
    <AppbarContainer>
    <AppbarHeader variant="h6">Shin's Stock</AppbarHeader>
    <MyList type='row'>
      <ListItemText primary="דף הבית" />
      <ListItemText primary="מחלקות" />
      <ListItemText primary="מוצרים" />
      <ListItemText primary="אודות" />
      <ListItemText primary="צור קשר" />
      {/* <ListItemButton onClick={() => setShowSearchBox(true)}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
      </ListItemButton>       */}
        </MyList>
     {/* <Actions matches={matches} onLogin={onLoginClick} onLogout={onLogoutClick} />    */}
  </AppbarContainer>
      //  <div style={{display:'flex', justifyContent:'space-between', margin:'10px'}}>
      //     <Link to="/">דף הבית</Link>
      //     <Link to="/signIn">התחברות</Link>
      //     <Link to="/signUp">הרשמה</Link>
      //     <Link to="/products">המוצרים שלנו</Link>
      //     <Link to="/cart">עגלת קניות</Link>
      //     <Link to="/contact">צור קשר</Link>
      // </div>
  );

};

export default Nav;


