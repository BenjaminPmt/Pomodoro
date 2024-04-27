import { View, Text, Button, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
export default function ButtonTimer({startTimer, stopTimer, isTimerRunning, returnBack}) {


  return (
    <View style={styles.buttonContainer}>
    <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
        <FontAwesome6 name={isTimerRunning ? 'pause' : 'play'} size={28} color="#FFBA18" />
    </Pressable>
    <Pressable onPress={returnBack}>
    <FontAwesome6 name="arrow-rotate-left" size={28} color="#FFBA18" style={{marginLeft : 70}} returnBack={returnBack} />
    </Pressable>
    </View>

  )
}

const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection : "row"
  }
});