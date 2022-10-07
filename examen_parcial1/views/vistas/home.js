import { Button, NativeBaseProvider } from "native-base";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../../auth/DB/firebase_config";


const Home = () => {
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [productos, setProductos] = useState([]);
  

  const getProductosAlv = async () => {
    const docRef = collection(db, "products");
    const querySnapshot = await getDocs(docRef);

    const newProductos = [...productos];
    querySnapshot.forEach((doc) => newProductos.push(doc.data()));

    setProductos(newProductos);
  }

  useEffect(() => {
    getProductosAlv();
  }, []);

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

        {productos.map((producto, i) => <Text key={i}>{producto.nombre}: {producto.precio}</Text>)}
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