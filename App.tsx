import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';
import { TimerCountDownDisplay } from './TimerCountDownDisplay';
import { TimerToggleButton } from './TimerToggleButton';
import { TimerModes } from './TimerModeDisplay';
import { TimerModeDisplay } from './TimerModeDisplay';

export default function App() {
  const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000;
  const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<TimerModes>("Focus");

  useEffect(() => {
    if( timerCount == 0){
      if(timerMode == 'Focus'){
        setTimerMode('Break');
        setTimerCount(BREAK_TIME_MINUTES)
      } else {
        setTimerMode('Focus');
        setTimerCount(FOCUS_TIME_MINUTES)
      }
      stopTimer();
    }
  },[timerCount])
  const startTimer = () => {
    setIsTimerRunning(true);
    // prev = l'ancien state, donc la, la seconde d'avant
    // setInterval permet d'executer une fonction de maniere repeté a des intervalles reguliers
    // ici on effectue une fonction flechée avec le changement de temps chaque seconde
   const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000);
   setTimerInterval(id)
  }

  const stopTimer = () => {
    if(timerInterval != null) {
      clearInterval(timerInterval)
      setIsTimerRunning(false);
    }
    
  }

  const timerDate = new Date(timerCount);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TimerModeDisplay timerMode={timerMode} />
      <TimerToggleButton isTimerRunning={isTimerRunning} startTimer={startTimer} stopTimer={stopTimer} />
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
