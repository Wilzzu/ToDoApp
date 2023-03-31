import {StyleSheet, View} from 'react-native';
import CategoryButton from './CategoryButton';

// Category buttons container
const CategoryButtons = props => {
  return (
    <View style={styles.categoryBtns}>
      <CategoryButton
        setCat={props.setCat}
        curCat={props.curCat}
        category={'All'}
      />
      <CategoryButton
        setCat={props.setCat}
        curCat={props.curCat}
        category={'Active'}
      />
      <CategoryButton
        setCat={props.setCat}
        curCat={props.curCat}
        category={'Completed'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryBtns: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default CategoryButtons;
