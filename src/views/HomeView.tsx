import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScannerTabView from './ScannerTabView';
import LibraryTabView from './LibraryTabView';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

//TODO: DELETE FILE

const HomeView = () => {
  return 'hoLA';
};

//NUEVO SISTEMA DE NAVIGATION HE BORRADO
/*
<Tab.Navigator>
      <Tab.Screen
        name="Library"
        component={LibraryTabView}
        options={({navigation}) => ({
          title: 'Biblioteca',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="library-outline" size={28} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerTabView}
        options={({navigation}) => ({
          title: 'Scanner',
          tabBarIcon: ({color}) => (
            <Ionicons name="qr-code-outline" size={28} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
    */

// LINEA MODIFICADA, Dejo esto aqui por si me da error
// options={({navigation}: RootTabScreenProps<'TabOne'>) => ({

export default HomeView;
