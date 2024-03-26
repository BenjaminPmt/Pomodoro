import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import Timer from './components/Timer';
import ButtonTimer from './components/ButtonTimer';
import Choice from './components/Choice';

export default function App() {

const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000
const BREAK_TIME_MINUTES = 0.1 * 60 * 1000
// const five = 0.3 * 60 * 1000
// const twentyFive =  25 * 60 * 1000
// const thirty = 30 * 60 * 1000
// ce stade est le chiffre qui defile
const [workTime, setWorkTime] = useState(FOCUS_TIME_MINUTES)
const [breakTime, setBreakTime] = useState(BREAK_TIME_MINUTES)
const [sessionCount, setSessionCount] = useState(0)
const [numberOfSessions, setNumberOfSessions] = useState() // Par exemple

// timerInterval: Stocke l'ID de l'intervalle du minuteur pour pouvoir l'arrêter.
const [timerInterval, setTimerInterval] = useState(null)

// isTimerRunning: Indique si le minuteur est actif.
const [isTimerRunning, setIsTimerRunning] = useState(false)

const [timerMode, setTimerMode] = useState("Focus")


const startTimer = () =>{
  console.log('start pomodoro')
    setIsTimerRunning(true)
  // setinterval permet d'executer une action de maniere repetée a un interval regulier comme chaque 2secondes
  // prev utilise notre ancien state donc il prend le state et ensuite il ajoute -1
const id = setInterval(()=> setWorkTime(prev => prev -1000), 1000)
setTimerInterval(id)
}

const stopTimer = () => {
  console.log('pause pomodoro')
  if(timerInterval != null){
    clearInterval(timerInterval)
  }
  setIsTimerRunning(false)
}

useEffect(() => {
  if (workTime === 0) {
    if (timerMode === 'Focus') {
      setTimerMode("Break");
      setWorkTime(breakTime); // Basculer vers le temps de pause
      if (sessionCount < numberOfSessions) {
        // Condition pour éviter de démarrer un nouveau timer si le nombre de sessions est atteint
        startTimer(); // Démarrez immédiatement le Break
      }
    } else {
      setTimerMode('Focus');
      setWorkTime(FOCUS_TIME_MINUTES); // Réinitialiser le temps de travail pour le prochain cycle
      // Incrémenter le compteur de sessions seulement après un cycle Focus-Break complet
      setSessionCount(prevCount => prevCount + 1); // Incrémenter ici après un cycle complet

      if (sessionCount < numberOfSessions - 1) { // Vérifiez s'il reste des sessions, ajustez pour la session actuelle
        startTimer(); // Commencez immédiatement la prochaine session Focus
      }
    }

    // Arrêter le timer à la fin de chaque cycle pour permettre un contrôle manuel, si désiré
    stopTimer(); 

    if (timerMode === 'Break' && sessionCount === numberOfSessions - 1) {
      alert("Bravo ! Vous avez complété vos sessions de focus.");
      setSessionCount(0); // Réinitialiser le compteur de sessions
      // Optionnel : Réinitialiser numberOfSessions ou offrir une option pour recommencer
      return;
    }
  }
}, [workTime, timerMode, numberOfSessions, sessionCount, breakTime]);






  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>C'est le moment  : {timerMode}</Text>
      <Text>Vous etes parti pour {numberOfSessions} sessions</Text>
      <Text>sessison count : {sessionCount}</Text>
      <ButtonTimer isTimerRunning={isTimerRunning} stopTimer={stopTimer} startTimer={startTimer}/>
      <Timer timerDate={new Date(workTime)}/>
      <Text>{BREAK_TIME_MINUTES}</Text>
        <Choice titleChoice={'Focus Time'} nb1={25} nb2={30} nb3={45} 
                choice1={() =>(setWorkTime(FOCUS_TIME_MINUTES))}
                choice2={() =>(setWorkTime(thirty))}
                choice3={() =>(setWorkTime(twentyFive))}
         />
        <Choice titleChoice={'Break Time'} nb1={5} nb2={10} nb3={15}
        choice1={() => setBreakTime(BREAK_TIME_MINUTES)}
        choice2={() => setBreakTime(10 * 60 * 1000)}
        choice3={() => setBreakTime(15 * 60 * 1000)}
        
        />
        <Choice titleChoice={'Repetitions'} nb1={2} nb2={3} nb3={4}
        choice1={() => setNumberOfSessions(2)}
        choice2={() => setNumberOfSessions(3)}
        choice3={() => setNumberOfSessions(4)}
        
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEE9C',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
