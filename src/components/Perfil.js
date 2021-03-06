import React, {useState} from 'react';
import {
  //SafeAreaView,
  //ScrollView,
  //StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator,
  ProgressBar,
  TextInput,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

import HeaderPerfil from './HeaderPerfil';

function Divider() {
  return <View style={styles.divider} />;
}

const Perfil = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const image = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png';

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.backProfileDocuments}>
      <HeaderPerfil />
      <View style={styles.containerPerfil}>
      <View style={styles.backProfileDocumentsSplit}>
        <View style={styles.backProfile}>
          <TextInput />
          <Image
            source={{uri: image}}
            style={styles.profileImgContainer}
          />
          <Divider />
          <Text style={styles.text}>Nombre</Text>
          <Divider />
          <Text style={styles.text}>Documento</Text>
          <Divider />
          <Text style={styles.text}>Correo</Text>
        </View>
        <View style={styles.lineProfile} />

        <View>
          <View style={styles.backTask}>
            <View style={styles.backButtonProfileDocuments}>
              <TouchableOpacity>
                <View style={styles.buttonProfileDocuments}>
                  <Text style={styles.textbuttonProfileDocuments}> Perfil</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.buttonProfileDocuments}>
                  <Text style={styles.textbuttonProfileDocuments}>
                    Documentos
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.back}>
              <Text style={styles.text}>Vinculacion Fondo</Text>
              <View style={styles.barraProgreso}>
                <ProgressBar color="#808080" progress={0.33} style={styles.custom} trackColor="#fff" />
              </View>
              <View style={styles.backOrderTasks}>
                <Text style={styles.textDocumentsDocument}>
                  Documentos pendientes de verificacion
                </Text>
              </View>
              <View style={styles.backOrderButton}>
                <TouchableOpacity onPress={toggleModal}>
                  <View style={styles.buttonTaskText}>
                    <Text style={styles.textbutton}>Ingresar</Text>
                  </View>
                </TouchableOpacity>
                <Modal style={styles.modalBack} isVisible={isModalVisible}>
                  <View style={styles.backgroundModal}>
                    <View style={styles.backModal}>
                      <TouchableOpacity
                        style={styles.buttonHideModal}
                        onPress={toggleModal}>
                        <Text style={styles.textHideModal}>x</Text>
                      </TouchableOpacity>
                      <View style={styles.paso1}></View>
                      <View style={styles.linea}></View>
                      <View style={styles.paso2}></View>
                      <View style={styles.linea}></View>
                      <View style={styles.paso2}></View>
                      <View style={styles.linea}></View>
                      <View style={styles.paso2}></View>
                      <View style={styles.linea}></View>
                      <View style={styles.paso2}></View>
                      <View style={styles.containerprogreso}>
                        <ActivityIndicator color="#808080" size={70} style={styles.item} />
                        <Text style={styles.text}>En proceso de verificaci??n</Text>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </View>
        </View>
      </View>
      </View>
      <View style={styles.containerSiguiente}>
        <Button
          color="#D0D3D4"
          onPress={() => navigation.navigate('PerfilDevolucion')}
          title="Siguiente"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSiguiente: {
    height: hp('6%'), // 70% of height device screen
    width: wp('7%'), // 80% of width device screen
    marginLeft: wp('69.5%'),
    marginTop: wp('-3.5%'),
    //justifyContent: 'center',
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  item: {
    paddingHorizontal: 10,
    marginTop: wp('5%'),
  },
  paso1: {
    height: hp('5%'), // 70% of height device screen
    width: wp('10%'), // 80% of width device screen
    //flexDirection: 'row',
    marginLeft: wp('4.5%'),
    marginTop: wp('4%'),
    //justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: '#808080',
    backgroundColor: '#808080',
    borderWidth: wp('0.2%'),
  },
  linea:{
    height: hp('0.1%'), // 70% of height device screen
    width: wp('4.5%'), // 80% of width device screen
    marginLeft: wp('0%'),
    marginRight: wp('0%'),
    marginTop: wp('5%'),
    borderColor: '#808080',
    borderWidth: wp('0.1%'),
  },
  paso2: {
    height: hp('5%'), // 70% of height device screen
    width: wp('10%'), // 80% of width device screen
    //flexDirection: 'row',
    marginLeft: wp('0%'),
    marginTop: wp('4%'),
    //justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: '#D0D3D4',
    backgroundColor: '#D0D3D4',
    borderWidth: wp('0.2%'),
  },
  containerprogreso: {
    height: hp('45%'), // 70% of height device screen
    width: wp('68%'), // 80% of width device screen
    marginLeft: wp('-68%'),
    marginTop: wp('12%'),
    borderColor: '#D0D3D4',
    backgroundColor: '#D0D3D4',
  },
  barraProgreso:{
    height: hp('3%'), // 70% of height device screen
    width: wp('7.5%'), // 80% of width device screen
    marginLeft: wp('-0.3%'),
    marginTop: wp('1.2%'),
    //borderColor: '#eeeee',
    //borderWidth: wp('0.2%'),
  },
  custom: {
    borderRadius: 10,
    height: hp('2%'),
  },
  text: {
    textAlign: 'center',
    marginTop: hp('1%'),
  },
  backgroundModal: {
    backgroundColor: '#eeeeee',
    width: wp('80%'),
    height: hp('80%'),
  },
  buttonHideModal: {
    backgroundColor: '#eeeeee',
    width: wp('0%'),
    padding: 2,
    paddingLeft: wp('1%'),
    //justifyContent: 'left',
    alignItems: 'center',
    borderRadius: 4,
  },
  textHideModal: {
    fontSize: wp('2%'),
    color: '#808080',
  },
  textFeedBack: {
    ...Platform.select({
      android: {
        color: '#808080',
        fontSize: wp('5%'),
        textAlign: 'center',
        fontWeight: 'bold',
      },
      default: {
        color: '#808080',
        fontSize: wp('2.0%'),
        textAlign: 'center',
        marginLeft: hp('3%'),
        marginTop: wp('2%'),
        fontWeight: 'bold',
      },
    }),
  },
  modalBack: {
    backgroundColor: '#eeeeee',
    width: wp('5%'),
    left: hp('5%'),
    top: hp('3%'),
    justifyContent: 'flex-start',
  },
  backModal: {
    ...Platform.select({
      android: {
        height: hp('5%'), // 70% of height device screen
        width: wp('80%'), // 80% of width device screen
        flexDirection: 'row',
        //justifyContent: 'center',
      },
      default: {
        height: hp('5%'), // 70% of height device screen
        width: wp('80%'), // 80% of width device screen
        flexDirection: 'row',
        marginTop: wp('0%'),
        //justifyContent: 'center',
      },
    }),
  },
  textStyling: {
    fontSize: 22,
    textAlign: 'center',
  },
  textDocumentsDocument: {
    marginLeft: wp('8%'),
    marginTop: hp('3%'),
    fontSize: wp('0.8%'),
  },
  divider: {
    height: hp('10%'),
  },
  text2: {
    fontSize: 12,
    textAlign: 'center',
  },
  container: {
    alignSelf: 'center',
    padding: 50,
  },
  container2: {
    alignSelf: 'center',
    borderColor: '#000000',
    padding: 50,
  },
  button: {
    marginHorizontal: 20,
  },
  textbutton: {
    ...Platform.select({
      android: {
        color: '#fff',
        fontSize: wp('1%'),
        textAlign: 'center',
        backgroundColor: '#808080',
        borderColor: '#808080',
      },
      default: {
        color: '#fff',
        fontSize: wp('1%'),
        textAlign: 'center',
        backgroundColor: '#808080',
        borderColor: '#808080',
      },
    }),
  },
  buttonTaskText: {
    marginVertical: hp('0%'),
    marginHorizontal: wp('0%'),
    marginTop: wp('1%'),
    backgroundColor: '#808080',
    borderColor: '#808080',
    borderWidth: wp('0.25%'),
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  backOrderTasks: {
    ...Platform.select({
      android: {
        height: hp('15%'), // 70% of height device screen
        width: wp('19%'), // 80% of width device screen
        //flexDirection: 'row',
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.25%'),
      },
      default: {
        height: hp('15%'), // 70% of height device screen
        width: wp('19%'), // 80% of width device screen
        //flexDirection: 'row',
        marginTop: wp('-3.2%'),
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.2%'),
      },
    }),
  },
  backOrderButton: {
    ...Platform.select({
      android: {
        height: hp('15%'), // 70% of height device screen
        width: wp('7%'), // 80% of width device screen
        //flexDirection: 'row',
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.25%'),
      },
      default: {
        height: hp('15%'), // 70% of height device screen
        width: wp('7%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('19%'),
        marginTop: wp('-6.9%'),
        //justifyContent: 'center',
        //borderColor: '#808080',
        //borderWidth: wp('0.2%'),
      },
    }),
  },
  profileImgContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  backTask: {
    height: hp('75%'), // 70% of height device screen
    width: wp('30%'), // 80% of width device screen
    marginTop: hp('10%'),
    marginLeft: wp('0%'),
    borderColor: '#a9a9a9',
    paddingLeft: wp('2%'),
    //borderWidth: wp('0.05%'),
  },
  back: {
    height: hp('15%'), // 70% of height device screen
    width: wp('30%'), // 80% of width device screen
    marginTop: hp('0%'),
    marginLeft: wp('-2%'),
    backgroundColor: '#D0D3D4',
    borderColor: '#D0D3D4',
    borderWidth: wp('0.05%'),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: wp('2%'),
  },
  textinput: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  backProfileDocumentsSplit: {
    height: hp('20%'), // 70% of height device screen
    width: wp('70%'), // 80% of width device screen
    flexDirection: 'row',
    marginLeft: wp('0%'),
    justifyContent: 'space-between',
    left: hp('10%'),
  },
  backProfileDocuments: {
    height: hp('75%'), // 70% of height device screen
    width: wp('75%'), // 80% of width device screen
    marginTop: hp('3%'),
    marginLeft: wp('0%'),
    paddingLeft: wp('0%'),
  },
  containerPerfil: {
    height: hp('75%'), // 70% of height device screen
    width: wp('80%'), // 80% of width device screen
    marginTop: hp('0%'),
    marginLeft: wp('10%'),
    paddingLeft: wp('0%'),
    //borderColor: '#808080',
    //borderWidth: wp('0.2%'),
  },
  lineProfile: {
    borderWidth: wp('0.05%'),
    height: hp('60%'),
    marginTop: hp('8%'),
  },
  backProfile: {
    height: hp('70%'), // 70% of height device screen
    width: wp('30%'), // 80% of width device screen
    marginTop: hp('3%'),
    marginLeft: wp('0%'),
    backgroundColor: '#eeeeee',
    paddingLeft: wp('2%'),
  },
  textbuttonProfileDocuments: {
    ...Platform.select({
      android: {
        color: '#000',
        fontSize: wp('5%'),
        textAlign: 'center',
      },
      default: {
        color: '#000',
        fontSize: wp('1%'),
        textAlign: 'center',
      },
    }),
  },
  buttonProfileDocuments: {
    paddingVertical: hp('0%'),
    paddingHorizontal: wp('1%'),
    //backgroundColor: '#eeeeee',
  },
  backButtonProfileDocuments: {
    ...Platform.select({
      android: {
        height: hp('8%'), // 70% of height device screen
        width: wp('100%'), // 80% of width device screen
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: wp('7%'),
      },
      default: {
        height: hp('8%'), // 70% of height device screen
        width: wp('12%'), // 80% of width device screen
        flexDirection: 'row',
        marginTop: wp('0%'),
        alignSelf: 'flex-start',
        marginLeft: wp('7%'),
        //borderColor: '#808080',
        //borderWidth: wp('0.2%'),
      },
    }),
  },
});

export default Perfil;
