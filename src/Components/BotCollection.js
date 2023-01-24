import React, { useState, useEffect } from "react";
import YourBotArmy from "./Yourbot";
import BotsPage from "./BotsPage";


const botsAvailable = 'https://bots-taupe.vercel.app/bots'



function BotCollection() {

  const [bots, setBots] = useState([])


  useEffect(() => {
    fetch(botsAvailable)
      .then(response => response.json())
      .then(data => setBots(data))
  }, [])



  function enlistBot(id) {
    setBots(bots.map(bot => id === bot.id ? {...bot, isEnlisted: true} : bot));
  }
  

  function delistBot(id) {
    setBots(bots.map(bot => id === bot.id ? {...bot, isEnlisted: false} : bot));
  }
  
  function dischargeBot(id) {
    setBots(bots.filter(bot => bot.id === id ? false : true));
  }

  return (
    <div className="bot-collection" >
      <div className="bot-card">
      <YourBotArmy bots={bots.filter(bot => bot.isEnlisted)} handleDischarge={dischargeBot} handleClick={delistBot} />
      </div>
      <div className="bot-card">
      <BotsPage bots= {bots}  handleDischarge={dischargeBot} handleClick={enlistBot}/>
      </div>
      </div>
  )
}

export default BotCollection;


