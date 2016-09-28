console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')


// Part 1
function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // article.add(lands)
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var me = document.createElement('section')
  me.setAttribute('id', 'middle-earth')
  document.body.appendChild(me)
  lands.forEach(function (land) {
    var landArr = document.createElement('article')
    me.appendChild(landArr)
    var heading1 = document.createElement('h1')
    heading1.textContent = land
    landArr.appendChild(heading1)
  })
}
makeMiddleEarth()

// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var shirelist = document.createElement('ul')
  body.querySelector('article').appendChild(shirelist)
  hobbits.forEach(function (hobbit) {
    var shireP = document.createElement('li')
    body.querySelector('ul').appendChild(shireP)
    shireP.textContent = hobbit
    shireP.setAttribute('class', 'hobbit')
  })
}
makeHobbits()

// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var theRing = document.createElement('div')
  theRing.setAttribute('id', 'the-ring')
  theRing.setAttribute('class', 'magic-imbued-jewelry')
  theRing.addEventListener('click', nazgulScreech)
  body.querySelector('li').appendChild(theRing)
}
keepItSecretKeepItSafe()

// Part 4
function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var asideTag = document.createElement('aside')
  var buddieslist = document.createElement('ul')
  body.querySelectorAll('article')[1].appendChild(asideTag)
  body.querySelector('aside').appendChild(buddieslist)
  buddies.forEach(function (buddy) {
    var rivP = document.createElement('li')
    body.querySelectorAll('ul')[1].appendChild(rivP)
    rivP.textContent = buddy
  })
}
makeBuddies()

// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var changefour = body.querySelector('article aside ul li:nth-child(4)')
  changefour.textContent = 'Aragorn'
}
beautifulStranger()

// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  hobbits.forEach(function (hobbit) {
    var assemble = body.querySelectorAll('ul .hobbit')[0]
    body.querySelectorAll('ul')[1].appendChild(assemble)
  })
}
leaveTheShire()

// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var group = document.createElement('div')
  group.className = 'the-fellowship'
  body.querySelectorAll('article')[1].appendChild(group)
  hobbits.forEach(function (hobbit) {
    var guild = body.querySelector('aside .hobbit')
    body.querySelector('div').appendChild(hobbit)
    // alert( + " has joined")
  })
  // buddies.forEach(function (buddy) {
  //   var assemble = body.querySelectorAll('ul .buddy')[0]
  //   body.querySelectorAll('ul')[1].appendChild(assemble)
  // })
  // alert( + " has joined")
}
forgeTheFellowShip()

// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var newguild = body.querySelector('.the-fellowship')
  var newnameGan = newguild.querySelector('li')
  newnameGan.textContent = 'Gandalf the White'
  newnameGan.style.backgroundColor = 'white'
  newnameGan.style.border = 'grey'
}
// theBalrog()

// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("The Horn of Gondor has been blown")
}
// hornOfGondor()

// Part 10
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var mountdiv = document.createElement('div')
  mountdiv.setAttribute('id', 'mount-doom')
}
// itsDangerousToGoAlone()

// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var mdiv = document.createElement('div')
  mdiv.setAttribute('id', 'gollum')
  .querySelectorAll('#gollum').appendChild(mdiv)
}
// weWantsIt()

// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
// thereAndBackAgain()
