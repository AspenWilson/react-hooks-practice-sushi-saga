import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [sushiBelt, setSushiBelt] = useState(0)
  const [budget, setBudget] = useState(200)
  const displayCount = 4

  useEffect(() => {
    fetch(`http://localhost:3001/sushis`)
    .then((resp) => resp.json())
    .then((sushis) => setSushis(sushis))
  }, [])

  function setEaten(piece){

    const remainingBudget = budget - piece.price

    if (remainingBudget >= 0) {
    setBudget(remainingBudget)

    setSushis(
      sushis.map((sushi) => 
      sushi.id===piece.id ? {...sushi, eaten: true } : sushi
    )
    )
  }
}

  function handleMoreBtn () {
    setSushiBelt((sushiBelt + displayCount) % sushis.length)
  }



  return (
    <div className="app">
      <SushiContainer  sushis={sushis.slice(sushiBelt, sushiBelt + displayCount)} handleMore={handleMoreBtn} handleEatSushi={setEaten}/>
      <Table budget={budget} plates={sushis.filter(sushi => sushi.eaten)}/>
    </div>
  );
}

export default App;
