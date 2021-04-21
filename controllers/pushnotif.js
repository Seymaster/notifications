"use strict";
const { sendMail } = require("./mail")


class PushNotifaction {
    constructor(notifs){
        this.notifs = notifs
    }
    send(recipient, notification){
        this.notifs.recipient = recipient
        this.notifs.notification = notification
        let mail = await sendMail(recipient)
        return mail
    }
}


module.exports =  (new PushNotifaction())