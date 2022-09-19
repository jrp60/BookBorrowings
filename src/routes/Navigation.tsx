import React from 'react';
import LibraryTabView from '../views/LibraryTabView';
import ScannerTabView from '../views/ScannerTabView';
import BookDetailView from '../views/BookDetailView';
import LoginView from '../views/LoginView';
import SignUpView from '../views/SignUpView';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5BB5F1',
    background: 'rgb(255, 255, 255)',
  },
};

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Biblioteca" component={LibraryTabView} />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailView}
        options={{title: 'Tteee'}}
      />
    </Stack.Navigator>
  );
}

const HomeTabsView = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Library"
        component={MyStack}
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
  );
};

function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Signup" component={SignUpView} />
        <Stack.Screen
          name="HomeTabsView"
          component={HomeTabsView}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
