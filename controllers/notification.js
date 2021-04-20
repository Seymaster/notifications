const NotificationRepo = require("../models/NotificationRepo");

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