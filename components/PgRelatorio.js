import * as React from "react";
import { View, Text, StyleSheet, Image, FlatList} from "react-native";
import { useState, useEffect } from "react";
import QuebraLinha from "./QuebraLinha";
import Space from "./Space";
import Footer from "./Footer";

function PgRelatorio({navigation}){
    const [caprino, setCaprino] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8080/")
            .then((res) => res.json())
            .then((json) => setCaprino(json))
            .catch((err) => console.log(err));
    }, []);

    return(
        <View style={styles.container}>
            <Space />
            <QuebraLinha />

            <View style={styles.header}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 25,}}>RELATORIO </Text>
                </View>
                <Image style={styles.imagem} source={require('../imagem-depositphotos-bgremover.png')}/>
            </View>
            
            <QuebraLinha />
            
            


            <View style={styles.main}>
                <FlatList 
                    style={styles.parte}
                    data={caprino}
                    keyExtractor={({id}, index) => id}
                    renderItem={({item}) => (
                        <View style={styles.box}>
                            <View>
                                <Text style={styles.texto}>
                                    {item.id} 
                                </Text>      
                                <Text style={styles.texto}>
                                    {item.genero} 
                                </Text>      
                                <Text style={styles.texto}>
                                    {item.idade} 
                                </Text>      
                            </View>
                        </View>
                    )}     
                />
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



export default PgRelatorio