function greet (name){
    return new Promise((resolve, reject) => {
        const greeting = `Hello, ${name}!`
        resolve(greeting)
    })
}
greet('Taosif').then((message)=> console.log(message))