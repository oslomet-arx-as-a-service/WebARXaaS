import React, { useState, useEffect } from 'react'

const Attribute = props => {

    const [currentSelected, setSelect] = useState('QUASIIDENTIFYING')
    const { name, index } = props;

    let content = (
        <div>
            {name}
            <select
                onChange={(e) => {
                    props.handleTypeSelect(e, name, index)
                    setSelect(e.target.value)
                }
                }
            >
                <option defaultValue value="QUASIIDENTIFYING">Quasi-identifying</option>
                <option value="INSENSITIVE">Insensitive</option>
                <option value="SENSITIVE">Sensitive</option>
                <option value="IDENTIFYING">Identifying</option>
            </select>
            <input type='file' onChange={(e) => props.handleHierarchyUpload(e.target.files[0], name, index)}></input>
        </div>
    )
    return content
}

export default Attribute
