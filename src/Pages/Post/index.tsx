import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export const Post = () => {
    return(
        <View style={styles.componente}>
            <View style={styles.headerView}>
                <View style={styles.headerViewFoto}>
                
                </View>
                <View style={styles.headerViewTextos}>
                    <Text style={styles.headerViewTextosTitulo}>Unblast</Text>
                    <View style={styles.headerViewTextosHorario}>
                        <Text>2hs</Text>
                        <Image 
                            style={styles.headerViewImageGlobo} 
                            source={require('../../assets/globo.png')}
                        />
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.TextoPublicacao}>
                 Este é o design que vamos replicar hoje na aula: <Text style={styles.TextoPublicacaoLink}>https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup</Text>
                </Text>
                <Image 
                    style={styles.headerViewImagePublicacao} 
                    source={require('../../assets/image.png')}
                />
            </View>

            <View style={styles.linkes}>
                <Image style={styles.linkesButton} source={require('../../assets/likes.png')}/>
                <Text style={styles.linkesText}>12</Text>
            </View>

            <View style={styles.linkeShare}>
                <View style={styles.linkeShareItem}>
                    <Image style={styles.headerViewImageGlobo} source={require('../../assets/like.png')}/>
                    <Text style={styles.linkeShareItemText}>Like</Text>
                </View>
                <View style={styles.linkeShareItem}>
                    <Image style={styles.headerViewImageGlobo} source={require('../../assets/comentario.png')}/>
                    <Text style={styles.linkeShareItemText}>Comentário</Text>
                </View>
                <View style={styles.linkeShareItem}>
                    <Image style={styles.headerViewImageGlobo} source={require('../../assets/like.png')}/>
                    <Text> style={styles.linkeShareItemText}Share</Text>
                </View>
            </View>

            <View style={styles.Viewbuttom}>
                <TouchableOpacity style={styles.buttom} onPress={()=>{}}>
                    <Text style={styles.ViewbuttomText}>Learn More</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomMensager} onPress={()=>{}}>
                    <Image style={{width:16,height:16}} source={require('../../assets/btnmensagem.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomMais}  onPress={()=>{}}>
                    <Image style={{height:3,width:13}} source={require('../../assets/3pontos.png')}/>
                </TouchableOpacity>
           </View>

        </View>
    );
}

const styles = StyleSheet.create({
    componente:{
        flex:1,
        padding:30,
    },
    headerView:{
        flexDirection:'row',

    },
    headerViewFoto:{
        backgroundColor:"#4369B0",
        height:60,
        width:60,
        borderRadius:50,
    },
    headerViewTextos:{
        paddingLeft:20,
        justifyContent:'space-around',
    },
    headerViewTextosTitulo:{
        fontWeight:'bold',
        fontSize:16,
    },
    headerViewImageGlobo:{
        height:17,
        width:17,
        marginLeft:5,
    },
    headerViewTextosHorario:{
        flexDirection:'row',
        alignItems:'center',
    },
    TextoPublicacao:{
        marginTop:20,
        fontSize:15,
    },
    TextoPublicacaoLink:{
        color: '#4D6196',
    },
    headerViewImagePublicacao:{
        widtht:358,
        height:282,
    },
    linkesButton:{
        height:30,
        width:30,
    },
    linkes:{
        marginTop:10,
        flexDirection:'row',
    },
    linkesText:{
        textAlignVertical: 'center',
        paddingLeft:8,
    },
    linkeShare:{
        flexDirection:'row',
        marginHorizontal:30,
        marginVertical:20,
        justifyContent:'space-between',
    },
    linkeShareItem:{
        flexDirection:'row',
        alignItems:'center',
    },
    linkeShareItemText:{
        paddingLeft:5,
    },
    Viewbuttom:{
        //backgroundColor:'#3D7BE2',
        //alignItems:'center',
        //justifyContent:'center',
        borderRadius:5,
        flexDirection:'row',
        
    },
    buttom:{
        flex:5,
        backgroundColor:'#3D7BE2',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    ViewbuttomText:{
        color:'#FDF7FD',
        fontSize:15,
        height:43,
        textAlignVertical:'center',
    },
    buttomMensager:{
        flex:1,
        backgroundColor:'#3D7BE2',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        borderRadius:5,

    },
    buttomMais:{
        flex:1,
        borderColor:'#3D7BE2',
        borderWidth:1,
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
});