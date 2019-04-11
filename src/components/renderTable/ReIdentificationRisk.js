import React from 'react'
import ReactTable from "react-table";
import 'react-table/react-table.css'
const ReIdentificationRisk = props => {

    const { arxResp } = props


    let content = (
        <div align="left">
            <h3>Reidentification Risk</h3>
            <table className="table table-hover">
                <tr><td><b>Prosecutor attacker success rate: </b></td><td>{arxResp.reIdentificationRisk.measures.Prosecutor_attacker_success_rate}</td></tr>
                <tr><td><b>Records affected by highest prosecutor risk: </b></td><td>{arxResp.reIdentificationRisk.measures.records_affected_by_highest_prosecutor_risk}</td></tr>
                <tr><td><b>Sample uniques: </b></td><td>{arxResp.reIdentificationRisk.measures.sample_uniques}</td></tr>
                <tr><td><b>Estimated prosecutor risk: </b></td><td>{arxResp.reIdentificationRisk.measures.estimated_prosecutor_risk}</td></tr>
                <tr><td><b>Population model: </b></td><td>{arxResp.reIdentificationRisk.measures.population_model}</td></tr>
                <tr><td><b>Highest journalist risk: </b></td><td>{arxResp.reIdentificationRisk.measures.highest_journalist_risk}</td></tr>
                <tr><td><b>Records affected by lowest risk: </b></td><td>{arxResp.reIdentificationRisk.measures.records_affected_by_lowest_risk}</td></tr>
                <tr><td><b>estimated_marketer_risk: </b></td><td>{arxResp.reIdentificationRisk.measures.estimated_marketer_risk}</td></tr>
                <tr><td><b>Journalist_attacker_success_rate: </b></td><td>{arxResp.reIdentificationRisk.measures.Journalist_attacker_success_rate}</td></tr>
                <tr><td><b>highest_prosecutor_risk: </b></td><td>{arxResp.reIdentificationRisk.measures.highest_prosecutor_risk}</td></tr>
                <tr><td><b>estimated_journalist_risk: </b></td><td>{arxResp.reIdentificationRisk.measures.estimated_journalist_risk}</td></tr>
                <tr><td><b>lowest_risk: </b></td><td>{arxResp.reIdentificationRisk.measures.lowest_risk}</td></tr>
                <tr><td><b>Marketer_attacker_success_rate: </b></td><td>{arxResp.reIdentificationRisk.measures.Marketer_attacker_success_rate}</td></tr>
                <tr><td><b>average_prosecutor_risk: </b></td><td>{arxResp.reIdentificationRisk.measures.average_prosecutor_risk}</td></tr>
                <tr><td><b>records_affected_by_highest_journalist_risk: </b></td><td>{arxResp.reIdentificationRisk.measures.records_affected_by_highest_journalist_risk}</td></tr>
                <tr><td><b>population_uniques: </b></td><td>{arxResp.reIdentificationRisk.measures.population_uniques}</td></tr>
            </table >
        </div >
    )
    return content
}
export default ReIdentificationRisk