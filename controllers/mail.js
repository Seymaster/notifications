const fetch = require("node-fetch");
const app_logo = process.env.app_logo
const app_domain = process.env.app_domain
const baseUrl = process.env.mainbaseUrl
const clientId  = process.env.productionClientId
const clientSecret = process.env.productionClientSecret
const redirect_url = process.env.stagingRedirect

// Email Notification API
async function sendMail(recipient){
    var raw = JSON.stringify({
    "from": "no-reply@owambe.ng",
    "subject": "The event has started: ",
    "recipients": [
        recipient
    ],
    "header": {
        "title": "Your Event has started Owambe.ng",
        "bgColor": "",
        "appName": "Owambe.ng",
        "appURL": app_domain,
        "appLogo": app_logo
    },
    // "content": "<br>Testing email attachment content<br> <p>KKD</p>",
    "body": {
        "content": "Message from Owambe"
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



module.exports = { sendMail }
