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

const FormularioFel = ({navigation}) => {
    return (
        <View style={styles.backProfileFormulario}>
            <View style={styles.paso1Formulario}></View>
            <View style={styles.linea}></View>
            <View style={styles.paso2Formulario}></View>
            <View style={styles.linea}></View>
            <View style={styles.paso3Formulario}></View>
            <View style={styles.linea}></View>
            <View style={styles.paso3Formulario}></View>
            <View style={styles.linea}></View>
            <View style={styles.paso3Formulario}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    backProfileFormulario: {
        height: hp('75%'), // 70% of height device screen
        width: wp('75%'), // 80% of width device screen
        marginTop: hp('3%'),
        marginLeft: wp('0%'),
        paddingLeft: wp('0%'),
        flexDirection: 'row',
    },
    paso1Formulario: {
        height: hp('5%'), // 70% of height device screen
        width: wp('10%'), // 80% of width device screen
        //flexDirection: 'row',
        marginLeft: wp('15%'),
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
      linea:{
        height: hp('0.1%'), // 70% of height device screen
        width: wp('4.5%'), // 80% of width device screen
        marginLeft: wp('0%'),
        marginRight: wp('0%'),
        marginTop: wp('5%'),
        borderColor: '#808080',
        borderWidth: wp('0.1%'),
      },
      paso2Formulario: {
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
        borderColor: '#808080',
        backgroundColor: '#808080',
        borderWidth: wp('0.2%'),
      },
      paso3Formulario: {
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
})

export default FormularioFel;