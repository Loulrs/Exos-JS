// Demander à l'utilisateur d'entrer un nombre
let n = prompt("Entrez un nombre : je vais calculer la somme de 1 à ce nombre");

// Convertir la saisie en un nombre entier
n = parseInt(n);

// Vérifier si la saisie est un nombre valide
if (!isNaN(n) && n > 0) {
    let somme = 0;

    // Calculer la somme de 1 à n avec une boucle
    for (let i = 1; i <= n; i++) {
        somme += i;
    }

    // Afficher le résultat dans une alerte
    alert(`La somme des nombres de 1 à ${n} est : ${somme}`);
} else {
    // Gérer les cas où l'utilisateur n'entre pas un nombre valide
    alert("Veuillez entrer un nombre entier positif !");
}
