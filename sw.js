setInterval(() => {
    self.registration.showNotification("App Notification", {
        body: "This was sent by the service worker"
    })
}, 15000)


// const websocket = new WebSocket( 'wss://fyp-server-django.onrender.com/ws/notifications/')

// websocket.addEventListener('open', (event) => {
//     console.log("Websocket connection open")
// })

// websocket.addEventListener('close', () => {
//     console.log("Websocket connection closed")
// })


// websocket.addEventListener('message', (event) => {
//     console.log(event)
    
//     // const notificationData = event.data

//     // const options = {
//     //     body: notificationData,
//     // }
//     // console.log(self.registration)
//     // setTimeout
//     self.registration.showNotification("Notification", {
//         body: "Hello",
//     })
// })

// self.registration.showNotification("Notification", {
//     body: "Hello",
// })