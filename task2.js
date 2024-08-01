function hi(name) {
    console.log(name);
}

hi( "hello Nandhu" );

function after(name) {
    console.log(name);
}

after( "morning" );



function adding(){
    var a=20;
    var b= 30;
    var result= a+b;
    console.log(result);
}

function hello(){
    var y= 100;
    var z= 60;
    var result= y-z;
    console.log(result);
    adding();
}
hello();
function hello(){
    var y= 100;
    var z= 60;
    var result= y-z;
    console.log(result);
    adding();
}
hello();

function multify(){
    var y= 100;
    var z= 6;
    var result= y*z;
    console.log(result);
    hello();
}
multify();





function functionname1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate fetching data
            const data = {
                name: "naveen",
                email: "mailto:naveen@gmail.com"
            };
           resolve(data); // Resolve with the data
            // To test error handling, uncomment the line below and comment out the `resolve` line
            // reject(new Error("Failed to fetch data"));
        }, 6000);
    });
}

// Consuming the Promise
functionname1()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });




    

// Function that returns a Promise
function functionname() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "gadde", 
                           email: "mailto:gadde@gmail.com" };
            resolve(data);
        }, 2000);
    });
}

// Asynchronous function to get data
async function getData() {
    try {
        // Wait for fetchData to resolve
        const data = await functionname();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}


getData();










// Function that returns a Promise
function functionname3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "hari", 
                           email: "mailto:hari@gmail.com" };
            resolve(data);
        }, 1000);
    });
}

// Asynchronous function to get data
async function ravi() {
    try {
        // Wait for fetchData to resolve
        const data = await functionname3();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}


ravi();









function sujji() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate fetching data
            const data = {
                 name: "srikanth",
                 email: "mailto:srikanth@gmail.com"
            };
           resolve(data); // Resolve with the data
            // To test error handling, uncomment the line below and comment out the `resolve` line
            // reject(new Error("Failed to fetch data"));
        }, 3000);
    });
}

// Consuming the Promise
sujji()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });

