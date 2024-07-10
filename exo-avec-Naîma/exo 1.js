let form = document.querySelector("form")
form.addEventListener("submit", listen)

function listen(event) {
    onNameEntered(event);
    onDateEntered(event);
}

function onNameEntered(event) {
    event.preventDefault()

    let userName = document.getElementById("prenom")
    let resultUserName = userName.value
    userName.value = ""

    let message = " Bonjour " + resultUserName

    document.querySelector(".custom-name").innerHTML = message;

    // pour créer la balise et  injecter la donnée en bas du html 
    //document.body.innerHTML += "<h2>"+ nomVariable + "</h2>"
    // pour injecter la donnée dans la balise h2 existante
    //document.querySelector("h2").innerHTML = "toto"

}

function onDateEntered(event) {
    event.preventDefault()
    let birthdayYear = document.getElementById("date_naissance")
    let resultBirthdayYear = new Date(birthdayYear.value)
    date_naissance.value = ""

    console.log(resultBirthdayYear.getFullYear());

    let dateActuelle = new Date();
    let year = dateActuelle.getFullYear() - resultBirthdayYear.getFullYear();
    //let month = dateActuelle.getMonth() + 1; // Ajout de 1 car les mois vont de 0 à 11 , un calendrier et un tableau
    let messageBirthday = "Vous avez " + year + " ans";

    document.querySelector(".custom-date").innerHTML = messageBirthday

}

