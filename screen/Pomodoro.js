import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Alert, Pressable } from 'react-native';
import Timer from '../components/Timer';
import ButtonTimer from '../components/ButtonTimer';
import { Audio } from 'expo-av'
import { AntDesign } from '@expo/vector-icons';
import ModalOneBtn from '../components/ModalOneBtn';
import Colors from '../Constants';
import PomodoroMode from '../components/PomodoroMode';


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
  const [modal, setModal] = useState(false)
  const [modalNoTask, setModalNoTask] = useState(false)
  
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
    playSound()
    setModal(true)
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
  
  const backModal = () => {
    setModal(false);
    setModalNoTask(false)
  }
  return (
    <View style={styles.container}>
       <ModalOneBtn 
        visible={modal}
        textBodyModal="Votre session de Pomodoro est terminée"
        textBtn="Ok"
        onPressBtn={backModal}
        />
      <View style={styles.returnContainer}>
            <Pressable onPress={() => navigation.navigate("ChoiceTime")}>
                <AntDesign name="arrowleft" size={40} color={Colors.BEIGE} />
            </Pressable>
        </View>
      <Timer  timerDate={new Date(currentWorkTime)} />
      <ButtonTimer isTimerRunning={isTimerRunning} stopTimer={stopTimer} startTimer={startTimer} returnBack={returnBack}/>
      <PomodoroMode timerMode={timerMode} numberOfSessions={numberOfSessions} sessionCount={sessionCount} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : Colors.GREEN,
        alignItems : 'center',
        justifyContent : 'center'
    },
  returnContainer :{
    position : 'absolute',
    left : "10%",
    top : '10%'
},
  });