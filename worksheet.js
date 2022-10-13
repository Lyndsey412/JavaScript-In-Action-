//Variables
//Task One 
let dayOfWeek = 'Monday';
console.log(dayOfWeek)

dayOfWeek = ('Friday');
console.log(`I cant wait for ${dayOfWeek}!`)

//Task Two 
let animalInput = prompt('What is your favorite animal?');
let colorInput = prompt('What is your favorite color?');
console.log(`Ive never seen a ${colorInput} ${animalInput}!`);

//Conditionals 
//Task One 
//Breakfast Burrito
//Chicken Salad
//Steak Potatoes and Asparagus

let timeOfDay = 2100
let favoriteMeals;

if (timeOfDay < 1200){
    favoriteMeals ='Breakfast Burrito';
}
else if(timeOfDay >= 1200 || timeOfDay <= 1700){
    favoriteMeals = 'Chicken Salad';
}
else if(timeOfDay > 1700){
    favoriteMeals = 'Steak, Potatoes and Asparagus';
}
console.log(favoriteMeals)

//Task Two
let bestBands = Math.floor(Math.random() * 11)

if (bestBands >= 0 && bestBands <=2){
    bestBands = 'Beatles'
}
else if (bestBands >= 3 && bestBands <= 5){
    bestBands = 'Stones'
}
else if (bestBands >= 6 && bestBands<= 8){
    bestBands = 'Floyd'
}
else if (bestBands == 9 || 10){
    bestBands = 'Hendrix'
}
console.log(bestBands)




