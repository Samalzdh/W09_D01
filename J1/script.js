let foot = document.getElementsByTagName("footer")[0];
let count = 0
foot.addEventListener("click", function(){
  console.log("clique");
  count++;
  console.log(count);
});

let header = document.getElementById("navbarHeader")
let toggleButton = document.querySelector('button.navbar-toggler');

  toggleButton.addEventListener('click', function () {
    header.classList.toggle('collapse');
    console.log("c bon");
  });




let card1 = document.querySelectorAll("div.card")[0];
let cardtext = card1.querySelectorAll("p.card-text")[0];
let btncard = document.querySelectorAll("button.btn-outline-secondary")[0];
btncard.addEventListener("click", function(){
  console.log(btncard);
  cardtext.style = "color: red"
} );

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

