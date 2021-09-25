import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Home></Home>
      </div>
    );
  }
}

export default App;
