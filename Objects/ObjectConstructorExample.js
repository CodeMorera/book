function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(`Hello, I'm ${this.name}!`);
    
};

function Player(name, marker){
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function(){
    console.log(`My marker is '${this.marker}'`);
  
};
//returns Object.prototype
Object.getPrototypeOf(Player.prototype);

//Makes Player objects inherit from Person
Object.setPrototypeOf(Player.prototype,Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player('Steve', 'X');
const player2 = new Player('Seth', 'O');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();