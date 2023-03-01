import {Component} from 'react';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
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
      }
    ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return {searchField};
    })
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          className={'search-box'}
          onChangeHandler={onSearchChange}
          placeholder={'Search for monster'} 
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    )
  }
}

export default App;
