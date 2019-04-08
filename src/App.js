import React, {useState} from 'react';


import './bootstrap.min.css'
import AaaS from './components/AaaS';

const App = props =>{

  const [endpoint, setEndpoint] = useState('http://35.228.120.1:8080')

  const endpointHandler = (e) => {
    if(e.target.value !== endpoint){
      setEndpoint(e.target.value)
    }
  }
    
  let content = (
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">ArxAaaS</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          
        </ul>
      <div className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Api-Endpoint" aria-label="API-Endpoint" defaultValue={endpoint} onChange={endpointHandler}></input>
      </div>
        
      </div>
    </nav>


      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Analyze with AaaS</h1>
            <p>{endpoint}</p>
            <AaaS endpoint = {endpoint}/>
          </div>
        </div>
      </div>


      </div>
  )

  return content
}

export default App;
