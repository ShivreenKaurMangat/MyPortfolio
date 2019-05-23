if (navigator.serviceWorker){
  navigator.serviceWorker.register('./sw.js')
  .then(function() {
    console.log("Installed Service Worker");
  })
  
  .catch(function() {
    console.log("Didn't installed Service Worker");
  })
}
