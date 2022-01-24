
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './src/Screen/HomeScreen';

const App = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Book Search">
        <Stack.Screen name="Book Search" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );

}

export default App;
