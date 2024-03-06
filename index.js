// const checkPermission = () => {
//     if(!('serviceWorker' in navigator)){
//         throw new Error("No support for service worker")
//     }   
// }

// const registerSW = async () => {
    
//     return registration
// }

// const requestNotificationPermission = () => {
    
// }
Notification.requestPermission().then((perm) => {
    console.log(perm)
    new Notification("permission granted", {
        body: 'Permission Granted'
    })
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('sw.js');
        navigator.serviceWorker.ready.then((reg) => {
            console.log("Registered Service worker")
            reg.showNotification('Notification with ServiceWorker')
            console.log('Showed Notification')
        })
    }
})







// checkPermission()
// // requestNotificationPermission()
// registerSW()