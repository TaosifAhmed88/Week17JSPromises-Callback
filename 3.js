const person = {
    firstname: 'Taosif',
    lastname:'Ahmed',
    age: 21
};

function ageindays(personsObject,callback){
    const fullname = `${personsObject.firstname} ${personsObject.lastname}`;
    const ageindays = `${personsObject.age}`*365;
    callback(fullname,ageindays)

}
function logresult(fullname,ageindays){
    console.log(`The person full name is ${fullname} and age in days is ${ageindays}`);
    
}

ageindays(person,logresult)




