import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import AdSense from 'react-adsense';

import ReactPlayer from 'react-player'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
        <p>Test Video</p>
        <ReactPlayer url='http://cdn.vtvcab.vn/hls/THETHAO_HD/index.m3u8' playing controls={true} 
        width='50%'
        height='50%'
        />
        </header>
      </div>
    );
  }
}

export default App;
