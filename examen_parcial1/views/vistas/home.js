import { Button, NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";



const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.HomeText}>Pantalla de Inicio</Text>
      </View>
      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button onPress={() => navigation.navigate("Login")} style={styles.buttonDesign}>
          Cerrar Sesión
        </Button>
        <Button onPress={() => navigation.navigate("productos_adds")} style={styles.buttonDesign}>
          Agregar productos
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HomeText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  }, buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "#026efd",
  },
}); 