import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PgAlim from './components/PgControlAlim';
// import Home from './PgPrincipal';
import PgCad from './components/PgCadAnimal';
import PgAdd from './components/PgAddPeso';
import PgRelatorio from './components/PgRelatorio';
import PgAtt from './components/PgAtt';
import PgDel from './components/PgDel';
import Home from './components/PgPrincipal'

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="PgAlim" component={PgAlim} options={{ headerShown: false }}/>
        <Stack.Screen name="PgCad" component={PgCad} options={{ headerShown: false }}/>
        <Stack.Screen name="PgAdd" component={PgAdd} options={{ headerShown: false }}/>
        <Stack.Screen name="PgRelatorio" component={PgRelatorio} options={{ headerShown: false }}/>
        <Stack.Screen name="PgAtt" component={PgAtt} options={{ headerShown: false }}/>
        <Stack.Screen name="PgDel" component={PgDel} options={{ headerShown: false }}/>
        
        
  
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
