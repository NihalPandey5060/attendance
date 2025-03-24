const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3001;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files (HTML, JS, CSS)
app.use(express.static(path.join(__dirname)));

// Serve `quagga_test.html` when visiting `/`
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "quagga_test.html"));
});

// API endpoint to receive barcode data
app.post("/attendance", (req, res) => {
  const { barcode } = req.body;

  if (!barcode) {
    return res.status(400).json({ error: "No barcode received" });
  }

  console.log("✅ Received barcode:", barcode);
  res.json({ message: `✅ Attendance marked for ${barcode}` });
});

// Start the server
app.listen(3000, "0.0.0.0", () => {
    console.log("Server is running...");
  });
  