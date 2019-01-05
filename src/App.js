import React, { Component } from 'react';
import './App.css';
import AdSense from 'react-adsense';

import ReactPlayer from 'react-player'

class App extends Component {
  componentDidMount () {
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
        <AdSense.Google
            client='ca-pub-7292810486004926'
            slot='7806394673'
            style={{ display: 'block' }}
            layout='auto'
            format=''
            responsive={true}
        /></div> 
        <p>VTV6 HD</p>
        <ReactPlayer url='http://cdn.vtvcab.vn/hls/VTV6_HD/index.m3u8' playing controls={true} 
        width='50%'
        height='50%'
        />
        </header>
      </div>
    );
  }
}

export default App;
