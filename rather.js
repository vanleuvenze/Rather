$(document).ready(function () {


//The following arrays contain the situations that are randomized to formulate the questions.  
var bodyParts = [
['arms', 'a head', 'hands', 'fingers', 'teeth', 'a tounge', 'legs', 'toes', 'feet', 'a moustache', 'eyebrows', 'fingernails', 'armpit hair', 'hair', 'eyeballs', 'ears', 'arm hair', ],
 ['pickles', 'feathers', 'stiff ropes', 'plastic spoons', 'moss', 'cantelopue', 'pinecones', 'candy corn', 'octopus tentacles']
];

var starWars = [
    ['cruise around hoth in a T-47 airspeeder', 'have a heart to heart with Yoda', 'spend a weekend in Cloud City', "shoot a planet with the Deathstar's laser beam", "be the hero that blows up the Deathstar", 'win a ligtsaber battle', 'get sushi with Lando Calrissian'],
    ['get a lesson in the force from Obi-wan', 'play chess against C-3PO', 'call one of your most hated enemies a Nerf-herder to thier face', 'ride into battle on a Tauntaun', 'deflect a laser shot with your lightsaber back into the person shooting at you', 'use the force to impress someone']
    ];
var disaster = [
   ['spend a month on a deserted island', 'be lost in the woods for two weeks', 'be trapped in a space going vessel', 'be lost at sea', 'be the pilot of an airplane and realize that your going to crash', 'be on the top floor of a skyscraper during an earthquake', 'try to outski an avalanche'

   ], [
   'run into a mother grizzly and her cubs on the trail', 'be buried alive', 'be among the only survivors of a sunken ship, fighting off hungry sharks', 'be trapped in a house surrounded by hungry zombies', 'be stuck in a tree with hungry lions circling below'

   ]

]

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


$('#bodyParts').on('click', function () {
  $('.nonsenseBlock').find('p').text(bodyPartsFunc(bodyParts));
  })
$('#starWars').on('click', function () {
  $('.nonsenseBlock').find('p').text(starWarsFunc(starWars));
})
$('#disaster').on('click', function () {
  $('.nonsenseBlock').find('p').text(disasterFunc(disaster));
})
function trier () {
	document.getElementById('output').innerHTML = ('hello!')
}

// function showImage (src, width, height) {
// 	var img = document.createElement("img");
// 	img.src = src;
// 	img.width = width;
// 	img.height = height;
// 	img.alt = alt;
// 	document.appendChild(img);
// }








})


