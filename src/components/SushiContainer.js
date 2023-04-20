import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handleMore, handleEatSushi}) {

  const allSushi=sushis.map((sushi) => {
    return <Sushi key ={sushi.id} sushi={sushi} handleEatSushi={handleEatSushi}/>
  })

  return (
    <div className="belt">
      {allSushi}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
