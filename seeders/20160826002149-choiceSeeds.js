'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('triviaChoices', [{
        choice: "Elegant Tickles",
        triviaQuestionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Eternity Trash" ,
        triviaQuestionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Extra Terrestrial", 
        status: true,
        triviaQuestionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Extra Territorial",
        triviaQuestionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Make it Big",
        status: true,
        triviaQuestionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Make it Small",
        triviaQuestionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Make it Together",
        triviaQuestionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Make it Later",
        triviaQuestionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "1982",
        triviaQuestionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "1955",
        status: true,
        triviaQuestionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "2015",
        triviaQuestionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "1985",
        triviaQuestionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "January 22nd, 1974",
        triviaQuestionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "April 19th, 1981",
        triviaQuestionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "November 30th, 1982",
        status: true,
        triviaQuestionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "June 20th, 1982",
        triviaQuestionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Dull boy",
        status: true,
        triviaQuestionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Funny boy",
        triviaQuestionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Interesting person",
        triviaQuestionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Boring individual",
        triviaQuestionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Marcia, Jan, Cindy, Greg, Peter, Bobby",
        triviaQuestionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "D.J, Stephanie, Michelle",
        triviaQuestionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Sandra, Denise, Theo, Vanessa, Rudy",
        status: true,
        triviaQuestionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Theo, Jenny, Melanie, Rudy, Sandy",
        triviaQuestionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Peekabo",
        triviaQuestionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Trick or treat",
        triviaQuestionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Here's Johnny",
        status: true,
        triviaQuestionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Here's Freddy",
        triviaQuestionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "1990",
        triviaQuestionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "1986",
        triviaQuestionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "1985",
        status: true,
        triviaQuestionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "1979",
        triviaQuestionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "The Beatles",
        status: true,
        triviaQuestionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "The Red Hot Chili Peppers",
        triviaQuestionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "The Smiths",
        triviaQuestionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "General Public",
        triviaQuestionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Basketball shorts",
        triviaQuestionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Underwear",
        triviaQuestionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Nothing",
        status: true,
        triviaQuestionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Another pair of Calvins",
        triviaQuestionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Buttercup",
        status: true,
        triviaQuestionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Cinnamon",
        triviaQuestionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Dorothy",
        triviaQuestionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Lettuce Head",
        triviaQuestionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Ronald McDonald",
        triviaQuestionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Pennywise",
        status: true,
        triviaQuestionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Beetlejuice",
        triviaQuestionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Chucky",
        triviaQuestionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Reese Witherspoon",
        triviaQuestionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Alicia Silverstone",
        status: true,
        triviaQuestionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Reese Withouterspoon",
        triviaQuestionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Brittany Murphy",
        triviaQuestionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Topanga",
        status: true,
        triviaQuestionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Angela",
        triviaQuestionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Calabasas",
        triviaQuestionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Stacey",
        triviaQuestionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "South Boston",
        triviaQuestionId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "West Philadelphia",
        status: true,
        triviaQuestionId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "North Philadelphia",
        triviaQuestionId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Bangladesh",
        triviaQuestionId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Lucy",
        triviaQuestionId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Dawson",
        status: true,
        triviaQuestionId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Bethany",
        triviaQuestionId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Pacey",
        triviaQuestionId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "A sketch comedy show",
        status: true,
        triviaQuestionId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Drama",
        triviaQuestionId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Action packed detective thriller",
        triviaQuestionId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "An after school special about racism",
        triviaQuestionId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Doug Brown",
        triviaQuestionId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Doug Funnie",
        status: true,
        triviaQuestionId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Doug Depression",
        triviaQuestionId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Doug McDonald",
        triviaQuestionId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Blood, Sugar, Sex, Magik",
        status: true,
        triviaQuestionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "De la Soul is Dead",
        triviaQuestionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Californiacation",
        triviaQuestionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Winner Winner Chicken Dinner",
        triviaQuestionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Creep",
        triviaQuestionId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Red Light Special",
        triviaQuestionId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "I Wanna Dance with Somebody",
        status: true,
        triviaQuestionId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Diggin' on You",
        triviaQuestionId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Roger",
        triviaQuestionId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Steve",
        triviaQuestionId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Pete",
        status: true,
        triviaQuestionId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Frank",
        triviaQuestionId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Resevoir Dogs",
        triviaQuestionId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Pulp Fiction",
        status: true,
        triviaQuestionId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Titanic",
        triviaQuestionId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Kill Bill",
        triviaQuestionId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Dookie",
        status: true,
        triviaQuestionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Lemondade",
        triviaQuestionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "The Cheetah Girls",
        triviaQuestionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Christmas Carols",
        triviaQuestionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Degrassi",
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Pete and Pete",
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Daria",
        status: true,
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Beavis and Butthead",
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Downtown",
        status: true,
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Up the street",
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Into your heart",
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Down the river",
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Mean Girls",
        triviaQuestionId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Napoleon Dynamite",
        status: true,
        triviaQuestionId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Pan's Labyrinth",
        triviaQuestionId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Blades of Glory",
        triviaQuestionId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Shrek",
        status: true,
        triviaQuestionId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "The Iron Giant",
        triviaQuestionId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Coraline",
        triviaQuestionId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Toy Story",
        triviaQuestionId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Kate and Spencer",
        triviaQuestionId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Miranda and Gordo",
        status: true,
        triviaQuestionId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Miranda and Travis",
        triviaQuestionId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Matt and Lanny",
        triviaQuestionId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "September 22nd",
        triviaQuestionId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "January 1st",
        triviaQuestionId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "October 3rd",
        status: true,
        triviaQuestionId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "June 9th",
        triviaQuestionId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Monster's Ball",
        status: true,
        triviaQuestionId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Gothika",
        triviaQuestionId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "X-Men",
        triviaQuestionId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Cloud Atlas",
        triviaQuestionId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Doug",
        triviaQuestionId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "The Wild Thornberries",
        status: true,
        triviaQuestionId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Avatar the Last Airbender",
        triviaQuestionId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Kablam!",
        triviaQuestionId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Twilight Saga",
        triviaQuestionId: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Willy Wonka and the Chocolate Factory",
        triviaQuestionId: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "The Babysitter's Club",
        triviaQuestionId: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Harry Potter",
        status: true,
        triviaQuestionId: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Enthusiasm",
        status: true,
        triviaQuestionId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Attitude",
        triviaQuestionId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Energy",
        triviaQuestionId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Apetite",
        triviaQuestionId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "College Dropout",
        triviaQuestionId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Hit Me Baby One More Time",
        triviaQuestionId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Graduation",
        status: true,
        triviaQuestionId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Survivor",
        triviaQuestionId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "She has rippling debt",
        triviaQuestionId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "She has anice ballpoint pen",
        triviaQuestionId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "She has got it going on",
        status: true,
        triviaQuestionId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "She has too many children",
        triviaQuestionId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Black Hole",
        triviaQuestionId: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Persepolis",
        status: true,
        triviaQuestionId: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Akira",
        triviaQuestionId: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Paper Girls",
        triviaQuestionId: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
