import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// Button will be assigned to be a "Complete" or "Delete" button
// by passing it's function through "handlePress" prop
const ToDoButton = props => {
  return (
    // Interactable button
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.handlePress(props.id)}>
      {/* Button text */}
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
});

export default ToDoButton;
