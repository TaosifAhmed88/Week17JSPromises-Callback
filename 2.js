function manipulatestring(inputstring,callback){
    let manipulatedstring = inputstring.toUpperCase();

    callback(manipulatedstring)

}

function logstring (manipulatedstring){
    console.log(`The Manipulated String is : ${manipulatedstring}`);
    
}

manipulatestring('Taosif Ahmed',logstring)