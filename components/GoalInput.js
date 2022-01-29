import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";
import GoalItem from "./GoalItem";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const enteredGoalHandler = (textEntered) => {
    setEnteredGoal(textEntered);
  };

  const onAddGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Life Goals"
          style={styles.inputGoal}
          onChangeText={enteredGoalHandler}
          value={enteredGoal}
        />
        <View style={styles.modalButtons}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={onAddGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputGoal: {
    width: "80%",
    borderColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
