import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import ButtonTimer from '../components/ButtonTimer'
import { AntDesign } from '@expo/vector-icons';



export default function Home({navigation, route}) {

  const [workTime, setWorkTime] = useState(null);
  const [breakTime, setBreakTime] = useState(null);
  const [numberOfSessions, setNumberOfSessions] = useState(null);
  const [timerMode, setTimerMode] = useState("Focus");
  const [sessionCount, setSessionCount] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timerInterval, setTimerInterval] = useState(null)
  const [originalWorkTime, setOriginalWorkTime] = useState(null);
  const [originalBreakTime, setOriginalBreakTime] = useState(null);

useEffect(() => {
  if (route.params?.workTime && route.params?.breakTime && route.params?.numberOfSessions) {
    const { workTime, breakTime, numberOfSessions } = route.params;
    setWorkTime(workTime);
    setBreakTime(breakTime);
    setNumberOfSessions(numberOfSessions);
    setOriginalWorkTime(workTime); // Stockez la valeur originale de workTime
    setOriginalBreakTime(breakTime); // Stockez la valeur originale de breakTime
  }
}, [route.params]);

const toggleTimerMode = () => {
  if (timerMode === "Focus") {
    setTimerMode("Break");
    setWorkTime(breakTime); // Préparez-vous pour le temps de pause
    setIsTimerRunning(false)
  } else {
    setSessionCount(prev => prev + 1); // Une session de travail et de pause complète
    if (sessionCount + 1 < numberOfSessions) {
      setTimerMode("Focus");
      // Ici, assurez-vous de réinitialiser workTime à sa valeur initiale pour le travail
      // Supposons que vous avez une variable ou un moyen de récupérer le temps initial de travail
      setWorkTime(originalWorkTime); 
    setIsTimerRunning(true)

    } else if(sessionCount === numberOfSessions) {
      completeSession();
      return; // Pour éviter de démarrer un autre timer après la dernière session
    }
  }
  startTimer(); // Redémarrez le timer avec le nouveau mode
};

const startTimer = () => {
  setIsTimerRunning(true);
  const intervalId = setInterval(() => {
    setWorkTime(prev => {
      if (prev - 1000 <= 0) {
        clearInterval(intervalId); // Arrêtez le timer actuel
        toggleTimerMode(); // Changez le mode ou terminez la session
      }
      return prev - 1000;
    });
  }, 1000);
  setTimerInterval(intervalId);
};
const stopTimer = () => {
  console.log('pause pomodoro')
  if(timerInterval != null){
    clearInterval(timerInterval)
  }
  setIsTimerRunning(false)
}

const completeSession = () => {
  clearInterval(timerInterval); // Arrête le timer
  setIsTimerRunning(false);
  // Autres actions de nettoyage ou transitions ici
  alert("Vous avez terminé toutes vos sessions !");
};

// N'oubliez pas d'ajuster le useEffect pour nettoyer le timer si le composant est démonté ou si l'utilisateur quitte la page
useEffect(() => {
  return () => clearInterval(timerInterval);
}, [timerInterval]);
  const hasParams = workTime !== null && breakTime !== null && numberOfSessions !== null;
  return (
    
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{color : '#FFBA18',  fontSize : 25, fontWeight : "700"}}>Concentration</Text>
        <Text style={{color :'#FFBA18', fontSize : 18}}>Ne laissez personne vous distraire</Text>
      </View>
      {hasParams ?(
        <>
        <Text>C'est le moment {timerMode}</Text>
        <Text>Vous etes parti pour {numberOfSessions} sessions</Text>
        <Text>{sessionCount}</Text>
        <Timer  timerDate={new Date(workTime)} />
        <ButtonTimer isTimerRunning={isTimerRunning} stopTimer={stopTimer} startTimer={startTimer}/>
        </>
      ): (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => navigation.navigate("ChoiceTime")}>
          <Text style={{color :'#FFBA18', fontSize : 18}}>Commencer un Pomodoro</Text>
          </Pressable>
        </View>
      )}
      
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex : 1,
      backgroundColor : '#1F2D5C',
      justifyContent: 'center', // Ajouté pour centrer verticalement dans le conteneur
    alignItems: 'center', // Ajouté pour centrer horizontalement dans le conteneur
  },
  textContainer : {
    position : 'absolute',
    top : "10%",
    left : "10%"
  },
  buttonContainer : {
    width: '70%', // Vous pouvez ajuster la largeur comme vous le souhaitez
    height: 'auto', // Hauteur auto pour s'adapter au contenu
    alignItems: 'center',
    justifyContent: 'center',
    
    },
  button : {
    width : '100%',
    height : 50,
    borderRadius : 30,
    borderWidth : 3,
    borderColor : '#FFBA18',
    alignItems: 'center', // Centre le texte dans le bouton
    justifyContent: 'center', // Centre verticalement le texte dans le bouton
  },
});