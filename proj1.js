"use strict";

// there is currently only two players, and names will be pikachu and lucario

const players = [];
function player(id, playerName) {
  players.push({ id: id, name: playerName });
}

let deck = [];

const suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const face = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]; // face of the card

class Cards {
  constructor(suit, value, face) {
    (this.suit = suit), (this.value = value), (this.face = face);
  }
}

function createDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < value.length; j++) {
      deck.push(new Cards(suits[i], value[j], face[j]));
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

const p1Hand = [];
const p2Hand = [];

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

  card1.innerHTML = Object.values(cardPlaceholder1);
  card2.innerHTML = Object.values(cardPlaceholder2);
  card3.innerHTML = Object.values(cardPlaceholder3);
  card4.innerHTML = Object.values(cardPlaceholder4);

  console.log(deck);
  console.log(p1Hand);
  console.log(p2Hand);
}

// deal community cards, for now deal all 5 first and check options only for both players
function dealCommunityCards(e) {
  e.preventDefault();
  if (e.target === document.querySelector(".check")) {
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
    cardA.innerHTML = Object.values(cardPlaceholderA);
    cardB.innerHTML = Object.values(cardPlaceholderB);
    cardC.innerHTML = Object.values(cardPlaceholderC);
    cardD.innerHTML = Object.values(cardPlaceholderD);
    cardE.innerHTML = Object.values(cardPlaceholderE);
  }
  console.log(p1Hand);
  console.log(p2Hand);
  console.log(deck);
}
document.querySelector(".check").addEventListener("click", dealCommunityCards);

// add div for btn & btn for player 1
// not sure why not working so leave it first
function addForPlayers(e) {
  if (e.target === document.querySelector(".check")) {
    const cardA = document.querySelector(".add-for-players");
    // const cardB = document.querySelector("#card-b").innerText;
    // const cardC = document.querySelector("#card-c").innerText;
    // const cardD = document.querySelector("#card-d").innerText;
    // const cardE = document.querySelector("#card-e").innerText;

    const addForP1Btn1 = document.createElement("button");
    const addNewDiv1 = document.createElement("div");
    addForP1Btn1.className = "player1-add";
    addForP1Btn1.textContent = "Add for Pikachu";
    cardA.appendChild(addNewDiv1);
    addNewDiv1.appendChild(addForP1Btn1);
  }
}
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

  const player1 = document.querySelector("#name-1");
  player1.innerHTML = players[0].name;

  const player2 = document.querySelector("#name-2");
  player2.innerHTML = players[1].name;

  createDeck();
  shuffleDeck();
  dealCardsToPlayers();
}

////////////////////////////////
// to win
////////////////////////////////

// for player 1
// if chosing from own hand
const player1Hand = [];
const player1Object = [];
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

    console.log(player1Hand);
    console.log(player1Object);
    printPlayer1Hand.innerText = chosen1;
    player1Selected.appendChild(printPlayer1Hand);
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

    console.log(player1Hand);
    console.log(player1Object);
    printPlayer1Hand.innerText = chosen2;
    player1Selected.appendChild(printPlayer1Hand);
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
    console.log(player1Hand);
    console.log(player1Object);

    printPlayer1Hand.innerText = chosenA;
    player1Selected.appendChild(printPlayer1Hand);
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
    console.log(player1Hand);
    console.log(player1Object);

    printPlayer1Hand.innerText = chosenB;
    player1Selected.appendChild(printPlayer1Hand);
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
    console.log(player1Hand);
    console.log(player1Object);

    printPlayer1Hand.innerText = chosenC;
    player1Selected.appendChild(printPlayer1Hand);
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
    console.log(player1Hand);
    console.log(player1Object);

    printPlayer1Hand.innerText = chosenD;
    player1Selected.appendChild(printPlayer1Hand);
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
    console.log(player1Hand);
    console.log(player1Object);

    printPlayer1Hand.innerText = chosenE;
    player1Selected.appendChild(printPlayer1Hand);
  }
  if (player1Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

// for player 2
// if chosing from own hand
const player2Hand = [];
const player2Object = [];
document.querySelector("#card-3").addEventListener("click", (e) => {
  const player2Selected = document.querySelector(".player2-selected");
  const test = document.querySelector(`#card-3`);
  if (e.target === test) {
    const printPlayer2Hand = document.createElement("div");
    printPlayer2Hand.className = "player-chosen-hand";

    const chosen1 = Object.values(p2Hand[0]);
    const chosen1Object = p2Hand[0];

    player2Hand.push(chosen1);
    player2Object.push(chosen1Object);

    console.log(player2Hand);
    console.log(player2Object);
    printPlayer2Hand.innerText = chosen1;
    player2Selected.appendChild(printPlayer2Hand);
  }
});

document.querySelector("#card-4").addEventListener("click", (e) => {
  const player2Selected = document.querySelector(".player2-selected");
  const printPlayer2Hand = document.createElement("div");
  printPlayer2Hand.className = "player-chosen-hand";

  const chosen2 = Object.values(p2Hand[1]);
  const chosen2Object = p2Hand[1];

  player2Hand.push(chosen2);
  player2Object.push(chosen2Object);

  console.log(player2Hand);
  console.log(player2Object);

  printPlayer2Hand.innerText = chosen2;
  player2Selected.appendChild(printPlayer2Hand);
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
    console.log(player2Hand);
    console.log(player2Object);

    printPlayer2Hand.innerText = chosenA;
    player2Selected.appendChild(printPlayer2Hand);
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
    console.log(player2Hand);
    console.log(player2Object);

    printPlayer2Hand.innerText = chosenB;
    player2Selected.appendChild(printPlayer2Hand);
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
    console.log(player2Hand);
    console.log(player2Object);

    printPlayer2Hand.innerText = chosenC;
    player2Selected.appendChild(printPlayer2Hand);
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
    console.log(player2Hand);
    console.log(player2Object);

    printPlayer2Hand.innerText = chosenD;
    player2Selected.appendChild(printPlayer2Hand);
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
    console.log(player2Hand);
    console.log(player2Object);

    printPlayer2Hand.innerText = chosenE;
    player2Selected.appendChild(printPlayer2Hand);
  }
  if (player2Hand.length > 5) {
    alert("you have more than 5 cards");
  }
});

// comparing best 5 cards

const pokerHands = {
  highCard: "Win with high card",
  pair: "A pair",
  twoPair: "Two pairs",
  threeOfAKind: "Three of a kind",
  straight: "Straight",
  flush: "Flush",
  fullHouse: "Full House",
  four: "Four of a kind",
  straightFlush: "Straight Flush!",
};

function checkHandPikachu() {
  const card1 = p1Hand[0];
  const card2 = p1Hand[1];
  const card3 = p1Hand[2];
  const card4 = p1Hand[3];
  const card5 = p1Hand[4];

  // check for high card
}