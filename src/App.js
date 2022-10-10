import logo from './logo.svg';
import './App.css';
import CharacterList from './Characters/CharacterList';
import Character from './Characters/Character';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Search from './Characters/Search';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Album from './Album/Album';



/* 
  CharacterList, Character og Search bruker bare queuering, ikke mutations.
  Mutations er en måte å endre tilstanden i en database gjennom graphQL

*/


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Album/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/:id' element={<Character/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
