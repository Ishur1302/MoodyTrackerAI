import React, { useState } from 'react'; // Importing React and useState for managing component state
import { View, Text, TextInput, Button } from 'react-native'; // Importing basic React Native components
import Slider from '@react-native-community/slider'; // Importing Slider component for mood selection

const Index = () => {
  // State variables to store user inputs and AI insights
  const [mood, setMood] = useState(3); // Initial mood rating set to 3
  const [description, setDescription] = useState(''); // Initial description is an empty string
  const [insight, setInsight] = useState(''); // Placeholder for AI-generated insight

  // Function to handle form submission and send data to the backend
  const handleSubmit = async () => {
    try {
      // Make a POST request to the server with mood and description
      const response = await fetch('http://localhost:5001/mood', {
        method: 'POST', // Specify POST method for sending data
        headers: { 'Content-Type': 'application/json' }, // Set headers for JSON format
        body: JSON.stringify({ mood, description }), // Convert mood and description to JSON string
      });

      // Parse the JSON response from the server
      const data = await response.json();
      // Update the insight state with the AI's response
      setInsight(data.insight); // Assuming the response contains an "insight" field
    } catch (error) {
      // Log errors to the console for debugging
      console.error('Error:', error);
    }
  };

  return (
    <View style={{ padding: 20 }}> {/* Container with padding for layout */}
      <Text>Mood Tracker</Text> {/* App title */}
      
      {/* Slider for mood selection */}
      <Slider
        value={mood} // Current value of the slider
        onValueChange={(value) => setMood(value)} // Update mood state as slider value changes
        minimumValue={1} // Minimum value the slider can take
        maximumValue={5} // Maximum value the slider can take
        step={1} // Increment in steps of 1
        style={{ marginBottom: 20 }} // Add margin for better layout
      />

      {/* Text input for mood description */}
      <TextInput
        placeholder="Describe your mood" // Placeholder text in the input field
        value={description} // Bind to the description state
        onChangeText={(text) => setDescription(text)} // Update description state as text changes
        style={{ borderBottomWidth: 1, marginBottom: 20 }} // Add underline and margin for styling
      />

      {/* Button to submit mood and description */}
      <Button title="Submit" onPress={handleSubmit} /> {/* Calls handleSubmit on press */}

      {/* Display AI insight if available */}
      {insight && <Text>AI Insight: {insight}</Text>} {/* Only render if insight is not empty */}
    </View>
  );
};

export default Index; // Exporting the component for use in other parts of the application