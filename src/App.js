import './App.css';
import Navbar from './components/Navbar';
import {Search} from './pages/Search';
import {Home} from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Search />
    </div>
  );
}

export default App;
