import React from 'react';
import BotCard from './BotCard';

export default function BotsPage({bots, handleClick, handleDischarge}) {


  return ( 
    <div className="ui four column grid">
      <div>{bots.map(bot => <BotCard key={bot.id} bot={bot} 
        handleDischarge={handleDischarge} handleClick={handleClick} />)}
      </div>
    </div>
  );
}