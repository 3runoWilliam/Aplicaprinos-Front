import * as React from "react";
import { View, Text, StyleSheet, Image, TextInput, Button} from "react-native";
import QuebraLinha from "./QuebraLinha";
import Space from "./Space";
import Footer from "./Footer";

function PgAdd({navigation}){
    return(
        <View style={styles.container}>
            <Space />
            <QuebraLinha />

            <View style={styles.header}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 25,}}>ADICIONAR </Text>
                    <Text style={{fontSize: 25,}}>NOVO PESO</Text>
                </View>
                <Image style={styles.imagem} source={require('../imagem-depositphotos-bgremover.png')}/>
            </View>
            
            <QuebraLinha />
            
            <View style={styles.id}>
                <Text>Digite o codigo do caprino:</Text>
                <TextInput placeholder="Aqui"/>
            </View>

            <QuebraLinha />

            <View style={styles.main}>
                <TextInput style={styles.partesMain} placeholder="PESO ATUAL"/>
                <TextInput style={styles.partesMain} placeholder="NOVO PESO"/>
            </View>
            <Button title='Enviar'/>

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
        flexDirection: 'column',
    },
    partesMain:{
        textAlign: 'center',
        width: 130,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
    },
    id:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        height: 90
    }
})

export default PgAdd