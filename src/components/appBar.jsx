import { ListItemText } from "@mui/material";
import { AppbarContainer,AppbarHeader, MyList } from "../styles/headerStyle";

export default function AppBar ({matech}){
    return(
        <AppbarContainer>
            <AppbarHeader>Shine's Stock</AppbarHeader>
            <MyList type='row'>
               <ListItemText primary="דף הבית"/>
               <ListItemText primary="מחלקות"/>
               <ListItemText primary="מוצרים"/>
               <ListItemText primary="דף הבית"/>
               <ListItemText primary="דף הבית"/>
            </MyList>
            </AppbarContainer>

    );
}