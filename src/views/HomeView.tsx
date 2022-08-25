import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScannerTabView from './ScannerTabView';
import LibraryTabView from './LibraryTabView';
import LoginView from './loginView';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';

const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
  },
};

const HomeView = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Library2"
        component={LibraryTabView}
        //screenOptions={{headerShown: false}}
        options={({navigation}) => ({
          title: 'Biblioteca',
          //screenOptions: {headerShown: false},
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
  );
};

// LINEA MODIFICADA, Dejo esto aqui por si me da error
// options={({navigation}: RootTabScreenProps<'TabOne'>) => ({

export default HomeView;
