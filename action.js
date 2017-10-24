function pokedex(){
  
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
