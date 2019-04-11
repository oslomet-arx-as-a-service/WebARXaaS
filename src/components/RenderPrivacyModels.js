import React, { useState } from 'react'

const PrivacyModelManager = (props) => {
    const { privacyModels } = props



    let content = (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Params</th>
                    </tr>
                </thead>
                <tbody>
                    {privacyModels.map(model => {
                        let params = model.params.map((param) => {
                            return Object.keys(param).map((key) => {
                                return ( <tr border="1"><td>{key}</td><td>{param[key]}</td></tr>)
                            })
                        })

                        return (<tr>
                            <td>{model.privacyModel}</td>
                            <td>{params}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
    return content
}

export default PrivacyModelManager