import React, { useState, useEffect } from 'react'
import ReactTable from "react-table";
import 'react-table/react-table.css'
const DisplayDistributionOfRisk = props => {

    const { arxResp } = props
    
    const columns = [{
        Header: 'Interval',
        accessor: 'interval'
    },
    {
        Header: 'RecordsWithRiskWithinInteval',
        accessor: 'recordsWithRiskWithinInteval'
    },
    {
        Header: 'RecordsWithMaxmalRiskWithinInterval',
        accessor: 'recordsWithMaxmalRiskWithinInterval'
    }]

    let content = (
        <div>
            <ReactTable
                data={arxResp.distributionOfRisk.riskIntervalList}
                columns={columns}
            />
        </div>
    )
    return content
}
export default DisplayDistributionOfRisk