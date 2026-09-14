function setUser(name){
    this.name = name;
}

function createUser (name, email, contact) {
    // .call -> call the mehtod from where it is come and this hold it and after that what ever function it come it stored
    setUser.call(this, name)
    this.email  = email;
    this.contact = contact;
}

let user1 = new createUser("chai", "chai@fb.com", 1939101);
console.log(user1);

let temp = {};
createUser.call(temp, "hi", "hi@yt.com", 12313);
console.log(temp);

