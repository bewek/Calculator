// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import Add from '../../Screens/Add';
import { Addition, AreaofCir, AreaofRect, AreaofSq, AreaofTri, Divide, Multiply, Remainder, SimpleIntrest, Subtract } from '../../Screens';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Subtract" component={Subtract} />
        <Stack.Screen name="Multiply" component={Multiply} />
        <Stack.Screen name="Divide" component={Divide} />
        <Stack.Screen name="Addition" component={Addition} />
        <Stack.Screen name="Remainder" component={Remainder} />
        <Stack.Screen name="SimpleIntrest" component={SimpleIntrest} />
        <Stack.Screen name="AreaofRect" component={AreaofRect} />
        <Stack.Screen name="AreaofCir" component={AreaofCir} />
        <Stack.Screen name="AreaofSq" component={AreaofSq} />
        <Stack.Screen name="AreaofTri" component={AreaofTri} />


      </Stack.Navigator>
  );
}

export default AuthStack;