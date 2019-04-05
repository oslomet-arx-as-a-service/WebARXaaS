import React, { useState, useEffect } from 'react';
import Attribute from './Attribute'
import papaparse from 'papaparse';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const Anonymise = props => {

  const {endpoint} = props
  const [currentData, setData] = useState("")
  const [attributes, setAttributes] = useState([])
  const [arxResp, setArxResp] = useState()
  const attributeTypeModel = 'QUASIIDENTIFYING'

  const onFilesChange = file => {
    papaparse.parse(file, {
      complete: function(results) {
        if(results.data.length > 0){
        let headers = results.data[0]
        setAttributes(headers.map(field => ({ field, attributeTypeModel})))
        setData(results.data)
        }
      }    
    });
  };

  const handleTypeSelect = ({ target }, field, index) => {
    const { value: selectedType } = target;
    console.log('Index:', index)
    attributes[index] = {
      ...attributes[index],
      field,
      attributeTypeModel: selectedType
    };
    setAttributes(attributes);
    setTimeout(() => console.log(attributes), 1000)
  }

  const handleHierarchyUpload = (file, field, index) => {
       papaparse.parse(file, {
      complete: function(hierarchy) {
        attributes[index] = {
          ...attributes[index],
          hierarchy: hierarchy.data
        }
        setAttributes(attributes)
      }    
    });


  }


  const handleAnalyse = (e) => {
    console.log('Button clicked')
    console.log(JSON.stringify(buildPayload()))
    const payload = buildPayload()
    analyseRequest(payload)
  }

  const handleAnonymize = (e) => {
    console.log('Button clicked')
    console.log(JSON.stringify(buildPayload()))
    const payload = buildPayload()
    anonymizeRequest(payload)
  }

  const buildPayload = () => {
    let jsonModel = {}
    jsonModel['data'] = currentData
    jsonModel['attributes'] = attributes
    jsonModel['privacyModels'] = [{'privacyModel': 'KANONYMITY', params:{'k':3} }]
    return jsonModel
  }

  const analyseRequest = (payload) => {
    console.log(endpoint)
      fetch(endpoint + '/api/analyze', {
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

  const anonymizeRequest = (payload) => {
    console.log(endpoint)
      fetch(endpoint + '/api/anonymize', {
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
          handleHierarchyUpload = {handleHierarchyUpload}
          />))}

          <button onClick={(e) => handleAnalyse(e) }>
            Analyze
          </button>
          <button onClick={(e) => handleAnonymize(e) }>
          Anonymize
        </button>
       
          <p>{[arxResp]}</p>
          <graphAnalyzeResp arxResp></graphAnalyzeResp>
    </div>
  );

  return content;
}
export default Anonymise
