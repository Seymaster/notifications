"use strict";

const Notification = require("./Notification");
const Repository = require("./MongodbRepository");

class NotificationRepo extends Repository{
    constructor(){
        super(Notification);
    }

    nonMetaFields(){
        return ["channel","key","message"];
    }

}

module.exports = (new NotificationRepo());