import React from "react"
import BotCard from "./BotCard";



function YourBotArmy({ bots, handleClick, handleDischarge }) {

  return (
    <div>
      <div>
        <div> {bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} handleClick={handleClick} handleDischarge={handleDischarge} />
          ))}
        </div>
      </div>
    </div>
  );
  }
  
  export default YourBotArmy;

  