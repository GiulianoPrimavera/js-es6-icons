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

/* 
-devo creare tre array diversi sulla base del type di ogni oggetto nell'array principale (animali, vegetali, utenti)
-devo creare una funzione che mi stampa l'array selezionato a schermo
-devo creare un addEventListener al change del select che mi stampa l'array selezionato
*/

//recupero il main container e il select nell html
const mainContainer = document.getElementById("main_container");
const select = document.getElementById("select");

//creo un array per tipo di oggetto
let arrayAnimali = [];
let arrayVegetali = [];
let arrayUtenti = [];

//popolo ogni array per tipo scorrendo l'array icons
for (let i = 0; i < icons.length; i++){
    const {type, name, prefix} = icons[i];
    console.log(type);

    if (type === "animal"){
        arrayAnimali.push({
            "name" : name,
            "type" : type,
            "prefix" : prefix,
        })
    }
    if (type === "vegetable"){
        arrayVegetali.push({
            "name" : name,
            "type" : type,
            "prefix" : prefix,
        })
    }
    if (type === "user"){
        arrayUtenti.push({
            "name" : name,
            "type" : type,
            "prefix" : prefix,
        })
    }
}

console.log("animali", arrayAnimali);
console.log("vegetalli", arrayVegetali);
console.log("utenti", arrayUtenti);

//funzione che stampa sulla pagina le card con le icone, dato un array
function printIcons (arrayToPrint){
    for (let i = 0; i < arrayToPrint.length; i++){
		
        const {name, type, prefix} = arrayToPrint[i]

        let colori = "";
        //coloro ogni card sulla base del tipo
        if(type === "animal"){
            colori = "red"
        }else if(type === "vegetable"){
            colori = "green"
        }else if(type === "user"){
            colori = "purple"
        }

		//riempo il main container con i vari parametri di ongi oggetto nell'array preso in considerazione
        mainContainer.innerHTML += `<div class="card">
										<div class="icon">
											<i class="fas ${prefix}${name}" style="color: ${colori}"></i>
										</div>
										<div class="icon_text"><h4>${name}</h4></div>
									</div>`
    }
}
//stampo tutte le cards
printIcons(icons)

//al cambiamento del select eseguo
select.addEventListener("change", function(){
	//svuoto il main container
    mainContainer.innerHTML = "";

	//a seconda del valore che ha il select stampo un array diverso
    if(select.value === "0"){
        printIcons(icons)
    }else if(select.value === "1"){
        printIcons(arrayAnimali)
    }else if(select.value === "2"){
        printIcons(arrayVegetali)
    }else if(select.value === "3"){
        printIcons(arrayUtenti)
    }
})