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

const url = window.location.href;
const viewdate = url.substring(url.indexOf('=') + 1)
// not undefined
var data = localStorage.getItem(viewdate);
const savedData = JSON.parse(data)

const editorJS2 = new EditorJS({
    holderId: 'editorjs2',
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
    },
    data: savedData,
});

function save() {
    editorJS2.save()
      .then((savedData) => {
        console.log(savedData);
  
        localStorage.setItem(viewdate, JSON.stringify(savedData));
  
      });
  
  
  
  }


function Write() {



    return (
        <React.Fragment>
            <Topbar />
            <CssBaseline />
            <Container>
                <h1>日記表示画面</h1>
                <p>入力することで編集できます。</p>
                <div id='editorjs2' style={{ border: '1px solid black' }}></div>
                <Button variant="contained" onClick={save}>日記を保存</Button>


            </Container>
        </React.Fragment>
    );
}

export default Write;