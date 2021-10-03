import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4369B0',
        marginHorizontal:100,

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
    },
    textInput:{
        height:40,
        borderColor:'#4369B0',
        borderWidth:1,
        borderRadius:0,
        color:'black',
    }
});