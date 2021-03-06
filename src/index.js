import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import App from './router/App';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <TextInput
        keyboardType="numeric"
        placeholder="NISN"
        style={styles.text}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.text}
        inlineImageLeft="search_icon"
      />
      <Button title="Login" style={styles.button} />
    </View>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen
          name="App"
          component={App}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="index"
          component={Index}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({
  text: {
    borderWidth: 2,
    margin: 10,
    borderRadius: 20,
    width: 300,
    textAlign: 'center',
    backgroundColor: '#689cc5',
    textDecorationColor: 'white',
  },
  button: {
    justifyContent: 'space-between',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    maxWidth: 140,
    maxHeight: 150,
  },
});
