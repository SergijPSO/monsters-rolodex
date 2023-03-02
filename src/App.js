
import { useState } from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  console.log({searchField});

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      
      <SearchBox
        className={'search-box'}
        onChangeHandler={onSearchChange}
        placeholder={'Search for monster'} 
      />
      {/* <CardList monsters = {filteredMonsters}/> */}
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
