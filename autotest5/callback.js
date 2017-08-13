// var x= function () {
//     console.log('helloworld I am x')
// }
// var y=function(callback){
//     console.log('goo night');
//     callback();
// }

// y(x);


var calc = function (num1, num2, calcType) {
    if (calcType === 'add') {
        return num1 + num2;
    } else if (calcType === 'mulitupy') {
        return num1 * num2;
    }
}

console.log(calc(1,2,'add'));