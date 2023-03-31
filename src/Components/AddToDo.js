import {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';

const AddToDo = props => {
  const [toDoText, setToDoText] = useState();

  // Handle add button press
  const handleAddNewToDo = () => {
    // Don't add new ToDo item if user hasn't written anything
    if (!toDoText) return;

    // Create new ToDo object
    const newToDo = {
      id: uuid.v4(),
      text: toDoText,
      completed: false,
    };

    // Add new ToDo object to the array, reset input and close keyboard
    props.setAllToDos([...props.allToDos, newToDo]);
    setToDoText(null);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.addNewContainer}>
      {/* Text input */}
      <KeyboardAvoidingView style={styles.input}>
        <TextInput
          placeholder="Write new ToDo"
          value={toDoText}
          onChangeText={e => setToDoText(e)}
        />
      </KeyboardAvoidingView>

      {/* Add button */}
      <TouchableOpacity style={styles.addBtn} onPress={handleAddNewToDo}>
        <Text>Add ToDo item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addNewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginBottom: 20,
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 4,
    width: '100%',
  },
  addBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    elevation: 3,
    width: '40%',
    backgroundColor: 'white',
  },
});

export default AddToDo;
