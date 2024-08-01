// Synchronous function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("naveen");


// Asynchronous with callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "naveen", age: 23 };
        callback(data);
    }, 3000);
}

fetchData((data) => {
    console.log("Data received:", data);
});


// Creating a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Alice", age: 25 };
            resolve(data);
        }, 2000);
    });
}

// Consuming a Promise
fetchData()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    

    // Using async/await
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "naveen", age: 23 };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();






