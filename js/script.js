"use strict"

/* 
-devo stampare in pagina tutte le icone 

-devo colorare le icone per tipo

-attraverso la select filtriamo le icone
*/

//array delle icone
const icons =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

//recupero il main container
const mainContainer = document.getElementById("main_container");

//consigliata da Florian
//un oggetto contenente tante chiavi quanti sono i type degli oggetti nell'arrai "icons", ad ognuna di queste chiavi è associato un colore
const colorMap = {
    "animal": "red",
    "vegetable": "green",
    "user": "purple"
}

/**
 * funzione che stampa le icone nella pagina
 * @param {[]} array
 */
function stampIcons (array){
    //svuoto il main container
    mainContainer.innerHTML = "";

    //ciclo sull'array
    for (let i = 0; i< array.length; i++){
        //recupero le key di ogni oggetto all'interno dell'array
        let {name, prefix, type, family} = array[i];

        //chiamando il type (che è stato destrutturato), 
        //in colorMap viene restituito il valore della chiave in colorMap (che è uguale al type dell'elemento sotto ciclo), 
        //quindi viene restituita una stringa contenente il nome di un colore
        console.log(colorMap[type]);

        //inserisco nel mainContainer l'html contenente la classe e il nome della card ciclata
        mainContainer.innerHTML += `<div class="card">
                                        <div class="icon">
                                            <i class="${family} ${prefix}${name}" style="color: ${colorMap[type]}"></i>
                                        </div>
                                        <div class="icon_text"><h4>${name}</h4></div>
                                    </div>`
    }
    console.log(colorMap);
}

stampIcons(icons)