//task 1 Given an array of integers, find the pair of adjacent elements that has the largest product and
//return that product.
let array = [5, 3, 2, 8, 9, 1, 10, 12, 2];
array = array.sort((a,b) =>a-b);
console.log(array);
let largestProduct = array.at(-1) * array.at(-2);
console.log(largestProduct);

//task 2. Given an array of integers. All numbers are unique. Find the count of missing numbers between
//minimum and maximum elements to make integers sequence.

let arr = [5, 3, 2, 8, 9];
arr = arr.sort();
function findAllNum(arr) {
    let result = [];
    for (let i = arr[0]; i <= arr.slice(-1); i++) {
        result.push(i);
    }
    return result;
}
console.log(findAllNum(arr))

//task 3.Implement built in array sort method using bubble sort algorithm.
function mySort(fn) {
  let checked;
  do {
    checked = false;
    for (let i = 0; i < this.length; i++) {
      let bubble = fn(this[i], i, this)
      {
        if(this[i] > this[i + 1]){
        let a = this[i];
        this[i] = this[i + 1];
          this[i + 1] = a;
          checked = true;
      }
      }
     
    }
  }while (checked)
  return this[i];
}

//task 4. Insert a n positive number. Print the n-st prime number.
let arr = [2, 4, 1, 8, 5, 9, 3];
let el = 4;
function element(el, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (el === i) {
            return arr[i - 1]
        }
    }
}
console.log(element(el, arr))