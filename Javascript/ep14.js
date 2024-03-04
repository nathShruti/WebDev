function attachEvent(){
    let count = 0;
    document.getElementById("clickme").addEventListener("click", function xyz(){
        console.log("Button Clicked", ++count);
    });
}
attachEvent();


// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y() {
//     console.log("y");
// }); 