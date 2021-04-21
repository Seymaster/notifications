"use strict";
const { sendMail } = require("./mail")


class PushNotifaction {
    constructor(notifs){
        this.notifs = notifs
    }
    send(recipient, notification){
        this.notifs.recipient = recipient
        this.notifs.notification = notification
        return notifs
    }
}


module.exports =  (new PushNotifaction())