"use strict";

// there is currently only two players, and names will be pikachu and eevee

const players = [];
function player(id, playerName) {
  players.push({ id: id, name: playerName });
}

let deck = [];

const suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
const icon = ["♦", "♣", "♥", "♠"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const face = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]; // face of the card

class Cards {
  constructor(suit, icon, value, face) {
    (this.suit = suit),
      (this.icon = icon),
      (this.value = value),
      (this.face = face);
  }

  get color() {
    return this.suit === "Clubs" || this.suit === "Spades" ? "black" : "red";
  }

  getHTML() {
    const cardDiv = document.createElement("div");
    cardDiv.innerText = `${this.face} ${this.icon}`;
    cardDiv.classList.add("card", this.color);
    cardDiv.dataset.value = `${this.face} ${this.suit}`;
    return cardDiv;
  }
}

function createDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < value.length; j++) {
      deck.push(new Cards(suits[i], icon[i], value[j], face[j]));
    }
  }
  console.log(deck);
}

function shuffleDeck() {
  for (let i = 0; i < 52; i++) {
    let tempCard = deck[i];
    let randomCardIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomCardIndex];
    deck[randomCardIndex] = tempCard;
  }
  console.log("shuffled");
}

let p1Hand = [];
let p2Hand = [];

// deal 2 cards each to players, pre-flop
function dealCardsToPlayers() {
  const card1 = document.querySelector("#card-1");
  const card2 = document.querySelector("#card-2");
  const card3 = document.querySelector("#card-3");
  const card4 = document.querySelector("#card-4");

  const cardPlaceholder1 = deck.pop();
  const cardPlaceholder2 = deck.pop();
  const cardPlaceholder3 = deck.pop();
  const cardPlaceholder4 = deck.pop();

  p1Hand.push(cardPlaceholder1, cardPlaceholder2);
  p2Hand.push(cardPlaceholder3, cardPlaceholder4);

  card1.appendChild(cardPlaceholder1.getHTML());
  card2.appendChild(cardPlaceholder2.getHTML());
  card3.appendChild(cardPlaceholder3.getHTML());
  card4.appendChild(cardPlaceholder4.getHTML());

  console.log(deck);
  console.log(p1Hand);
  console.log(p2Hand);
}

// deal community cards, for now deal all 5 first and check options only for both players
function dealCommunityCards(e) {
  // e.preventDefault();
  // burn 1 card first before dealing
  deck.shift();
  // deal here
  const cardA = document.querySelector("#card-a");
  const cardB = document.querySelector("#card-b");
  const cardC = document.querySelector("#card-c");
  const cardD = document.querySelector("#card-d");
  const cardE = document.querySelector("#card-e");

  const cardPlaceholderA = deck.pop();
  const cardPlaceholderB = deck.pop();
  const cardPlaceholderC = deck.pop();
  const cardPlaceholderD = deck.pop();
  const cardPlaceholderE = deck.pop();

  p1Hand.push(
    cardPlaceholderA,
    cardPlaceholderB,
    cardPlaceholderC,
    cardPlaceholderD,
    cardPlaceholderE
  );
  p2Hand.push(
    cardPlaceholderA,
    cardPlaceholderB,
    cardPlaceholderC,
    cardPlaceholderD,
    cardPlaceholderE
  );

  // print out the card values
  // cardA.innerHTML = Object.values(cardPlaceholderA);
  // cardB.innerHTML = Object.values(cardPlaceholderB);
  // cardC.innerHTML = Object.values(cardPlaceholderC);
  // cardD.innerHTML = Object.values(cardPlaceholderD);
  // cardE.innerHTML = Object.values(cardPlaceholderE);
  cardA.appendChild(cardPlaceholderA.getHTML());
  cardB.appendChild(cardPlaceholderB.getHTML());
  cardC.appendChild(cardPlaceholderC.getHTML());
  cardD.appendChild(cardPlaceholderD.getHTML());
  cardE.appendChild(cardPlaceholderE.getHTML());

  console.log(p1Hand);
  console.log(p2Hand);
  console.log(deck);
}
document.querySelector(".deal").addEventListener("click", dealCommunityCards);

