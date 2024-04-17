import React from 'react';
import { Link } from 'react-router-dom';
//import { useTheme } from '@muni/material/style';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import theme from "../styles/themeStyle";
import { AppBar, Toolbar, Typography, Button, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../IMG/logo1.png";
import Nav from './nav';
// import AppbarHeader from "../styles/headerStyle";


const Header = () => {

  const theme = useTheme();
  //פונקציה שכאשר המסך קטן התפריט יהיה כלפי מטה
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          <div>
            <img style={{ width: 100, height: 50, marginTop: 1 }}
              className='image'
              src={logo} alt="logo" />
          </div>
          {/* <div>
            <img style={{ width: 100, height: 50, marginTop: 1 }}
              className='image' src="./eyeMasck.jpg"/>
          </div> */}
              {/* <AppbarHeader variant="h4">Shin's Stock</AppbarHeader> */}

        </Typography>

        <Nav />
        
        {/* <Button color='inherit' component={Link} to="/">Home</Button> */}
        <Button color='inherit' component={Link} to="/signIn">התחברות</Button>
        /
        <Button color='inherit' component={Link} to="/signUp">הרשמה</Button>
        {/* search bar */}
        {/* <input type="text" placeholder='חיפוש מוצר' />
        <SearchIcon /> */}
        <Link to="/cart" style={{color:"white"}}>
          <ShoppingCartIcon size={50} styly={{ color: "white" }} />
          {/* <span style={{ position: "absolute", left: 14, right: 14, background: "white", width: 14, height: 14, borderRadius: 7, textAlign: "center" }}>0</span> */}
        </Link>
      </Toolbar>
    </AppBar>

  );

};

export default Header;


