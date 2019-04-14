import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
import DistributionOfRisk from './tables/DistributionOfRisk';
import ReIdentificationRisk from './tables/ReIdentificationRisk';
import DownloadAnonymizationData from './DownloadAnonymizationData';
import Data from './tables/Data'
import AnonymizeResult from './AnonymizeResult'
const Result = props => {
    const { arxResp } = props



    let analyzeContent = (
        <div>
            <h4>Analyze</h4>
            <Container>
                <Row>
                    <Col sm={5}>
                        <ReIdentificationRisk arxResp={arxResp} />
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={6}>
                    
                    </Col>
                </Row>
            </Container>
            <br />
        </div>
    )

    let renderAction = (action) => {
        if (action === 'anonymize' && arxResp.anonymizeResult) {
            return (<div><h1>Anonymize</h1> <AnonymizeResult arxResp={arxResp} /></div>)
        } else if (action === 'analyze' && arxResp.reIdentificationRisk) {
            return analyzeContent;
        } else if (arxResp.message) {
            return (<div><b>Something went wrong. Error:</b> {arxResp.message}</div>)
        } else {
            return (<p>No action taken</p>)
        }
    }
    return renderAction(props.action)
}
export default Result