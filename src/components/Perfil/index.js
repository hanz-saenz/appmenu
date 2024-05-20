// src/components/Perfil.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavBar from '../NavBar';

const Perfil = () => {
  return (
    <>
      <NavBar />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Este es mi perfíl
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Mi información personal'}
          {' mi configuración'}
        </Typography>
      </Container>
    </>
  );
}

export default Perfil;
