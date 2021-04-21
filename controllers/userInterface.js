"use strict"
const recipientPayload = require("./adapter")


class userAdapter extends recipientPayload{
    constructor(){
        super();
        this.payload = []
    }
    generateRecipient(){
        return this.payload
    }
}

module.exports = (new userAdapter())