import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const OneLinkHeader = (props:any) => {
    return(
      <View>
        <Text style={StyleOneLinkHeader.link}>{props.nome}</Text>
      </View>
    );
  };
  
  const StyleOneLinkHeader = StyleSheet.create({
    link:{
      color:"#4A4A4C",
    }
  
  });
  
  
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
        <View>
          <Image source={require("../../assets/link-like.png")}/>
          <OneLinkHeader nome="Link"/>
        </View>
        <View>
          <Image source={require("../../assets/link-coment.png")}/>
          <OneLinkHeader nome="Comment"/>
        </View>
        <View>
          <Image source={require("../../assets/link-share.png")}/>
          <OneLinkHeader nome="Share"/>
        </View>
      </View>
    );
  };
  
  const styleLinksHeader = StyleSheet.create({
    container:{
      //backgroudColor:"lightblue",
      color:"white",
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:35,
      paddingVertical:10,
      borderBottomColor:"#F0F0F0",
      borderBottomWidth:0.5,
    },
  
  });
  
  const styleLinksBaseboard = StyleSheet.create({
    container:{
      color:"white",
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:40,
      paddingVertical:15,
    },
  
  });

const Home = () => {
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
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
  
    header: {
      minHeight: 70,
      backgroundColor: '#4369B0',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 30,
      paddingVertical:30,
      paddingTop: 50,
    },
  
    inputTextView:{
      flex: 1,
      borderRadius: 28,
      backgroundColor: '#2C4877',
      marginHorizontal: 10,
      height: 40,
      alignItems: "center",
      flexDirection: "row",
    },
  
    textInput: {
      flex: 1,
      paddingRight: 10,
      color: '#F5FFFF',
    },
  
  });

export default Home;