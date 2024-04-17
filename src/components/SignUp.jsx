import React, { useState } from 'react';
import { AddUser } from '../utils/usersAPI';
import { Button, TextField, Grid, Typography, Container } from '@mui/material';


const RegistrationForm = () => {
    //אתחול האובייקט באמצעות useState עם השדות הרלוונטיות להרשמה
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
        // Add more fields as needed
    });
    //במקרה של שגיאה
    const [error, setError] = useState('');

    //פונקציה שתעדכן את השדה המתאים באובייקט כאשר הערכים משתנים
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // //פונקציה המטפלת בהגשת הטופס וניגשת לכל נתוני רישום המשתמש המאוחסנים באובייקט
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //         await AddUser(formData).then(res => {
    //             console.log(res);
    //             if(res.status === 200){
    //                 alert("נרשמת בהצלחה:)");
    //             }
    //         }).catch((error) =>{
    //         setError('ההרשמה נכשלה, נסה שנית')
    //     })
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // בדיקה שכל השדות מולאו
        if (!formData.username || !formData.email || !formData.password) {
            setError('חובה למלא את כל השדות');
            return;
        }
    
        // בדיקה שהאימייל חוקי
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(formData.email)) {
            setError('כתובת האימייל אינה חוקית');
            return;
        }
    
       // בדיקה שאורך הסיסמה גדול מ-6 תווים
        if (formData.password.length < 6) {
        setError('הסיסמה חייבת להכיל לפחות 6 תווים');
        return;        
        }

        // בדיקה שהסיסמה מכילה לפחות אות אחת באותיות גדולות ולפחות אות אחת באותיות קטנות
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        if (!uppercaseRegex.test(formData.password) || !lowercaseRegex.test(formData.password)) {
        setError('הסיסמה חייבת להכיל לפחות אות אחת באותיות גדולות ולפחות אות אחת באותיות קטנות');
        return;
        }

        // אם הבדיקות עברו בהצלחה, שלח את הנתונים לשרת
        await AddUser(formData)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    alert("נרשמת בהצלחה:)");
                }
            })
            .catch((error) => {
                setError('ההרשמה נכשלה, נסה שנית');
            });
    };
    

    return (
        // <form onSubmit={handleSubmit}>
        //     <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Username" />
        //     <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
        //     <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
        //     {/* Add more input fields as needed */}
        //     <button type="submit">Submit</button>
        // </form>
        <Container maxWidth="xs">
        <Typography variant="h4" align="center" gutterBottom>
            רישום משתמש חדש
        </Typography>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="שם מתשמש"
                        name="username"
                        fullWidth
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="כתובת מייל"
                        name="email"
                        type="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="סיסמה"
                        name="password"
                        type="password"
                        fullWidth
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                הרשמה
            </Button>
        </form>
    </Container> 
    );
};

export default RegistrationForm;