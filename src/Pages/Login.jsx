import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/system/Container';
import React, { useContext } from 'react'
import { AuthContext } from '../context';

const Login = () => {

  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <Container maxWidth="sm" sx={{ pt: '40px', pb: '40px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Typography variant='h4' component='h3' sx={{ mb: '30px' }}>
        Страница логина
      </Typography>
      <form onSubmit={login}>
        <Stack
          direction="column"
          justifyContent="space-between"
        >
          <TextField id="standard-basic" label="Введите логин" variant="standard" />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <Button
            type='submit'
            variant="outlined"
            sx={{ margin: '10px 0', maxWidth: 200 }}
          >
            Войти
          </Button>
        </Stack>
      </form>
    </Container>
  )
}

export default Login;