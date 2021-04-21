"use strict";

class RecipientPayload {
    constructor(users){
        this.users = users;
    }
    
    phoneNumber(){
        return this.users.map(
        data=>data.phoneNumber);
    }

    email(){
        // console.log(this.users)
        return this.users.map(
        data=>data.email);
    }
}

// let user = [
//             {"phoneNumber" : "8023456789","email" : "alugbinoluwaseyi@gmail.com"},
//             {"phoneNumber" : "8023456789","email" : "alugbin@gmail.com"},
//             {"phoneNumber" : "8023456789","email" : "aluseyi@gmail.com"},
//             {"phoneNumber" : "8023456789","email" : "aloluwaseyi@gmail.com"},
//             {"phoneNumber" : "8023456789","email" : "alyi@gmail.com"}
//             ]

// let userNumber = new RecipientPayload(user)
// console.log(userNumber.phoneNumber())

module.exports = RecipientPayload;