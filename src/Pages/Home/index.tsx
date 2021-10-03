import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StyleOneLinkHeader, styleLinksHeader, styleLinksBaseboard, styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {StackNavigatorParamList } from '../types';

import {Post} from '../Post';

const OneLinkHeader = (props:any) => {
    return(
      <View>
        <Text style={StyleOneLinkHeader.link}>{props.nome}</Text>
      </View>
    );
  };
  
  const LinksHeader = ()=>{
    return(//aqui dentro eu coloco meu JSX
      <View style={styleLinksHeader.container}>
        <OneLinkHeader nome="Home"/>
        <OneLinkHeader nome="Post"/>
        <OneLinkHeader nome="Videos"/>
        <OneLinkHeader nome="Community"/>
      </View>
    );
  };
  
  const LinksBaseboard = ()=>{
    return(
      <View style={styleLinksBaseboard.container}>
        <View style={styleLinksBaseboard.itens}>
          <Image source={require("../../assets/link-like.png")}/>
          <OneLinkHeader nome="Link"/>
        </View>
        <View style={styleLinksBaseboard.itens}>
          <Image source={require("../../assets/link-coment.png")}/>
          <OneLinkHeader nome="Comment"/>
        </View>
        <View style={styleLinksBaseboard.itens}>
          <Image source={require("../../assets/link-share.png")}/>
          <OneLinkHeader nome="Share"/>
        </View>
      </View>
    );
  };

type HomePros = NativeStackNavigationProp<StackNavigatorParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<HomePros>();

  function irParaTelaLogin(){
    navigation.navigate('Login');
  }

    return(
        <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
            <Image source={
                require("../../assets/arrow-left.png")
                }>
            </Image>
            <View style={styles.inputTextView}>
                <Image source={
                    require("../../assets/ei_search.png")
                    }>
                </Image>
                <TextInput
                style={styles.textInput}
                    placeholder="Search"
                    placeholderTextColor="#F5FFFF" 
                >

                </TextInput>
                </View>
            <Image source={
                require("../../assets/share.png")
                }>
            </Image>
        </View>
        <LinksHeader></LinksHeader>
        <LinksBaseboard></LinksBaseboard>
                
        <TouchableOpacity onPress={irParaTelaLogin}>
          <Text>Ir para Login</Text>
        </TouchableOpacity>

        <ScrollView>
          <Post/>
          <Post/>
        </ScrollView>

    
    </View>
    );
}

export default Home;