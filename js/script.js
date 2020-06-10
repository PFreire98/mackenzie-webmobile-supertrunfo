//alert('Hello, world!');

/*
    isso é um comentário.
*/
/*
var x = 30;
var y;
y = 20;

console.log('O valor de x é: ' + (x + i));
for(var i = 0; i < 10; i++){
    console.log(i);
}

if(x < 20){
    console.log('é menor mesmo!');
} else {
    console.log('mentira, é maior!')
}

function repeticao(numero){
  for(var i = 0; i < numero; i++){
    console.log(i);
  }  
}

repeticao(5)
*/

class Hero{
    constructor(name, intelligence, strength, speed, durability, power, combat, image){
        this.name = name;
        this.intelligence = intelligence === "null" ? 0 : intelligence;
        this.strength = strength === "null" ? 0 : strength;
        this.speed = speed === "null" ? 0 : speed;
        this.durability = durability === "null" ? 0 : durability;
        this.power = power === "null" ? 0 : power;
        this.combat = combat === "null" ? 0 : combat;
        this.image = image;
        this.total = (((parseInt(intelligence)*3) + (parseInt(strength)*4) + (parseInt(speed)*2) + (parseInt(durability)*4) + (parseInt(power)*3) + (parseInt(combat))*5));
    }
    
}
/*var pontosPlayer;
var pontosMachine;
var cont = 0;
var combatP = [];
var cards2 = [];
var cards3 = 0;*/

/*function generateRan(x) {
  /for (var i = 0; i < 3; i++) {
    / combatP.push(x);
  /}
}*/

//var h1 = new Hero('Pietro', 100, 70, 80, 10, 30, 50, 'avatar.png')
//console.log(h1.present());

let BASE_URL = 'https://superheroapi.com/api.php/';
let API_KEY = '2785596051569037';


function getJSON(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true)
    xhr.responseType = 'json';
    xhr.onload = function(){
        let STATUS = xhr.status;
        if(STATUS === 200){
            callback(STATUS, xhr.response);
        } else{
            console.log('Deu Erro: ' + STATUS);
        }
    }
        xhr.send();
}

function getHero(id, hero2){
    let URL = BASE_URL + API_KEY + '/' + id;
    getJSON(URL, function(status, data){
        var hero = new Hero(data.name, data.powerstats.intelligence, data.powerstats.strength, data.powerstats.speed, data.powerstats.durability, data.powerstats.power,data.powerstats.combat, data.image.url);
        document.getElementById('heroes').innerHTML += 
                "<article onclick='getAnotherHero(" + JSON.stringify(hero) + ")'>" + 
                "<img src='" + hero.image + "' />" +
                "<h1>" + hero.name + "</h1>" +
                "<p>Intelligence: </p>   <div style='width: " + hero.intelligence + "%; background-color:#B842FF'></div>" +
                "<p>Strength: </p>       <div style='width: " + hero.strength + "%; background-color:#3A5ADE'></div>" +
                "<p>Speed: </p>          <div style='width: " + hero.speed + "%; background-color:#4CF5F4'></div>" +
                "<p>Durability: </p>     <div style='width: " + hero.durability + "%; background-color:#3ADE50'></div>" +
                "<p>Power: </p>          <div style='width: " + hero.power + "%; background-color:#E1FA14'></div>" +
                "<p>Combat: </p>         <div style='width: " + hero.combat + "%; background-color:#FF8C00'></div>" +
                '</article>';
        
        if (hero.total > hero2.total){
            alert(`${hero2.name} vs ${hero.name} -=[!]=-  Que pena, você perdeu!`);
            console.log('passei aqui');
            window.BeforeLoadEvent
        }else if (hero.total < hero2.total) {
            alert(`${hero2.name} vs ${hero.name} -=[!]=-  Nice, você ganhou!`);
            console.log('passei aqui##');
        }else if (hero2.total == hero.total){
            alert(`${hero2.name} vs ${hero.name} -=[!]=- Ops, houve empate!`);
        }else{
            alert(`[!] ${hero.name} apresenta alguma habilidade nula, portanto não houve vencedor!\n [!] Por favor, jogue novamente!`);
        }

            /*combatP.push(hero.combat);*/
        
        /*console.log(combatP);*/
    });
}
/*function myClick() {
    var pontosPlayer = combatP[cont];
    alert('PONTOS: ' + pontosPlayer);
}

for (var i = 0; i < 3; i++) {
    cont = i;
}*/



window.onload = function(){
    alert("[!] Peso das Skills [!] \n Intelligence: 3 \n Strength: 4 \n Speed: 2 \n Durability: 4 \n Power: 3 \n Combat: 5");
    getHero(getRandom(1, 731));
    getHero(getRandom(1, 731));
    getHero(getRandom(1, 731));
}

function getRandom(min, max){
    return Math.floor(Math.random() * max) + min
}

function getAnotherHero(hero2) {
  getHero(getRandom(1, 731), hero2);
}
