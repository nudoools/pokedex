function json() {
	var content = "";

	for(var i=0; i<masPokemones.length; i++){
	
		if(masPokemones[i].type.length	==	2){
			if(masPokemones[i].type[0] == "grass" && masPokemones[i].type[1] == "poison"){
	
					content += "<div class='grassAndpoison'>";
		
						content += "<div class='pokemonImage'>";
							content += "<img class='pokemon-img' src='" + masPokemones[i].ThumbnailImage +"'/>";
						content += "</div>";
		
						content += "<h2 class='pokemon-name'>" + masPokemones[i].name + "</h1>";
						content += "<h1 class='pokemon-id'>" + masPokemones[i].id + "</h2>";
						/* console.log("El array tiene: " + masPokemones[i].type.length + "elementos"); */
						
						content += "<div class='d-flex justify-content-center'>";
						content += "<img class='pokemon-type' src='img/types/" + masPokemones[i].type[0] + ".png'/>";
						content += "<img class='pokemon-type' src='img/types/" + masPokemones[i].type[1] + ".png'/>";
						content += "</div>"
	
					content += "</div>"	
					
    	 		}

    	 	else if(masPokemones[i].type[0] == "fire" && masPokemones[i].type[1] == "flying"){
	
					content += "<div class='fireAndflying'>";
		
						content += "<div class='pokemonImage'>";
							content += "<img class='pokemon-img' src='" + masPokemones[i].ThumbnailImage +"'/>";
						content += "</div>";
		
						content += "<h2 class='pokemon-name'>" + masPokemones[i].name + "</h1>";
						content += "<h1 class='pokemon-id'>" + masPokemones[i].id + "</h2>";
						/* console.log("El array tiene: " + masPokemones[i].type.length + "elementos"); */
						
						content += "<div class='d-flex justify-content-center'>";
						content += "<img class='pokemon-type' src='img/types/" + masPokemones[i].type[0] + ".png'/>";
						content += "<img class='pokemon-type' src='img/types/" + masPokemones[i].type[1] + ".png'/>";
						content += "</div>"
	
					content += "</div>"
    	 		}
			}
	
		else if(masPokemones[i].type.length	==	1) {
			for(var i=0; i<masPokemones.length; i++){
				content += "<div class='pokemonItem'>";
	
					content += "<div class='pokemonImage'>";
						content += "<img class='pokemon-img' src='" + masPokemones[i].ThumbnailImage +"'/>";
					content += "</div>";
	
					content += "<h2 class='pokemon-name'>" + masPokemones[i].name + "</h1>";
					content += "<h1 class='pokemon-id'>" + masPokemones[i].id + "</h2>";
					/* console.log("El array tiene: " + masPokemones[i].type.length + "elementos"); */
					if(masPokemones[i].type.length	==	2){
						content += "<div class='d-flex justify-content-center'>";
						content += "<img class='pokemon-type' src='img/types/" + masPokemones[i].type[0] + ".png'/>";
						content += "<img class='pokemon-type' src='img/types/" + masPokemones[i].type[1] + ".png'/>";
						content += "</div>"
					} else {
						content += "<div class='Xd-flex justify-content-center pokemon-uni-type'>";
						content += "<img class='pokemon-uni-type' src='img/types/" + masPokemones[i].type +".png'/>";
						content += "</div>"
					}
	
				content += "</div>"	
						
			}
		}	
	}

	console.log(content);
	document.getElementById("result").innerHTML = content;								
}


