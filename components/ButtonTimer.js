import { View, Text, Button, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Colors from '../Constants';
export default function ButtonTimer({startTimer, stopTimer, isTimerRunning, returnBack}) {


  return (
    <View style={styles.buttonContainer}>
    <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
        <FontAwesome6 name={isTimerRunning ? 'pause' : 'play'} size={50} color={Colors.BEIGE} />
    </Pressable>
    <Pressable onPress={returnBack}>
    </Pressable>
    </View>

  )
}

const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection : "row",
    padding : 60,
  }
});