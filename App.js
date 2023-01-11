import React from 'react';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Callpage from './screens/Callpage';
import HomePage from './screens/HomePage';
import MemberListPage from './screens/MemberListPage';

export default function App() {
  console.disableYellowBox = true;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MemberListPage" component={MemberListPage} />
        <Stack.Screen
          name="Callpage"
          component={Callpage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
