// Alguna vez te has preguntado cómo sería tu nombre de superhéroe? ¡Descubrámoslo!

const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor", "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"]

const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"]

const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]

const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]



// funcion random hombre



   let superheroehombre = (titulos_masculino[Math.floor(Math.random() * (18 - 0)) + 0] + "  " + sustantivos[Math.floor(Math.random() * (18 - 0)) + 0] + " " + adjetivos[Math.floor(Math.random() * (18 - 0))]);
   

// funcion random mujer


let superheroemujer = (titulos_femenino[Math.floor(Math.random() * (18 - 0)) + 0] + "  " + sustantivos[Math.floor(Math.random() * (18 - 0)) + 0] + " " + adjetivos[Math.floor(Math.random() * (18 - 0))]);


//eventos

let botonHombre = document.querySelectorAll(".botonHombre")[0] // Parte hombre
botonHombre.addEventListener("click", function () {

    let divResultado = document.querySelectorAll(".divResultado")[0]
    divResultado.innerHTML = superheroehombre;
})
 // evento mujer

let botonMujer = document.querySelectorAll(".botonMujer")[0] // Parte hombre
botonMujer.addEventListener("click", function () {

    let divResultado = document.querySelectorAll(".divResultado")[0]
    divResultado.innerHTML = superheroemujer;
})
