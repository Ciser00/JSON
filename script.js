let maingrid = document.getElementById('grid');
let jsonpokemondata = [

  {
    "name"   : "Zeraora",
    "item"   : "Life Orb",
    "evs"    : "252 Atk / 4 SpA / 252 Spe",
    "nature" : "Hasty",
    "moves"  : ["Plasma Fist", "Play Rough", "Close Combat", "Grass Knot"]

  }
  {
    "name"   : "Terrakion",
    "item"   : "Choice Band",
    "evs"    : "252 Atk / 4 SpD / 252 Spe",
    "nature" : "Jolly",
    "moves"  : ["Stone Edge", "Earthquake", "Close Combat", "Quick Attack"]

  }
  {
    "name"   : "Aegislash",
    "item"   : "Leftovers",
    "evs"    : "252 HP / 252 Atk / 4 SpD",
    "nature" : "Adamant",
    "moves"  : ["Shadow Sneak", "Sacred Sword", "Swords Dance", "Kings Shield"]

  }
  {
    "name"   : "Weezing-Galar",
    "item"   : "Black Sludge",
    "evs"    : "252 HP / 60 Def / 196 SpD  ",
    "nature" : "Bold",
    "moves"  : ["Strange Steam", "Haze", "Pain Split", "Toxic"]

  }
  {
    "name"   : "Corviknight",
    "item"   : "Pressure",
    "evs"    : "252 HP / 4 Atk / 252 Def  ",
    "nature" : "Impish",
    "moves"  : ["Brave Bird", "Defog", "U-turn", "Roost"]

  }
  {
    "name"   : "Vaperoen",
    "item"   : "Leftovers",
    "evs"    : "252HP / 4 Atk / 252 Def",
    "nature" : "Calm",
    "moves"  : ["Scald", "Wish", "Protect", "Yawn"]

  }
  {
    "name"   : "",
    "item"   : "",
    "evs"    : "",
    "nature" : "",
    "moves"  : ["", "", "", ""]

  }
  {
    "name"   : "",
    "item"   : "",
    "evs"    : "",
    "nature" : "",
    "moves"  : ["", "", "", ""]

  }
  {
    "name"   : "",
    "item"   : "",
    "evs"    : "",
    "nature" : "",
    "moves"  : ["", "", "", ""]

  }
  {
    "name"   : "",
    "item"   : "",
    "evs"    : "",
    "nature" : "",
    "moves"  : ["", "", "", ""]
  }
]


function createPokemon(jsonpoke){

  let newDIV = document.createElement("DIV");
  newDIV.classlist.add('pokemonitem');

  let newpokemonname = document.createElement('h2');
  //newpokemonname.classlist.add('');
  newpokemonname.innerHTML = jsonpoke['name'];
  newDIV.appendChild(newpokemonname)

  let newItem = document.createElement('p');
  newDIV.appendChild(newItem);

  let newevs = document.createElement('p');
  newDIV.appenedChild(newevs);

  let newNature = document.createElement('p');
  newDIV.appendChild(newNature);

  let movesList = document.createElement('UL');
  newDIV.appendChild(movesList);

  for (var i = 0; i < jsonpoke['moves'].length; i++){
    var currstring = jsonpoke['moves'][i];
    var nextmove = document.createElement("LI");
    nextmove.innerHTML = currstring;
    movesList.appendChild(nextmove);

  }


}
createPokemon(jsonpokemondata);
