// Step 1: Variables and Data Types
let myName = "Chandana HM"; // Using let for a variable
const age = 20; // Using const for a constant value
let hobbies = ["Reading", "Coding", "Waching movies"]; // Array for hobbies
let experienceLevel = "beginner"; // String data type

console.log("My name is:", myName);
console.log("My hobbies are:", hobbies);

// Step 2: Control Flow with if/else
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

if (experienceLevel === "beginner") {
    console.log("You are just starting out!");
} else {
    console.log("You have experience!");
}

// Step 3: Loops to log hobbies
console.log("Iterating through hobbies:");
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

// Step 4: Basic Interaction with prompt and alert
let userName = prompt("What's your name?");
if (userName) {
    alert("Welcome to my profile, " + userName + "!");
    document.getElementById("greeting").innerText = "Hello, " + userName + "!";
}

// Step 5: Update the "About Me" section dynamically
document.getElementById("about").innerText = 
    "Hi, I'm " + myName + ". I'm passionate about web development and learning new technologies.";

// Step 6: Extra Challenge: Update hobbies dynamically
document.getElementById("hobbies-list").innerHTML = "";
hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies-list").appendChild(li);
});

// Step 7: Arithmetic, Comparison, and Logical Operators
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("Sum of", num1, "and", num2, "is:", sum);

let isAdult = age >= 18 && experienceLevel === "beginner";
console.log("Is the user an adult beginner?", isAdult);