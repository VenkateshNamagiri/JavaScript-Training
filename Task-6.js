// Task 1: E-commerce Cart Total

let cart = [
    {name:"Shirt", price:500, qty:2},
    {name:"Shoes", price:1500, qty:1},
    {name:"Cap", price:300, qty:3}
];

// 1. Calculate total price using reduce

let price = cart.reduce((total,item) => 
    {
    return total + (item.price * item.qty);
}, 0);

console.log("Total Price: " + price);

// 2. Print only products above 1000 price using filter

let products = cart.filter(item => item.price > 1000);
console.log("Products of price above 1000: ", products);

// 3. Get all product names in uppercase using map

let names = cart.map(item => item.name.toUpperCase());
console.log("Product Names in UpperCase: ", names);


// Task 2: Student Result System

let students = [
    {name:"Arun", marks:85},
    {name:"Bala", marks:45},
    {name:"Charan", marks:60},
    {name:"Divya", marks:30}
]

// 1. Find failed students (marks < 50)

let marks = students.filter(student => student.marks < 50);
console.log("Failed Students: ", marks);

// Check if any student got distinction (>80) using some

let distinction = students.some(student => student.marks > 80);
console.log("Students with distinction? " + distinction);

// Check if all students passed (>35) using every

let passed = students.every(student => student.marks > 35);
console.log("All Students Passed ? " + passed);

// Find first student who failed using find

let failed = students.find(student => student.marks < 50);
console.log("Failed Student: ", failed);


// Task 3: Employee Salary Analysis

let employees = [
    {name:"A", salary:25000},
    {name:"B", salary:40000},
    {name:"C", salary:15000},
    {name:"D", salary:50000}
]

// 1. Increase salary by 10% using map

let salary = employees.map(employee => 
    {
    return {
        name: employee.name,
        salary: employee.salary * 1.10
    }
});

console.log("Employee Salaries: ", salary );

// 2.Get employees with salary > 30000

let highSalary = employees.filter(employee => employee.salary > 30000);
console.log("Employees with salary greater than 30k: ", highSalary);

// 3.Calculate total salary expense

let total = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Salary Expense: " + total);



// 4.Sort employees by highest salary

let salaryDesc = employees.sort((a, b) => b.salary - a.salary);
console.log("Employees sorted by salary: ", salaryDesc);  


// Task 4: String Real Use Case (Search System)

let products = ["Laptop", "Mobile", "Tablet", "Camera"]

// 1.Check if "Mobile" exists using includes

let mobile = products.includes("Mobile");
console.log("Does Mobile exists? " +mobile);

// 2.Convert all to lowercase

let convert = products.map(product => product.toLowerCase());
console.log("Convert to lowercase: ", convert);

// 3.Find index of "Tablet"

let index = products.indexOf("Tablet");
console.log("Index of Tablet: " +index);

// 4.Convert array to string using join("-")

let atoS= products.join("-");
console.log("Conversion to String type: " +atoS);



// Task 5: Date Real-Time Task (Age Calculator)

let dob = new Date("1996-02-23");
let newDob = new Date();
let age = newDob.getFullYear() - dob.getFullYear();
let monthDiff = newDob.getMonth() - dob.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && newDob.getDate() < dob.getDate())) 
    {
    age--;
    }

console.log(`You are ${age} years old`);



// Task 6: Login Validation System

let users = [
    {username:"admin", password:"1234"},
    {username:"user", password:"abcd"}
]

function login(username, password) {
    let details = users.find(details => details.username === username && details.password === password);
    if (details) {
        console.log("Login successful!");
    } else {
        console.log("Invalid credentials.");
    }
}
login("admin", "1234"); 
login("user", "5671"); 



// Task 7: Even Number Analyzer

let numbers = [10, 15, 20, 25, 30]

// 1. Get all even numbers

let even = numbers.filter(num => num % 2 === 0);
console.log("All the Even Numbers: ", even);

// 2. Check if any odd number exists

let odd = numbers.some(num => num % 2 !== 0);
console.log("Is any odd number exist? " +odd);

// 3.Check if all numbers are even

let check = numbers.every(num => num % 2 === 0);
console.log("Are all numbers even? " +check);

//  4.Find number > 20

let find = numbers.find(num => num > 20);
console.log(" The first number greater than 20: " +find);


// Task 8: Challenge

let orders = [
    {id:1, amount:500, status:"delivered"},
    {id:2, amount:1500, status:"pending"},
    {id:3, amount:2000, status:"delivered"}
]

// 1.Total revenue of delivered orders

let revenue = orders.reduce((total, order) => 
    {
    if (order.status === "delivered") {
        return total + order.amount;
    }
    return total;
}, 0);

console.log("Total revenue of delivered Orders: " +revenue);

// 2.Get all pending orders

let  pOrders= orders.filter(order => order.status === "pending");
console.log("All the Pending Orders: ", pOrders);

// 3.Check if any order > 1000

let specificOrder = orders.some(order => order.amount > 1000);
console.log("Is any order greater than 1000? " +specificOrder);

// 4.Sort orders by amount (ascending)

let ascOrder = orders.sort((a, b) => a.amount - b.amount);
console.log("Orders by amount ascending: ", ascOrder); 


