import React from 'react';
import {StyleSheet, Text, Alert, View, Image, TextInput, Button} from 'react-native';
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
      <Button
        title="Login"
        style={styles.button}
        onPress={() => Alert.alert('Left button pressed')}
      />
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
    borderWidth: 0,
    margin: 10,
    borderRadius: 180,
    width: 300,
    textAlign: 'center',
    backgroundColor: '#17a2b8',
    textDecorationColor: '#17a2b8',
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