// add div for btn & btn for player 1
// not sure why not working so leave it first
// function addForPlayers(e) {
//   if (e.target === document.querySelector(".check")) {
//     const cardA = document.querySelector(".add-for-players");
//     // const cardB = document.querySelector("#card-b").innerText;
//     // const cardC = document.querySelector("#card-c").innerText;
//     // const cardD = document.querySelector("#card-d").innerText;
//     // const cardE = document.querySelector("#card-e").innerText;

//     const addForP1Btn1 = document.createElement("button");
//     const addNewDiv1 = document.createElement("div");
//     addForP1Btn1.className = "player1-add";
//     addForP1Btn1.textContent = "Add for Pikachu";
//     cardA.appendChild(addNewDiv1);
//     addNewDiv1.appendChild(addForP1Btn1);
//   }
// }
// // deal turn cards
// if there is time
// function dealTurn(e) {
//   e.preventDefault();
//   if (e.target === document.querySelector(".check")) {
//     document
//       .querySelector(".check")
//       .removeEventListener("click", dealCommunityCards);

//     document
//       .querySelector(".check")
//       .addEventListener("click", dealCommunityCards);
//     // burn 1 card first before dealing
//     deck.shift();
//     // deal here
//     document.querySelector("#card-d").innerHTML = deck.pop();
//   }
//   console.log(deck);
// }

// // deal river cards
// function dealRiver(e) {
//   e.preventDefault();
//   if (e.target === document.querySelector(".check")) {
//     // burn 1 card first before dealing
//     deck.shift();
//     // deal here
//     document.querySelector("#card-e").innerHTML = deck.pop();
//   }
//   console.log(deck);
// }

function startGame() {
  player(1, "Pikachu");
  player(2, "Eevee");

  const player1Img = document.createElement("img");
  player1Img.setAttribute("src", "img/pikachu_copy.png");
  document.querySelector("#player1").appendChild(player1Img);

  const player1 = document.querySelector("#name-1");
  player1.innerHTML = players[0].name;

  const player2Img = document.createElement("img");
  player2Img.setAttribute("src", "img/eevee_copy.png");
  document.querySelector("#player2").appendChild(player2Img);

  const player2 = document.querySelector("#name-2");
  player2.innerHTML = players[1].name;

  createDeck();
  shuffleDeck();
  dealCardsToPlayers();
  console.log(deck[0]);
}

// restarting game
function restart(e) {
  deck = [];
  p1Hand = [];
  p2Hand = [];
  player1Hand = [];
  player1Object = [];
  player2Hand = [];
  player2Object = [];
  pikachuHand = [];
  eeveeHand = [];

  createDeck();
  shuffleDeck();

  const removeRed = document.querySelectorAll(".card.red");
  const removeBlack = document.querySelectorAll(".card.black");
  removeRed.forEach((e) => e.remove());
  removeBlack.forEach((e) => e.remove());

  dealCardsToPlayers();
}

////////////////////////////////
// to win
////////////////////////////////

// for player 1
// if chosing from own hand
let player1Hand = [];
let player1Object = [];
document
  .querySelector("#card-1")
  .addEventListener("click", function player1(e) {
    const player1Selected = document.querySelector(".player1-selected");
    const printPlayer1Hand = document.createElement("div");
    printPlayer1Hand.className = "player-chosen-hand";

    const chosen1 = Object.values(p1Hand[0]);
    const chosen1Object = p1Hand[0];

    player1Hand.push(chosen1);
    player1Object.push(chosen1Object);

    // console.log(player1Hand);
    console.log(player1Object);
    // printPlayer1Hand.innerText = chosen1;
    // player1Selected.appendChild(printPlayer1Hand);
    player1Selected.appendChild(p1Hand[0].getHTML());
  });

document
  .querySelector("#card-2")
  .addEventListener("click", function player1(e) {
    const player1Selected = document.querySelector(".player1-selected");
    const printPlayer1Hand = document.createElement("div");
    printPlayer1Hand.className = "player-chosen-hand";

    const chosen2 = Object.values(p1Hand[1]);
    const chosen2Object = p1Hand[1];

    player1Hand.push(chosen2);
    player1Object.push(chosen2Object);

    // console.log(player1Hand);
    console.log(player1Object);
    // printPlayer1Hand.innerText = chosen2;
    // player1Selected.appendChild(printPlayer1Hand);
    player1Selected.appendChild(p1Hand[1].getHTML());
  });

