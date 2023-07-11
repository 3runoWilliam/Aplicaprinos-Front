import * as React from "react";
import { View, Text, StyleSheet, Image, TextInput} from "react-native";
import QuebraLinha from "./QuebraLinha";
import Space from "./Space";
import Footer from "./Footer";

function PgAlim({navigation}){
    return(
        <View style={styles.container}>
            <Space />
            <QuebraLinha />
            <View style={styles.header}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 25,}}>CONTROLE </Text>
                    <Text style={{fontSize: 25,}}>DE</Text>
                    <Text style={{fontSize: 25,}}>ALIMENTAÇÃO</Text>
                </View>
                <Image style={styles.imagem} source={require('../imagem-depositphotos-bgremover.png')}/>

            </View>
            <QuebraLinha />
            <View style={styles.main}>
                <View style={styles.parteMain}>
                    <Text style={styles.textoMain}>Rotação dos piquetes:</Text>
                    <TextInput placeholder="X"></TextInput>
                </View>
                <View style={styles.parteMain}>
                    <Text style={styles.textoMain}>Consumo de concentrado:</Text>
                    <TextInput placeholder="X"></TextInput>
                </View>
                <View style={styles.parteMain}>
                    <Text style={styles.textoMain}>Tipo doo concentrado:</Text>
                    <TextInput placeholder="X"></TextInput>
                </View>
            </View>
            <QuebraLinha />
            <Footer />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main:{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 412,
    },
    textoMain:{
        fontSize: 20,
        marginVertical: 25,
        paddingLeft: 15,
    },  
    parteMain:{
        flexDirection: 'row',
        gap: 20,
    }
})

export default PgAlim