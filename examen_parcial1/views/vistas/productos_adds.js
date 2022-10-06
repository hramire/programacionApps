import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, Button, Alert } from "react-native";
import { getDatabase, getAuth } from "firebase/database";
import { map } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../auth/DB/firebase_config";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";



const ProductosAdd = (props) =>{
    const navigation = useNavigation();
    const app = initializeApp(firebaseConfig);
    const database = getFirestore(app);
    const [state, setState] = useState({
        nombre:"",
        descripcion:"",
        precio:"",

    });

   
    const Agregar = async() =>{
        await addDoc(collection(database, "products"), state)
        console.log(state);
        navigation.navigate("Home")
        Alert.alert("Producto agregado exitosamente")
    }

    return(
        <ScrollView style={styles.container}>
             <View style={styles.View}>
                <TextInput placeholder="Nombre del producto" style={styles.input} onChangeText={(text) => setState({ ...state, nombre: text })}/>
             </View>
             <View style={styles.View}>
                <TextInput placeholder="Descripcion del producto" style={styles.input} onChangeText={(text) => setState({ ...state, descripcion: text })}/>
             </View>
             <View style={styles.View}>
                <TextInput style={styles.input} placeholder="Precio del producto" onChangeText={(text) => setState({ ...state, precio: text })}/>
             </View>
             <View style={styles.viewButton}>
                <Button title="Agregar Producto" color="#779000" backgroundColor="#ffffff" onPress={ () => Agregar()}/>
             </View>
             <View style={styles.viewButton}>
                <Button title="Regresar" style= {styles.button} color="#ff7f7f" onPress={ () => props.navigation.navigate("productos")}/>
             </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
      backgroundColor: "#bcbcbc",
    },
    View: {
        flex:1,
        padding:10,
        },
    viewButton: {
        flex:1,
        padding:5,
        },
    input:{
        flex:1,
        backgroundColor:"#fff2cc",
        paddingHorizontal:25,
        alignItems:"center",
        borderRadius:5,
        marginTop:5,
        height: 40
    }
});

export default ProductosAdd
