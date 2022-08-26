import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Switch, Modal, Pressable, SafeAreaView, Button, Alert  } from "react-native";

const Stack = createNativeStackNavigator();

import ProductosView from "./vistas/productos";
import ProductosAdd from "./vistas/productos_adds";

function MyStack(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="productos" component={ProductosView} options={{
            title: "Listado de productos",
            headerTitleAlign:"center",
        }}/>
      <Stack.Screen name="productos_adds" component={ProductosAdd}/>
      </Stack.Navigator>
  )
  
};

function App(){
  return(
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
  );
}

export default App;