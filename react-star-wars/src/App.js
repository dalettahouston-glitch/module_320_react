import { useEffect, useState } from "react";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./components/StarshipCard";


function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function loadData() {
      const ships = await getAllStarships();
      setStarships(ships);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Starships</h1>
      <div className="starship-grid">
        {starships.map((ship) => (
          <StarshipCard key={ship.url} starship={ship} />
          
        ))}
      </div>
    </div>
  );
}

export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
       
//       </header>
//     </div>
//   );
// }

// export default App;
