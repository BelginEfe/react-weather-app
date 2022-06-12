import React from 'react';
import './App.css';
import Form from './components/Form'
import WeatherContainer from './components/Weather/WeatherContainer';

function App() {


  return (
    <div className="App">
      <Form />
      <WeatherContainer />
    </div>
  );
}

export default App;
