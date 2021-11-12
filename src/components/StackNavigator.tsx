import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage } from '../pages/LoginPage';
import Registro from './Registro';
import Perfil from './Perfil';
import TerminoFijo from './TerminoFijo';
import TerminoIndefinido from './TerminoIndefinido';
import PerfilFEL from './PerfilFEL';
import PerfilDevolucion from './PerfilDevolucion';
import FormularioFel from './FormularioFel';
import PerfilFirma from './PerfilFirma';
import PerfilDeceval from './PerfinDeceval';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
        
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="TerminoFijo" component={TerminoFijo} />
      <Stack.Screen name="TerminoIndefinido" component={TerminoIndefinido} />
      <Stack.Screen name="Perfil" component={Perfil} /> 
      <Stack.Screen name="PerfilF" component={PerfilFEL} />
      <Stack.Screen name="PerfilDevolucion" component={PerfilDevolucion} />
      <Stack.Screen name="FormularioFel" component={FormularioFel} />
      <Stack.Screen name="PerfilFirma" component={PerfilFirma} />
      <Stack.Screen name="PerfilDeceval" component={PerfilDeceval} />
    </Stack.Navigator>
  );
}