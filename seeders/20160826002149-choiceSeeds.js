'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('triviaResponses', [{
        choice: "Elegant Tickles",
        status: false,
        triviaQuestionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Eternity Trash" ,
        status: false,
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
        status: false,
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
        status: false,
        triviaQuestionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Make it Together",
        status: false,
        triviaQuestionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Make it Later",
        status: false,
        triviaQuestionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "1982",
        status: false,
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
        status: false,
        triviaQuestionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "1985",
        status: false,
        triviaQuestionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "January 22nd, 1974",
        status: false,
        triviaQuestionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "April 19th, 1981",
        status: false,
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
        status: false,
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
        status: false,
        triviaQuestionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Interesting person",
        status: false,
        triviaQuestionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Boring individual",
        status: false,
        triviaQuestionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Marcia, Jan, Cindy, Greg, Peter, Bobby",
        status: false,
        triviaQuestionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "D.J, Stephanie, Michelle",
        status: false,
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
        status: false,
        triviaQuestionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Peekabo",
        status: false,
        triviaQuestionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Trick or treat",
        status: false,
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
        status: false,
        triviaQuestionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "1990",
        status: false,
        triviaQuestionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "1986",
        status: false,
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
        status: false,
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
        status: false,
        triviaQuestionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "The Smiths",
        status: false,
        triviaQuestionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "General Public",
        status: false,
        triviaQuestionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Basketball shorts",
        status: false,
        triviaQuestionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Underwear",
        status: false,
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
        status: false,
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
        status: false,
        triviaQuestionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Dorothy",
        status: false,
        triviaQuestionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Lettuce Head",
        status: false,
        triviaQuestionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Ronald McDonald",
        status: false,
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
        status: false,
        triviaQuestionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Chucky",
        status: false,
        triviaQuestionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Reese Witherspoon",
        status: false,
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
        status: false,
        triviaQuestionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Brittany Murphy",
        status: false,
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
        status: false,
        triviaQuestionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Calabasas",
        status: false,
        triviaQuestionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Stacey",
        status: false,
        triviaQuestionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "South Boston",
        status: false,
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
        status: false,
        triviaQuestionId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Bangladesh",
        status: false,
        triviaQuestionId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Lucy",
        status: false,
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
        status: false,
        triviaQuestionId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Pacey",
        status: false,
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
        status: false,
        triviaQuestionId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Action packed detective thriller",
        status: false,
        triviaQuestionId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "An after school special about racism",
        status: false,
        triviaQuestionId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Doug Brown",
        status: false,
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
        status: false,
        triviaQuestionId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Doug McDonald",
        status: false,
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
        status: false,
        triviaQuestionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Californiacation",
        status: false,
        triviaQuestionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Winner Winner Chicken Dinner",
        status: false,
        triviaQuestionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Creep",
        status: false,
        triviaQuestionId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Red Light Special",
        status: false,
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
        status: false,
        triviaQuestionId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Roger",
        status: false,
        triviaQuestionId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Steve",
        status: false,
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
        status: false,
        triviaQuestionId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Resevoir Dogs",
        status: false,
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
        status: false,
        triviaQuestionId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Kill Bill",
        status: false,
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
        status: false,
        triviaQuestionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "The Cheetah Girls",
        status: false,
        triviaQuestionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Christmas Carols",
        status: false,
        triviaQuestionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Degrassi",
        status: false,
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Pete and Pete",
        status: false,
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
        status: false,
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
        status: false,
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Into your heart",
        status: false,
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Down the river",
        status: false,
        triviaQuestionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Mean Girls",
        status: false,
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
        status: false,
        triviaQuestionId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Blades of Glory",
        status: false,
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
        status: false,
        triviaQuestionId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Coraline",
        status: false,
        triviaQuestionId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Toy Story",
        status: false,
        triviaQuestionId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Kate and Spencer",
        status: false,
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
        status: false,
        triviaQuestionId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Matt and Lanny",
        status: false,
        triviaQuestionId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "September 22nd",
        status: false,
        triviaQuestionId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "January 1st",
        status: false,
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
        status: false,
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
        status: false,
        triviaQuestionId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "X-Men",
        status: false,
        triviaQuestionId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Cloud Atlas",
        status: false,
        triviaQuestionId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Doug",
        status: false,
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
        status: false,
        triviaQuestionId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Kablam!",
        status: false,
        triviaQuestionId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Twilight Saga",
        status: false,
        triviaQuestionId: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Willy Wonka and the Chocolate Factory",
        status: false,
        triviaQuestionId: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "The Babysitter's Club",
        status: false,
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
        status: false,
        triviaQuestionId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Energy",
        status: false,
        triviaQuestionId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Apetite",
        status: false,
        triviaQuestionId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "College Dropout",
        status: false,
        triviaQuestionId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Hit Me Baby One More Time",
        status: false,
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
        status: false,
        triviaQuestionId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "She has rippling debt",
        status: false,
        triviaQuestionId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "She has anice ballpoint pen",
        status: false,
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
        status: false,
        triviaQuestionId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Black Hole",
        status: false,
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
        status: false,
        triviaQuestionId: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        choice: "Paper Girls",
        status: false,
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
