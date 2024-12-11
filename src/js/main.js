// Tableau des cartes qui apparaitront dans le jeu
const symbolsArray = [
  { name: "😛", id: 1 },
  { name: "😈", id: 2 },
  { name: "🧠", id: 3 },
  { name: "🧜‍♀", id: 4 },
  { name: "🐝", id: 5 },
  { name: "🌽", id: 6 },
  { name: "😛", id: 7 },
  { name: "😈", id: 8 },
  { name: "🧠", id: 9 },
  { name: "🧜‍♀", id: 10 },
  { name: "🐝", id: 11 },
  { name: "🌽", id: 12 },
];

// Initialisation des variables dont on aura besoin par la suite
let gameBoard = document.getElementById("game-board");
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Mélange les cartes
function shuffle(array) {
  // Implémentez la fonction qui va mélanger les cartes (cardsArray) de manière aléatoire.
  // INDICE: Aidez vous de cette réponse https://stackoverflow.com/a/2450976
}

shuffle(symbolsArray);

// Crée les cartes sur le plateau
function createBoard() {
  // Pour chacune des éléments de l'array cardsArray, on veut:
  // 1. Ajouter un élément <div> au plateau de jeu
  // 2. Cet élément <div> doit avoir:
  // - une class .card.
  // - un attribut data-name qui est égal à l'émoji à deviner
  // - le texte "?"
  // - un écouteur d'événement au clic qui prend la fonction "flipCard()"
  // Ex. du résulat de la div dans le DOM : <div class="card" data-name="😛">?</div>
}

// Retourne la carte
function flipCard() {
  // 1. Vérifiez tout d'abord si le/la joueureuse est autorisé à retourner une carte
  // -> si le jeu est bloqué (lockBoard est "true"), le/la joueur.euse n'a pas le droit de jouer
  // et le reste du code de cette fonction ne doit pas être lu.
  // 2. Lorsqu'une carte est retournée, il faut lui ajouter la class .flipped
  // Il faut également remplacer le "?" par l'émoji qui se trouve dans l'attribut "data-name"
  // INDICE: essayer de faire un console.log(this)
  // 3. Le/la joueureuse doit retourner 2 cartes par manche.
  // Afin de garder le compte, assignez la carte actuellement retournée
  // - soit à "firstCard" si "firstCard" n'est pas null
  // - sinon à "secondCard"
  // 4. Si la seconde carde est assignée, il est temps de vérifier si les 2 cartes sont identiques
  // Il faut donc appeler la fonction checkForMatch();
}

// Vérifie si les cartes correspondent
function checkForMatch() {
  // Vérifiez si les cartes sont identiques.
  // Vous pouvez vous référez à leur attribut data-name pour se faire.
  // Si les 2 cartes sont identiques, alors appelez la fonction disableCards().
  // Sinon, appelez la fonction unflipCards().
}

// Désactive les cartes en cas de correspondance
function disableCards() {
  // Les 2 cartes ayant été devinées, nous n'avons plus besoin d'avoir
  // d'écouteurs d'événements sur celles-ci.
  // On peut ensuite appeler la fonction resetBoard();
}

// Retourne les cartes si elles ne correspondent pas
function unflipCards() {
  // 1. Pour empêcher le/la joueureuse de retourner plus de deux cartes par tour, on utilise la variable "lockBoard".
  // En lui assignant la valeur "true", on bloque le plateau de jeu le temps de faire les opérations nécessaires.

  // La méthode setTimeout() permet de définir un minuteur avant l'exécution d'une fonction.
  // On l'utilise ici afin que le/la joueureuse ait le temps de voir la seconde carte retournée avant la suite de l'exécution du code.
  setTimeout(function () {
    // 2. Pour retourner une carte, il faut
    // - enlever la class ".flipped" des deux cartes jouées

    // - remplacer l'émoji par "?" pour les deux cartes jouées
    // Finalement, appelez la fonction resetBoard().
    resetBoard();
  }, 1000);
}

// Réinitialise les variables (firstCard, secondCard, lockBoard) pour le prochain tour
function resetBoard() {}

// Initialisation du plateau de jeu
createBoard();
