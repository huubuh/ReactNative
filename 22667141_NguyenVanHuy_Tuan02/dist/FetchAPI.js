"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTodo = fetchTodo;
exports.postData = postData;
exports.downloadFile = downloadFile;
exports.waitFiveSeconds = waitFiveSeconds;
exports.fetchWithRetry = fetchWithRetry;
exports.batchProcess = batchProcess;
exports.queueProcess = queueProcess;
exports.ex30 = ex30;
//21. Use fetch to get data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1).
async function fetchTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok)
        throw new Error(`HTTP ${res.status}`);
    const data = (await res.json());
    console.log("Fetched Todo:", data);
    return data;
}
fetchTodo().catch(err => console.error("Fetch error:", err));
//22. Call the API multiple times and log the results.
async function ex22() {
    const ids = [1, 2, 3]; // gọi 3 lần với 3 id khác nhau
    for (const id of ids) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!res.ok)
            throw new Error(`HTTP ${res.status}`);
        const todo = (await res.json());
        console.log(`Result for id=${id}:`, todo);
    }
}
ex22().catch(err => console.error("Fetch error:", err));
//23. Write an async function that fetches a list of todos and filters out those that are not completed.
async function ex23() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok)
        throw new Error(`HTTP ${res.status}`);
    const todos = await res.json();
    const completed = todos.filter(t => t.completed);
    console.log("Completed todos:", completed.length);
    console.log(completed);
}
ex23().catch(err => console.error("Fetch error:", err));
async function postData(data) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(data),
    });
    if (!res.ok)
        throw new Error(`HTTP ${res.status}`);
    const json = (await res.json());
    console.log("POST Result:", json);
    return json;
}
postData({ title: "Hello", body: "World", userId: 1 })
    .catch(err => console.error("POST error:", err));
//25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.
async function downloadFile(filename) {
    console.log(`Downloading ${filename}...`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(`${filename} downloaded!`);
}
downloadFile("report.pdf");
//26. Use async/await with setTimeout to simulate a 5-second wait.
async function waitFiveSeconds() {
    console.log("Waiting 5 seconds...");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Done after 5s");
}
waitFiveSeconds();
//27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.
async function fetchWithRetry(url, retries) {
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            const res = await fetch(url);
            if (!res.ok)
                throw new Error(`HTTP ${res.status}`);
            return res;
        }
        catch (err) {
            if (attempt === retries)
                throw err;
            console.warn(`Attempt ${attempt + 1} failed. Retrying...`);
        }
    }
    throw new Error("Failed after retries");
}
//28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 2)
    .then(res => res.json())
    .then(data => console.log("fetchWithRetry result:", data))
    .catch(err => console.error("fetchWithRetry error:", err));
async function batchProcess() {
    const tasks = Array.from({ length: 5 }, (_, i) => downloadFile(`file${i + 1}.txt`));
    await Promise.all(tasks);
    console.log("All files processed!");
}
batchProcess();
//29. Write an async function queueProcess() that processes tasks sequentially in a queue.
async function queueProcess() {
    const files = ["a.txt", "b.txt", "c.txt", "d.txt", "e.txt"];
    for (const file of files) {
        await downloadFile(file);
    }
    console.log("All files processed sequentially!");
}
queueProcess();
//30. Use async/await + Promise.allSettled() to handle multiple API calls and display their success/failure status.
async function ex30() {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://jsonplaceholder.typicode.com/todos/999999" // likely to fail
    ];
    const promises = urls.map(url => fetch(url));
    const results = await Promise.allSettled(promises);
    results.forEach((result, idx) => {
        if (result.status === "fulfilled" && result.value.ok) {
            console.log(`API call ${idx + 1} succeeded.`);
        }
        else {
            console.log(`API call ${idx + 1} failed.`);
        }
    });
}
ex30();
