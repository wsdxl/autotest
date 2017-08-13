var myVaribale = 'global';
myOtherVaribale = 'global';

function myFunction(){
    var myVaribale = 'local';
    return myVaribale;
}

function myOtherFunction(){
    var myOtherVaribale = 'local';
    return myOtherVaribale;
}

console.log(myVaribale);
console.log(myFunction());
console.log(myOtherVaribale);
console.log(myOtherFunction());
console.log(myOtherVaribale);
