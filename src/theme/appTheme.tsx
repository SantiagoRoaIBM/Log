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
        fontSize: hp('2%'),
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
    }
});


