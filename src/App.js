import { useEffect, useState } from 'react';
import './App.css';
import ShowPlayers from './Components/ShowPlayers/ShowPlayers';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from "./FakeData/fakeData.json";

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(fakeData);
  })

  return (
    <div className="App">
        <div className="team">
          
        </div>
        <div className="players">
          {
            players.map(player => <ShowPlayers key={player.id} player={player}></ShowPlayers>)
          }
        </div>
    </div>
  );
}

export default App;
