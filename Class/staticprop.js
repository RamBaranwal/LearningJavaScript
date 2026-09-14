class User {
    constructor(userName){
        this.userName = userName;
    }

    callMe(){
        console.log(`Hi i am User: ${this.userName}`);
    }

    static createId(){
        return `123`;
    }
}

class Teacher extends User{
    constructor(userName, email){
        super(userName);
        this.email = email;
    }
}

const iphone = new User("Iphone");
// --------------------------------------------------------------------------------------
// console.log(iphone.createId());          // after static we are not abel to access it
// --------------------------------------------------------------------------------------

console.log(User.createId());    /// by name of the class we call it