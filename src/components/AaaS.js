import React, { useState } from 'react';
import Attribute from './Attribute'
import papaparse from 'papaparse';
import Result from './Result';
import PrivacyModelManager from './PrivacyModelManager';
import RenderPrivacyModels from './RenderPrivacyModels'


const Anonymise = props => {

  const { endpoint } = props;
  const [currentData, setData] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [privacyModels, setPrivacyModels] = useState([]);
  const [arxResp, setArxResp] = useState('');
  const [action, setAction] = useState('none');
  const attributeTypeModel = 'QUASIIDENTIFYING';

  const onFilesChange = file => {
    papaparse.parse(file, {
      complete: function (results) {
        if (results.data.length > 0) { 
          let headers = results.data[0];
          setAttributes(headers.map(field => ({ field, attributeTypeModel })));
          setData(results.data)
        }
      }
    });
  };

  const handleTypeSelect = ({ target }, field, index) => {
    const { value: selectedType } = target;
    console.log('Index:', index);
    attributes[index] = {
      ...attributes[index],
      field,
      attributeTypeModel: selectedType
    };
    setAttributes(attributes);
    setTimeout(() => console.log(attributes), 500)
  };

  const handlePrivacyAdd = (model) => {
    setPrivacyModels([...privacyModels,model]);
  };

  const handlePrivacyRemove = () => {

  };

  const handleHierarchyUpload = (file, field, index) => {
    papaparse.parse(file, {
      complete: function (hierarchy) {
        attributes[index] = {
          ...attributes[index],
          hierarchy: hierarchy.data
        };
        setAttributes(attributes)
      }
    });
  };

  const handleRequest = (e, service) => {
    const payload = buildPayload();
    request(payload, service);
    setAction(service);
  };

  const buildPayload = () => {
    let jsonModel = {};
    jsonModel['data'] = currentData;
    jsonModel['attributes'] = attributes;
    jsonModel['privacyModels'] = privacyModels;
    return jsonModel
  };

    const request = (payload, service) => {
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
      setArxResp(data)
    });
  };

  let content = (
    <div align="center">

      <div className="card border-primary mb-3" align="center" style={{ maxWidth: '40rem' }}>
        <div className="card-header">Upload</div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm">
              <p className="card-text">Upload CSV formated file:</p>
            </div>
            <div className="col-sm">
              <input type='file'
                     id='file'
                     className='input-file'
                     accept='.csv'
                     onChange={e => onFilesChange(e.target.files[0])}
              />
            </div>
          </div>
        </div>
      </div>



      <div align='center'>
        <table>
          {attributes.map(({ field }, index) =>
            (<Attribute
              name={field}
              key={field}
              index={index}
              handleTypeSelect={handleTypeSelect}
              handleHierarchyUpload={handleHierarchyUpload}
            />))}
        </table>
      </div>


      <div className="card border-primary mb-3" style={{ maxWidth: '20rem' }}>
        <div className="card-header">Privacy model</div>
        <div className="card-body">
          

          <PrivacyModelManager
          privacyModels={privacyModels}
          handlePrivacyAdd={handlePrivacyAdd}
          handlePrivacyRemove={handlePrivacyRemove}
        />
  
        <RenderPrivacyModels
          privacyModels={privacyModels}
        />
        </div>
      </div>



      <button className="btn btn-primary" onClick={(e) => handleRequest(e, 'analyze')}>
        Analyze
          </button>
      <button className="btn btn-primary" onClick={(e) => handleRequest(e, 'anonymize')}>
        Anonymize
        </button>


      <Result
        arxResp={arxResp}
        action={action}
      />

      <br />

    </div>
  );

  return content;
};
export default Anonymise