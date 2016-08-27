'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('triviaChoices', [{
        choice: "Elegant Tickles"
      },{
        choice: "Eternity Trash" 
      },{
        choice: "Extra Terrestrial", 
        status: true
      },{
        choice: "Extra Territorial"
      },{
        choice: "Make it Big",
        staus: true
      },{
        choice: "Make it Small"
      },{
        choice: "Make it Together"
      },{
        choice: "Make it Later"
      },{
        choice: "1982"
      },{
        choice: "1955",
        staus: true
      },{
        choice: "2015"
      },{
        choice: "1985"
      },{
        choice: "January 22nd, 1974"
      },{
        choice: "April 19th, 1981"
      },{
        choice: "November 30th, 1982",
        status: true
      },{
        choice: "June 20th, 1982"
      },{
        choice: "Dull boy",
        status: true
      },{
        choice: "Funny boy"
      },{
        choice: "Interesting person"
      },{
        choice: "Boring individual"
      },{
        choice: "Marcia, Jan, Cindy, Greg, Peter, Bobby"
      },{
        choice: "D.J, Stephanie, Michelle"
      },{
        choice: "Sandra, Denise, Theo, Vanessa, Rudy",
        status: true
      },{
        choice: "Theo, Jenny, Melanie, Rudy, Sandy"
      },{
        choice: "Peekabo"
      },{
        choice: "Trick or treat"
      },{
        choice: "Here's Johnny",
        status: true
      },{
        choice: "Here's Freddy"
      },{
        choice: "1990"
      },{
        choice: "1986"
      },{
        choice: "1985",
        status: true
      },{
        choice: "1979"
      },{
        choice: "The Beatles",
        status: true
      },{
        choice: "The Red Hot Chili Peppers"
      },{
        choice: "The Smiths"
      },{
        choice: "General Public"
      },{
        choice: "Basketball shorts"
      },{
        choice: "Underwear"
      },{
        choice: "Nothing",
        status: true
      },{
        choice: "Another pair of Calvins"
      },{
        choice: "Buttercup",
        status: true
      },{
        choice: "Cinnamon"
      },{
        choice: "Dorothy"
      },{
        choice: "Lettuce Head"
      },{
        choice: "Ronald McDonald"
      },{
        choice: "Pennywise",
        status: true
      },{
        choice: "Beetlejuice"
      },{
        choice: "Chucky"
      },{
        choice: "Reese Witherspoon"
      },{
        choice: "Alicia Silverstone",
        status: true
      },{
        choice: "Reese Withouterspoon"
      },{
        choice: "Brittany Murphy"
      },{
        choice: "Topanga",
        status: true
      },{
        choice: "Angela"
      },{
        choice: "Calabasas"
      },{
        choice: "Stacey"
      },{
        choice: "South Boston"
      },{
        choice: "West Philadelphia",
        status: true
      },{
        choice: "North Philadelphia"
      },{
        choice: "Bangladesh"
      },{
        choice: "Lucy"
      },{
        choice: "Dawson",
        status: true
      },{
        choice: "Bethany"
      },{
        choice: "Pacey"
      },{
        choice: "A sketch comedy show",
        status: true
      },{
        choice: "Drama"
      },{
        choice: "Action packed detective thriller"
      },{
        choice: "An after school special about racism"
      },{
        choice: "Doug Brown"
      },{
        choice: "Doug Funnie",
        status: true
      },{
        choice: "Doug Depression"
      },{
        choice: "Doug McDonald"
      },{
        choice: "Blood, Sugar, Sex, Magik",
        status: true
      },{
        choice: "De la Soul is Dead"
      },{
        choice: "Californiacation"
      },{
        choice: "Winner Winner Chicken Dinner"
      },{
        choice: "Creep"
      },{
        choice: "Red Light Special"
      },{
        choice: "I Wanna Dance with Somebody",
        status: true
      },{
        choice: "Diggin' on You"
      },{
        choice: "Roger"
      },{
        choice: "Steve"
      },{
        choice: "Pete",
        status: true
      },{
        choice: "Frank"
      },{
        choice: "Resevoir Dogs"
      },{
        choice: "Pulp Fiction",
        status: true
      },{
        choice: "Titanic"
      },{
        choice: "Kill Bill"
      },{
        choice: "Dookie",
        status: true
      },{
        choice: "Lemondade"
      },{
        choice: "The Cheetah Girls"
      },{
        choice: "Christmas Carols"
      },{
        choice: "Degrassi"
      },{
        choice: "Pete and Pete"
      },{
        choice: "Daria",
        status: true
      },{
        choice: "Beavis and Butthead"
      },{
        choice: "Downtown",
        status: true
      },{
        choice: "Up the street"
      },{
        choice: "Into your heart"
      },{
        choice: "Down the river"
      },{
        choice: "Mean Girls"
      },{
        choice: "Napoleon Dynamite",
        status: true
      },{
        choice: "Pan's Labyrinth"
      },{
        choice: "Blades of Glory"
      },{
        choice: "Shrek",
        status: true
      },{
        choice: "The Iron Giant"
      },{
        choice: "Coraline"
      },{
        choice: "Toy Story"
      },{
        choice: "Kate and Spencer"
      },{
        choice: "Miranda and Gordo",
        status: true
      },{
        choice: "Miranda and Travis"
      },{
        choice: "Matt and Lanny"
      },{
        choice: "September 22nd"
      },{
        choice: "January 1st"
      },{
        choice: "October 3rd",
        status: true
      },{
        choice: "June 9th"
      },{
        choice: "Monster's Ball",
        status: true
      },{
        choice: "Gothika"
      },{
        choice: "X-Men"
      },{
        choice: "Cloud Atlas"
      },{
        choice: "Doug"
      },{
        choice: "The Wild Thornberries",
        status: true
      },{
        choice: "Avatar the Last Airbender"
      },{
        choice: "Kablam!"
      },{
        choice: "Twilight Saga"
      },{
        choice: "Willy Wonka and the Chocolate Factory"
      },{
        choice: "The Babysitter's Club"
      },{
        choice: "Harry Potter",
        status: true
      },{
        choice: "Enthusiasm",
        status: true
      },{
        choice: "Attitude"
      },{
        choice: "Energy"
      },{
        choice: "Apetite"
      },{
        choice: "College Dropout"
      },{
        choice: "Hit Me Baby One More Time"
      },{
        choice: "Graduation",
        status: true
      },{
        choice: "Survivor"
      },{
        choice: "Science"
      },{
        choice: "A pencil"
      },{
        choice: "Bad",
        status: true
      },{
        choice: "His leg"
      },{
        choice: "Black Hole"
      },{
        choice: "Persepolis",
        status: true
      },{
        choice: "Akira"
      },{
        choice: "Paper Girls"
      }
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
