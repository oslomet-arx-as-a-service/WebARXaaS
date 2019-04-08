import React, { useState } from 'react'

const PrivacyModelManager = (props) => {

    const kanonymity = (
        <div>
            <label>K: </label>
            <input type='number' min="0" onChange={(e) => setParam([{ k: e.target.value }])}></input>
        </div>
    )
    const ldiversity = (
        <div>
            <label>L: </label>
            <input type='number' min="0" onChange={(e) => setParam(param.push({  l : e.target.value }))}></input>
            <label>Field: </label>
            <input type='text' onChange={(e) => setParam(param.push({ COLUMNNAME : e.target.value }))}></input>
        </div>
    )
    const ldiversityRecursive = (
        <div>
            <label>L: </label>
            <input type='number' min="0" onChange={(e) => setParam(param.push({  l : e.target.value }))}></input>
            <label>Field: </label>
            <input type='text' onChange={(e) => setParam(param.push({ COLUMNNAME : e.target.value }))}></input>
            <label>C: </label>
            <input type='number' min="0" onChange={(e) => setParam(param.push({ c : e.target.value }))}></input>
        </div>
    )

    const { privacyModels, handlePrivacyAdd, handlePrivacyRemove } = props;
    const [selectedPrivacyModel, setSelectedPrivacyModel] = useState('KANONYMITY')
    const [param, setParam] = useState([])
    const [paramForm, setParamForm] = useState(kanonymity)

    const updateForm = (form) => {
        setParam([])
        if (form === 'KANONYMITY') {
            setParamForm(kanonymity)
        } else if(form === 'LDIVERSITY_DISTINCT' || form === 'LDIVERSITY_GRASSBERGERENTROPY' || form === 'LDIVERSITY_SHANNONENTROPY') {
            setParamForm(ldiversity)
        } else if (form === 'LDIVERSITY_RECURSIVE') {
            setParamForm(ldiversityRecursive)
        } else {
            setParamForm(<div>No known form selected</div>)
        }
    }

    let content = (
        <div>
            <label>Privacy Model:</label>
            <select
                onChange={(e) => {
                    setSelectedPrivacyModel(e.target.value)
                    updateForm(e.target.value)
                }
                }
            >
                <option defaultValue value="KANONYMITY">K-Anonymity</option>
                <option value="LDIVERSITY_DISTINCT">L-Diversity-Distinct</option>
                <option value="LDIVERSITY_GRASSBERGERENTROPY">L-Diversity-Grassberger-Entropy</option>
                <option value="LDIVERSITY_SHANNONENTROPY">L-Diversity-Shannon-Entropy</option>
                <option value="LDIVERSITY_RECURSIVE">L-Diversity-Recursive</option>
            </select>
            {paramForm}
            <button onClick={(e) => handlePrivacyAdd({privacyModel: selectedPrivacyModel, params: param})}>Add Privacy Model</button>
        </div>
    )
    return content
}

export default PrivacyModelManager
