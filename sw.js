// const websocket = new WebSocket( 'ws://localhost:8000/ws/notifications/')

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
//     self.registration.showNotification("Notification", {
//         body: "Hello",
//     })
// })

self.registration.showNotification("Notification", {
    body: "Hello",
})