import { StyleSheet } from 'react-native';

export const StyleOneLinkHeader = StyleSheet.create({
    link:{
      color:"#4A4A4C",
    }
  
  });
  
export  const styleLinksHeader = StyleSheet.create({
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
  
export  const styleLinksBaseboard = StyleSheet.create({
    container:{
      color:"white",
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:40,
      paddingVertical:15,
    },
    itens:{
      flexDirection: 'row',
    }
  
  });

export  const styles = StyleSheet.create({
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

    buttom:{
        backgroundColor: '#4369B0',
        //marginHorizontal: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

    Viewbuttom:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 40,
        paddingVertical: 40,
    },

    ViewbuttomText:{
        color: '#F5FFFF',
        fontSize: 15,
    }
  
  });