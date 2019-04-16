import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DistributionOfRisk from './tables/DistributionOfRisk';
import ReIdentificationRisk from './tables/ReIdentificationRisk';
const AnalyzeResult = props => {
    const { arxResp } = props
    console.log("AnalyzeResult: ", arxResp)
    let content = (
        <div>
        <h4>Analyze</h4>
        <Container>
            <Row>
                <Col sm={5}>
                    <ReIdentificationRisk measures={arxResp.reIdentificationRisk.measures} />
                </Col>
                <Col sm={1}></Col>
                <Col sm={6}>
                <DistributionOfRisk riskIntervalList={arxResp.distributionOfRisk.riskIntervalList} />
                </Col>
            </Row>
        </Container>
        <br />
    </div>
    )
    return content
}
export default AnalyzeResult