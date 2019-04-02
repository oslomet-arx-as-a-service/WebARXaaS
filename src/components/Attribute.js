import React, { useState, useEffect } from 'react'

const Attribute = props => {

    const [attribute, setAttribute] = useState("")
    const [selectedSensitivity, setSensitivity] = useState("Quasi-identifying")

    let content = (
        <div>
            {props.name}
            <select
            onChange = {props.handleTypeSelect}
            >
                <option value="INSENSITIVE">Insensitive</option>
                <option value="SENSITIVE">Sensitive</option>
                <option selected value="QUASIIDENTIFYING">Quasi-identifying</option>
                <option value="IDENTIFYING">Identifying</option>
            </select>
        </div>
    )
    return content
}

export default Attribute