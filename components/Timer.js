import { View, Text, Button, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import { PlayfairDisplay_400Regular_Italic, useFonts } from '@expo-google-fonts/playfair-display';

export default function Timer({timerDate}) {

  return (
    <View>
      <Text style={{color :'#FFBA18', fontSize : 75, fontWeight : "700"}}>{timerDate.getMinutes().toString().padStart(2, '0')}</Text>
      <Text style={{color : '#FFBA18',  fontSize : 100, fontWeight : "700", bottom : 35}}>{timerDate.getSeconds().toString().padStart(2,'0')}</Text>
    </View>
  )
};
