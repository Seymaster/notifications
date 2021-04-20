const fetch = require("node-fetch");
const app_logo = process.env.app_logo
const app_domain = process.env.app_domain
const baseUrl = process.env.mainbaseUrl
const clientId  = process.env.productionClientId
const clientSecret = process.env.productionClientSecret
const redirect_url = process.env.stagingRedirect

// Email Notification API
async function AttendeeMail(recipient,userName,eventName,room_id,eventImage){
    var raw = JSON.stringify({
    "from": "no-reply@owambe.ng",
    "subject": "The event has started: ",
    "recipients": [
        recipient
    ],
    "header": {
        "title": "Your Event has started Owambe.ng",
        "bgColor": "",
        // "appName": "Owambe.ng",
        "appURL": app_domain,
        "appLogo": app_logo
    },
    // "content": "<br>Testing email attachment content<br> <p>KKD</p>",
    "body": {
        "content": `Hello: ${userName},<br> The event ${eventName} has started! <br><p>You can Join the event here: </p>https://linkup-app.netlify.app/event/video/:${room_id}`,
        // "greeting": "Greetings,",
        // "introLines": [
        //     "Introduction Line",
        //     "You can still add more intro"
        // ],
        // "outroLines": [
        //     "1. Content below button",
        //     "2. Still below button or rather main content"
        // ]
    },
    // "button": {
    //     "level": "success",
    //     "actionUrl": "https://google.com/hello",
    //     "actionText": "The Button text"
    // },
    "attachments": [
        {
            "type":"url",
            "filename":"invoice.png",
            "data":`${eventImage}`
        }
    ]
});

    var requestOptions = {
    method: 'POST',
    headers:  {
                "Accept": "application/json",
                "Content-Type":"application/json",
                "client-id": clientId,
                "client-secret": clientSecret
            },
    body: raw,
    redirect: 'follow'
    };
    await fetch(`${baseUrl}/notifications/v1/email`,requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


async function OwnerMail(recipient,eventImage, message){
    var raw = JSON.stringify({
        "from": "no-reply@owambe.ng",
        "subject": "Your Event has been booked on Owambe.ng",
        "recipients": [
            recipient
        ],
        "header": {
            "title": "The Email Header",
            "bgColor": "",
            "appName": "Owambe",
            "appURL": app_domain,
            "appLogo": app_logo
        },
        // "content": "Inside Content: <br>Testing email content<br> <p>KKD</p>",
        "body": {
            "content": message,
            "greeting": "Hello,",
            // "introLines": [
            //     "Your Event has been booked on Owambe.ng"
            // ],
            // "outroLines": [
            //     "1. Content below button",
            //     "2. Still below button or rather main content"
            // ]
        },
        // "button": {
        //     "level": "success",
        //     "actionUrl": "test url",
        //     "actionText": "click to checkout"
        // },
        "attachments": [
            {
                "type":"url",
                "filename":"data.pdf",
                "data":    `${eventImage}`
            }
        ]
    });

    var requestOptions = {
    method: 'POST',
    headers:  {
                "Accept": "application/json",
                "Content-Type":"application/json",
                "client-id": clientId,
                "client-secret": clientSecret
            },
    body: raw,
    redirect: 'follow'
    };
    await fetch(`${baseUrl}/notifications/v1/email`,requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

// Book spot mail
async function BookMail(recipient,message,url){
    var raw = JSON.stringify({
        "from": "no-reply@owambe.ng",
        "subject": "Owambe.ng Payment",
        "recipients": [
            recipient
        ],
        "header": {
            "title": "Owambe Payment",
            "bgColor": "",
            "appName": "Owambe",
            "appURL": app_domain,
            "appLogo": app_logo
        },
        // "content": "Inside Content: <br>Testing email content<br> <p>KKD</p>",
        "body": {
            "content": message,
            "greeting": "Hello,",
            // "introLines": [
                
            // ],
            "outroLines": [
                `${redirect_url}`,
                // "2. Still below button or rather main content"
            ]
        },
        "button": {
            "level": "success",
            "actionUrl": `${url}`,
            "actionText": "Click to checkout"
        },
        // "attachments": [
        //     {
        //         "type":"url",
        //         "filename":"data.pdf",
        //         "data": "https://res.cloudinary.com/tm30global/image/upload/v1582900669/4bb79409937716d8db9855e49cc7a9b6.pdf"
        //     }
        // ]
    });

    var requestOptions = {
    method: 'POST',
    headers:  {
                "Accept": "application/json",
                "Content-Type":"application/json",
                "client-id": clientId,
                "client-secret": clientSecret
            },
    body: raw,
    redirect: 'follow'
    };
    await fetch(`${baseUrl}/notifications/v1/email`,requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


// let recipient = "alugbinoluwaseyi1@gmail.com"
// let url = "Img001"
// let message = "Hello"



// BookMail(recipient,url,message)
// .then(data=>{
//         console.log(data)
//     }).catch(err =>{
//         console.log(err)
//     })



module.exports = { AttendeeMail, OwnerMail, BookMail }
