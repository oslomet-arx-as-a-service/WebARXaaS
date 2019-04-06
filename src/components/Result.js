import React, { useState, useEffect } from 'react'
import DisplayRiskInterval from './DisplayDistributionOfRisk';
const Result = props => {
    const { arxResp } = props

    let anonymizeContent = (
        <div>
            <h4>Anonymize Result</h4>
            {JSON.stringify(props.arxResp)}
        </div>
    )
    let analyzeContent = (
        <div>
            <h4>Analyze</h4>
            <DisplayRiskInterval arxResp={arxResp} />
        </div>
    )
    let noAction = (<p>No Resposne exsists</p>)

    let renderAction = (action) => {
        if (action === 'anonymize' && arxResp.anonymizeResult) {
            return anonymizeContent;
        } else if (action === 'analyze' && arxResp.reIdentificationRisk) {
            return analyzeContent;
        }else if(arxResp.message){
            return (<div><b>Something went wrong. Error:</b> {arxResp.message}</div>)
        } else { 
            return (<p>No action taken</p>)
        }
    }
    return renderAction(props.action)
}
export default Result