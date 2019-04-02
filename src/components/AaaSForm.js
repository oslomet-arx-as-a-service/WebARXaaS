import React, { Component } from 'react';
import TestComponent from './testComponent';
import DataInput from './DataInput';


class AaaSForm extends Component {

    constructor(){
        super()
        this.state ={
            data: 'hello'
        }
    }



    loadData(){
        console.log("Activated")
        console.log("logged")
        this.setState({
           
        })
    }

    updateState(){
        this.setState({
            data: 'Hei'
        })
    }


    render() {
        return(
            <div className="container">
                <DataInput
                    loadData = {this.loadData}
                />
                <TestComponent
                    name = 'Julian3'
                />
        
            </div>
        )
   }
}
  
  export default AaaSForm;
  
  