async function getallinformation(){
        const [data1,data2] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1").then((Response)=>Response.json()),
            fetch('https://jsonplaceholder.typicode.com/posts/1').then((Response)=>Response.json()),
        ])

    const alldata = {
        todo: data1,
        post: data2,
    }
    return alldata;
}
getallinformation().then((data)=> console.log(data));