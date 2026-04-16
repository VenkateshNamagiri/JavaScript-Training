// Task 1: Order System (setTimeout)

console.log("Order placed");

setTimeout(() => 
    {
    console.log("Preparing food");
    }, 2000);
setTimeout(() => 
    {
    console.log("Food ready");
    }, 4000);
setTimeout(() => 
    {
    console.log("Delivered");
    }, 5000);



//Task 2: Digital Clock (setInterval)

let start = 0;
const clock = setInterval(() => 
    {
    const time = new Date().toLocaleTimeString();
    console.log(time);
    start++;

    if (start === 10) {
        clearInterval(clock);
        console.log("Clock Stopped");
    }
}, 1000);



//Task 3: Callback Hell Simulation

function loginUser(callback) 
{
    setTimeout(() =>
         {
        console.log("User Logged In");
        callback();
    }, 3000);
}
function getUserData(callback) 
{
    setTimeout(() => 
        {
        console.log("User Data Fetched");
        callback();
    }, 3000);
}
function getUserPosts(callback)
 {
    setTimeout(() =>
         {
        console.log("User Posts Fetched");
    }, 3000);
}
loginUser(() => 
    {
    getUserData(() => 
        {
        getUserPosts();
    });
});



//  Task 4: Fake API Promise

function getProducts() 
{
    return new Promise((resolve, reject) => {
        let products = true; 
        setTimeout(() => 
            {
            if ( products) 
                {
                resolve(["TV", "Fridge", "AC"]);
            } 
            else
                 {
                reject("API Failed");
            }
        }, 2000);
    });
}

getProducts()
.then((data) => 
    {

    console.log("Products:", data);
})
 .catch((error) => 
    {
        console.log("Error:", error);
})
    .finally(() => 
        {
        console.log("API called Successfully");
    });
