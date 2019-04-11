import React, { useState } from 'react'

const PrivacyModelManager = (props) => {

    const { privacyModels, handlePrivacyAdd, handlePrivacyRemove } = props;
    const [selectedPrivacyModel, setSelectedPrivacyModel] = useState('KANONYMITY')
    const [param, setParam] = useState([])
    const [paramForm, setParamForm] = useState('')

    const handleSetParam = (newParam) => {
        console.log("New param: ", newParam)
        console.log("Old state: ", param)
        setParam([newParam])
        setTimeout(()=> console.log("New State: ", param), 1000)
    }

    const kanonymity = (
        <div>
            <label>K: </label>
            <input type='number' className="form-control" min="0" onChange={(e) => handleSetParam({k: e.target.value})}></input>
        </div>
    )
    const ldiversity = (
        <div>
            <label>L: </label>
            <input type='number' min="0" id="L" onChange={(e) => handleSetParam({L: e.target.value , COLUMNAME: document.getElementById("column_name").value })}></input>
            <label>Field: </label>
            <input type='text' id="column_name" onChange={(e) => handleSetParam({L: document.getElementById("L").value, COLUMNNAME: e.target.value})}></input>
        </div>
    )
    const ldiversityRecursive = (
        <div>
            <label>L: </label>
            <input type='number' min="0" id="L" onChange={(e) => handleSetParam({L: e.target.value , COLUMNAME: document.getElementById("column_name").value , C: document.getElementById("C").value})}></input>
            <label>Field: </label>
            <input type='text' id="column_name" onChange={(e) => handleSetParam({L: document.getElementById("L").value, COLUMNNAME: e.target.value , C: document.getElementById("C").value})}></input>
            <label>C: </label>
            <input type='number' min="0" id="C" onChange={(e) => handleSetParam({L: document.getElementById("L").value , COLUMNAME: document.getElementById("column_name").value, C: e.target.value })}></input>
        </div>
    )



    const updateForm = (form) => {
        
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

            <select
                className="form-control"
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
            <button className="btn btn-outline-primary" onClick={(e) => handlePrivacyAdd({privacyModel: selectedPrivacyModel, params: param})}>Add Privacy Model</button>
        </div>
    )
    return content
}

export default PrivacyModelManager
