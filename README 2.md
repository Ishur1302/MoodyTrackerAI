Here’s the README.md tailored for your Mood Tracker AI app, including all requested sections:

# Mood Tracker AI App

This is a React Native app created using Expo. It allows users to track their mood and receive AI-generated insights based on their input using a backend powered by Hugging Face's GPT-2 model.

---

## Project Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (>=14.x)
- npm (Node Package Manager)
- Expo CLI (`npm install -g expo-cli`)

### Steps to Run the Project
1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd mood-tracker-ai

	2.	Install Dependencies
Navigate to the project directory and install the required packages:

npm install


	3.	Run the Backend Server
Navigate to the server directory and start the backend:

node server.js


	4.	Start the Expo Development Server
Go back to the root project directory and start the app:

npx expo start


	5.	Test the App
Use any of the following options to test the app:
	•	Expo Go: Scan the QR code using the Expo Go app on your phone.
	•	Android Emulator: Open the app in an Android emulator.
	•	iOS Simulator: Open the app in an iOS simulator (MacOS only).

Brief Explanation of Approach and Challenges Faced

Approach

	1.	Frontend (React Native):
	•	Developed a simple UI using Slider, TextInput, and Button components.
	•	Utilized state management to track user inputs (mood, description) and display the AI-generated insights.
	•	Integrated the backend API using fetch for sending and receiving data.
	2.	Backend (Express.js):
	•	Set up a Node.js server with Express to handle POST requests.
	•	Integrated Hugging Face’s GPT-2 model to generate insights from user inputs.
	3.	Hugging Face API:
	•	Used the @huggingface/inference library for text generation.
	4.	Expo:
	•	Leveraged Expo for easy cross-platform development and testing.

Challenges

	•	Cross-Origin Issues: Faced CORS issues while testing API requests. Resolved by enabling CORS in the backend.
	•	Model Limitations: GPT-2’s insights can be generic, requiring prompt engineering for better responses.
	•	Real-Time Testing: Debugging local server communication with the app on an emulator required network setup adjustments.

Assumptions and Decisions Made

Assumptions

	•	The user is expected to provide a mood rating between 1 and 5, and optionally, a descriptive text about their mood.
	•	The backend will always respond with a valid insight field in the JSON response.
	•	The app will be primarily tested in a development environment (local server setup).

Decisions

	•	Used GPT-2 for text generation due to its lightweight nature compared to larger models like GPT-3.
	•	Kept the frontend UI minimal for ease of use and to focus on core functionality.
	•	Designed the app with modularity in mind, separating the backend and frontend for easier future upgrades.

Learn More

	•	Expo Documentation
	•	React Native Documentation
	•	Hugging Face API

