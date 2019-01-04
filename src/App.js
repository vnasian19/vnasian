import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactPlayer from 'react-player'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ReactPlayer url='https://ca02.vieplay.vn/vielive/cuoc-chien-tuong-vy-2016-s01-ep01/hls/playlist.m3u8' playing controls={true} />
        </header>
      </div>
    );
  }
}

export default App;
