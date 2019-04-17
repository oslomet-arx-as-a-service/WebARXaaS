import React from 'react'

const SensitiveAttributeSelector = props => {

    const {attributes, handleSetParam} = props

    let selectAttribute = (
        <select>
        <option>Attribute selector</option>
            {console.log("Attribute:",attributes)}
            {attributes.map((attribute) => {
                if (attribute.attributeTypeModel === 'SENSITIVE') {
                    return (<option value={attribute.field}>{attribute.field}</option>)
                }
            })};
        </select>
    )

    let insertAttribute = (
        <input type='text' id="column_name" onChange={(e) => handleSetParam({ l: document.getElementById("L").value, column_name: e.target.value })}></input>
    )


    let content = (<p>None</p>)

    if (attributes.filter(attribute => (attribute.attributeTypeModel === 'SENSITIVE'))) {
        content = selectAttribute
    }


    return selectAttribute
}

export default SensitiveAttributeSelector
