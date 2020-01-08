let players = [];
const input = document.querySelector('.input');
const cta = document.querySelector('.btn');
const time1 = document.querySelector('.time1');
const time2 = document.querySelector('.time2');
const lider1 = document.querySelector('.titleTime1');
const lider2 = document.querySelector('.titleTime2');
let listaTime1 = [];
let listaTime2 = [];
let randomicoTime1, randomicoTime2;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function removeComma(listaTime1){
  listaTime1.replace("," , "");
}


cta.addEventListener("click", () => {
  if(input.value){
    let jogadores = input.value.split(";");
    shuffleArray(jogadores);
    
    for(let i=0; i<=4; i++){
      listaTime1.push(`<p>${jogadores[i]}</p>`);
    }
    for(let i=5; i < 10; i++){
      listaTime2.push(`<p>${jogadores[i]}</p>`);
    }
    lider1.innerHTML= "Time do "+jogadores[0];
    time1.innerHTML =  listaTime1;
    time2.innerHTML = listaTime2;
    lider2.innerHTML= "Time do "+jogadores[5];
    
   } else{
    alert('digite algo');
   }
});