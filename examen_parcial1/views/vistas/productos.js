import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Center } from 'native-base';

const ProductosView = (props) => {
    return(
            <View> <Center alignItems="center" justifyContent="center" h="100%">
                <Button title="Agregar Producto" onPress={ () => props.navigation.navigate("home")}/>
                </Center>
            </View>
    )
};

const style = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    buttons:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ProductosView;