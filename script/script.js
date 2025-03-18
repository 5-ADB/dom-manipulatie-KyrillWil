const gebruikers = [
  { id: 1, login: "karel.kleintjes", leeftijd: 14 },
  { id: 2, login: "els.dotjes", leeftijd: 30 },
  { id: 3, login: "piet.pieters", leeftijd: 20 },
  { id: 4, login: "jos.teugels", leeftijd: 13 },
  { id: 5, login: "piet.pollekes", leeftijd: 27 },
];
//
const loginGegevens = document.querySelector("#login")
const leeftijd = document.querySelector("#leeftijd")
const toevoegen = document.querySelector("#toevoegen")
const jonger = document.querySelector("#jonger")
const ouder = document.querySelector("#ouder")
const filterLeeftijd = document.querySelector("#filterLeeftijd")
const lijstNamen = document.querySelector("#lijstNamen")

//toevoegen knop
toevoegen.addEventListener("click", () =>{
  console.log(loginGegevens.value);
  gebruikers.push(loginGegevens)
  console.log(gebruikers);
  
})
console.log(gebruikers[1].login);
//ouder jonger knop
jonger.addEventListener("click",()=>{
  for (let i = 0; i < gebruikers.length; i++) {
    if (filterLeeftijd.value > gebruikers[i].leeftijd) {
    //console.log(filterLeeftijd[i].login);
  }
  }
})
  lijstNamen.textContent = "hoi"



