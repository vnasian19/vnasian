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
            client='ca-pub-8407153151915122'
            slot='5445530501'
            style={{ display: 'block' }}
            layout='auto'
            format=''
            responsive={true}
        /></div> 
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
