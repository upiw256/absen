import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';


const App = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('index');
    }, 3000);
  }, [navigation]);

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        // eslint-disable-next-line react-native/no-inline-styles
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Image source={require('../assets/logo.png')} />
      <Image source={require('../assets/loading.gif')} />
      <Text style={styles.text}>Selamat Datang</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#689cc5',
  },
});
