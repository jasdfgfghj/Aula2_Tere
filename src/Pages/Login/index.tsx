import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity,  Linking } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigationParamList } from './types';

type LoginPros = NativeStackNavigationProp<StackNavigationParamList, 'Login'>;

const Login = () => {
    const navigation = useNavigation<LoginPros>();

    function irParaTelaHome(){
        navigation.navigate('Home');
    }

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
        
            <TouchableOpacity style={styles.buttonContainer} onPress={irParaTelaHome}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.link}
                onPress={() => Linking.openURL('https://pt-br.facebook.com/')}>
                Sign up for Facebook
            </Text>

        </View>
    );
}

export default Login;