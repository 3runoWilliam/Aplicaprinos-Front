import * as React from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, Alert} from "react-native";
import QuebraLinha from "./QuebraLinha";
import Space from "./Space";
import Footer from "./Footer";

function PgCad({navigation}){
    return(
        
        <View style={styles.container}>
            <Space />
            <QuebraLinha />

            <View style={styles.header}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 25,}}>CADASTRAR </Text>
                    <Text style={{fontSize: 25,}}>ANIMAL</Text>
                </View>
                <Image style={styles.imagem} source={require('../imagem-depositphotos-bgremover.png')}/>
            </View>
            <QuebraLinha />
            <View style={styles.main}>
                <TextInput id="peso" style={styles.partesMain} placeholder="PESO"/>
                <TextInput id="genero" style={styles.partesMain} placeholder="GENERO"/>
                <TextInput id="vacina" style={styles.partesMain} placeholder="VACINAS"/>
                <TextInput id="codigo" style={styles.partesMain} placeholder="CODIGO"/>
                <TextInput id="idade" style={styles.partesMain} placeholder="IDADE"/>
            </View>
            <Button 
            title='Enviar'
            />

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
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    partesMain:{
        textAlign: 'center',
        width: 130,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
    }
})

export default PgCad