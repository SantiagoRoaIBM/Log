import React from 'react'
import { View } from 'react-native'
import { styles } from '../theme/appTheme'

export const StepBarComponent = () => {
    return (
        <View style={{ height: '27%'}}>
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
            </View >
        </View>

    )
}
