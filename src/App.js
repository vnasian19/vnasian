import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import ReactPlayer from 'react-player'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ReactPlayer url='http://cdn.vtvcab.vn/hls/THETHAO_HD/index.m3u8' playing controls={true} />
        </header>
      </div>
    );
  }
}

export default App;
