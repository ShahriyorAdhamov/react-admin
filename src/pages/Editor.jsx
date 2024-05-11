
import { Editor as Edit } from 'primereact/editor';
import React, { useState } from 'react';

import { Header } from '../components';

const Editor = () => {
  const [text, setText] = useState('');

  return(<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Editor" />
    <div className="card">
      <Edit value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
    </div>
  </div>);
};
export default Editor;
        
