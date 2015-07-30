$(document).ready(function () {

var clickCounter = 0;
var onePrepend = true;

//The following arrays contain the situations that are randomized to formulate the questions. 
var userInput = [[],[]];

var bodyParts = [
  [
  'arms', 'a head', 'hands', 'fingers', 'teeth', 'a tounge', 'legs', 'toes', 'feet', 'a moustache', 'eyebrows', 'fingernails', 'armpit hair', 'hair', 'eyeballs', 'ears', 'arm hair'
  ],
  [
  'pickles', 'spoon', 'feathers', 'stiff ropes', 'plastic spoons', 'moss', 'cantelopue', 'pinecones', 'candy corn', 'octopus tentacles'
  ]
];

var starWars = [
  [
  'cruise around hoth in a T-47 airspeeder', 'have a heart to heart with Yoda', 'spend a weekend in Cloud City', "shoot a planet with the Deathstar's laser beam", "be the hero that blows up the Deathstar", 'win a ligtsaber battle', 'get sushi with Lando Calrissian'
  ],
  [
    'get a lesson in the force from Obi-wan', 'play chess against C-3PO', 'call one of your most hated enemies a Nerf-herder to thier face', 'ride into battle on a Tauntaun', 'deflect a laser shot with your lightsaber back into the person shooting at you', 'use the force to impress someone'
  ]
];

var disaster = [
   [
   'spend a month on a deserted island', 'be lost in the woods for two weeks', 'be trapped in a space going vessel', 'be lost at sea', 'be the pilot of an airplane and realize that your going to crash', 'be on the top floor of a skyscraper during an earthquake', 'try to outski an avalanche'
   ], 
   [ 
   'run into a mother grizzly and her cubs on the trail', 'be buried alive', 'be among the only survivors of a sunken ship, fighting off hungry sharks', 'be trapped in a house surrounded by hungry zombies', 'be stuck in a tree with hungry lions circling below', 'be trapped in a spaceship floating aimlessly through space' 
   ]
];

initListeners();

//The following are functions that are used to randomized the above scenarios.  A string is returned that (on a click event) replaces the text in the paragraph element in the HTML.

function bodyPartsFunc (arr) {
  var randomSituation = ("Would you rather have " + arr[1][Math.floor(Math.random() * arr[1].length)] + " for " + arr[0][Math.floor(Math.random() * arr[0].length)] + " or " + arr[1][Math.floor(Math.random() * arr[1].length)] + " for " + arr[0][Math.floor(Math.random() * arr[0].length)] + '?' );

  return randomSituation;
}


function starWarsFunc (arr) {
  var randomSituation = ("Would you rather " + arr[1][Math.floor(Math.random() * arr[1].length)] + ", or " + arr[0][ Math.floor(Math.random() * arr[0].length)] + "?" );

  return randomSituation;
    }


function disasterFunc (arr) {
	var randomSituation = ("Would you rather " + arr[1][Math.floor(Math.random() * arr[1].length)] + ", or " + arr[0][Math.floor(Math.random() * arr[0].length)] + "?" );

  return randomSituation;
}

function chooseYourOwn (arr) {
  var randomSituation = ("Would you rather " + arr[1][Math.floor(Math.random() * arr[1].length)] + ", or " + arr[0][Math.floor(Math.random() * arr[0].length)] + "?" );

  return randomSituation;

}

// The following is the jQuerey that listens for a click and changes the text in the paragraph element to the situation created by the function that is run.  
function initListeners () {
  $('#bodyParts').on('click', function () {
    $('#selection').text('Trading parts.  Visualize with caution.');
    $('#output').text(bodyPartsFunc(bodyParts));
  });

  $('#starWars').on('click', function () {
    $('#selection').text('Star Wars, if only..');
    $('#output').text(starWarsFunc(starWars));
  });

  $('#disaster').on('click', function () {
    $('#selection').text('This is a disaster..');
    $('#output').text(disasterFunc(disaster));
  });

  $('#createOwn').on('click', function () {
    var inputOne = prompt('Would you rather: ');
    var inputTwo = prompt('Or:');
    userInput[0].push(inputOne);
    userInput[1].push(inputTwo);
  });

  //This handles the user created situations.
  $('.circle').on('click', function () {
    if (userInput[0].length > 0 && userInput[1].length > 0) {
      if (onePrepend) {
        var chooseOwn = $("<img id='user' class='circle' src=   'createYourOwn.png' style='width: 80px; height: 80px;'>");
        $('#createOwn').before(chooseOwn);
        onePrepend = false;
      }
      $('#user').on('click', function () {
        $('#selection').text('Your own creation!')
        $('#output').text(chooseYourOwn(userInput));
      })
    }
    clickCounter++;
  });

};


});


