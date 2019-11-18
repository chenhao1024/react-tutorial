import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Table from './Table'
import Table2 from './Table2'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <Table />
        <hr></hr>
        <Table2/>
      </div>
    )
  }
}

export default App;
