import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './RichBox.js'

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="editor">
      <ReactQuill className="box" theme="snow" value={value} onChange={setValue} />;
    </div>
  );
}

export default App;






/* .editor{
    height: 500px;
    width: 500px;
    background-color: red;
}
.box{
    height: 500px;
    width: 500px;
    border-radius: 3px;
} */