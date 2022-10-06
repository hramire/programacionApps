import React from 'react';
import Login from "./views/vistas/login";
import Signup from "./views/vistas/singup";
import Homes from "./views/vistas/home";
import ProductosAdd from './views/vistas/productos_adds';
import ProductosView from './views/vistas/productos';
import { NativeBaseProvider, View } from "native-base";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Homes} />
      <Stack.Screen name="productos_adds" component={ProductosAdd} />
      <Stack.Screen name="productos" component={ProductosView} />
    </Stack.Navigator>
    </NativeBaseProvider>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
};
  









