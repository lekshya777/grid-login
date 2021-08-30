import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Login() {
    return (
       <Grid container>
          
           <Grid item xs={12} sm={6} md={6}>
               <Typography>SignIn</Typography>
            <TextField 
            type="text"
            variant="outlined"
            label="Enter username"
            fullWidth
            margin="normal"
            required
             />
            <TextField
             type="password"
             variant="outlined"
             label="Enter password"
             fullWidth
             margin="normal"
             required />

        <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        margin="normal"
        
        
        >SignIn</Button>



           </Grid>

           <Grid item xs={12} sm={6} md={6}>

           <Typography>SignUp</Typography>
<TextField
type="text"
margin="normal"
variant="outlined"
label="name"
required
fullWidth
/>
<TextField
variant="outlined"
label="addresss"
type="text"
required
fullWidth
margin="normal"
/>
<TextField
type="text"
label="emailid"
variant="outlined"
required
fullWidth
margin="normal"
/>
<TextField 
type="text"
label="username"
variant="outlined"
required
fullWidth
margin="normal"
/>
<TextField 
type="password"
label="password"
variant="outlined"
required
fullWidth
margin="normal"
/>
<Button
variant="contained"
color="secondary"
type="submit"
margin="normal"
fullWidth
>SignIn</Button>




           </Grid>


       </Grid>












    )
}
