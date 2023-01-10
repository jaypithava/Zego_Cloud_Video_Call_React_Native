import React from 'react';
import Home from './screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import callpage from './screens/callpage';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Callpage" component={callpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
