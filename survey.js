const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const person = {};

rl.question('What is your name? ', (name) => {
  person.name = name
  rl.question("What\'s an acitivity you like doing? ", (acitivity)=>{
    person.acitivity = acitivity;
    rl.question("What do you like to listen to while doing that?",(music)=>{
      person.music = music;
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.)", meal => {
        person.meal = meal;
        rl.question("What's your favourite thing to eat for that meal?", food =>{
          person.food = food;
          rl.question("Which sport is your absolute favourite?", sport =>{
            person.sport = sport;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", power => {
              person.power = power;
              rl.output.write(`${person.name} loves listening to ${person.music} while ${person.acitivity}, devouring ${person.food} for ${person.meal}, prefers ${person.sport} over any other sport, and is amazing at ${person.power}`);
              rl.close();
            })
          })
        } )
      })
    })
  });

});



