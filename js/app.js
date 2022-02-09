'use strict'

let responseOne = prompt('Hi! I\'m glad you stumbled across my website. Let\'s get to know each other. What\'s your name?');
alert('Welcome ' + responseOne + '!');

alert('I have a few questions for ya before you get to know me.');

let responseTwo = prompt('Are you here to give me a job?').toLowerCase();
if (responseTwo === 'yes' || responseTwo === 'y') {
  //console.log('Second question is correct.')
  alert('Great! I could use a nice fat paycheck!');
} else if (responseTwo === 'no' || responseTwo === 'n') {
  alert('Thats a bummer friend, I need a job.');
}

let responseThree = prompt('Is your favorite college Texas A&M?').toLowerCase();
if (responseThree === 'yes' || responseThree === 'y') {
  //console.log('Third question is correct.')
  alert('Awesome! Always great to meet another Aggie!');
} else if (responseThree === 'no' || responseThree === 'n') {
  alert('Looks like you\'re not coming to the football party...');
}


let responseFour = prompt('Is you favorite food steak?').toLowerCase();
if (responseFour === 'yes' || responseFour === 'y') {
  //console.log('Fourth question is correct.')
  alert('Great taste! My favorite food is steak too!');
} else if (responseFour === 'no' || responseFour === 'n') {
  alert('It\'s a real shame we couldn\'t agree on chow.');
}

let responseFive = prompt('Have you traveled outside your country?').toLowerCase();
if (responseFive === 'yes' || responseFive === 'y') {
  //console.log('Fifth question is correct.')
  alert('Me too! I\'m sure you had fun like me.');
} else if (responseFive === 'no' || responseFive === 'n') {
  alert('Life\'s too short, get out there and explore!');
}

let responseSix = prompt('Do you like to fly fish?').toLowerCase();
if (responseSix === 'yes' || responseSix === 'y') {
  //console.log('Sixth question is correct.')
  alert('A fellow fisherman! Let\'s go fishing!');
} else if (responseSix === 'no' || responseSix === 'n') {
  alert('Bummer, sounds like you found a new hobby! I can teach you!');
}

alert('Again, welcome to my page ' + responseOne + ' enjoy your stay!')