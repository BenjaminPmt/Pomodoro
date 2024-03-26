import { View, Text, Button, StyleSheet } from 'react-native'
import { useState } from 'react';
export default function Timer({timerDate}) {
  return (
    <View>
      <Text style={styles.textTimer}>{timerDate.getMinutes().toString().padStart(2, '0')} : {timerDate.getSeconds().toString().padStart(2,'0')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textTimer: {
    color: '#8E4EC6',
    fontSize : 90,
    fontWeight : '700',
  },
});
