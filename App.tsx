import Slider from '@react-native-community/slider'; // Importing Slider for selecting mood level
import React, { useState } from 'react'; // Importing React and useState for state management
import { View, Text, TextInput, Button } from 'react-native'; // Importing React Native components

const App = () => {
  // State to manage the user's mood rating (1 to 5)
  const [mood, setMood] = useState(3); // Default mood rating is 3
  // State to store the user's mood description
  const [description, setDescription] = useState('');
  // State to store the AI-generated insight
  const [insight, setInsight] = useState('');

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      // Sending a POST request to the backend server
      const response = await fetch('http://localhost:5001/mood', {
        method: 'POST', // HTTP method
        headers: { 'Content-Type': 'application/json' }, // Setting content type to JSON
        body: JSON.stringify({ mood, description }), // Sending mood and description in the request body
      });

      // Check if the response status is not OK (e.g., error occurred)
      if (!response.ok) {
        throw new Error('Server error'); // Throw error for client-side handling
      }

      // Parse the JSON response from the server
      const data = await response.json();
      console.log('Response data:', data); // Debugging output for server response
      // Update insight with the AI-generated insight or fallback message
      setInsight(data.insight || 'No insight provided'); 
    } catch (error) {
      // Log and handle errors (e.g., network issues)
      console.error('Error:', error);
      // Update insight with an error message
      setInsight('An error occurred. Please try again.');
    }
  };

  return (
    <View> {/* Main container for the app */}
      <Text>Mood Tracker</Text> {/* App header */}
      
      {/* Slider for selecting mood rating */}
      <Slider
        value={mood} // Current mood value
        onValueChange={(value) => setMood(value)} // Update state when slider value changes
        minimumValue={1} // Minimum mood value
        maximumValue={5} // Maximum mood value
        step={1} // Increment in steps of 1
      />

      {/* Input field for describing mood */}
      <TextInput
        placeholder="Describe your mood" // Placeholder text
        value={description} // Current description value
        onChangeText={(text) => setDescription(text)} // Update state when text changes
      />

      {/* Button to submit mood and description */}
      <Button title="Submit" onPress={handleSubmit} />

      {/* Display the AI-generated insight if available */}
      {insight && <Text>AI Insight: {insight}</Text>}
    </View>
  );
};

export default App; // Exporting the component as default