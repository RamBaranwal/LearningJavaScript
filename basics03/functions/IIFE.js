// IIFE (Immediate Invoke Function Expression)

(function chai(){
    // name IIFE
    console.log("Connect to DB")
})();

( (name) => {
    // simple IIFE
    console.log(`Connect to DataBase ${name}`)
})("Phone_Call");