import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

// Initialize GoogleGenerativeAI with your API_KEY.
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// Initialize GoogleAIFileManager with your API_KEY.
const fileManager = new GoogleAIFileManager(process.env.API_KEY);

const model = genAI.getGenerativeModel({
  // Choose a Gemini model.
  model: "gemini-1.5-pro",
});

// Upload the file and specify a display name.
const uploadResponse = await fileManager.uploadFile("./invoicexcel.csv", {
  mimeType: "text/csv",
  displayName: "invoicexcel",
});

// View the response.
console.log(
  `Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`,
)
const result = await model.generateContent([
  {
    fileData: {
      mimeType: uploadResponse.file.mimeType,
      fileUri: uploadResponse.file.uri,
    },
  },
  { text: "Can you summarize this document as a bulleted list?" },
]);
console.log(result.response.text());
const responseJSON = {
  summary: result.response.text().split("\n").map((item) => item.trim()),
};

const cleanedSummary = responseJSON.summary.map((line) => {
  return line.replace(/\*\*/g, "").replace(/\*/g, "").trim();
});

const cleanedResponseJSON = {
  summary: cleanedSummary.filter((line) => line !== ""), // Remove empty lines
};

// Convert the cleaned array into an object
const structuredData = {};
cleanedResponseJSON.summary.forEach((line) => {
  const [key, ...value] = line.split(":"); // Split at the first colon
  if (key && value.length) {
    structuredData[key.trim()] = value.join(":").trim(); // Join remaining text as value
  } else if (key) {
    // For multi-line items like "Invoice Items", append values
    if (!structuredData["Invoice Items"]) {
      structuredData["Invoice Items"] = [];
    }
    structuredData["Invoice Items"].push(key.trim());
  }
});

console.log("Structured Data:", structuredData);
export default structuredData;
fetch("http://localhost:3000/data",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(structuredData)
})



