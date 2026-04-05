// Section 1 : Printing & User Interface

// 1. Print your name and designation in the console.

console.log("Name: Venkatesh Namagiri");
console.log("Designation: Full Stack Developer");

// 2.Show an alert saying "Welcome to JavaScript Session".

alert("Welcome to JavaScript Session");

// 3. Ask the user: "Do you like coding?" using confirm() and print the result.

let a=confirm("Do you like coding?");
console.log(a);

// 4.Take user input for favorite food using prompt() and print it.

let b=prompt("What is your favourite food?")
console.log(b);

// 5. Display "Good Evening Team" on the UI using document.writeln().
document.writeln("Good Evening Team");

//Section 2: Console Methods

// 6. Print a number using console.log().

console.log(999);

// 7. Print a warning message: "This is a warning".
console.warn("This is a warning");

// 8. Print an error message: "Something went wrong!".
console.error("Something went wrong!");

// 9. Clear the console after printing 3 messages.
console.clear();

// Section 3: Data Types

// 10. Create a variable with your name and print its type

let name="Venkatesh Namagiri";
console.log(typeof(name));

// 11. Store your age and print the datatype

let age=99;
console.log(typeof(age));

// 12. Store a boolean value (true/false) and print it.

let iamdeveloper= true;
console.log(typeof(iamdeveloper));

// 13. Declare a variable without value and print it

let a;
console.log(a);

// 14. Assign null to a variable and print it

let a=null;
console.log(a);

//Section 4: Arrays

// 15. Create an array of 5 fruits and print it.

let fruits = ["Mango","apple","Pineapple","Grapes","Banana"];
console.log(fruits);

// 16. Print the first and last element of the array.

console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

// 17. Add one more fruit dynamically and print updated array.

fruits.push("Cherry");
console.log(fruits);

// 18. Remove the last element and print array.

fruits.pop();
console.log(fruits);

// 19. Find the length of the array.

console.log(fruits.length);

//Section 5: Objects

// 20. Create an object for a student (name, age, course).

let student={

    name: "Venkatesh Namagiri",
    age:29,
    course: "Full Stack",
    fruits: ["Mango","apple","Pineapple","Grapes","Banana"],
}

// 21. Print the student name.

console.log(student.name);

// 22. Add a new property (college) dynamically.

student.college="GMRIT";
console.log(student);

// 23.  Access nested array inside object (like your fruit example).

console.log(student.fruits);

// 24. Update a property value.

student.course="Devops";
console.log(student);

Section 6: Operators

25.Add two numbers and print result.

let a=9;
let b=18;
console.log(a+b);

// 26. Subtract two numbers.

console.log(a-b);

// 27. Multiply two numbers.

console.log(a*b);

// 28. Divide two numbers.

console.log(b/a);

// 29. Find remainder using %.

console.log(b%a);

// 30. Use exponent operator (**) to find power.

console.log(b**a);

Section 7: Increment & Decrement

31. Create a variable and use post increment.

let a = 9;
console.log(a++);
console.log(a);

// 32. Create a variable and use pre increment.

console.log(++a);
console.log(a);

// 33. Show difference between num++ and ++num.

console.log(a++);
console.log(a);

console.log(++a);
console.log(a);


// 34. Use decrement operator and print values.

console.log(a--);
console.log(a);

console.log(--a);
console.log(a);

// 35. Predict output before running.

let a = 5;
let b = a++;
let c = ++a;

console.log(a);
console.log(b);
console.log(c);

// Section 8: Real-Time Logic Tasks

// 36. Ask user age and check if eligible to vote

let Age = prompt("Please enter your age:");
if (Age >= 18) 
    {
    console.log("You are eligible to vote.");
    } 

else {
    console.log("You are not eligible to vote.");
     }


// 37. Ask user name and greet: "Hello Naveen".

let Name = prompt("Please enter your name:");
console.log("Hello, " +Name);

// 38. Store marks in array and print highest value.

let marks = [90, 91, 92, 93, 94];
let highestValue = Math.max(...marks);
console.log( highestValue);

// 39. Create object for fruits category and access values
let fruits = {
    yellow: ["Mango","Pineapple",],
    red: ["Apple","Strawberry"],
    green: ["Gauva","Jackfruit"],
}

console.log(fruits.red[0]);
console.log(fruits.green);

// 40. Combine prompt + array

let fruits1=[];

fruits1.push(prompt("what is first favourite fruit?"));
fruits1.push(prompt("what is second favourite fruit?"));
fruits1.push(prompt("what is third favourite fruit?"));
console.log(fruits1);






