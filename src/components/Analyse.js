import React, { useState } from 'react';


const Anonymise = props => {
  let fileReader;
  const [currentData, setData] = useState("")
  const onFilesChange = file => {
    console.log(file);
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const handleFileRead = (e) => {
    const content = fileReader.result;
    setData(content)
  };

  let content = (
    <div>
      <input type='file'
        d='file'
        className='input-file'
        accept='.csv'
        onChange={e => onFilesChange(e.target.files[0])}
      />
      <p>{currentData}</p>
    </div>
  );

  return content;
}
export default Anonymise