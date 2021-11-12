import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CampoFormulario } from './CampoFormularioComponent'
import { StepBarComponent } from './StepBarComponent'

export const VistaFormularios = () => {
    return (
        <View style={[styles.container]}>
            <StepBarComponent />
            <View style={{ height: '10%' }}>
                <Text style={[styles.mediumText, { color: 'rgb(180,180,180)' }]}>Ingrese los datos</Text>
            </View>
            <CampoFormulario />
        </View >


    )
}
