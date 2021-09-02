import { StatusBar } from 'expo-status-bar';
import React from 'react';
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

const styleLinksHeader = StyleSheet.create({
  container:{
    //backgroudColor:"lightblue",
    color:"white",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:35,
    paddingVertical:10,
  },

});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
          <Image source={
            require("./src/assets/arrow-left.png")
            }>
          </Image>
          <View style={styles.inputTextView}>
              <Image source={
                require("./src/assets/ei_search.png")
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
            require("./src/assets/share.png")
            }>
          </Image>
      </View>
      <LinksHeader></LinksHeader>

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
    backgroundColor: '#436980',
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
