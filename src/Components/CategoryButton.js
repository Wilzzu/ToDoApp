import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CategoryButton = props => {
  return (
    // Category button
    <TouchableOpacity
      style={
        props.curCat == props.category ? styles.selectedBtn : styles.categoryBtn
      }
      onPress={() => props.setCat(props.category)}>
      {/* Category text */}
      <Text>{props.category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '33%',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#a3a3a3',
  },
  selectedBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '33%',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
});

export default CategoryButton;
