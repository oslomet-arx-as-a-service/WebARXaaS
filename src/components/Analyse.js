import React, { useState, useEffect } from 'react';
import Attribute from './Attribute'


const Anonymise = props => {
  let fileReader;
  const [currentData, setData] = useState("")
  const [attributes, setAttributes] = useState([])

  const onFilesChange = file => {
    console.log(file);
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  useEffect(() =>{
    console.log("Current data:", currentData)
    console.log("Current Attributes:", attributes)
    if(attributes.length !== parseAttributes().length){
      setAttributes(parseAttributes())
      console.log("Updated attributes:", attributes)
    }
  })

  const handleTypeSelect = name => event => {
    console.log("Handeling a change on: ", name)
    let attributeSet = attributes
    attributeSet[name] = event.target.value
    console.log(attributes)
    setAttributes(attributeSet)
  }
 
  const parseAttributes = () => {
    if(currentData.length > 0){
      const datalines = currentData.split("\n")
      const headers = datalines[0].split(";")
      const attributesKeys = {}
      return headers
    }
    return []
  }

  const handleFileRead = (e) => {
    const content = fileReader.result;
    setData(content)
  };

console.log(attributes)

  let content = (
    <div>
      <input type='file'
        d='file'
        className='input-file'
        accept='.csv'
        onChange={e => onFilesChange(e.target.files[0])}
      />
      
      {attributes.map((name) => 
        (<Attribute 
          name = {name} 
          handleTypeSelect = {handleTypeSelect(name)} 
          />))}
    </div>
  );

  return content;
}
export default Anonymise