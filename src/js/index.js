const dataPlayers = [
  {
    nick: 'wxy',
    steamID: 76561198145496259
  },
  {
    nick: 'flitz',
    steamID: 'flitzzz'
  },
  {
    nick: 'pkn',
    steamID: 76561198817496607
  },
  {
    nick: 'lcn',
    steamID: 76561198861537704
  },
  {
    nick: 'Nerino',
    steamID: 'NerinoO'
  },
  {
    nick: 'Sagretti',
    steamID: 76561198802730862
  },
  {
    nick: 'Non4me',
    steamID: 'thiagoduarte'
  },
  {
    nick: 'exe',
    steamID: 76561198208406688
  },
  {
    nick: 'bXd',
    steamID: 'ldsr'
  },
  {
    nick: 'phr',
    steamID: 'teiiii'
  },
  {
    nick: 'Decko',
    steamID: 76561197990873471
  },

  {
    nick: 'TCHEL1',
    steamID: 76561198333825655
  },
  {
    nick: 'Lucas',
    steamID: 76561198261320679
  },
  {
    nick: 'gtz',
    steamID: 'GuilhermeTz'
  },
  {
    nick: 'Locked',
    steamID: 'lockedzera'
  },
  {
    nick: 'Gell190',
    steamID: 76561198130670864
  },
  {
    nick: 'Zézinho',
    steamID: 76561198021483680
  },
  {
    nick: 'Shrek',
    steamID: 'JoaoRecchia'
  },
  
];

let players = [];
const input = document.querySelector('.input');
const inputPlayers = document.querySelectorAll('[data-player]');
const cta = document.querySelector('[data-sort]');
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

cta.addEventListener("click", () => {
  if(input.value){
    let jogadores = input.value;
    if(jogadores.lastIndexOf(';') == jogadores.length - 1){
      
      jogadores = jogadores.substring(0, jogadores.length - 1);
    }
    let jogadoresSplit = jogadores.split(";");
    shuffleArray(jogadoresSplit);
    
    // for(let i=0; i<=4; i++){
    //   time1.innerHTML +=  `<p>${jogadoresSplit[i]}</p>`;
    // }
    // for(let i=5; i < 10; i++){
    //   time2.innerHTML +=  `<p>${jogadoresSplit[i]}</p>`;
    // }

    let countInterval = 0;
    let interval = setInterval(() => {
      if(countInterval >= 5){
        clearInterval(interval);
        return;
      } 
      time1.innerHTML +=  `<p>${jogadoresSplit[countInterval]}</p>`;
      time2.innerHTML +=  `<p>${jogadoresSplit[countInterval + 5]}</p>`;
      countInterval++;
    },500)

    lider1.innerHTML= "Time do "+jogadoresSplit[0];
    lider2.innerHTML= "Time do "+jogadoresSplit[5];
    
   } else{
    alert('digite algo');
   }
});


function addPlayer() {
  const button = this;


  console.log( dataPlayers.find(player => player.players === button.dataset.player) );


  if (!button.classList.contains('clicked')) {
    input.value += `${button.dataset.player};`;
  }

  button.classList.add('clicked');
}

inputPlayers.forEach(inputPlayer => {
  inputPlayer.addEventListener('click', addPlayer)
});