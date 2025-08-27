"use strict";
//1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const promise = new Promise((resolve) => {
    setTimeout(() => { resolve("Hello Async"); }, 2000);
});
promise.then((p) => { console.log(p); });
//2. Write a function that returns a Promise resolving with the number 10 after 1 second.
function number() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(10); }, 1000);
    });
}
number().then((n) => { console.log(n); });
//3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
function error() {
    return new Promise((reject) => {
        setTimeout(() => { reject("Something went wrong"); }, 1000);
    });
}
error().then((error) => { console.log(error); });
//4. Use .then() and .catch() to handle a Promise that returns a random number.
function random() {
    const num = Math.random();
    return new Promise((resolve, reject) => {
        if (num < 0.2) {
            reject("số quá bé");
        }
        else {
            resolve(num);
        }
    });
}
random().then((value) => { console.log(value); })
    .catch((err) => { console.log(err); });
//5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve("Task done"); }, time);
    });
}
simulateTask(2000).then((value) => {
    console.log(value);
});
//6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
function simulateTask1(time, value) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(value); }, time);
    });
}
Promise.all([
    simulateTask1(1000, "Task 1 done"),
    simulateTask1(2000, "Task 2 done"),
    simulateTask1(3000, "Task 3 done"),
]).then((value) => {
    console.log(value);
});
//7. Use Promise.race() to return whichever Promise resolves first.
Promise.race([
    simulateTask1(100, "one"),
    simulateTask1(500, "two"),
]).then((v) => {
    console.log(v);
});
//8. Create a Promise chain: square the number 2, then double it, then add 5.
Promise.resolve(2)
    .then((n) => n * n)
    .then((n) => n * 2)
    .then((n) => n + 5)
    .then((n) => { console.log(n); });
//9. Write a Promise that reads an array after 1 second and filters even numbers.
function evennumber(arr) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(arr.filter((n) => n % 2 == 0)); }, 1000);
    });
}
evennumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).then((v) => { console.log(v); });
//10. Use .finally() to log "Done" when a Promise finishes (success or failure).
simulateTask1(500, "Ok")
    .then((rs) => { console.log(rs); })
    .catch((err) => { console.log(err); });
