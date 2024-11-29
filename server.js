// Importing required modules
const express = require('express'); // Framework for building web servers
const cors = require('cors'); // Middleware to enable Cross-Origin Resource Sharing
const { HfInference } = require('@huggingface/inference'); // Hugging Face client for AI model inference

// Create an instance of an Express application
const app = express();
const port = 5001; // Define the port where the server will run

// Initialize the Hugging Face Inference client
const inference = new HfInference();

// Middleware setup
app.use(cors()); // Enable requests from other origins (important for frontend-backend communication)
app.use(express.json()); // Parse incoming JSON request bodies

// Endpoint for mood analysis
app.post('/mood', async (req, res) => {
  try {
    // Extract data from the client's request
    const { mood, description } = req.body;

    // Create a prompt to send to the Hugging Face model
    const prompt = `Given a mood rating of ${mood} and the description: "${description}", provide some insights to help the user.`;

    // Call the Hugging Face API for text generation
    const response = await inference.textGeneration({
      model: 'gpt2', // Specify the AI model to use (e.g., GPT-2 in this case)
      inputs: prompt, // Input prompt for the model
    });

    // Respond with the generated insights or a fallback message
    if (response && response.generated_text) {
      res.json({ insight: response.generated_text }); // Send the AI's response back to the client
    } else {
      res.json({ insight: "No insight available." }); // Handle cases where no insight is generated
    }
  } catch (error) {
    // Log and respond to any errors
    console.error('Error:', error);
    res.status(500).json({ error: 'Something went wrong' }); // Send an error response to the client
  }
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});