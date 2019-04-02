import React, { useState } from 'react';


import './bootstrap.min.css'
import Analyse from './components/Analyse';

const App = props =>{
    return (
      <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">

            </ul>
          </div>
        </div>
      </nav>
    

      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 class="mt-5">Anononymize with AaaS</h1>
            <Analyse/>
          </div>
        </div>
      </div>
    

      </div>
    );
}

export default App;
