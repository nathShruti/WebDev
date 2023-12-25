function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);     // b is inside function a
    }
}

a();
//console.log(b);         //  b is not defined error   