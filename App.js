/**
 *  ToDo App
 *
 *  @format
 *  @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import ToDoItem from './src/Components/ToDoItem';
import CategoryButtons from './src/Components/CategoryButtons';
import AddToDo from './src/Components/AddToDo';
// import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  // States
  const [allToDos, setAllToDos] = useState([]);
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('All');

  // Toggle ToDo item's "completed" status
  const handleToggleToDo = id => {
    setAllToDos(
      allToDos.map(e => (e.id === id ? {...e, completed: !e.completed} : e)),
    );
  };

  // Delete ToDo
  const handleDeleteToDo = id => {
    setAllToDos(allToDos.filter(e => e.id !== id));
  };

  // Update FilteredToDos when category is changed or ToDos are modified
  useEffect(() => {
    switch (currentCategory) {
      case 'All':
        setFilteredToDos(allToDos);
        break;

      case 'Active':
        setFilteredToDos(allToDos.filter(e => e.completed === false));
        break;

      case 'Completed':
        setFilteredToDos(allToDos.filter(e => e.completed === true));
        break;
    }
  }, [currentCategory, allToDos]);

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        {/* Main container */}
        <View style={styles.mainview}>
          {/* Title */}
          <Text style={styles.title}>To-Dos</Text>

          {/* Add new ToDo */}
          <AddToDo allToDos={allToDos} setAllToDos={setAllToDos} />

          {/* List of all ToDos */}
          <View style={styles.list}>
            <Text style={styles.categoryTitle}>{currentCategory} ToDos:</Text>
            {filteredToDos &&
              filteredToDos
                .slice(0)
                .reverse()
                .map((item, i) => {
                  return (
                    <ToDoItem
                      key={i}
                      item={item}
                      handleToggle={handleToggleToDo}
                      handleDelete={handleDeleteToDo}
                    />
                  );
                })}
          </View>
        </View>
      </ScrollView>
      {/* Bottom category buttons */}
      <CategoryButtons setCat={setCurrentCategory} curCat={currentCategory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
  },
  content: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  mainview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
    marginBottom: 120,
  },
  title: {
    color: 'white',
    fontSize: 56,
  },
  list: {flex: 1, flexDirection: 'column', width: '100%', gap: 10},
  categoryTitle: {
    color: 'white',
  },
});

export default App;
