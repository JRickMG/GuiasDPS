import React, { useState } from 'react';
import {View, StyleSheet,Image, Text, ScrollView, Modal, Button, TouchableHighlight} from
'react-native';
const App = () =>{
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  const [modalVisibleplatillo, setModalVisibleplatillo] = useState(false);
  const [modalVisibleruta, setModalVisibleruta] = useState(false);
  return(
  <>
    <ScrollView >
      <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={()=>{
        alert('Modal has been closed.');
      }}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Ir a la playa</Text>
            <Text>El Salvador cuenta con hermosas playas a nivel centroamerica.</Text>
            <Button title='Cerrar' onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleplatillo} onRequestClose={()=>{
        alert('Modal has been closed.');
      }}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Las Pupusas</Text>
            <Text>El Salvador la casa de la pupusa, platillo tipico Salvadoreño.</Text>
            <Button title='Cerrar' onPress={()=>{setModalVisibleplatillo(!modalVisibleplatillo)}}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleruta} onRequestClose={()=>{
        alert('Modal has been closed.');
      }}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Ruta Azul</Text>
            <Text>El Salvador cuenta con diferentes rutas turisticas dedicadas al folklor local.</Text>
            <Button title='Cerrar' onPress={()=>{setModalVisibleruta(!modalVisibleruta)}}></Button>
          </View>
        </View>
      </Modal>

      <View style={{flexDirection:'row'}} >
        <Image
        style={styles.banner}
        source={require('./src/img/bg.jpg')} />
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Que hacer en El Salvador</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}>
              <Image style={styles.ciudad} source={require('./src/img/actividad1.jpg')}></Image>
            </TouchableHighlight>
          </View>
          <View>
        <Image
          style={styles.ciudad} source={require('./src/img/actividad2.jpg')}
        ></Image>
      </View>
      <View>
        <Image
          style={styles.ciudad} source={require('./src/img/actividad3.jpg')}
        ></Image>
      </View>
      <View>
        <Image
          style={styles.ciudad} source={require('./src/img/actividad4.jpg')}
        ></Image>
      </View>
      <View>
        <Image
          style={styles.ciudad} source={require('./src/img/actividad5.jpg')}
        ></Image>
      </View>
        </ScrollView>
      </View>
      <Text style={styles.titulo}>Platillos Salvadoreños</Text>
      <View>
        <View>
          <TouchableHighlight onPress={()=>{setModalVisibleplatillo(!modalVisibleplatillo)}}>
            <Image style={styles.mejores} source={require('./src/img/mejores1.jpg')}></Image>
          </TouchableHighlight>
        </View>
        <View>
          <Image style={styles.mejores} source={require('./src/img/mejores2.jpg')}></Image>
        </View>
        <View>
          <Image style={styles.mejores} source={require('./src/img/mejores3.jpg')}></Image>
        </View>
      </View>

      <Text style={styles.titulo}>Rutas Turisticas</Text>
      <View style={styles.listado}>
        <View style={styles.listaItem}>
        <TouchableHighlight onPress={()=>{setModalVisibleruta(!modalVisibleruta)}}>
          <Image style={styles.mejores} source={require('./src/img/ruta1.jpg')}></Image>
        </TouchableHighlight>
        </View>
        <View style={styles.listaItem}>
          <Image style={styles.mejores} source={require('./src/img/ruta2.jpg')}></Image>
        </View>
        <View style={styles.listaItem}>
          <Image style={styles.mejores} source={require('./src/img/ruta3.jpg')}></Image>
        </View>
        <View style={styles.listaItem}>
          <Image style={styles.mejores} source={require('./src/img/ruta4.jpg')}></Image>
        </View>
      </View>
      
    </ScrollView>
  </>
  );
};
const styles = StyleSheet.create({
  banner:{
    height:250,
    flex:1
  },
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10
  },
  contenedor:{
    marginHorizontal:10,
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10
  },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5
  },
  listaItem:{
    flexBasis:'49%'
  },
  listado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  vistaModal:{
    backgroundColor: '#000000aa',
    flex:1
  },
  Modal:{
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius:10,
    flex: 1
  },
  subtitulo:{
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center'
  }
});
export default App;
