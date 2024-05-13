import { useState } from "react"
import { Login } from '../utils/usersAPI';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../features/userSlice";
import { Button, TextField, Grid, Typography, Container } from '@mui/material';


const SignIn=()=>{
//יצירת משתנה סטייט -משנה סטייט יוצרים
//שכל שינוי יתעדכן מיד בתצוגה
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
//יצירת משתנה = עם היכולת לשנות את כתובת URL
const navigate = useNavigate();//מופע של הפונקציה עם יכולת הניווט
const dispatch = useDispatch();//מופע של הפונקציה שאחראית לעדכן ברידקס

const handleClickLogin=()=>{
    if(email == "" || password == ""){
        setError("חובה למלא את כל השדות");
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
        setError("כתובת האימייל אינה חוקית");
    }
    //לקרוא לפונקציה מהutils שעושה פנית API
    else{
        const user={
            Email:email,
            Password:password
        }
        Login(user).then(res=>{
            if(res.status == 200){
                console.log(res.data);
                // שמירה של הנתונים על המשתמש שחזרו מהקריאת שרת - שמירה שלהם ברידקס
                dispatch(setLoggedUser(res.data))// {type: "", payload: res.data}
                // ניווט של המשתמש המחובר לדף הבית
                navigate('/');
            }
            else{
                setError("אחד מהנתונים שגוי");
            }
        })
    }
}

  // פונקציה שמתבצעת בשינוי השדה כתובת מייל
  const handleChangeEmail = (event)=> {
    setError("");
    let value = event.target.value;
    setEmail(value);
}

 // פונקציה שמתבצעת בשינוי הסיסמא  
 const handleChangePassword = (event)=> {
    setError("");
    let value = event.target.value;
    setPassword(value);
}

return(
    <Container maxWidth="xs" style={{marginTop:'150px'}}>
            <Typography variant="h4" align="center" gutterBottom>
                התחברות משתמש קיים
            </Typography>
            {/* <form> */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="כתובת מייל"
                            name="email"
                            type="email"
                            fullWidth
                            //value={formData.email}
                            onChange={handleChangeEmail}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="סיסמה"
                            name="password"
                            type="password"
                            fullWidth
                            //value={formData.password}
                            onChange={handleChangePassword}
                        />
                    </Grid>
                </Grid>
                <Button type="button" variant="contained" color="primary" fullWidth onClick={handleClickLogin}>
                    התחברות
                </Button>
            {/* </form> */}
        </Container>
    // {/* <label id="email">אימייל: </label>
    // <input type="text" placeholder="enter email" value={email} onChange={handleChangeEmail} />
    // <br></br>
    // <label>סיסמה: </label>
    // <input id='password' onChange={handleChangePassword}/>
    // <br></br>
    // <button type='password' htmlFor="password" value={password} onClick={handleClickLogin}>כניסה</button> */}
    // {/*יופיע לי השגיאה ששמנו במשתנה error כשנמלא ערך של שגיאה במשתנה סטייט של */}
    // // {error != "" && <><span style={{color:'red', fontSize:'12px'}}>{error}</span><br/></>}
    // // <br></br>
    // // <span>עוד לא נרשמת?</span><Link to="/signUp">להרשמה </Link><br/>
  
);


}
export default SignIn;