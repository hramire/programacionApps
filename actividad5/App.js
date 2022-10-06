// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import React from 'react';
import Login from "./vistas/login";
import Signup from "./vistas/singup";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  const [data, setdata] = useState({
    username:"",
    email:"",
    psw:"",
    createdAt: new Date(),
  });

  const changeText = (key, value) =>{
      setdata({...data, [key]: value});
  }

  const Agregar = () => {
    
  }
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
};
