import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

import Topbar from './topbar'


function SimpleContainer() {
  return (
    <React.Fragment>
      <Topbar />
      <CssBaseline />
      <Container>
        <h1>日記アプリ</h1>
        <Stack spacing={2} direction="row">
          <Link to="/write"><Button variant="contained">日記を書く</Button></Link>
          <Link to="/read"><Button variant="contained">日記を読む</Button></Link>
          <Link to="/search"><Button variant="contained">日記を探す</Button></Link>
        </Stack>
      </Container>
    </React.Fragment>
  );
}

export default SimpleContainer;
