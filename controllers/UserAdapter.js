"use strict"

const RecipientPayload = require("./RecipientPayload");

class UserAdapter extends RecipientPayload{
    constructor(users){
        console.log(users);
        super(users);
        this.payload = [];
    }
    generateRecipient(params){
        console.log(params, "here");
        if(params === "sms"){
            return this.phoneNumber
        }
        return this.email
    }
}

// let user = [
//     {"phoneNumber" : "8023456789","email" : "alugbinoluwaseyi@gmail.com"},
//     {"phoneNumber" : "8023456789","email" : "alugbin@gmail.com"},
//     {"phoneNumber" : "8023456789","email" : "aluseyi@gmail.com"},
//     {"phoneNumber" : "8023456789","email" : "aloluwaseyi@gmail.com"},
//     {"phoneNumber" : "8023456789","email" : "alyi@gmail.com"}
// ]

// let userNumber = new UserAdapter(user)
// console.log(userNumber.phoneNumber())

module.exports = (new UserAdapter());