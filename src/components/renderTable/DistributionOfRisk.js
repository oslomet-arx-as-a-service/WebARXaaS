import React from 'react'
import ReactTable from "react-table";
import 'react-table/react-table.css'
const DistributionOfRisk = props => {

    const { arxResp } = props
    
    const columns = [{
        Header: 'Interval',
        accessor: 'interval'
    },
    {
        Header: 'RecordsWithRisk',
        accessor: 'recordsWithRiskWithinInteval'
    },
    {
        Header: 'RecordsWithMaxmalRisk',
        accessor: 'recordsWithMaxmalRiskWithinInterval'
    }]

    let content = (
        <div>
            <h3>Risk Interval</h3>
            <ReactTable
                data={arxResp.distributionOfRisk.riskIntervalList}
                columns={columns}
            />
        </div>
    )
    return content
}
export default DistributionOfRisk