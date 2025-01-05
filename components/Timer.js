import { View, Text, Button, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import { PlayfairDisplay_400Regular_Italic, useFonts } from '@expo-google-fonts/playfair-display';
import Colors from '../Constants';

export default function Timer({timerDate}) {

  return (
    <View>
      <Text style={{color :Colors.BEIGE, fontSize : 100, fontWeight : "700"}}>{timerDate.getMinutes().toString().padStart(2, '0')} : {timerDate.getSeconds().toString().padStart(2,'0')} </Text>
    </View>
  )
};
