import React from 'react';


import './bootstrap.min.css'
import Analyse from './components/Analyse';

const App = props =>{
    return (
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

            </ul>
          </div>
        </div>
      </nav>


      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Analyze with AaaS</h1>
            <Analyse/>
          </div>
        </div>
      </div>


      </div>
    );
}

export default App;
