
function askName() {
   let name = prompt("quel est votre prénom ?");
   let afficherName = "bonjour " + name;
   document.body.innerHTML += '<h1>' + afficherName + '</h1>'; 
}


function askBirthYear() {
   let birthday = prompt('quelle est votre année de naissance ?');
   let afficherBirthday = 'votre année de naissance est :' + birthday;
   document.body.innerHTML += '<h3>' + afficherBirthday + '</h3>';

   let dateActuelle = new Date();
   let date = dateActuelle.getFullYear();
   let age = " vous avez :" + `${date - birthday}` + "ans";


   document.body.innerHTML += '<h1>' + age + '</h1>';
};



askName();
askBirthYear();

 