import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Timer from '../components/Timer';
import ButtonTimer from '../components/ButtonTimer';

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
  
  // useEffect(() => {
  //   // const focusStartTimer = navigation.addListener('focus',()=>{
  //       // startTimer()
  //   //     return focusStartTimer
  //   // })

  //   if (currentWorkTime === 0) {
  //     stopTimer(); 
  //     if (timerMode === 'Focus') {
  //       setTimerMode("Break");
  //       setCurrentWorkTime(breakTime); // Basculer vers le temps de pause
  //       if (sessionCount < numberOfSessions) {
  //         // Condition pour éviter de démarrer un nouveau timer si le nombre de sessions est atteint
  //         startTimer(); // Démarrez immédiatement le Break
  //       }
  //     } else {
  //       setTimerMode('Focus');
  //       setCurrentWorkTime(workTime); // Réinitialiser le temps de travail pour le prochain cycle
  //       // Incrémenter le compteur de sessions seulement après un cycle Focus-Break complet
  //       setSessionCount(prevCount => prevCount + 1); // Incrémenter ici après un cycle complet
  
  //       if (sessionCount < numberOfSessions - 1) { // Vérifiez s'il reste des sessions, ajustez pour la session actuelle
  //         startTimer(); // Commencez immédiatement la prochaine session Focus
  //       }
  //     }
 
      
  
  //     if (timerMode === 'Break' && sessionCount === numberOfSessions - 1) {
  //       // alert("Bravo ! Vous avez complété vos sessions de focus.");
  //       console.log("session terminé")
  //       setSessionCount(0); // Réinitialiser le compteur de sessions
  //       setCurrentWorkTime(0)
  //       // Optionnel : Réinitialiser numberOfSessions ou offrir une option pour recommencer
  //       return;
  //     }
  //   //         // Cette fonction sera appelée lors du démontage du composant
  // return () => {
  //   if (timerInterval != null) {
  //     clearInterval(timerInterval); // Effacez l'intervalle pour éviter les fuites de mémoire
  //   }
  //   // focusStartTimer.remove(); // N'oubliez pas de nettoyer l'écouteur d'événement 'focus'
  // };
  //   }
  // }, [timerInterval, timerMode, numberOfSessions, sessionCount, currentWorkTime, navigation]);

  //   const handleSessionEnd = () => {
  //     // Action à exécuter lorsque toutes les sessions sont terminées
  //     console.log("Toutes les sessions Pomodoro sont terminées."); // Remplacez ceci par votre logique
  //     // Par exemple, afficher une alerte à l'utilisateur
  //     alert("Bravo ! Vous avez complété toutes vos sessions Pomodoro.");
  //     // Vous pourriez aussi naviguer l'utilisateur vers un autre écran ou réinitialiser l'état du composant ici
  //     // navigation.navigate('Home'); // Si vous souhaitez renvoyer l'utilisateur à un écran d'accueil, par exemple.
  //   };
  //   if (timerMode === 'Break' && sessionCount === numberOfSessions && currentWorkTime === 0) {
  //     handleSessionEnd();
  //   }

  // // Fonction pour démarrer le timer
  // const startTimer = () => {
  //   setIsTimerRunning(true);
  //   // S'assurer qu'il n'y a pas d'intervalle en cours d'exécution avant de démarrer un nouveau
  //   clearInterval(timerInterval);
  //   const id = setInterval(() => {
  //     setCurrentWorkTime(prev => prev - 1000);
  //   }, 1000);
  //   setTimerInterval(id);
  // };

  // // Fonction pour arrêter le timer
  // const stopTimer = () => {
  //   clearInterval(timerInterval);
  //   setIsTimerRunning(false);
  // };

  useEffect(() => {
    if (currentWorkTime <= 0) {
      stopTimer();
      let nextMode = timerMode === 'Focus' ? 'Break' : 'Focus';
      let nextTime = timerMode === 'Focus' ? breakTime : workTime;
      setTimerMode(nextMode);
      setCurrentWorkTime(nextTime);

      if ((timerMode === 'Break' && sessionCount < numberOfSessions - 1) || timerMode === 'Focus') {
        setSessionCount(prevCount => timerMode === 'Focus' ? prevCount + 1 : prevCount);
        startTimer();
      } else if (timerMode === 'Break' && sessionCount === numberOfSessions - 1) {
        Alert.alert("Bravo !", "Vous avez complété toutes vos sessions Pomodoro.");
        // Option pour réinitialiser ou proposer des actions suivantes
      }
    }

    // return () => {
    //   if (timerInterval.current != null) {
    //     clearInterval(timerInterval.current);
    //   }
    // };
  // La liste des dépendances devrait maintenant correctement gérer les changements d'état sans causer de blocage.
  }, [currentWorkTime, sessionCount, timerMode, workTime, breakTime, numberOfSessions]);

  // Ici, on s'attend à ce que `timerInterval` soit inclus dans les dépendances du useEffect
  // mais puisqu'il n'est pas déclaré avec useState, cette partie du code nécessiterait une révision.
  // Vous pourriez déclarer timerInterval avec useState ou useRef pour corriger cela.
  
  return (
    <View style={styles.container}>
        <Text>C'est le moment  : {timerMode}</Text>
        <Text>Vous etes parti pour {numberOfSessions} sessions</Text>
        <Text>{sessionCount}</Text>
      <Timer  timerDate={new Date(currentWorkTime)} />
      <ButtonTimer isTimerRunning={isTimerRunning} stopTimer={stopTimer} startTimer={startTimer}/>
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

  });