/*import { StatusBar } from 'expo-status-bar';*/
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer  >
      <StatusBar
        backgroundColor="#38a69d"
        barStyle='light-content'
      />
      <Routes/>
      
    </NavigationContainer >
  );

}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
