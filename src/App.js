
import React from 'react';
import './App.css';
import Example from './components/Example';
import Example2 from './components/Example2';



class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Example/>
      <Example2 name ="Tesla"/>
    </div>
  );
}}

export default App;
