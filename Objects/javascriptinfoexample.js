let animal = {
    eats: true,
    walk(){
        return "Animal walk";
    }
};

let rabbit = {
    jumps: true,
    __proto__:animal
};

rabbit.walk = function(){
    console.log("Rabbit! Bounce-bounce!");
};

console.log(rabbit.walk());
