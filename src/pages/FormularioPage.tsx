import React from 'react'
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

  TextInput,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { styles } from '../theme/appTheme';
import { HeaderFormulario } from '../components/HeaderFormulario';
import { StepBarComponent } from '../components/StepBarComponent';
import { VistaFormularios } from '../components/VistaFormularios';

export const FormularioPage = () => {
  return (
    <View style={styles.container}>
      <HeaderFormulario  />
      <VistaFormularios />
    </View>
  )
}
