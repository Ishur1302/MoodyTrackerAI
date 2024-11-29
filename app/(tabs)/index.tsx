import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const Index = () => {
  const [mood, setMood] = useState(3);
  const [description, setDescription] = useState('');
  const [insight, setInsight] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5001/mood', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood, description }),
      });

      const data = await response.json();
      setInsight(data.insight); // Assuming the AI sends back an "insight" field
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Tracker</Text>
      <Slider
        value={mood}
        onValueChange={(value) => setMood(value)}
        minimumValue={1}
        maximumValue={5}
        step={1}
        style={styles.slider}
      />
      <Text>Current Mood: {mood}</Text> {/* Displaying selected mood value */}
      <TextInput
        placeholder="Describe your mood"
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {insight && <Text style={styles.insight}>AI Insight: {insight}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  slider: {
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  insight: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Index;