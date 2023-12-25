// function x() {
//     for (let i = 1; i <= 5; i++){
//         function close(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000);
//         }
//         close(i);
//     }
//     console.log("Hello World");
// }
// x();
const output = "what's your perfect first date?"
.split("")
.map(parseInt)
.filter(a => a)
.reduce((a, b) => a + b)
.toString()
.split("")
.reverse()
.join("")

console.log(output);