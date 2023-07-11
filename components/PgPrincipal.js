import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import QuebraLinha from './QuebraLinha';
import Footer from './Footer';

function Home({navigation}) {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textoCabeca}>Olá, Tobias</Text>
          <Image style={styles.imagem} source={require('../imagem-depositphotos-bgremover.png')}/>
        </View>

        <QuebraLinha />
        
        <View style={styles.main}>
          <Button  
            title="Controle de Alimentação"
            onPress={() => navigation.navigate('PgAlim')}
            color="#000"
            
            accessibilityLabel="Controle de Alimentação"
          />
          <Button 
            title="Cadastrar Animal"
            onPress={() => navigation.navigate('PgCad')}
            
            color="#000"
            accessibilityLabel="Cadastrar Animal"
          />
          <Button 
            onPress={() => navigation.navigate('PgAdd')}
            title="Adicionar Peso"
            color="#000"
            accessibilityLabel="Adicionar Peso"
          />
          <Button 
            onPress={() => navigation.navigate('PgRelatorio')}
            title="Fazer Relatorio"
            color="#000"
            accessibilityLabel="Fazer Relatorio"
          />
          <Button 
            onPress={() => navigation.navigate("PgAtt")}
            title="Atualizar Animal"
            color="#000"
            accessibilityLabel="Atualizar Animal"
          />
          <Button 
            onPress={() => navigation.navigate("PgDel")}
            title="Deletar Animal"
            color="#f00"
            accessibilityLabel="Deletar Animal"
          />
        </View>

        <QuebraLinha />

        <Footer />

        <StatusBar style="auto" />
      </View>
   );
}


const styles = StyleSheet.create({ 
  container: {
  flex: 1,
  backgroundColor: '#999',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: 30,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    width: 120,
    textAlign: 'center',
  },
  header:{
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 25,
    alignItems: 'center',
    height: 100,
    width: 404,
 
  },
  main:{
    paddingTop: 30,
    flex: 1,
    justifyContent: 'space-evenly'
  },
  footer:{
    height: 50,
    
  },
  
  imagem:{
    height: 80,
    width: 80,
  },
  textoCabeca:{
    fontSize: 25
  }

},);

export default Home