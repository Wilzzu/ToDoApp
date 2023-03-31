import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ToDoButton from './ToDoButton';

// ToDo card
const ToDoItem = props => {
  return (
    // ToDo card container
    <View
      style={
        props.item.completed == false ? styles.normalItem : styles.completedItem
      }>
      {/* ToDo content */}
      <Text style={styles.text}>{props.item.text}</Text>
      {/* ToDo buttons */}
      <View style={styles.buttons}>
        <ToDoButton
          id={props.item.id}
          handlePress={props.handleToggle}
          text={props.item.completed ? 'Undo' : 'Done'}
        />
        <ToDoButton
          id={props.item.id}
          handlePress={props.handleDelete}
          text={'Delete'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  normalItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    minHeight: 50,
  },
  completedItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8CD644',
    padding: 10,
    borderRadius: 10,
    minHeight: 50,
  },
  text: {
    width: '70%',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 5,
    height: '100%',
  },
});

export default ToDoItem;
