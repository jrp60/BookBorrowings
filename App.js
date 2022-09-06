import React, {useState, useEffect} from 'react';
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
import LoginView from './src/views/LoginView';
import HomeView from './src/views/HomeView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import SignUpView from './src/views/SignUpView';
//DATABASE
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

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

const App: () => Node = () => {
  //DATABASE
  //Before using the SDK...
  Parse.setAsyncStorage(AsyncStorage);
  const PARSE_APP_ID = 'DnXMtxNJhNdaGUsqcSwUKpI7bMDY4uSkMWjGUU06';
  const PARSE_JS_KEY = 'hN9ld6RZ59a80273mEelW2PstcfTZaD1Y47RGhKx';
  const PARSE_SERVER_URL = 'https://parseapi.back4app.com/';
  Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
  Parse.serverURL = PARSE_SERVER_URL;

  const [person, setPerson] = useState(new Parse.Object('Person'));

  /*
  //This funciton will save a simple Person object
  async function addPerson() {
    try {
      //create a new Parse Object instance
      const newPerson = new Parse.Object('Person');
      //define the attributes you want for your Object
      newPerson.set('name', 'Johny Bel');
      newPerson.set('email', 'john@back4app.com');
      //save it on Back4App Data Store
      await newPerson.save();
    } catch (error) {
      console.log('Error saving new person: ', error);
    }
  }

  //This function will retrieve a Person which the name is John
  async function fetchPerson() {
    //create your Parse Query using the Person Class you've created
    let query = new Parse.Query('Person');
    //run the query to retrieve all objects on Person class, optionally you can add your filters
    let queryResult = await query.findAll();
    //pick the first result
    const currentPerson = queryResult[0];
    //access the Parse Object attributes
    console.log('person id: ', currentPerson.get('id'));
    console.log('person name: ', currentPerson.get('name'));
    console.log('person email: ', currentPerson.get('email'));
    setPerson(currentPerson);
  }
  */

  useEffect(() => {
    //console.log('USE EFFECT!!');
    //addPerson();
    //console.log('And now fetch!');
    //fetchPerson();
  }, []);
  /** */
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Signup" component={SignUpView} />
        <Stack.Screen
          name="HomeView"
          component={HomeView}
          options={{title: 'Tteee'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App2 = () => {
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
