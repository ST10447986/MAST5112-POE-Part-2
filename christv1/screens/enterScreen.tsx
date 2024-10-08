import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const courseList = [
  { id: 1, name: "Hors d'oeuvre" },
  { id: 2, name: "Amuse-bouche" },
  { id: 3, name: "Soup" },
  { id: 4, name: "Appetizer" },
  { id: 5, name: "Salad" },
  { id: 6, name: "Fish" },
  { id: 7, name: "Main course" },
  { id: 8, name: "Palate cleanser" },
  { id: 9, name: "Second main course" },
  { id: 10, name: "Cheese course" },
  { id: 11, name: "Dessert" },
  { id: 12, name: "Mignardise" },
];

export function EnterScreen({ navigation }: { navigation: any }) {
  const [mTitle, setMTitle] = useState('');
  const [mDescription, setMDescription] = useState('');
  const [mPrice, setMPrice] = useState(''); 
  const [mCourse, setMCourse] = useState('');
  const [mList, setMList] = useState<any[]>([]);

  const handleSaveMenu = () => {
    const thePrice = parseFloat(mPrice);

    // Validation
    let errors = [];
    if (!mTitle) errors.push("Dish name is required");
    if (!mDescription) errors.push("Description is required");
    if (!mCourse) errors.push("Select a course");
    if (isNaN(thePrice) || thePrice <= 0) errors.push("Price must be a positive number");

    if (errors.length > 0) {
      alert("Error: " + errors.join(", "));
      return;
    }

    // Add new item to the list
    const newMenuItem = { title: mTitle, description: mDescription, price: thePrice, course: mCourse };
    const updatedMenuList = [...mList, newMenuItem];
    setMList(updatedMenuList);

    // Navigate to Home screen with updated menuList
    navigation.navigate('Home', { menuList: updatedMenuList });

    // Reset form
    setMTitle('');
    setMDescription('');
    setMPrice('');
    setMCourse('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Create Menu</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        placeholderTextColor="#808080"
        onChangeText={setMTitle}
        value={mTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#808080"
        onChangeText={setMDescription}
        value={mDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        placeholderTextColor="#808080"
        onChangeText={setMPrice}
        value={mPrice}
        keyboardType="numeric"
      />

      {/* Picker for Course */}
      <Picker
        selectedValue={mCourse}
        onValueChange={(value) => setMCourse(value)}
        style={styles.picker}
      >
        <Picker.Item label="Select a course" value="" />
        {courseList.map((item) => (
          <Picker.Item label={item.name} value={item.name} key={item.id} />
        ))}
      </Picker>

      {/* Save Button */}
      <TouchableHighlight 
        style={styles.saveButton} 
        underlayColor="#F21905" 
        onPress={handleSaveMenu}
      >
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}

// ----- Styles -----
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#252525',
    flexGrow: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 100,
    textAlign: 'center',
    color: '#f21905',
  },
  input: {
    backgroundColor: '#3c3c3c',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    color: '#fff',
  },
  picker: {
    backgroundColor: '#3c3c3c',
    marginBottom: 15,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#f28705',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
