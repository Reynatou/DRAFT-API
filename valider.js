function villeControle() {
    /**********  Contrôle de la validité du nom de ville  *************/
    
    const nomVille = document.querySelector(`#inputCity`).value;
    
    if (/^[A-Za-z]{3,20}$/.test(nomVille)) {
        return true;
    }
    else {
        alert("Chiffres et symboles ne sont pas autorisés.\n Ne pas dépasser 20 caractères, minimum 3 caractères.");
        return false;
    }
    };
     
    /**********  Fin contrôle de la validité du nom de ville  *************/

    
    if (villeControle) {
        /*Ecouteur d'événement sur la soummission du formulaire, cassage de l'appel par défaut*/
        /*Récupération du nom de la ville entré à partir de la page HTML et appel de l'API*/
        document.querySelector(`form`).addEventListener(`submit`, function (e) {
            e.preventDefault();
            let ville = document.querySelector(`#inputCity`).value;
        
            apiCall(ville);
        });
        
        /*Apple par défaut lors du chargement de la page*/
        
        };
        
    apiCall(`Paris`);