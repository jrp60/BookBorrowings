import React from 'react';
import type {Node} from 'react';
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
import ScannerTabView from './src/views/ScannerTabView';
import LibraryTabView from './src/views/LibraryTabView';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
  },
};

const App: () => Node = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Library"
          component={LibraryTabView}
          screenOptions={{headerShown: false}}
          options={({navigation}: RootTabScreenProps<'TabOne'>) => ({
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
          options={({navigation}: RootTabScreenProps<'TabTwo'>) => ({
            title: 'Scanner',
            tabBarIcon: ({color}) => (
              <Ionicons name="qr-code-outline" size={28} color={color} />
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
