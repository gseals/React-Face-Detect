import React, { Component } from 'react';
import './App.css';
import ImageSearchForm from '../Components/ImageSearchForm/ImageSearchForm';
import FaceDetect from '../Components/FaceDetect/FaceDetect';

class App extends Component {
  render() {
  return (
    <div className="App">
      <ImageSearchForm />
      {/* <FaceDetect /> */}
    </div>
    );
  }
}

export default App;
