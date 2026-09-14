const promiseOne = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve();
        console.log("Promise is called");
    } ,1000)
})

promiseOne.then(function(){
    console.log("Promise one is consumed\n");
})

new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("This is example 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("promise 2 is consumed\n");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("This is 3 promise");
        resolve({userName: "Chai", email: "Chai@example.com"});
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user, "\n");
    console.log("Promise 3 is consumed\n");
})

const promiseFour = new Promise(function(resolve, reject){
    let error = false;
    let error2 = true;
    setTimeout(function (){
        if(!error){
            resolve({userName: "Chai", email: "Chai@example.com"});
        }
        else{
            reject("Some error is coming");
        }
    }, 2000);

    setTimeout(function () {
        if(!error2){
            resolve({userName: "Chai", email: "Chai@example.com"});
        }
        else{
            reject("Some error is coming");
        }
    }, 1000)
})
console.log(promiseFour);
promiseFour.then(function(user){
    console.log(user);
    console.log(user.userName);
}).catch(function(error){
    console.log(error);
});

// ------------------------------------------------------------------------------
// this is not working we are not properly handle the return thats is why
// ------------------------------------------------------------------------------
// promiseFour.then(function(user){
//     console.log(user);
// }).then( (userName) => {
//     return userName;
// })
// .catch(function(error){
//     console.log(error);
// });
// ------------------------------------------------------------------------------

promiseFour.then( (user) => {
    console.log(user);
    return user.email;
}).then( (email) => {
    console.log(email);
}).catch( (error) => {
    return error;
})

promiseFour.then( (user) => {
    console.log(user);
    return user.email;
}).then( (email) => {
    console.log(email);
}).catch( (error2) => {
    return error2;
}).finally( () => console.log("Promise 4 is done"));

const promiseFive = new Promise(function(resolve, reject){
    let error = false;
    let error2 = true;
    setTimeout(function (){
        if(!error){
            resolve({userName: "Chai", email: "Chai@example.com"});
        }
        else{
            reject("Some error is coming");
        }
    }, 1000);

    setTimeout(function () {
        if(!error2){
            resolve({userName: "Chai", email: "Chai@example.com"});
        }
        else{
            reject("Some error is coming");
        }
    }, 1000)
})

promiseFive.then( (user) => {
    console.log(user);
    return user.email;
}).then( (email) => {
    console.log(email);
}).catch( (error2) => {
    return error2;
}).finally( () => console.log("Promise 5 is done"));

const promiseSix = new Promise(function (resolve, reject) {
    let error = false;
    setTimeout(function (){
        if(!error){
            resolve({code: "JavaScript", tutorEmail: "Chai@example.com"});
        }
        else{
            reject("Some code error is coming");
        }
    }, 1000);
})

async function consumptionFive (){
    try {
        // promiseSix is Object so we are not using ()
        const response = await promiseSix;
        console.log(response);
        console.log("Consumption 6 done\n")
    } catch (error) {
        console.log(error);
    }
}

consumptionFive();


async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
    
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then(function (response) {
    console.log("Response: ", response);
    return response.json();
})
.then(function (data){
    console.log("Data: ", data);
})
.catch(function (error){
    console.log("E: ", error);
})