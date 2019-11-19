import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Table from './Table'
import Table2 from './Table2'
import Table3 from './Table3'
import Table4 from './Table4'
import Table5 from './Table5'
import Table6 from './Table6'
import App2 from './Api'

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

  state = {
    charactersState: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
    submitCharacters:[]
  }

  removeCharacter = (index) => {
    const {charactersState} = this.state

    this.setState({
      charactersState: charactersState.filter((character,i)=>{
        return i !== index
      })
    })
  }
  removesubmitCharacters = (index) => {
    const {submitCharacters} = this.state

    this.setState({
      submitCharacters: submitCharacters.filter((character,i)=>{
        return i !== index
      })
    })
  }

  handleSubmit = character => {
    this.setState({
      submitCharacters: [...this.state.submitCharacters, character]
    })
  }

  render(){
    const {charactersState} = this.state
    const {submitCharacters} = this.state
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    return(
      <div className="container">
        <Table />
        <hr></hr>
        <Table2/>
        <hr></hr>
        <Table3 charactersData={characters} />
        <hr></hr>
        <Table4 charactersData={charactersState} stateName="charactersState" removeCharacter={this.removeCharacter}></Table4>
        <hr></hr>
        <Table5 handleSubmit={this.handleSubmit} />
        <hr></hr>
        <Table6 charactersData={submitCharacters} stateName="submitCharacters" removeCharacter = {this.removesubmitCharacters} />
        <hr></hr>
        <App2 />
      </div>
    )
  }
}

export default App;
