class User {
    constructor(userName, email, pass){
        this.userName = userName;
        this.email = email;
        this.pass = pass;
    }

    // ------------------------------------
    // Maximum call stack size exceeded
    // get pass(){
    //     return `${this.pass}abs`;
    // }

    // set pass(value){
    //     this.pass = value;
    // }
    // ------------------------------------
    // we see this due to constructor and set both wants to access it
    // here we get problem into set because both collied constructor and set
    
    // -----------------------------------
    // get pass(){
    //     return `${this.pass}abs`;
    // }

    // set pass(value){
    //     this.password = value;
    // }
    // here we get problem due to the get into get and set both have been same value to be passed

    // main point we actually return password as we want but into the database we save the actual what the user give
    get pass(){
        return `${this.password}abs`;
    }

    set pass(value){
        this.password = value;
    }

}

const chai = new User("chai", "chai@gamil.com", 123);
console.log(chai);

console.log(chai.pass)