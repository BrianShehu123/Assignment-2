function myEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) 
    callback(arr[i], i, arr);
}

let arr0 = [1,2,3,4,5];
function arr(element, index, array){
    console.log(element);
}

myEach(arr0, arr);

/*Output :
1
2
3
4
5
*/


/*function g(a,b,c,d)
//{
//    console.log(a);
//}
g(2,3);
*/

function myMap(arr, callback) 
{
    let newArr = [];
    for (let i = 0; i < arr.length; i++) 
    {
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
}

let arr1 = [1,2,3,4,5];
function squared(element, index, array) {
    return element * element;
}

let test1 = myMap(arr1, squared);
console.log(test1);

/* Output:
[1,4,9,16,25]
*/

function myFilter(arr, callback) {
    let newArr = [];
    for (let i = 0; i< arr.length; i++) 
        if (callback(arr[i], i, arr)) 
            newArr.push(arr[i]);

            return newArr;
}

let arr2 = ['tired', 'swimming', 'eating', 'sleeping', 'car', 'food', 'water'];
function compareLength(element, index, array) {
    if (element.length > 5)
    return true;
}

let test2 = myFilter(arr2, compareLength);
console.log(test2);
