import React, {useContext} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {FirebaseContext} from '../../App';
import mealimage from './../../assets/meal.png';
import {Image} from 'react-native';
import {STUDENT} from '../../utils/constants';
import StudentSuggestion from './Student';
import ManagerSuggestion from './Manager';
const exampleImageUri = Image.resolveAssetSource(
  require('./../../assets/meal.png'),
).uri;
console.log('mealimage', mealimage);
function Suggestion() {
  const user = useContext(FirebaseContext);
  console.log('user', user);
  return (
    <View style={styles.container}>
      <ImageBackground
        width={50}
        imageStyle={{opacity: 0.5}}
        height={50}
        resizeMethod="resize"
        resizeMode="center"
        source={require('./../../assets/meal.png')}
        style={styles.image}>
        {user.type === STUDENT ? <StudentSuggestion /> : <ManagerSuggestion />}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000',
  },
});
export default Suggestion;
