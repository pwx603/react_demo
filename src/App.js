import React, { Component } from 'react';

import './App.css';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <span>Hello My Name is Wen</span>
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

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    console.log("Component Did Mount")
    fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
      return response.json()
    }).then((users)=>{
      this.setState({monsters: users})
    })
  }

  handleChange = (e)=>{
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsteres = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsteres}/>
      </div>
    );
  }
}

export default App;
