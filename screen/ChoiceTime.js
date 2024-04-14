import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState, useEffect } from 'react';
import Choice from '../components/Choice'
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function ChoiceTime({navigation}) {

  const [workTime, setWorkTime] = useState(null)
  const [breakTime, setBreakTime] = useState(null)
  const [numberOfSessions, setNumberOfSessions] = useState(null)
  
  const goToPomodoro = () => {
    if(workTime === null || breakTime === null || numberOfSessions === null){
      alert('choisir svp');
      return;
    }else{
      navigation.navigate('Home', {
        workTime,
        breakTime,
        numberOfSessions,
      });
      console.log(workTime, breakTime, numberOfSessions)
    }
   
  }
  const resetSession = () => {
    setWorkTime(null)
    setBreakTime(null)
    setNumberOfSessions(null)
  }
  return (
    
    <View style={styles.container}>
      <AntDesign name="arrowleft" size={24} color="#FFBA18" onPress={() =>navigation.navigate('Home')} style={{padding : 50}} />
        <View style={styles.choiceContainer}>
          <Choice titleChoice={'Focus Time'} nb1={25} nb2={30} nb3={45} 
                choice1={() =>(setWorkTime(0.2 * 60 * 1000))}
                choice2={() =>(setWorkTime(30 * 60 * 1000))}
                choice3={() =>(setWorkTime(45 * 60 * 1000))}
          />
          <Choice titleChoice={'Break Time'} nb1={5} nb2={10} nb3={15}
          choice1={() => setBreakTime(0.1 * 60 * 1000)}
          choice2={() => setBreakTime(10 * 60 * 1000)}
          choice3={() => setBreakTime(15 * 60 * 1000)}
          />
          <Choice titleChoice={'Repetitions'} nb1={1} nb2={2} nb3={3}
          choice1={() => setNumberOfSessions(1)}
          choice2={() => setNumberOfSessions(2)}
          choice3={() => setNumberOfSessions(3)}
          />
        </View>
        <View style={styles.viewSessionContainer}>
            <Text style={styles.textSession}>Votre session</Text>
            <View style={styles.viewSession}>
              <Text style={styles.textViewSession}>Focus time : {workTime ? `${workTime / (60 * 1000)} minutes` : "Pas de travail choisi"} </Text>
              <Text style={styles.textViewSession}>Break time : {breakTime ? `${breakTime / (60 * 1000)} minutes` : "Pas de repos choisi"} </Text>
              <Text style={styles.textViewSession}>Repetitions time : {numberOfSessions ? `${numberOfSessions } repetition(s)` : "Pas de repetition choisi"} </Text>
            </View>
            <Pressable onPress={resetSession}>
              <Fontisto name="arrow-return-left" size={30} color="#FFBA18" style={{textAlign : 'center', top : '100%'}}  />
            </Pressable>
      </View>
      <View style={styles.startSessionContainer}>
            <Pressable onPress={goToPomodoro}>
              <Text style={{color :'#FFBA18', fontSize : 18}}><Ionicons name="play-circle" size={65} color="#FFBA18" /></Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#1F2D5C',
        alignItems : 'center',
    },
    choiceContainer :{
        backgroundColor : '#1F2D5C',
        height : '45%',
        alignItems : 'center',
        justifyContent : 'center'
    },
    viewSessionContainer:{
      height : '25%',
      width : '80%',
      backgroundColor : '#FBFDFF',
      borderRadius : 30,
    },
    textSession : {
      fontSize : 20,
        fontWeight : '700',
        color : '#FFBA18',
        textAlign : 'center',
        marginTop : 10,
    },
    viewSession : {
      flexDirection : 'column',
      top : "10%",
      marginLeft:  20
    },
    textViewSession : {
      fontSize : 15,
        fontWeight : '700',
        color : '#FFBA18',
        marginTop : 15,
    },
    startSessionContainer : {
      marginTop : 30,
    }
  });