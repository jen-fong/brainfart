# TriviaWars

Heroku link : https://stark-harbor-83694.herokuapp.com/

This game has been through many changes. Originally cooked up as a multiplayer game where two players could move around the screen and place bombs on each others screens to screw each other over, it is now a multiplayer trivia game with the ability to screw each other over using the popular (and rage inducing) minesweeper. Inspired by 80s styled arcade games, we chose design our app with that in mind. First, players are able to create a room where other players can join and challenge each other. Once there are two players, the countdown begins and the game starts. Upon clicking a box, a player will either get a number or a laughing skull. The number will signify the number of bombs around it, exactly as it is in minesweeper. A skull will not cause you to lose, rather, it will drain a portion of the time you have to answer a trivia question. The topic of the questions? Pop culture from the 80s, 90s, to current time. Answer wrong three times or timer runs out and you will be penalized with a life. Answer correctly and your score will tally up. 

- This game uses mysql as the database and sequelize as the ORM.
- The questions and answers are stored on tables.
- The rooms and player data (Score, lives, room, num) are also stored on tables.
- The library responsible for the multiplayer aspect is Socket.io. 