// if chosing from community
document.querySelector("#pikachu-add1").addEventListener("click", (e) => {
  const addforPikachu = document.querySelector("#pikachu-add1");
  const chosenA = Object.values(p1Hand[2]);
  const chosenAObject = p1Hand[2];
  if (e.target === addforPikachu) {
    const player1Selected = document.querySelector(".player1-selected");
    const printPlayer1Hand = document.createElement("div");
    printPlayer1Hand.className = "player-chosen-hand";

    player1Hand.push(chosenA);
    player1Object.push(chosenAObject);
    // console.log(player1Hand);
    console.log(player1Object);

    // printPlayer1Hand.innerText = chosenA;
    // player1Selected.appendChild(printPlayer1Hand);
    player1Selected.appendChild(p1Hand[2].getHTML());
  }
  if (player1Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

document.querySelector("#pikachu-add2").addEventListener("click", (e) => {
  const addforPikachu = document.querySelector("#pikachu-add2");
  const chosenB = Object.values(p1Hand[3]);
  const chosenBObject = p1Hand[3];
  if (e.target === addforPikachu) {
    const player1Selected = document.querySelector(".player1-selected");
    const printPlayer1Hand = document.createElement("div");
    printPlayer1Hand.className = "player-chosen-hand";

    player1Hand.push(chosenB);
    player1Object.push(chosenBObject);
    // console.log(player1Hand);
    console.log(player1Object);

    // printPlayer1Hand.innerText = chosenB;
    // player1Selected.appendChild(printPlayer1Hand);
    player1Selected.appendChild(p1Hand[3].getHTML());
  }
  if (player1Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

document.querySelector("#pikachu-add3").addEventListener("click", (e) => {
  const addforPikachu = document.querySelector("#pikachu-add3");
  const chosenC = Object.values(p1Hand[4]);
  const chosenCObject = p1Hand[4];
  if (e.target === addforPikachu) {
    const player1Selected = document.querySelector(".player1-selected");
    const printPlayer1Hand = document.createElement("div");
    printPlayer1Hand.className = "player-chosen-hand";

    player1Hand.push(chosenC);
    player1Object.push(chosenCObject);
    // console.log(player1Hand);
    console.log(player1Object);

    // printPlayer1Hand.innerText = chosenC;
    // player1Selected.appendChild(printPlayer1Hand);
    player1Selected.appendChild(p1Hand[4].getHTML());
  }
  if (player1Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

document.querySelector("#pikachu-add4").addEventListener("click", (e) => {
  const addforPikachu = document.querySelector("#pikachu-add4");
  const chosenD = Object.values(p1Hand[5]);
  const chosenDObject = p1Hand[5];
  if (e.target === addforPikachu) {
    const player1Selected = document.querySelector(".player1-selected");
    const printPlayer1Hand = document.createElement("div");
    printPlayer1Hand.className = "player-chosen-hand";

    player1Hand.push(chosenD);
    player1Object.push(chosenDObject);
    // console.log(player1Hand);
    console.log(player1Object);

    // printPlayer1Hand.innerText = chosenD;
    // player1Selected.appendChild(printPlayer1Hand);
    player1Selected.appendChild(p1Hand[5].getHTML());
  }
  if (player1Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

document.querySelector("#pikachu-add5").addEventListener("click", (e) => {
  const addforPikachu = document.querySelector("#pikachu-add5");
  const chosenE = Object.values(p1Hand[6]);
  const chosenEObject = p1Hand[6];
  if (e.target === addforPikachu) {
    const player1Selected = document.querySelector(".player1-selected");
    const printPlayer1Hand = document.createElement("div");
    printPlayer1Hand.className = "player-chosen-hand";

    player1Hand.push(chosenE);
    player1Object.push(chosenEObject);
    // console.log(player1Hand);
    console.log(player1Object);

    // printPlayer1Hand.innerText = chosenE;
    // player1Selected.appendChild(printPlayer1Hand);
    player1Selected.appendChild(p1Hand[6].getHTML());
  }
  if (player1Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

// for player 2
// if chosing from own hand
let player2Hand = [];
let player2Object = [];
document.querySelector("#card-3").addEventListener("click", (e) => {
  const player2Selected = document.querySelector(".player2-selected");
  const printPlayer2Hand = document.createElement("div");
  printPlayer2Hand.className = "player-chosen-hand";

  const chosen1 = Object.values(p2Hand[0]);
  const chosen1Object = p2Hand[0];

  player2Hand.push(chosen1);
  player2Object.push(chosen1Object);

  // console.log(player2Hand);
  console.log(player2Object);
  // printPlayer2Hand.innerText = chosen1;
  // player2Selected.appendChild(printPlayer2Hand);
  player2Selected.appendChild(p2Hand[0].getHTML());
});

document.querySelector("#card-4").addEventListener("click", (e) => {
  const player2Selected = document.querySelector(".player2-selected");
  const printPlayer2Hand = document.createElement("div");
  printPlayer2Hand.className = "player-chosen-hand";

  const chosen2 = Object.values(p2Hand[1]);
  const chosen2Object = p2Hand[1];

  player2Hand.push(chosen2);
  player2Object.push(chosen2Object);

  // console.log(player2Hand);
  console.log(player2Object);

  // printPlayer2Hand.innerText = chosen2;
  // player2Selected.appendChild(printPlayer2Hand);
  player2Selected.appendChild(p2Hand[1].getHTML());
});

// if chosing from community
document.querySelector("#eevee-add1").addEventListener("click", (e) => {
  const addForEevee = document.querySelector("#eevee-add1");
  const chosenA = Object.values(p2Hand[2]);
  const chosenAObject = p2Hand[2];
  if (e.target === addForEevee) {
    const player2Selected = document.querySelector(".player2-selected");
    const printPlayer2Hand = document.createElement("div");
    printPlayer2Hand.className = "player-chosen-hand";

    player2Hand.push(chosenA);
    player2Object.push(chosenAObject);
    // console.log(player2Hand);
    console.log(player2Object);

    // printPlayer2Hand.innerText = chosenA;
    // player2Selected.appendChild(printPlayer2Hand);
    player2Selected.appendChild(p2Hand[2].getHTML());
  }
  if (player2Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

document.querySelector("#eevee-add2").addEventListener("click", (e) => {
  const addForEevee = document.querySelector("#eevee-add2");
  const chosenB = Object.values(p2Hand[3]);
  const chosenBObject = p2Hand[3];
  if (e.target === addForEevee) {
    const player2Selected = document.querySelector(".player2-selected");
    const printPlayer2Hand = document.createElement("div");
    printPlayer2Hand.className = "player-chosen-hand";

    player2Hand.push(chosenB);
    player2Object.push(chosenBObject);
    // console.log(player2Hand);
    console.log(player2Object);

    // printPlayer2Hand.innerText = chosenB;
    // player2Selected.appendChild(printPlayer2Hand);
    player2Selected.appendChild(p2Hand[3].getHTML());
  }
  if (player2Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

document.querySelector("#eevee-add3").addEventListener("click", (e) => {
  const addForEevee = document.querySelector("#eevee-add3");
  const chosenC = Object.values(p2Hand[4]);
  const chosenCObject = p2Hand[4];
  if (e.target === addForEevee) {
    const player2Selected = document.querySelector(".player2-selected");
    const printPlayer2Hand = document.createElement("div");
    printPlayer2Hand.className = "player-chosen-hand";

    player2Hand.push(chosenC);
    player2Object.push(chosenCObject);
    // console.log(player2Hand);
    console.log(player2Object);

    // printPlayer2Hand.innerText = chosenC;
    // player2Selected.appendChild(printPlayer2Hand);
    player2Selected.appendChild(p2Hand[4].getHTML());
  }
  if (player2Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

document.querySelector("#eevee-add4").addEventListener("click", (e) => {
  const addForEevee = document.querySelector("#eevee-add4");
  const chosenD = Object.values(p2Hand[5]);
  const chosenDObject = p2Hand[5];
  if (e.target === addForEevee) {
    const player2Selected = document.querySelector(".player2-selected");
    const printPlayer2Hand = document.createElement("div");
    printPlayer2Hand.className = "player-chosen-hand";

    player2Hand.push(chosenD);
    player2Object.push(chosenDObject);
    // console.log(player2Hand);
    console.log(player2Object);

    // printPlayer2Hand.innerText = chosenD;
    // player2Selected.appendChild(printPlayer2Hand);
    player2Selected.appendChild(p2Hand[5].getHTML());
  }
  if (player2Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

document.querySelector("#eevee-add5").addEventListener("click", (e) => {
  const addForEevee = document.querySelector("#eevee-add5");
  const chosenE = Object.values(p2Hand[6]);
  const chosenEObject = p2Hand[6];
  if (e.target === addForEevee) {
    const player2Selected = document.querySelector(".player2-selected");
    const printPlayer2Hand = document.createElement("div");
    printPlayer2Hand.className = "player-chosen-hand";

    player2Hand.push(chosenE);
    player2Object.push(chosenEObject);
    // console.log(player2Hand);
    console.log(player2Object);

    // printPlayer2Hand.innerText = chosenE;
    // player2Selected.appendChild(printPlayer2Hand);
    player2Selected.appendChild(p2Hand[6].getHTML());
  }
  if (player2Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

// comparing best 5 cards

let pokerHands = [
  { highCard: "A high card", strength: 0 },
  { pair: "A pair", strength: 1 },
  { twoPair: "Two pairs", strength: 2 },
  { threeOfAKind: "Three of a kind", strength: 3 },
  { straight: "Straight", strength: 4 },
  { flush: "Flush", strength: 5 },
  { fullHouse: "Full House", strength: 6 },
  { four: "Four of a kind", strength: 7 },
  { straightFlush: "Straight Flush!", strength: 8 },
  { royalFlush: "ROYAL FLUSH!!!!!!", strength: 9 },
];

let pikachuHand = [];
let eeveeHand = [];

function checkHandPikachu() {
  const card1s = player1Object[0].suit; // check card 1 suit
  const card1f = player1Object[0].face; // check card 1 face value
  const card1v = player1Object[0].value; // check card 1 actual value - checks for straights
  const card2s = player1Object[1].suit;
  const card2f = player1Object[1].face;
  const card2v = player1Object[1].value;
  const card3s = player1Object[2].suit;
  const card3f = player1Object[2].face;
  const card3v = player1Object[1].value;
  const card4s = player1Object[3].suit;
  const card4f = player1Object[3].face;
  const card4v = player1Object[1].value;
  const card5s = player1Object[4].suit;
  const card5f = player1Object[4].face;
  const card5v = player1Object[4].value;

  // royal flush
  // straight flush
  // four of a kind
  if (
    (card1f === card2f && card1f === card3f && card1f === card4f) ||
    (card1f === card2f && card1f === card3f && card1f === card5f) ||
    (card1f === card2f && card1f === card4f && card1f === card5f) ||
    (card2f === card3f && card2f === card4f && card2f === card5f)
  ) {
    let response = pokerHands[7].four;
    document.querySelector(
      ".pikachu-results"
    ).innerText = `Pikachu has ${response}`;
    pikachuHand.push(pokerHands[7]);
    console.log(pikachuHand);
  }
  // full house
  else if (
    ((card1f === card2f && card1f === card3f) ||
      (card1f === card2f && card1f === card4f) ||
      (card1f === card2f && card1f === card5f) ||
      (card1f === card3f && card1f === card4f) ||
      (card1f === card3f && card1f === card5f) ||
      (card1f === card4f && card1f === card5f) ||
      (card2f === card3f && card2f === card4f) ||
      (card2f === card3f && card2f === card5f) ||
      (card2f === card4f && card2f === card5f) ||
      (card3f === card4f && card3f === card5f)) &&
    (card1f === card2f ||
      card1f === card3f ||
      card1f === card4f ||
      card1f === card5f ||
      card2f === card3f ||
      card2f === card4f ||
      card2f === card5f ||
      card3f === card4f ||
      card3f === card5f ||
      card4f === card5f)
  ) {
    let response = pokerHands[6].fullHouse;
    document.querySelector(
      ".pikachu-results"
    ).innerText = `Pikachu has ${response}`;
    pikachuHand.push(pokerHands[6]);
    console.log(pikachuHand);
  }
  // flush
  else if (
    card1s === card2s &&
    card1s === card3s &&
    card1s === card4s &&
    card1s === card5s
  ) {
    let response = pokerHands[5].flush;
    document.querySelector(
      ".pikachu-results"
    ).innerText = `Pikachu has ${response}`;
    pikachuHand.push(pokerHands[5]);
    console.log(pikachuHand);
  }
  // straight
  else if (
    (card1v === card2v - 1 &&
      card1v === card3v - 2 &&
      card1v === card4v - 3 &&
      card1v === card5v - 4) ||
    (card1v + 4 === card5v &&
      card2v + 3 === card5v &&
      card3v + 2 === card5v &&
      card4v + 1 === card5v)
  ) {
    let response = pokerHands[4].straight;
    document.querySelector(
      ".pikachu-results"
    ).innerText = `Pikachu has ${response}`;
    pikachuHand.push(pokerHands[4]);
    console.log(pikachuHand);
  }
  // three of a kind
  else if (
    (card1f === card2f && card1f === card3f) ||
    (card1f === card2f && card1f === card4f) ||
    (card1f === card2f && card1f === card5f) ||
    (card1f === card3f && card1f === card4f) ||
    (card1f === card3f && card1f === card5f) ||
    (card1f === card4f && card1f === card5f) ||
    (card2f === card3f && card2f === card4f) ||
    (card2f === card3f && card2f === card5f) ||
    (card2f === card4f && card2f === card5f) ||
    (card3f === card4f && card3f === card5f)
  ) {
    let response = pokerHands[3].threeOfAKind;
    document.querySelector(
      ".pikachu-results"
    ).innerText = `Pikachu has ${response}`;
    pikachuHand.push(pokerHands[3]);
    console.log(pikachuHand);
  }
  // two pairs
  else if (
    (card1f === card2f ||
      card1f === card3f ||
      card1f === card4f ||
      card1f === card5f ||
      card2f === card3f ||
      card2f === card4f ||
      card2f === card5f) &&
    (card3f === card4f || card3f === card5f || card4f === card5f)
  ) {
    let response = pokerHands[2].twoPair;
    document.querySelector(
      ".pikachu-results"
    ).innerText = `Pikachu has ${response}`;
    pikachuHand.push(pokerHands[2]);
    console.log(pikachuHand);
  }
  // one pair
  else if (
    card1f === card2f ||
    card1f === card3f ||
    card1f === card4f ||
    card1f === card5f ||
    card2f === card3f ||
    card2f === card4f ||
    card2f === card5f ||
    card3f === card4f ||
    card3f === card5f ||
    card4f === card5f
  ) {
    let response = pokerHands[1].pair;
    document.querySelector(
      ".pikachu-results"
    ).innerText = `Pikachu has ${response}`;
    pikachuHand.push(pokerHands[1]);
    console.log(pikachuHand);
  }
  // high card
  else {
    let response = pokerHands[0].highCard;
    document.querySelector(
      ".pikachu-results"
    ).innerText = `Pikachu has ${response}`;
    pikachuHand.push(pokerHands[0]);
    console.log(pikachuHand);
  }
}

function checkHandEevee() {
  const card1s = player2Object[0].suit; // check card 1 suit
  const card1f = player2Object[0].face; // check card 1 face value
  const card1v = player2Object[0].value; // check card 1 actual value - checks for straights
  const card2s = player2Object[1].suit;
  const card2f = player2Object[1].face;
  const card2v = player2Object[1].value;
  const card3s = player2Object[2].suit;
  const card3f = player2Object[2].face;
  const card3v = player2Object[1].value;
  const card4s = player2Object[3].suit;
  const card4f = player2Object[3].face;
  const card4v = player2Object[1].value;
  const card5s = player2Object[4].suit;
  const card5f = player2Object[4].face;
  const card5v = player2Object[4].value;

  // royal flush
  // straight flush
  // four of a kind
  if (
    (card1f === card2f && card1f === card3f && card1f === card4f) ||
    (card1f === card2f && card1f === card3f && card1f === card5f) ||
    (card1f === card2f && card1f === card4f && card1f === card5f) ||
    (card2f === card3f && card2f === card4f && card2f === card5f)
  ) {
    let response = pokerHands[7].four;
    document.querySelector(
      ".eevee-results"
    ).innerText = `Eevee has ${response}`;
    eeveeHand.push(pokerHands[7]);
    console.log(eeveeHand);
  }
  // full house
  else if (
    ((card1f === card2f && card1f === card3f) ||
      (card1f === card2f && card1f === card4f) ||
      (card1f === card2f && card1f === card5f) ||
      (card1f === card3f && card1f === card4f) ||
      (card1f === card3f && card1f === card5f) ||
      (card1f === card4f && card1f === card5f) ||
      (card2f === card3f && card2f === card4f) ||
      (card2f === card3f && card2f === card5f) ||
      (card2f === card4f && card2f === card5f) ||
      (card3f === card4f && card3f === card5f)) &&
    (card1f === card2f ||
      card1f === card3f ||
      card1f === card4f ||
      card1f === card5f ||
      card2f === card3f ||
      card2f === card4f ||
      card2f === card5f ||
      card3f === card4f ||
      card3f === card5f ||
      card4f === card5f)
  ) {
    let response = pokerHands[6].fullHouse;
    document.querySelector(
      ".eevee-results"
    ).innerText = `Eevee has ${response}`;
    eeveeHand.push(pokerHands[6]);
    console.log(eeveeHand);
  }
  // flush
  else if (
    card1s === card2s &&
    card1s === card3s &&
    card1s === card4s &&
    card1s === card5s
  ) {
    let response = pokerHands[5].flush;
    document.querySelector(
      ".eevee-results"
    ).innerText = `Eevee has ${response}`;
    eeveeHand.push(pokerHands[5]);
    console.log(eeveeHand);
  }
  // straight
  else if (
    card1v === card2v - 1 &&
    card1v === card3v - 2 &&
    card1v === card4v - 3 &&
    card1v === card5v - 4
  ) {
    let response = pokerHands[4].straight;
    document.querySelector(
      ".eevee-results"
    ).innerText = `eevee has ${response}`;
    eeveeHand.push(pokerHands[4]);
    console.log(eeveeHand);
  }
  // three of a kind
  else if (
    (card1f === card2f && card1f === card3f) ||
    (card1f === card2f && card1f === card4f) ||
    (card1f === card2f && card1f === card5f) ||
    (card1f === card3f && card1f === card4f) ||
    (card1f === card3f && card1f === card5f) ||
    (card1f === card4f && card1f === card5f) ||
    (card2f === card3f && card2f === card4f) ||
    (card2f === card3f && card2f === card5f) ||
    (card2f === card4f && card2f === card5f) ||
    (card3f === card4f && card3f === card5f)
  ) {
    let response = pokerHands[3].threeOfAKind;
    document.querySelector(
      ".eevee-results"
    ).innerText = `Eevee has ${response}`;
    eeveeHand.push(pokerHands[3]);
    console.log(eeveeHand);
  }
  // two pairs
  else if (
    (card1f === card2f ||
      card1f === card3f ||
      card1f === card4f ||
      card1f === card5f ||
      card2f === card3f ||
      card2f === card4f ||
      card2f === card5f) &&
    (card3f === card4f || card3f === card5f || card4f === card5f)
  ) {
    let response = pokerHands[2].twoPair;
    document.querySelector(
      ".eevee-results"
    ).innerText = `Eevee has ${response}`;
    eeveeHand.push(pokerHands[2]);
    console.log(eeveeHand);
  }
  // one pair
  else if (
    card1f === card2f ||
    card1f === card3f ||
    card1f === card4f ||
    card1f === card5f ||
    card2f === card3f ||
    card2f === card4f ||
    card2f === card5f ||
    card3f === card4f ||
    card3f === card5f ||
    card4f === card5f
  ) {
    let response = pokerHands[1].pair;
    document.querySelector(
      ".eevee-results"
    ).innerText = `Eevee has ${response}`;
    eeveeHand.push(pokerHands[1]);
    console.log(eeveeHand);
  }
  // high card
  else {
    let response = pokerHands[0].highCard;
    document.querySelector(
      ".eevee-results"
    ).innerText = `Eevee has ${response}`;
    eeveeHand.push(pokerHands[0]);
    console.log(eeveeHand);
  }
}

function checkWinner() {
  if (pikachuHand[0].strength > eeveeHand[0].strength) {
    document.querySelector(".winner").innerText = "Pikachu wins!!";
    console.log(`Pikachu wins!`);
  } else if (eeveeHand[0].strength > pikachuHand[0].strength) {
    document.querySelector(".winner").innerText = "Eevee wins!!";
    console.log(`Eevee wins!`);
  } else {
    document.querySelector(".winner").innerText = "It's a draw";
    console.log(`It's a draw!`);
  }
}
