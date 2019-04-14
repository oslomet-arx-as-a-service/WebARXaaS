import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
import DistributionOfRisk from './tables/DistributionOfRisk';
import ReIdentificationRisk from './tables/ReIdentificationRisk';
import DownloadAnonymizationData from './DownloadAnonymizationData';
import Data from './tables/Data'
const anonymizeResult = props => {
    const { arxResp } = props


    let content = (
        <div>
            <h4>Anonymize Result</h4>
            <Data arxResp={arxResp}/>
            <DownloadAnonymizationData arxResp={arxResp} />
            <DistributionOfRisk riskIntervalList={arxResp.riskProfile.distributionOfRisk.riskIntervalList} />
        </div>
    )

    return content
}
export default anonymizeResult