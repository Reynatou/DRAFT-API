/*Création de la constante APIKEY et affectatioh de la valeur de la clé API*/
const APIKEY = `dfd0cf24f3a6ffc667dfda89950271fa`;

/*1er appel à l'API, formatage des informations en format json*/
/*Nouvelle promesse pour récupérer les données et affichage des données en modifiant les pages HTML*/
/*Appel de l'API avec ville en paramètre, affectation de l'url de l'API*/

let apiCall = function (city) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then((response) => response.json()
    .then((data) => {
        console.log(data);
        document.querySelector(`#city`).innerHTML = data.name;
        document.querySelector(`#temp`).innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp + `°`;
        document.querySelector(`#humidity`).innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + `%`;
        document.querySelector(`#wind`).innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + `km/h`;
    }))

/*Création d'une fonction err pour récupérer le code erreur au cas où l'appel à l'API ne fonctionne pas*/
.catch((err) => console.log(`Erreur :` + err));
};

let form = document.querySelector(`#searchForm`);
let ville = document.querySelector(`#inputCity`).value;

/* Ecoute de la modification du nom de ville */

form.nomVille.addEventListener(`change`, function() {
    validName(this);
});

form.addEventListener(`click`, function() {
    e.preventDefault();
    if (validName(form.nomVille)) {
        apiCall(ville);
    };
});
const validName = function(inputName) {
    let nameRegExp = new RegExp(
        '^[a-zA-Z- ]$', 'g'
    );
   
    let small = inputName.nextElementSibling;

    if (nameRegExp.test(inputName.value)) {
        small.innerHTML = "Nom de ville valide";
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    }
    else {
        small.innerHTML = "Nom de ville non valide";
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
};

/*Ecouteur d'événement sur la soummission du formulaire, cassage de l'appel par défaut*/
/*Récupération du nom de la ville entré à partir de la page HTML et appel de l'API*/

/*Apple par défaut lors du chargement de la page*/

apiCall(`Paris`);