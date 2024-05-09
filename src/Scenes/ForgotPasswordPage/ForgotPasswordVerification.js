import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ForgotPasswordVerification() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
  };
  const handleNumber = (evt) => {
    const num = evt.target.validity.valid ? evt.target.value : number;
    setNumber(num);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Password Verification
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

           <Typography component="h6" variant="h7" sx={{ mt: 1 }}>
          Enter your 4 digits code that you received on your email.
          </Typography>

          <Grid container spacing={1} alignItems="center">
      <Grid item xs={3}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="code1"
          autoFocus
          type="tel"
          inputProps={{ maxLength: 1}}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="code2"
          type="tel"
          inputProps={{ maxLength: 1}}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="code3"
          type="tel"
          inputProps={{ maxLength: 1}}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="code4"
          type="tel"
          inputProps={{ maxLength: 1}}
        />
      </Grid>
    </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href='/setNewPassword'
            >
              Continue
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}