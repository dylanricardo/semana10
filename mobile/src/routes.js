import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main.js'
import Profile from './pages/Profile.js'

const Stack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="DevRadar" component={Main} options={{
          title: 'DevRadar',
          headerStyle: {
            backgroundColor: '#7d40e7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Profile" component={Profile} options={{
          title: 'Perfil no Github',
          headerStyle: {
            backgroundColor: '#7d40e7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}