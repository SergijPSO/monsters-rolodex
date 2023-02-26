import {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then((response) =>  response.json())
    .then((users) => this.setState(
      () => {
      return {monsters: users}
      },
      () => {
        console.log(this.state);
      }
    ));
  }

  render() {
    console.log('render');
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input className='serach-box' type='search' placeholder='Search for monster' onChange={(event)=> {
          console.log(event.target.value)
          const searchField = event.target.value.toLowerCase()
         
          this.setState(()=> {
            return {searchField};
          })

        }}/>
        {filteredMonsters.map((monster)=> {
          return <div key={monster.id}>
            <h1> {monster.name} </h1>
          </div>
        })}
      </div>
    )

  }
}

export default App;
