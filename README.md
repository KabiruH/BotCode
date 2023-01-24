# Bot Battler

Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army!
## Instructions

This is a React application that displays a list of available bots and their details among other functionalities.

    - Fork this repository to your local machine
    - Run the following command in your terminal 
        npm install 
    - Run the following command to start the back end
        json-server --watch --db.json 
    - On a separate terminal instance, run the following command to run the application itself. If prompted select the option to run it on a different port.
        npm start


## Core Deliverables

As a user, I should be able to:

- See profiles of all Bots rendered in `BotCollection`.
- Enlist an individual bot  by clicking on it. The selected bot should render in the `BotArmy` component. The instance of each bot can be enlisted only **once**. The bot **does not** disappear from the `BotCollection`.
- Remove a bot from the enlisted ones by clicking on it. The bot disappears from the `Bot Army` component.
- Discharge a Bot from their agency forever, by clicking the red button that says X. This removes the bot from both the `BotCollection` and `BotArmy` components on the frontend.

