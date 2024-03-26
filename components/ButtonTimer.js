import { View, Text, Button, Pressable } from 'react-native'
import { useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
export default function ButtonTimer({startTimer, stopTimer, isTimerRunning}) {
  return (
    <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
    <View>
      <FontAwesome6 name={isTimerRunning ? 'pause' : 'play'} size={24} color="black" />
    </View>
    </Pressable>
  )
}