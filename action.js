function pokedex(){
  var pokemones = [
    {
      "id":"001",
      "name":"Charmander",
      "photo":"01",
      "type":"fire"
    },
    {
      "id":"002",
      "name":"Kanjaskan",
      "photo":"02",
      "type":"fighting"
    },
    {
      "id":"003",
      "name":"Mewtwo",
      "photo":"03",
      "type":"fairy"
    },
    {
      "id":"004",
      "name":"Blastoise",
      "photo":"04",
      "type":"water"
    },
    {
      "id":"005",
      "name":"Bulbasaur",
      "photo":"05",
      "type":"grass"
    },
    {
      "id":"006",
      "name":"Magikarp",
      "photo":"06",
      "type":"water"
    },
    {
      "id":"007",
      "name":"Pikachu",
      "photo":"07",
      "type":"electric"
    },
    {
      "id":"008",
      "name":"Gengar",
      "photo":"08",
      "type":"ghost"
    },
    {
      "id":"009",
      "name":"Vamoacalmarno",
      "photo":"09",
      "type":"water"
    }
  ];

  var id = "";
  var name = "";
  var photo = "";
  var type = "";

  var contentPhoto = "";
  var contentInfo = "";
    var infoName = "";
    var infoType = "";
    var infoId = "";
  var auxDiv = "";
  var content = "";

  for(var i=0; i < pokemones.length; i++){
    id = pokemones[i].id;
    name = pokemones[i].name;
    photo = pokemones[i].photo;
    type = pokemones[i].type;

    console.log(id + name + photo + type);

    //constructor de div photo
    contentPhoto = "<div class='photo'>" + "<img src='img/photos/" + photo + ".jpg'>" + "</div>";

    //constructor de div info
    infoName = "<h2>" + name + "</h2>";
    infoId = "<span>" + id + "</span>";
    infoType = "<img src='img/types/" + type + ".png'>";
    auxDiv = "<div class='d-flex justify-content-between'>" + infoId + infoType + "</div>";
    contentInfo = "<div class='info'>" + infoName + auxDiv + "</div>";

    //constructor de div pokemon
    content = content + "<div class='pokemon'>" + contentPhoto + contentInfo + "</div>";
  }

  document.getElementById('container').innerHTML = content;
   console.log(content);

}
