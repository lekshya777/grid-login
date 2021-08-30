import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      
      <Navigation />

      <Banner />

      <Heading />
      
     <Login />
    
    </div>
  );
}

export default App;
