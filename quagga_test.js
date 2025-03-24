const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json()); // Allow JSON requests
app.use(cors()); // Allow frontend to communicate with backend

// Root route
app.get("/", (req, res) => {
  res.send("Backend is up and running!");
});

// Endpoint to receive scanned barcode data
app.post("/attendance", (req, res) => {
  const { barcode } = req.body;

  if (!barcode) {
    return res.status(400).json({ error: "No barcode received" });
  }

  console.log(`✅ Attendance recorded for Roll No: ${barcode}`);
  res.json({ message: `Attendance recorded for Roll No: ${barcode}` });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
