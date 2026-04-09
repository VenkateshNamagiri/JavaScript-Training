// Task-1: E-Commerce Discount System

function calculateDiscount(product,price)
{
    let finalPrice;

    if(price > 1000)
        {
        finalPrice = price - (price * 0.20)
    }
    else
        {
        finalPrice = price - (price * 0.10)
    }
    
    console.log("Product:" +product +"   " + "Final Price:" +finalPrice);
    
    
}
console.log(calculateDiscount("Shoes", 2000));



// Task-2: Order Processing using Callback
 
function payment(amount)
{
    console.log("Payment received successfully :" + amount);
}
function orderSuccess()
{
    console.log("Order Delivered");
}
function placeOrder( callback)
{
    console.log("Order placed");
    payment(500);
    orderSuccess();
}

placeOrder();


// Task- 3: Employee Data Loop System

let employees = [
                {name: "Navi",salary: 50000},
                {name: "John",salary: 70000}
                ];

for(let emp of employees)
    {
    if(emp.salary > 60000)
        {
        console.log(emp.name + " : High Salary");
        }
   else
    {
    console.log(emp.name + " : Normal Salary")
    }
}


//  Task- 4: Login Attempts (While Loop)

let password = "9999";
let attempts = 0;

while(attempts < 3)
    {
    let inputPassword;
    
    if(attempts === 0)
        {
        inputPassword = "4574"; 
        }
    else if(attempts === 1){
        inputPassword = "9999"; 
    }
    console.log("Attempt", attempts + 1);

    if(inputPassword === password)
        {
        console.log("Login Success");
        break;
    }
   
    attempts++;
}


// Task- 5: Coupon Generator (Generator Function)

function* couponGenerator()
{
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let offers = couponGenerator();

console.log(offers.next().value);


// Task- 6: Shopping Cart Total (for...of)

 let cart = [100, 200, 300, 400];

    let total = 0;
    
    for(let price of cart)
        {
        total += price;
        }
    console.log("Final Amount: " + total); 


// Task- 7: User Profile System (for...in)

 let user = {
    Name: "Venkatesh",
    Role: "Developer",
    Location: "India"
};

for (let key in user){
    console.log(key + " : " + user[key]);
}

// 8. Factory Pattern (Function Reuse)

function createPhone()
{
    return "Phone";
}
function createBattery()
{
    return "Battery";
}
function createCharger()
{
    return "Charger";
}  

console.log("Your Order : " , createPhone() , " + " + createBattery() , " + " + createCharger());


//  Task- 9: College Form with Default Values

function form(name,section,dept = "Not Assigned")
{
    console.log("Name: " + name);
    console.log("Section: " + section);
    console.log("Department: " + dept);
}

form("Venkatesh", 1);


// Task- 10: Currying - EMI Calculator

function emi(p)
{
    return function(r)
    {
        return function(t)
        {
            return (p * r * t) / 100;
        }
    }
}

console.log(emi(10000)(2)(12)); 


// Task- 11:Even/Odd Analyzer

for(let i = 1; i <= 10; i++)
    {
    if(i % 2 == 0)
        {
        console.log(i + " --> Even");
        }
    else
        {
        console.log(i + " --> Odd");
        }
    }


 // Task- 12: Function Scope Debugging
// Concepts: var, let, const

// Why var works outside block?
//var is function scoped which means it can exist anywhere inside the function.

// Why let/const fails?
// let is block scope which means values can be existed inside the block and cannot re-assign any new value.
// const is also block scope once the value is assigned which cannot be changed furthur.


// Task- 13: Real-Time Alert System (IIFE)

(function()
{
    console.log("🔥 Flash Sale:50% OFF on Shirts");
})
();


// Task- 14: Marks Calculator with Return

function subjectMarks(x,y,z)
{
    let total = x + y + z;
    let average = total / 3;
    return { total, average };
}

let result = subjectMarks(80, 90, 70);

console.log("Total: " + result.total);

console.log("Average: " + result.average);


// Task- 15: Retry Offer System (Generator + Condition)

function* offerSystem()
{
  yield "10% OFF";
  yield "20% OFF";
}
let offers = offerSystem();

console.log(offers.next());
console.log(offers.next());

if(offers.next().done)
    {
  console.log("All offers expired");
    }

