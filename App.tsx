import {useCallback,useState,useEffect} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_300Light,Poppins_400Regular,Poppins_500Medium,Poppins_600SemiBold,Poppins_700Bold } from '@expo-google-fonts/poppins';

import { AppNavigator } from "navigation";
import { HomeScreen } from "_screens/index";


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,Poppins_400Regular,Poppins_500Medium,Poppins_600SemiBold,Poppins_700Bold 
  });

  if (!fontsLoaded) {
    return null;
  }
 return (
  <AppNavigator/>
  )
 }

