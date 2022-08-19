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
import ScannerTabView from './src/views/scannerTabView';
import LibraryTabView from './src/views/libraryTabView';
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
          options={({navigation}: RootTabScreenProps<'TabOne'>) => ({
            title: 'Biblioteca',
            tabBarIcon: ({color}) => (
              <Ionicons name="add" size={28} color={color} />
            ),
          })}
        />
        <Tab.Screen name="Scanner" component={ScannerTabView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
