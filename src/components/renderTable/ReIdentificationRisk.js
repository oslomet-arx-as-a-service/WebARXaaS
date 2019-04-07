import React, { useState, useEffect } from 'react'
import ReactTable from "react-table";
import 'react-table/react-table.css'
const ReIdentificationRisk = props => {

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
            <h3>Reidentification Risk</h3>
               <p>{JSON.stringify(arxResp.reIdentificationRisk.measures)}</p>
        </div>
    )
    return content
}
export default ReIdentificationRisk