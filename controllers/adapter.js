"use strict";

class recipientPayload {
    constructor(request){
        this.request = request
    }
    phoneNumber(){
        return this.request.phoneNumber
    }

    email(){
        return this.request.email
    }
}

//  let request = {
//      phoneNumber: ["09080","080495885","6747839"],
//      email: "me@me.com"
//  }
// let userNumber = new recipientPayload(request.phoneNumber)
// console.log(userNumber)

module.exports = (new recipientPayload())