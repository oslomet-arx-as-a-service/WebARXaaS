import React from 'react'
import 'react-table/react-table.css'

const PrivacyModels = props => {

    const {privacyModels} = props;

    const content = (
        <div>
            {Object.keys({privacyModels}).map(key =>(
                <p key={key}>
                    {privacyModels[key]}
                </p>
            ))}
        </div>
    );


    return content;
};
export default PrivacyModels;