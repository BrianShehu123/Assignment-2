function myEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) 
    callback(arr[i], i, arr);
}

let arr0 = [1,2,3,4,5];
function arr(element, index, array){
    console.log(element);
}

myEach(arr0, arr);


function g(a,b,c,d)
{
    console.log(a);
}
g(2,3);

