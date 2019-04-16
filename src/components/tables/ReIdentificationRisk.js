import React from 'react'
import 'react-table/react-table.css'
const ReIdentificationRisk = props => {

    const { measures } = props;


    let content = (
        <div>
            <h3>Reidentification Risk</h3>
            <div align="left">
                <table className="table table-hover">
                    <tr><td><b>Lowest risk: </b></td><td>{measures.lowest_risk}</td></tr>
                    <tr><td><b>Records affected by lowest risk: </b></td><td>{measures.records_affected_by_lowest_risk}</td></tr>
                    <tr><td><b>Average prosecutor risk: </b></td><td>{measures.average_prosecutor_risk}</td></tr>
                    <tr><td><b>Highest prosecutor risk: </b></td><td>{measures.highest_prosecutor_risk}</td></tr>
                    <tr><td><b>Records affected by highest prosecutor risk: </b></td><td>{measures.records_affected_by_highest_prosecutor_risk}</td></tr>
                    <tr><td><b>Prosecutor attacker success rate: </b></td><td>{measures.Prosecutor_attacker_success_rate}</td></tr>
                    <tr><td><b>Highest journalist risk: </b></td><td>{measures.highest_journalist_risk}</td></tr>
                    <tr><td><b>Records affected by highest journalist risk: </b></td><td>{measures.records_affected_by_highest_journalist_risk}</td></tr>
                    <tr><td><b>Journalist attacker success rate: </b></td><td>{measures.Journalist_attacker_success_rate}</td></tr>
                    <tr><td><b>Marketer attacker success rate: </b></td><td>{measures.Marketer_attacker_success_rate}</td></tr>
                    <tr><td><b>Estimated prosecutor risk: </b></td><td>{measures.estimated_prosecutor_risk}</td></tr>
                    <tr><td><b>Estimated journalist risk: </b></td><td>{measures.estimated_journalist_risk}</td></tr>
                    <tr><td><b>Estimated marketer risk: </b></td><td>{measures.estimated_marketer_risk}</td></tr>
                    <tr><td><b>Sample uniques: </b></td><td>{measures.sample_uniques}</td></tr>
                    <tr><td><b>population uniques: </b></td><td>{measures.population_uniques}</td></tr>
                    <tr><td><b>Population model: </b></td><td>{measures.population_model}</td></tr>
                    <tr><td><b>Quasi-identifiers</b></td><td>{measures.quasi_identifiers}</td></tr>
                </table >
            </div >
        </div>
    );
    return content
};
export default ReIdentificationRisk