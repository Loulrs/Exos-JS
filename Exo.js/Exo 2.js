//chaine de caractère
var MavariableString = "toto";
//nombre
var MavariableNumerique = 100;
//des tableaux
var Mavariabletableau = ['Apple', 'Banana'];
//des objets (ici la fenetre du navigateur) 
var MavariableObjet = window
function test() {
    let x = 10;
    debugger;
    let y = 20;
}
test ();

alert (MavariableString + MavariableNumerique + Mavariabletableau[0]+MavariableObjet.location.pathname);