import './App.css';
import Landing from './components/Landing';
import Logger from './components/Logger';
import publicIp from 'public-ip';

function App() {
  return (
    <div className="App">
      <Landing />
      <Logger />
    </div>
  );
}

export default App;