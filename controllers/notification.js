const { request } = require("express");
const NotificationRepo = require("../models/NotificationRepo");
const PushNotifaction = require("./PushNotification");

exports.createNotifs = async (req,res,next)=>{
    let {channel, key, message} = req.body
    try{
        let notif = await NotificationRepo.create({channel, key, message})
        return res.status(200).send({
            status:200,
            message: "Notification created successfully",
            data: notif
            })
    }catch(err){
        if(err.code == 11000){
            let error = err['errmsg'].split(':')[2].split(' ')[1].split('_')[0];
            res.status(500).send({
                message: `${error} already exist`,
                status: 11000,
                error: error
            });
        }else{
            console.log(err)
            return res.status(400).send({
            status:400,
            message: "Bad Request",
            error: err 
            })
        }
    }
}


exports.sendNotifs = async (req,res,next)=>{
    // const {key, adapter} = req.params;
    // notif = await NotificationRepo.all({key:key})
    // if(!notif){
        return res.status(404).send({
            status:404,
            message: "No matching key"
         })
    // }

    

}

