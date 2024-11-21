import express from "express";
import getStructuredData from "./Generative.js"; // Import the function

const app = express();
const port = 5000;

app.use(express.json()); // Middleware to parse JSON requests

// Root route to provide a welcome message or documentation
app.get("/", (req, res) => {
  res.send("Welcome to the Invoice Processing API. Use POST /api/process-file to process a file.");
});

// API endpoint to process and fetch structured data
app.post("/api/process-file", async (req, res) => {
  try {
    const { filePath } = req.body; // Get the file path from the request body
    if (!filePath) {
      return res.status(400).json({ error: "File path is required" });
    }

    // Call the Generative.js function to process the file
    const structuredData = await getStructuredData(filePath);
    res.json(structuredData); // Send structured data as a response
  } catch (error) {
    console.error("Error in API:", error);
    res.status(500).json({ error: "Failed to process the file." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
