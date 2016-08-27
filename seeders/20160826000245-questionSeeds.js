'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('triviaQuestions', [{

          question: "What does E.T. stand for?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "What Wham! album featured the single: Careless Whisper?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "What year does Marty McFly travel to in Back to the Future?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "What year did Michael Jackson's 'Thriller' come out?"
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "Finish the sentence: all work and no play makes Jack a ______:",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "What are the names of all the Huxtable children?"
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "what famous line does Jack Nicholson improvise in The Shining?"
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "What year was 'The Breakfast Club' released?"
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "What musical group was NOT formed in the 80s?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "Who was apart of the 'Brat Pack'?"
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "what was the princess' name in 'The Princess Bride'?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "what is the name of the clown in Stephen King's 1986 novel 'It'?"
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "Who played Cher Horowitz in the 1995 film 'Clueless'?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "Who was Corey's love interest on 'Boy Meets World'?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "Where is The Fresh Prince from?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "Who's creek was it?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "What kind of show was 'In Living Color'?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "What is Doug's full name in the Nickelodeon tv show 'Doug'?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "What 1990s 'Red Hot Chili Peppers' album featured the song 'Under the Bridge?",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "What song was NOT on TLC's 1994 album 'CrazySexyCool'?"
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "On the television show 'Pete and Pete', what is Pete's brother's name?"
          createdAt: new Date(),
          updatedAt: new Date()
      },{
          question: "What Quentin Tarantino film came out in 1994?"
          createdAt: new Date(),
          updatedAt: new Date()
      },{
          question: "Which Green Day studio album featured the single 'When I Come Around'?"
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          question: "The song 'Just a Girl' came from what album?"
          createdAt: new Date(),
          updatedAt: new Date()
      },{
        question: "Finish the sentence: 'Making my way______'"
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        question: "What movie starring Jon Heder relased in June 2004?"
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        question: "Which Outkast album featured the single: 'Hey Ya' and 'Roses'?"
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        question: "Who were Lizzie McGuire's best friends?"
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        question: ""
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
