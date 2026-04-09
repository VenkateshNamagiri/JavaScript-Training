// Loan Eligibility & EMI Calculator

//  1. User Input

let name = prompt("What's your name?");
let age = Number(prompt("What's your age?"));
let salary = Number(prompt("What's your monthly salary?"));
let loan = Number(prompt("What's your loan amount?"));

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Monthly Salary: " + salary);
console.log("Loan Amount: " + loan);

// 2. Eligibility Check (Logical Operators)

if(age >= 21 && age <= 60 && salary >= 25000)
    {
    console.log( "you are eligible for loan.");
    }

    else
    {
    console.log("you are not eligible for loan.");
    }

// 3. EMI Calculation (Operators)

let emi = loan / 12;
console.log("Your monthly EMI is: " +emi);

// 4. Loan Category (If-Else)

if(loan > 500000)
    {
    console.log("High Loan");
    }
else if(loan > 200000)
    {
    console.log("Medium Loan");
    }
else
    {
    console.log("Low Loan");
    }

// 5. Risk Level  (Ternary Operator)

let riskLevel = (salary > 50000) ? "Low Risk" : "High Risk";
console.log("Risk Level: " + riskLevel);

//6. Customer Type (Switch)

let customerType;

switch (true) {
    case (emi > 40000):
        customerType = "Premium Customer";
        break;
    case (emi > 20000):
        customerType = "Standard Customer";
        break;
    default:
        customerType = "Basic Customer";
    
    console.log("Customer Type:"  + customerType);
}

//7. Type Conversion

let age1 = prompt("Enter your age");
let salary1 = prompt("Enter your monthly salary");
let loan1 = prompt("Enter your loan amount");

console.log("Before Conversion:", typeof(age1));
console.log("Before Conversion:", typeof(salary1));
console.log("Before Conversion:", typeof(loan1));


let age2 = Number(age1);
let salary2 = Number(salary1);
let loan2 = Number(loan1);


console.log("After Conversion:", typeof(age2));
console.log("After Conversion:", typeof(salary2));
console.log("After Conversion:", typeof(loan2));




