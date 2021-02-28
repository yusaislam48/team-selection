import { useEffect, useState } from 'react';
import './App.css';
import ShowPlayers from './Components/ShowPlayers/ShowPlayers';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from "./FakeData/fakeData.json";
import AddToTeam from './Components/AddToTeam/AddToTeam';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(fakeData);
  }, [])

  const [teamMembers, setTeamMembers] = useState([]);
  
  const addToTeamBtnHandler = (player) => {
    let item = teamMembers.indexOf(player);
    if (item === -1) {
      const newTeamMembers = [...teamMembers, player];
      setTeamMembers(newTeamMembers);
    } else {
      alert("This Country Already Added!");
    }

  }

  return (
    <div className="App">
        <div className="team">
          <AddToTeam teamMembers = {teamMembers}></AddToTeam>
        </div>
        <div className="players">
          {
            players.map(player => <ShowPlayers key={player.id} player={player} addToTeamBtnHandler={addToTeamBtnHandler}></ShowPlayers>)
          }
        </div>
    </div>
  );
}

export default App;
