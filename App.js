import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const AgeCalculatorApp = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDate = new Date().getDate();

    const [enteredDate, enteredMonth, enteredYear] = birthDate
      .split("-")
      .map(Number);

    if (
      isNaN(enteredYear) ||
      isNaN(enteredMonth) ||
      isNaN(enteredDate) ||
      enteredYear <= 0 ||
      enteredMonth <= 0 ||
      enteredMonth > 12 ||
      enteredDate <= 0 ||
      enteredDate > 31
    ) {
      Alert.alert(
        "Invalid Birth Date",
        "Please enter a valid birth date (DD-MM-YYYY)."
      );
      setAge("");
    } else {
      let age = currentYear - enteredYear;
      if (
        currentMonth < enteredMonth ||
        (currentMonth === enteredMonth && currentDate < enteredDate)
      ) {
        age -= 1;
      }
      setAge(age.toString());
    }
  };

  const handleInputChange = (text) => {
    setBirthDate(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5
          name="calendar-alt"
          size={50}
          color="#fff"
          style={styles.icon}
        />
        <View>
          <Text style={styles.appName}>Age Calculator</Text>
          <Text style={styles.tagline}>Know your age with just one tap!</Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your birth date (DD-MM-YYYY)"
        keyboardType="numeric"
        onChangeText={handleInputChange}
        value={birthDate}
      />
      <TouchableOpacity style={styles.calculateButton} onPress={calculateAge}>
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>
      {age !== "" && (
        <Text style={styles.ageText}>Your are: {age} Years Old.</Text>
      )}
      <Text style={styles.footerText}>Made with ❤️ by AbhiVarde</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#695fD3",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff76",
  },
  tagline: {
    fontSize: 18,
    marginTop: 4,
    color: "#fff",
  },
  icon: {
    paddingRight: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  calculateButton: {
    backgroundColor: "#ffff76",
    borderRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  calculateButtonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  ageText: {
    fontSize: 20,
    marginTop: 16,
    color: "#fff",
  },
  footerText: {
    bottom: 0,
    right: 0,
    marginTop: 32,
    fontSize: 16,
    color: "#fff",
  },
});

export default AgeCalculatorApp;
