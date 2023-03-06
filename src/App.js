
import { useState, useEffect } from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [stringField, setStringField] = useState('');
  // console.log({searchField});
  // console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>  response.json())
    .then((users) => setMonsters(users));
  }, []);


  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.includes(searchField);
    });
    setFilteredMonsters(filteredMonsters);

    console.log('Effect is firinG');

  console.log(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const onStringChange = (event) => {
    setSearchField(event.target.value);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      
      <SearchBox
        className={'search-box'}
        onChangeHandler={onSearchChange}
        placeholder={'Search for monster'} 
      />

      <SearchBox
        onChangeHandler={onStringChange}
        placeholder={'set String'} 
      />

      <CardList monsters = {filteredMonsters}/>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }
 
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users') 
//     .then((response) =>  response.json())
//     .then((users) => this.setState(
//       () => {
//       return {monsters: users}
//       }
//     ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase()
//     this.setState(() => {
//       return {searchField};
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
        
//         <SearchBox
//           className={'search-box'}
//           onChangeHandler={onSearchChange}
//           placeholder={'Search for monster'} 
//         />
//         <CardList monsters = {filteredMonsters}/>
//       </div>
//     )
//   }
// }

export default App;
