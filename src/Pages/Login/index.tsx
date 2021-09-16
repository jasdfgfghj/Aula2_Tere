import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity,  Linking } from 'react-native';


const Login = () => {
    return(
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Image source={require("../../assets/logo-face2.png")}/>
                <Text style={styles.title}>Facebook</Text>
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Email"></TextInput>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Password"></TextInput>
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.link}
                onPress={() => Linking.openURL('https://pt-br.facebook.com/')}>
                Sign up for Facebook
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4369B0',

    },
    viewLogo:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal:20,
    },
   
    title:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
    },
    input:{
        height: 40,
        width: 300,
        backgroundColor: "#FFF",
        marginBottom: 20,
        paddingHorizontal: 24,
    },
    buttonContainer: {
        height: 45,
        width: 300,
        backgroundColor: "#2C4877",
        paddingVertical: 10,
        paddingHorizontal: 12
    },

    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    },
    link:{
        color: '#FFF',
        textDecorationLine: 'underline',
        marginTop: 40,
    }
});

export default Login;