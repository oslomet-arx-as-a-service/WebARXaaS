import React, { useState, useEffect } from 'react';
import Attribute from './Attribute'
import ReactTable from 'react-table';
import 'react-table/react-table.css'


const Anonymise = props => {
  let fileReader;
  const [currentData, setData] = useState("")
  const [attributes, setAttributes] = useState([])
  const [endpoint, setEndpoint] = useState('http://localhost:8080/')
  const [arxResp, setArxResp] = useState()
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
    console.log('attributes', attributes)
    console.log('data:', currentData)
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




  const handleFileRead = (e) => {
    const fileContent = fileReader.result;
    const datalines = fileContent.split("\n")
    const headers = datalines[0].split(";")
    setAttributes(headers.map(field => ({ field, attributeTypeModel })))
    setData(datalines.map(line => (line.split(';'))))
  };

  const handleAnalyse = (e) => {
    console.log('Button clicked')
    console.log(JSON.stringify(buildPayload()))
    const payload = buildPayload()
    analyseRequest(payload)
  }


  const buildPayload = () => {
    let jsonModel = {}
    jsonModel['data'] = currentData
    jsonModel['attributes'] = attributes
    return jsonModel
  }

  const analyseRequest = (payload) => {
      fetch(endpoint + 'api/analyze', {
        crossDomain:true,
        method: 'post',
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {
        console.log(response)
        return response.json();
      }).then(function(data) {
        console.log('Response:', data);
        setArxResp(JSON.stringify(data))
      });
  }

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

          <button onClick={(e) => handleAnalyse(e) }>
            Analyze
          </button>
       
          <p>{[arxResp]}</p>
    </div>
  );

  return content;
}
export default Anonymise
