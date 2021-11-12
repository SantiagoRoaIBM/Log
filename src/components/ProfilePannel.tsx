import React from 'react'
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

const image = require("../../assets/user-icon.png");

export const ProfilePannel = () => {
    return (
        <View style={styles.container3}>
            <View style={styles.container4}>
                <Image
                    source={image}
                    style={{height:100, width: 100}}>
                </Image>
            </View>
            <View style={styles.container5}>
                <View style={{flex:1}}><Text style={styles.textProfile}>Nombre</Text></View>
                <View style={{flex:1}}><Text style={styles.textProfile}>Documento</Text></View>
                <View style={{flex:1}}><Text style={styles.textProfile}>Correo</Text></View>
            </View>
        </View>
    )
}
