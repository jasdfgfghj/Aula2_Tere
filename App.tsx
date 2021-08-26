import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
          <Image source={
            require("./src/assets/arrow-left.png")
            }>
          </Image>
          <Image source={
            require("./src/assets/ei_search.png")
            }>
          </Image>
          <Image source={
            require("./src/assets/share.png")
            }>
          </Image>
      </View>
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

});
