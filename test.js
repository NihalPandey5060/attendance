const fs = require("fs");
const express = require("express");

const app = express();
const PORT = 3000;

// Write to a file
fs.writeFile("test.txt", "Node.js File System is working! ✅", (err) => {
    if (err) throw err;
    console.log("File written successfully!");
});

// Read the file asynchronously
fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File Content:", data);
});

// Create a simple HTTP server
app.get("/", (req, res) => {
    res.send("Hello, Nihal! Your Node.js server is running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
