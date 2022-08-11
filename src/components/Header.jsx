import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context';
import { Box } from '@mui/system';

const Header = () => {

  const pages = [
    { title: 'Посты', path: '/posts' },
    { title: 'О нас', path: '/about' }
  ];

  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component="h1" >
          Welcome to post-app
        </Typography>

        <Stack direction='row' spacing={2} ml={3} >
          {pages.map(page => (
            <Link key={page.title} to={page.path} style={{ textDecoration: 'none' }}>
              <Typography variant="subtitle1" component="h2" color="white">
                {page.title}
              </Typography>
            </Link>
          ))}
        </Stack>
        <Box component='div' sx={{ margin: 'auto 30px auto auto' }}>
          <Button
            variant="text"
            color='inherit'
            sx={{ right: '0' }}
            onClick={() => logout()}
          >
            Выйти
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Header;