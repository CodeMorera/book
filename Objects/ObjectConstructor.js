function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info =function(){
        return(`${title} by ${author}, ${pages} pages, ${read} `);
    };
}
const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet")
console.log(theHobbit.info());

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function sayName() {
      console.log(this.name)
    };
  }
  
const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
 };
 
 player1.sayHello(); // logs "Hello, I'm a player!"
 player2.sayHello(); // logs "Hello, I'm a player!"
 console.log(Object.getPrototypeOf(player1) === Player.prototype);

console.log(player1.valueOf()); 
console.log(player1.hasOwnProperty('valueOf'));
console.log(Object.prototype.hasOwnProperty('valueOf'));
// console.log(Object.getPrototypeOf(player1));



 