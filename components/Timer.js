import { View, Text, Button, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import { PlayfairDisplay_400Regular_Italic, useFonts } from '@expo-google-fonts/playfair-display';

export default function Timer({timerDate}) {

  return (
    <View>
      <Text style={styles.textTimer}>{timerDate.getMinutes().toString().padStart(2, '0')} : {timerDate.getSeconds().toString().padStart(2,'0')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textTimer: {
    color: 'white',
    fontSize : 90,
    fontWeight : '700',
  },
});

