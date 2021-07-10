// let age = 21;
// if (age <= 21) {
//     console.log("you can not enter the club");
// }
// else {
//     console.log("Welcome!");
// }

// let ages = 100;

// if (ages < 100) {
//     console.log("Not elegible");
// }
// else if (ages === 100) {
//     console.log("Here is your birthday card from the king!");
// }
// else {
//     console.log("Not elegible, you have already gotten one");
// }

// // arrarys - ordered lists of items

// let featuredPosts = [
//     "check out my Netflix clone",
//     "Hear's the code for my projcet",
//     "I've just relaunched my portfolio"
// ];
// console.log(featuredPosts[0]);
// let experience = [
//     "Habibur Rahman",
//     "Frontend developer"
// ];
// console.log(experience.length);

// for (let i = 0; i < featuredPosts.length; i++) {
//     console.log(featuredPosts[i]);
// }

// let course = {
//     title : "Learn css grid for free",
//     lessons: 16,
//     creator: "per Harald Borgen",
//     length: 63,
//     isFree: true,
//     tags: ["html", "css"]
// }
// console.log(course.tags)

// let person = {
//     name: "Habib",
//     age: 21,
//     country: "Bangladesh"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
// }
// logData();

// let age = 70;

// if (age < 6) {
//     console.log("free");
// }
// else if(age < 18){
//     console.log("child discount")
// }
// else if (age < 27) {
//     console.log("student discount");
// }
// else if (age < 67) {
//     console.log("full price");
// }
// else {
//     console.log("senior citizen free")
// }

// let largeCountries = ["china", "india", "usa", "indonesia", "pakistan"];

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log(largeCountries[i])
// }

// largeCountries.push("Bangladesh");
// console.log(largeCountries);
// largeCountries.pop();
// console.log(largeCountries);
// largeCountries.shift();
// console.log(largeCountries);
// largeCountries.unshift("china");
// console.log(largeCountries);
function arr(arr){
    return arr[0];
}

let hands = ["rock", "paper", "scissor"];
const arrsFunction = arr(hands);
console.log(arrsFunction)
function getHand(){
    let randomIndex = Math.floor(Math.random()*3);
    return hands[randomIndex];
}
console.log(getHand());

