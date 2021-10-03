import React, {useState} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity,  Linking } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../types';

type LoginPros = NativeStackNavigationProp<StackNavigatorParamList, 'Login'>;

const Login = () => {
    const [meuTexto, setMeuTexto] = useState('aluno');

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
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            <Text style={styles.link}
                onPress={() => Linking.openURL('https://pt-br.facebook.com/')}>
                Sign up for Facebook
            </Text>

            <TextInput style={styles.textInput} 
                onChangeText={(text)=>{setMeuTexto(text);console.log(meuTexto)}}
            />
            <Text>{meuTexto}</Text>
        </View>
    );
}

export default Login;