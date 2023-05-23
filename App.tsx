import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';
import { TimerCountDownDisplay } from './TimerCountDownDisplay';

export default function App() {
  const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000;
  const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);

  const startTimer = () => {
    // prev = l'ancien state, donc la, la seconde d'avant
    // setInterval permet d'executer une fonction de maniere repeté a des intervalles reguliers
    // ici on effectue une fonction flechée avec le changement de temps chaque seconde
   const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000);
   setTimerInterval(id)
  }

  const stopTimer = () => {
    if(timerInterval != null) {
      clearInterval(timerInterval)
    }
    
  }

  const timerDate = new Date(timerCount);
  return (
    <View style={styles.container}>
      <Title/>
      <StatusBar style="auto" />
      <Button title='Start' onPress={startTimer} />
      <Button title='Stop' onPress={stopTimer} />
      <TimerCountDownDisplay timerDate={new Date(timerCount)} />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#AAC0AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
