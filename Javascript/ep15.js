console.log("Start");

// setTimeout(function cb() {
//     console.log("Callback");
// }, 5000);
 
// document.getElementById("btn").addEventListener("click", function cb() {
//     console.log("Callback");
// });

setTimeout(function cbT() {
    console.log("CB SetTimeout");
}, 5000);

fetch("https://shrutinathportfolio.netlify.app/", {      /* This function goes to the microtask queue. This has more priority.*/
    mode: 'no-cors'
}).then(function cbF() {
    console.log("CB Netflix");
});

console.log("End");