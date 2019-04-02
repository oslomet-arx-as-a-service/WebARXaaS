import React, { useState, useEffect } from 'react';
import Attribute from './Attribute'


const Anonymise = props => {
  let fileReader;
  const [currentData, setData] = useState("")
  const [attributes, setAttributes] = useState([])
  const attributeTypeModel = 'QUASIIDENTIFYING'
  const onFilesChange = file => {
    // console.log(file);
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  useEffect(() => {
    // console.log("Current data:", currentData)
    // console.log("Current Attributes:", attributes)
    const parsedAttributes = parseAttributes();
    if(attributes.length !== parsedAttributes.length){
      setAttributes(parsedAttributes)
    }
  })

  const handleTypeSelect = ({ target }, field, index) => {
    const { value: selectedType } = target;
    attributes[index] = {
      field,
      attributeTypeModel: selectedType
    };
    setAttributes(attributes);
    setTimeout(() => console.log(attributes), 1000)
  }

  const parseAttributes = () => {
    if(currentData.length > 0){
      const datalines = currentData.split("\n")
      const headers = datalines[0].split(";")
      return headers.map(field => ({ field, attributeTypeModel }))
    }
    return []
  }

  const handleFileRead = (e) => {
    const content = fileReader.result;
    setData(content)
  };

// console.log(attributes)

  let content = (
    <div>
      <input type='file'
        d='file'
        className='input-file'
        accept='.csv'
        onChange={e => onFilesChange(e.target.files[0])}
      />

      {attributes.map(({ field }, index) =>
        (<Attribute
          name = {field}
          key = {field}
          index = {index}
          handleTypeSelect = {handleTypeSelect}
          />))}
    </div>
  );

  return content;
}
export default Anonymise
