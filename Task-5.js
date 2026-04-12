// Task 1: E-commerce Cart System

let cart1 = [
    {name: "Shirt", price: 500},
    {name: "Shoes", price: 1500},
            ]

let cart2 = [
    {name: "Watch", price: 2000},
            ]

let totalCart = [...cart1, ...cart2];
console.log(totalCart);  // Merging of both carts

 totalCart.push({name: "Sunglasses", price: 1000});
 console.log(totalCart);  // Adding new product

 totalCart.pop();
 console.log(totalCart);  // Removing product

 let totalPrice = totalCart.reduce((total, item) => total + item.price, 0);
 console.log("Total Price: " + totalPrice);  /// Total Price


 // Task 2: User Profile Management


let user = {
    name : "Venkateshwara",
    role : "Trainee",
    salary : 20000,
            }
let update = {
    role : "Developer",
    salary : 50000,
            }

let finalUser = {...user, ...update};
console.log(finalUser);  // Merging & updating

let {name, role, salary} = finalUser;
console.log(`${name} is now a ${role} earning ${salary}.`); 


// Task 3: Function with Rest Operator (Team Score System)

function teamScore(teamName,...scores) {
    console.log("Team:" + teamName);
    console.log("Scores:" + scores); // Printing team namae & scores

    let totalScore = scores.reduce((total, score) => total + score, 0);
    console.log("Total Score:" + totalScore); // Total score

    let highestScore = Math.max(...scores);
    console.log("Highest Score:" + highestScore); // Highesr Score
}

teamScore("RCB", 250, 270, 300);


// Task 4: Nested Data Extraction (API Response Simulation)


let apiData = {
    user: {
        name : "Venkateshwara",
        address: {
            city: "Srikakulam",
            pincode: 532001,
        }
    }
}

let {
    user: {
        name : userName,
        address: {
            city,
            pincode,
        }
    }
} = apiData;

console.log(`${userName} lives in ${city} - ${pincode}.`);


//  Task 5: Array Dashboard (Admin Panel)


let users = ["A","B","C","D","E"];

// Remove "C" and "D" using splice

users.splice(2, 2);
console.log(users);

//Add "X", "Y" in same place

users.splice(2, 0, "X", "Y");
console.log(users);

//Get only first 3 users using slice

let reqd = users.slice(0, 3);
console.log(reqd);

//Check if "B" exists

let check = users.includes("B");
console.log(" Does B exists: " +check);

//Find index of "E"

let index = users.indexOf("E");
console.log("Index of E is : " + index);



// Task 6: Data Cleaning Tool


let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"]

// Convert to flat array

let flatArray = messyData.flat(Infinity);
console.log(flatArray);

// Remove null and undefined

let updated = flatArray.filter(item => item !== null && item !== undefined);
console.log(updated);

// Output clean array

 console.log("Clean Array : " +updated);


 //Task 7: Sorting Bug Fix (Real Industry Issue)


let prices = [1000, 200, 50, 5000]

// Sort correctly in ascending order

prices.sort((a, b) => a - b); 
console.log("Prices Sorted : " + prices);
// the default sort fails beacause it sorts elements as strings, not numbers


//Task 8: Analytics Report Generator


let orders = [
    {id:1, amount:100},
    {id:2, amount:200},
    {id:3, amount:300}
]

// Find Total Revenue
let total = orders.reduce((total, item ) => total + item.amount, 0);
console.log("Total Revenue : " + total); 

//Find average value
let avg = total / orders.length;
console.log("Average Order Value: " + avg);


//Task 9: Inventory System (Advanced)


let items1 = ["TV", "Fridge", "Washing Machine"];
let items2 = ["AC", "Grinder", "Waterpurifier"];

items1.push("Geaser");
console.log(items1);

items2.pop();
console.log(items2);

items1.splice(2, 2, "Vaccumcleaner");
console.log(items1);

console.log("AC in items2: " + items2.includes("AC"));

let totalItems = [...items1, ...items2];
console.log("Total Items: " + totalItems);


// Task 10: Interview level Challenge

function processData(...data) {
    let Data = data.flat(Infinity);
    let updatedData = [...new Set(Data)];
    updatedData.sort((a, b) => a - b);
    return updatedData;
}

console.log(processData(1,2,[3,4],[5,[6]]))
