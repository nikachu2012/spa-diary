import React from 'react';

import Topbar from './topbar'

import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import EditorJS from '@editorjs/editorjs';
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'

function save() {
  editorJS.save()
    .then((savedData) => {
      console.log(savedData);

      localStorage.setItem(date.getFullYear() + '-' + String(toDoubleDigits(date.getMonth() + 1)) + '-' + String(toDoubleDigits(date.getDate())), JSON.stringify(savedData));

    });



}

const editorJS = new EditorJS({
  /**
   * Id of Element that should contain the Editor
   */
  holderId : 'editorjs',

  /**
   * Available Tools list.
   * Pass Tool's class or Settings object for each Tool you want to use
   */
  tools: {
    embed: Embed,
    table: Table,
    marker: Marker,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    raw: Raw,
    header: Header,
    quote: Quote,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    // ...
  },

  /**
   * Previously saved data that should be rendered
   */
  data: {}
});


var toDoubleDigits = function (num) {
  num += "";
  if (num.length === 1) {
    num = "0" + num;
  }
  return num;
};

var date = new Date();



function Write() {
  return (
    <React.Fragment>
      <Topbar />
      <CssBaseline />
      <Container>
        <br />
        <p>エディターが表示されない場合はリロードしてください。</p>
        <Button variant="contained" onClick={save}>日記を保存</Button>
        <br />


        <div id='editorjs' style={{ border: '1px solid black' }}></div>
      </Container>
    </React.Fragment>
  );
}

export default Write;