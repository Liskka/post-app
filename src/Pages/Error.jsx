import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Error = () => {
  return (
    <Container maxWidth="md" sx={{ pt: '40px' }}>
      <Typography variant='h3' component='h3' color='error' align='center'>
        Страница не найдена
      </Typography>
    </Container>
  )
}

export default Error;