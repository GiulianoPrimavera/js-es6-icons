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

//un oggetto contenente tante chiavi quanti sono i type degli oggetti nell'array "icons", ad ognuna di queste chiavi è associato un colore
const colorMap = {
    "animal": "red",
    "vegetable": "green",
    "user": "purple"
}
/* quando chiamo colorMap[type], viene restituito il valore che, all'inteno dell'oggetto "colorMap",
ha la chiave uguale al type dell'elemento preso in considerazione (che nel ciclo è destrutturato),
quindi viene restituita una stringa contenente il nome di un colore */

/**
 * funzione che stampa le icone nella pagina
 * @param {[]} array
 */
function groupByType (icons){
    console.log(icons);

    //creo un oggetto che conterrà tanti array per quanti sono i type presenti nell'array principale "icons"
    const objectByType = {};
    console.log(objectByType);

    //ciclo sull'array
    for (let i = 0; i< icons.length; i++){
        //recupero le key di ogni oggetto all'interno dell'array con il destructuring
        let {name, prefix, type, family} = icons[i];
        
        //se all'interno dell'oggetto "objectByType" non è presente una key con il nome type (destrutturato dall'array icons)
        //allora creo l'array all'interno dell'oggetto che come key ha il type recuperato dall'array icons 
        if (!objectByType[type]) {
            objectByType[type] = [];
        }
        //all'interno dell'array, specificato come "type" che si trova all'interno dell'oggetto "objectByType",
        //eseguo il push degli elementi che dovranno popolarlo
        objectByType[type].push({
            "name": name,
            "prefix": prefix,
            family,
            color: colorMap[type]
        });
    }
    
    console.log(objectByType);
    
    return objectByType;
}

groupByType(icons)