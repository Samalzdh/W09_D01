// exo 1

let foot = document.getElementsByTagName("footer")[0];
let count = 0
foot.addEventListener("click", function(){
  console.log("clique");
  count++;
  console.log(count);
});

// exo 2
let header = document.getElementById("navbarHeader")
let toggleButton = document.querySelector('button.navbar-toggler');

  toggleButton.addEventListener('click', function () {
    header.classList.toggle('collapse');
    console.log("c bon");
  });


// exo 3

let card1 = document.querySelectorAll("div.card")[0];
let cardtext = card1.querySelectorAll("p.card-text")[0];
let btncard = document.querySelectorAll("button.btn-outline-secondary")[0];
btncard.addEventListener("click", function(){
  console.log(btncard);
  cardtext.style = "color: red"
} );

// exo 4
let card2 = document.querySelectorAll("div.card")[1];
let cardtext2 = card2.querySelectorAll("p.card-text")[0];
let btncard2 = card2.querySelectorAll("button.btn-outline-secondary")[0]
let textStatus = false;
btncard2.addEventListener("click", function(){ 
  if (textStatus== false)
  { cardtext2.style = "color:green"; textStatus =true } 
  else 
    { cardtext2.style = "color:black"; textStatus = false}
  });

// exo 5
let header2 = document.getElementsByTagName("header")[0];
let cdn = document.getElementsByTagName("link")[0];
console.log(cdn);

header2.addEventListener("dblclick", function() {
  if (cdn.disabled === false) {
    cdn.disabled = true;
  } else {
    cdn.disabled = false;
  }
});

// exo 6
let cards = document.getElementsByClassName("card");
let btn2card = document.querySelector(".btn.btn-sm.btn-success");
let img = document.querySelector(".card-img-top");
let cardsStatus = true;

btn2card.addEventListener("mouseover", function() {
  if (cardsStatus === true) {
    img.style.width = "20%";
    cardsStatus = false;
  } else {
    img.style.width = "100%";
    cardsStatus = true;
  }
});

Array.from(cards).forEach(function(card) {
  let btncards = card.querySelector(".btn-success");
  let cardsText = card.querySelector(".card-text");
  let cardsImg = card.querySelector(".card-img-top");
  let cardStatus = true; // Changed variable name to avoid conflict

  btncards.addEventListener("mouseover", function() {
    if (cardStatus === true) {
      cardsText.classList.toggle("collapse");
      cardsImg.style.width = "20%";
      cardStatus = false;
    } else {
      cardsText.classList.toggle("collapse");
      cardsImg.style.width = "100%";
      cardStatus = true;
    }
  });
});