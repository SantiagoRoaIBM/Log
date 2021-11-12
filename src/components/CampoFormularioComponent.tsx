import React from 'react'
import { View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StateWindow } from './StateWindow'

export const CampoFormulario = () => {
    return (
        <View style={[styles.ContainerBlankField]}>
            <View style={{ display: 'flex', alignItems: 'center', height: '100%', width: '80%' }} >
                <StateWindow />
                <StateWindow />
                <StateWindow />
                <StateWindow />
            </View>


        </View >
    )
}
