import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Timer from '../components/Timer';
import ButtonTimer from '../components/ButtonTimer';
import { Audio } from 'expo-av'

export default function Pomodoro({ route, navigation }) {
  // Extraction des paramètres passés à la route Pomodoro
  const { workTime, breakTime, numberOfSessions} = route.params;
  const [currentWorkTime, setCurrentWorkTime] = useState(workTime)
  const [sessionCount, setSessionCount] = useState(0)
  // timerInterval: Stocke l'ID de l'intervalle du minuteur pour pouvoir l'arrêter.
  const [timerInterval, setTimerInterval] = useState(null)
  // isTimerRunning: Indique si le minuteur est actif.
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timerMode, setTimerMode] = useState("Focus")
  const [sound, setSound] = useState();
  
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/completed.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const startTimer = () =>{
    console.log('start pomodoro')
    console.log(workTime, breakTime, numberOfSessions)
      setIsTimerRunning(true)
    // setinterval permet d'executer une action de maniere repetée a un interval regulier comme chaque 2secondes
    // prev utilise notre ancien state donc il prend le state et ensuite il ajoute -1
  const id = setInterval(()=> setCurrentWorkTime(prev => prev -1000), 1000)
  setTimerInterval(id)
  }
  
  const stopTimer = () => {
    console.log('pause pomodoro')
    if(timerInterval != null){
      clearInterval(timerInterval)
    }
    setIsTimerRunning(false)
  }
  const completeSession = () => {
    if (timerInterval != null) {
      clearInterval(timerInterval);  // Arrêter le minuteur en cours
      setTimerInterval(null);        // Réinitialiser l'ID de l'intervalle
    }
    setIsTimerRunning(false);         // Indiquer que le minuteur n'est pas en marche
    setCurrentWorkTime(workTime);     // Réinitialiser le temps de travail pour une future utilisation
    setTimerMode("Focus");            // Réinitialiser le mode à Focus
    setSessionCount(0);               // Réinitialiser le compteur de sessions
    alert("Vous avez terminé toutes vos sessions !"); // Afficher une alerte
    playSound()
  };

  const returnBack = () =>{
    navigation.navigate("ChoiceTime")
  }
  useEffect(() => {
    if (currentWorkTime <= 0) {
      stopTimer();
      let nextMode = timerMode === 'Focus' ? 'Break' : 'Focus';
  
      if (timerMode === 'Focus') {
        if (sessionCount < numberOfSessions) {
          setSessionCount(prevCount => prevCount + 1); // Incrémente ici pour tous les Focus finis
        }
      }
  
      if (sessionCount === numberOfSessions && timerMode === 'Break') {
        completeSession();
        return; // Ajoutez un return ici pour arrêter l'exécution du reste du code
      } else {
        let nextTime = timerMode === 'Focus' ? breakTime : workTime;
        setTimerMode(nextMode);
        setCurrentWorkTime(nextTime);
        startTimer();
        playSound()
      }
    }
  }, [currentWorkTime, sessionCount, timerMode, workTime, breakTime, numberOfSessions]);
  
  
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{fontSize : 20, color : '#FFBA18', fontWeight : '700'}}>{timerMode}</Text>
        <Text style={{fontSize : 20, color : '#FFBA18', fontWeight : '700'}}>{sessionCount} / {numberOfSessions}</Text>
      </View>
        <Text></Text>
      <Timer  timerDate={new Date(currentWorkTime)} />
      <ButtonTimer isTimerRunning={isTimerRunning} stopTimer={stopTimer} startTimer={startTimer} returnBack={returnBack}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#1F2D5C',
        alignItems : 'center',
        justifyContent : 'center'
    },
  textContainer : {
    position : 'absolute',
    top : "10%",
    left : "10%"
  },
  });