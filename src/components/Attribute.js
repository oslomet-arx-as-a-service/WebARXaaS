import React, { useState, useEffect } from 'react'

const Attribute = props => {

    const [attribute, setAttribute] = useState("")
    const [selectedSensitivity, setSensitivity] = useState("Quasi-identifying")
    const { name, index } = props;

    let content = (
        <div>
            {name}
            <select
            onChange = {(e) => props.handleTypeSelect(e, name, index)}
            >
                <option value="INSENSITIVE">Insensitive</option>
                <option value="SENSITIVE">Sensitive</option>
                <option selected defaultValue value="QUASIIDENTIFYING">Quasi-identifying</option>
                <option value="IDENTIFYING">Identifying</option>
            </select>
        </div>
    )
    return content
}

export default Attribute
