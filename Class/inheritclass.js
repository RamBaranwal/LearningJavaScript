class User {
    constructor(user){
        this.user = user;
    }

    profession(){
        console.log(`Welcome Mr.\\Mrs. ${this.user}`);
    }
}

class Teacher extends User {
    constructor(user, email, password){
        super(user);
        this.email = email;
        this.password = password;
    }

    changePass (){
        return `${this.password}${this.user}`;
    }

    makeEmail(){
        console.log(`${this.user}${this.email}`)
    }
}

const chai = new Teacher("Chai", "chai@gmail.com", "123");
console.log(chai);

console.log(chai.changePass());
chai.makeEmail();
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
const tea = new User("Tea");
console.log(tea);

tea.profession();

console.log(tea instanceof Teacher);
console.log(tea instanceof User);