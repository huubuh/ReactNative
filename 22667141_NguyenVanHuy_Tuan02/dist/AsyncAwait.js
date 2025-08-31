"use strict";
//11. Convert Exercise 1 into async/await.
async function ConvertExercise1() {
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
    console.log("Hello Async");
}
ConvertExercise1();
//12. Write an async function that calls simulateTask(2000) and logs the result.
async function SimulateTask() {
    const result = await new Promise((resolve) => {
        setTimeout(() => resolve("Task done"), 2000);
    });
    console.log(result);
}
SimulateTask();
//13. Handle errors using try/catch with async/await.
async function ex13() {
    try {
        const result = await new Promise((_, reject) => {
            setTimeout(() => reject("something went wrong"), 1000);
        });
        console.log("resuilt", result);
    }
    catch (error) {
        console.log("Caught error:", error);
    }
}
ex13();
///14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
async function tripleAfter1s(num) {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
    return num * 3;
}
(async () => {
    const resuilt = await tripleAfter1s(5);
    console.log(resuilt);
})();
//15. Call multiple async functions sequentially using await.
async function ex15() {
    console.time("sequential");
    const a = await tripleAfter1s(2);
    console.log("a:", a);
    const b = await tripleAfter1s(3);
    console.log("b:", b);
    const c = await tripleAfter1s(4);
    console.log("c:", c);
    console.timeEnd("sequential");
}
ex15();
//16. Call multiple async functions in parallel using Promise.all().
async function ex16() {
    console.time("parallel");
    const results = await Promise.all([
        tripleAfter1s(2),
        tripleAfter1s(3),
        tripleAfter1s(4)
    ]);
    console.log("results:", results);
    console.timeEnd("parallel");
}
ex16();
//17. Use for await...of to iterate over an array of Promises.
async function ex17() {
    const nums = [1, 2, 3];
    const promises = nums.map(n => tripleAfter1s(n));
    for await (const result of promises) {
        console.log("for await result:", result);
    }
}
ex17();
//18. Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).
async function fetchUser(id) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { id, name: `User${id}` };
}
(async () => {
    const user = await fetchUser(1);
    console.log("Fetched user:", user);
})();
//19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
async function fetchUsers(ids) {
    const users = await Promise.all(ids.map(id => fetchUser(id)));
    return users;
}
(async () => {
    const users = await fetchUsers([1, 2, 3]);
    console.log("Fetched users:", users);
})();
//20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
async function fetchUserWithTimeout(id) {
    const apiCall = new Promise(resolve => setTimeout(() => resolve({ id, name: `User${id}` }), 1000));
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("API call timed out")), 2000));
    return Promise.race([apiCall, timeout]);
}
(async () => {
    try {
        const user = await fetchUserWithTimeout(1);
        console.log("Fetched user with timeout:", user);
    }
    catch (error) {
        console.log("Error:", error);
    }
})();
