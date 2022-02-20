import React from 'react';

import Topbar from './topbar'

import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';



function read() {
  
  window.location.href = 'view?date=' + document.getElementById('dateinput').value;

}

function Write() {
  return (
    <React.Fragment>
      <Topbar />
      <CssBaseline />
      <Container>
        <h1>日記を読む</h1>

        <form>
          <label>
            日付をカレンダーまたは数字で入力してください。
            <input type="date" name="name" id="dateinput"/>
          </label>
        </form>

        <Button variant="contained" onClick={read}>日記をみる</Button>

      </Container>
    </React.Fragment>
  );
}

export default Write;
