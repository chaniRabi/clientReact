import React from 'react';
import { Link } from 'react-router-dom';
//import { useTheme } from '@muni/material/style';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import theme from "../styles/themeStyle";
import { AppBar, Toolbar, Typography, Button, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Header = () => {

  const theme = useTheme();
  //פונקציה שכאשר המסך קטן התפריט יהיה כלפי מטה
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          <div>
            <img style={{ width: 120, height: 40, marginTop: 10 }}
              className='image'
              src="shine-stock/public/IMG/ogo.png" />
          </div>
        </Typography>
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


