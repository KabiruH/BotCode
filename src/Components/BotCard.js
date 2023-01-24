import React from "react";


function BotCard({ bot, handleClick, handleDischarge }) {
  return (
    <div>
      <div key={bot.id} onClick={() => handleClick(bot.id)}>
        <div>
          <img alt={bot.name} src={bot.avatar_url} />
        </div>
        <div>
          <div>
            {bot.name}
      
          </div>
          <div>
            <small>{bot.catchphrase.substring(0, 28)}</small>
          </div>
        </div>
        <div>
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div>
              <button
                title="Delete this bot"
                className="ui mini red button"
                onClick={(e) => {handleDischarge(bot.id)

                }}
              >
                Rmv
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard; 