/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStack from './src/Views/Navigation/AuthStack'


const App = () => {
 return (
   <NavigationContainer>
    <AuthStack />
   </NavigationContainer>
  );
}

export default App;
