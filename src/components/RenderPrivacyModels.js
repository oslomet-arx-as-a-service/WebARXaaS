import React, { useEffect } from 'react'

const PrivacyModelManager = (props) => {
    const { privacyModels, handlePrivacyRemove } = props;


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

                    {privacyModels.map((model, index) => {
                        return (<tr>
                            <td>{model.privacyModel}</td>
                            <td>{JSON.stringify(model.params)}</td>
                            <button type="button" className="btn btn-danger btn-sm" onClick={(e) => handlePrivacyRemove(index)}>Remove</button>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
    return content
};

export default PrivacyModelManager