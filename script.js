
//myEach function will take an array and a callback function so it will call the callback function for each element in the array.

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

//myMap function will take an array and a callback function so it will call the callback function for each element in the array. 
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

/* Output:
['swimming', 'eating', 'sleeping']
*/

function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) 
    {
        if (callback(arr[i], i, arr)) 
            return true;
    }
    return false;
}

let arr3 = [1,2,3,4,5];
function isEven(element, index, array) {
    for (let i = 0; i < array.length; i++) 
    {
        if (element % 2 === 0) 
            return true;
    }
    return false;
}

console.log(mySome(arr3, isEven));

/* Output:
true
*/

function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) 
    {
        if (!callback(arr[i], i, arr)) 
            return false;
    }
    return true;
}

let arr4 = [10,20,30,40,50];
function lessThan50(element, index, array) {
    return element < 60;
}

console.log(myEvery(arr4, lessThan50));

/* Output:
true
*/

function myReduce(arr, callback) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++)
    {
        result = callback(result, arr[i], i, arr);
    }
    return result;
}

let arr5 = [1,2,3,4,5];
function addSum(result, element, index, array) {
    return result + element;
}

let sum = myReduce(arr5, addSum);
console.log(sum);

/* Output:
15
*/

function myIncludes(arr, element) {
    for (let i of arr)
    {
        if (i === element) 
            return true;
    }
    return false;
}

let arr6 = ['dog', 'cat', 'rabbit', 'horse', 'elephant'];
console.log(myIncludes(arr6, 'fish'));

/* Output:
false
*/

function myIndexOf(arr, element, startIndex) {
    for (let i = startIndex; i < arr.length; i++) 
    {
        if (arr[i] === element) 
            return i;
    }
    return -1;
}

let arr7 = ['dog', 'cat', 'rabbit', 'horse', 'elephant'];
console.log(myIndexOf(arr7, 'horse', 2));
console.log(myIndexOf(arr7, 'cat', 0));
console.log(myIndexOf(arr7, 'fish', 0));


/* Output:
3
1
-1
*/

function myPush(arr , element) {
    arr[arr.length] = element;
}

let arr8 = [1,2,3,4];
myPush(arr8, 5);
console.log(arr8);

/* Output:
[1,2,3,4,5]
*/

function myLastIndexOf(arr, element) {
    let index;
    for (let i = 0 ; i < arr.length; i++) 
    
        if (arr[i] === element) 
        
            index = i;
        
        if (!!index)
        
            return index;
        
        else
        
            return -1;
        
    
}

let arr9 = ['dog', 'cat', 'rabbit', 'horse', 'elephant'];
console.log(myLastIndexOf(arr9, 'elephant'));
console.log(myLastIndexOf(arr9, 'fish'));

/* Output:
4
-1
*/


function grabKeys (obj) {
    let arr = [];
    for (let key in obj) {
        arr.push(key);
    }
    return arr;
}

let obj0 = { a: "Hello", b: "There", c: "How" , d: "Are", e: "You" };
console.log(grabKeys(obj0));

/* Output:
[ 'a', 'b', 'c', 'd', 'e' ]
*/

function grabValues (obj) {
    let arr = [];
    for (let value in obj) {
        arr.push(obj[value]);
    }
    return arr;
}

let obj1 = { a: "Hello", b: "There", c: "How", d: "Are", e: "You" };
console.log(grabValues(obj1));

/* Output:
[ 'Hello', 'There', 'How', 'Are', 'You' ]
*/

function moveZeros(num){
    let left = 0;
    let right = 0;

    while (right < num.length) {
        if (num[right]!== 0) {
            [num[left] , num[right]] = [num[right], num[left]];
            left++;
        }
        right++;
    }
}

let arr10 = [1, 2, 0, 0, 5, 0, 7]
moveZeros(arr10);
console.log(arr10);


/* Output:
[ 
    1, 2, 5, 7
    0, 0, 0
]
*/