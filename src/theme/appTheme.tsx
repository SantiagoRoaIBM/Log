import React from "react";
import { StyleSheet, View, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginStyle: {
        flex: 3.5,
        flexDirection: 'column',
        backgroundColor: 'rgb(210,210,210)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerStyle: {
        flex: 2.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentLogin: {
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        justifyContent: 'space-around',
    },
    contentRegistry: {
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-around',
    },
    inputField: {
        fontSize: hp('2%'),
        outlineWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: '3%',
    },
    button: {
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        textAlign: 'center',
        width: 'fit-content'
    },
    buttonText: {
        fontSize: hp('2%'),
        color: 'white',
        paddingHorizontal: 25,
        paddingVertical: 5,
    },
    hugeText: {
        fontSize: hp('5%'),
    },
    regularText: {
        textAlign: 'center',
        fontSize: hp('2%'),
    },
    mediumText: {
        textAlign: 'center',
        fontSize: hp('3%'),
    },
    headerProfileStyle: {
        height: "10%",
        flexDirection: 'row',
        backgroundColor: 'rgb(210,210,210)',
        justifyContent: 'center',
    },
    headerTitleStyle: {
        paddingTop: '1%',
        width: "90%",
        textAlign: 'center',
        fontSize: hp('3%'),
    },
    notificationImage: {
        flex: 1,
        height: 50,
        width: 50,
    },
    notificationButton: {
        flex: 1,
    },
    container1: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 3.5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    container3: {
        height: '70%',
        width: '60%',
        backgroundColor: 'rgb(250,250,250)',
    },
    container4: {
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container5: {
        height: '50%',
    },
    textProfile: {
        textAlign: 'center',
        fontSize: hp('3%')
    },
    DocumentsPannelStyle: {
        height: '70%',
        width: '80%',
    },
    DocummentsPannelMenuStyle: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    DocummentsPannelStepsStyle: {
        marginVertical: '4%',
        borderWidth: 2,
        borderColor: 'rgb(220,220,220)',
        borderRadius: 40,
        height: '30%',
        alignItems: 'center',
    },
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
    linea: {
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
    DocumentsFieldStyle: {
        height: '90%',

    },
    ContainerBlankField: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        paddingTop: '4%',
        backgroundColor: 'rgb(210,210,210)',
        height: '60%',
        width: '80%',
        alignSelf: 'center'
    },
    windowDocuments: {
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: 'rgb(230,230,230)',
        height: '10%',
        width: '100%',
    }
});


