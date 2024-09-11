function doubleArray(arr, callback) {
    const doubledArr = arr.map((num) => {
        return callback(num);
    });
    return doubledArr;
}

function callback(num) {
    return num * 2;
}

const originalArray = [1, 2, 3, 4];
const doubledArray = doubleArray(originalArray, callback);
console.log(doubledArray); 

