class User{
    constructor (name, email, phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    add91(phone) {
        return `+91 ${this.phone}`;
    }
}

const chai = new User("Chai", "chai@email.com", 1837319991);
console.log(chai);
console.log(chai.add91());

// behind scenes

function User2(userName, email, phone){
    this.userName = userName;
    this.email = email;
    this.phone = phone;
}

User2.prototype.add91 = function(){
    return `+91 ${this.phone}`;
}

const tea = new User2("Tea", "tea@gmail.com", 3452345123);

console.log(tea);
console.log(tea.add91());