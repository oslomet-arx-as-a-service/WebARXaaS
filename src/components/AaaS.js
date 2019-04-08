import React, { useState } from 'react';
import Attribute from './Attribute'
import papaparse from 'papaparse';
import Result from './Result';
import PrivacyModelManager from './PrivacyModelManager';

const Anonymise = props => {

  const { endpoint } = props
  const [currentData, setData] = useState("")
  const [attributes, setAttributes] = useState([])
  const [privacyModels, setPrivacyModels] = useState([{ 'privacyModel': 'KANONYMITY', params: { 'k': 3 } }])
  const [arxResp, setArxResp] = useState('')
  const [action, setAction] = useState('none')
  const attributeTypeModel = 'QUASIIDENTIFYING'

  const onFilesChange = file => {
    papaparse.parse(file, {
      complete: function (results) {
        if (results.data.length > 0) {
          let headers = results.data[0]
          setAttributes(headers.map(field => ({ field, attributeTypeModel })))
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

  const handlePrivacyAdd = (model) => {
    console.log("Adding privacy model: ", model)
    privacyModels.push(model)
    setPrivacyModels(privacyModels);
    setTimeout(() => console.log(privacyModels), 1000)
  }

  const handlePrivacyRemove = () => {

  }

  const handleHierarchyUpload = (file, field, index) => {
    papaparse.parse(file, {
      complete: function (hierarchy) {
        attributes[index] = {
          ...attributes[index],
          hierarchy: hierarchy.data
        }
        setAttributes(attributes)
      }
    });
  }

  const handleRequest = (e, service) => {
    const payload = buildPayload()
    request(payload, service)
    setAction(service)
  }

  const buildPayload = () => {
    let jsonModel = {}
    jsonModel['data'] = currentData
    jsonModel['attributes'] = attributes
    jsonModel['privacyModels'] = privacyModels
    return jsonModel
  }

  const request = (payload, service) => {
    console.log(endpoint)
    fetch(endpoint + '/api/' + service, {
      crossDomain: true,
      method: 'post',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Response:', data);
      setArxResp(data)
    });
  }

  let content = (
    <div>
      <p>{action}</p>
      <input type='file'
        d='file'
        className='input-file'
        accept='.csv'
        onChange={e => onFilesChange(e.target.files[0])}
      />
      {attributes.map(({ field }, index) =>
        (<Attribute
          name={field}
          key={field}
          index={index}
          handleTypeSelect={handleTypeSelect}
          handleHierarchyUpload={handleHierarchyUpload}
        />))}

        <PrivacyModelManager
        privacyModels={privacyModels}
        handlePrivacyAdd={handlePrivacyAdd}
        handlePrivacyRemove={handlePrivacyRemove}
        />

      <button onClick={(e) => handleRequest(e, 'analyze')}>
        Analyze
          </button>
      <button onClick={(e) => handleRequest(e, 'anonymize')}>
        Anonymize
        </button>

   
      <Result
        arxResp={arxResp}
        action={action}
      />

<br/>

    </div>
  );

  return content;
}
export default Anonymise