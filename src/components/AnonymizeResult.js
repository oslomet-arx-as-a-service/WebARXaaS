import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import DistributionOfRisk from './tables/DistributionOfRisk';
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