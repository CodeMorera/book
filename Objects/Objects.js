let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };
console.log(user);
  
user.isAdmin = true;
console.log(user);

// delete user.age;
// console.log(user);

function makeUser(name, age) {
    return {
        name,
        age,
    };
}
let guy = makeUser("Chris", 33);
console.log(guy);

let birdMan = "likes birds"; 
console.log(birdMan in user);

for(let key in user){
    console.log(key);
    console.log(user[key]);
    
}
let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
for(let code in codes){
    console.log(+code);
    
}  
function isEmpty(object){
    if(Object.keys(object).length == 0){
        return true;
    }
    return false;
};
let schedule = {};
console.log(isEmpty(schedule));

let fruit ={
    tropical: "Pinapple",
    southwestern: "Avocado",
}
console.log(isEmpty(fruit));



