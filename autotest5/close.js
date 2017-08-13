var a = function () {
    var count = 0;
    return function () {
       return count += 1;
    }
}

var addtwo=a();
console.log( addtwo());
console.log( addtwo());
console.log( addtwo());