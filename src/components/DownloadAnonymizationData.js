import React, { useState, useEffect } from 'react'
import ReactTable from "react-table";
import 'react-table/react-table.css'
import papaparse from 'papaparse';
const DownloadAnonymizationData = props => {

    const { arxResp } = props

    const handleDownloadCSV = () => {
        var csv = papaparse.unparse(arxResp.anonymizeResult.data);
        console.log("Downloading csv")
        const element = document.createElement("a");
        let text = "Hei"
        let csvData = new Blob([csv], {type: 'text/plain'});
        element.href = URL.createObjectURL(csvData);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();

    }

    let content = (
        <div>
            <h1>Download data</h1>
            <button onClick={(e) => handleDownloadCSV(e)}>
                Download Anonymization Data as CSV
        </button>
        </div>
    )
    return content
}
export default DownloadAnonymizationData