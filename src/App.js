import React, {useState} from 'react';


import './bootstrap.min.css'
import Analyse from './components/Analyse';

const App = props =>{

  const [endpoint, setEndpoint] = useState('http://35.228.120.1:8080/')

  const endpointHandler = (e) => {
    if(e.target.value !== endpoint){
      setEndpoint(e.target.value)
    }
  }
    
  let content = (
      <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">ArxAaaS</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Analyze <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Anonymize</a>
          </li>
        </ul>
      <div class="form-inline my-2 my-lg-0">

      <input class="form-control mr-sm-2" type="search" placeholder="Api-Endpoint" aria-label="API-Endpoint" defaultValue={endpoint} onChange={endpointHandler}></input>
      </div>
        
      </div>
    </nav>


      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Analyze with AaaS</h1>
            <p>{endpoint}</p>
            <Analyse endpoint = {endpoint}/>
          </div>
        </div>
      </div>


      </div>
  )

  return content
}

export default App;
