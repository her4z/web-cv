import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <React.Fragment>
            <Home></Home>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default App;
