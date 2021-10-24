import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';


 
class App extends React.Component {
  
  render(){

    return (
      <div className="App">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
          <Home></Home>
      </div>
    );
  }
}

export default App;
