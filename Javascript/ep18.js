const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

const calculate = function(radius, logic){    //Array.prototype.calculate = function(arr, logic){
    const output = [];                        //const output = []; 
    for(let i = 0; i < radius.length; i++){   //for(let i = 0; i < arr.length; i++){
        output.push(logic(radius[i]));        //    output.push(logic(arr[i]));
    }                                         //}
    return output;
};

console.log(calculate(radius, area));         //console.log(radius.map(area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));


// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius));