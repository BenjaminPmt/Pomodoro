import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native'
import { useState } from 'react';
import Choice from '../components/Choice'
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ModalOneBtn from '../components/ModalOneBtn';
import { FontAwesome6 } from '@expo/vector-icons';
export default function ChoiceTime({navigation}) {

  const [workTime, setWorkTime] = useState(null)
  const [breakTime, setBreakTime] = useState(null)
  const [numberOfSessions, setNumberOfSessions] = useState(null)
  const [modal, setModal] = useState(false)
  const [modalNoTask, setModalNoTask] = useState(false)
  const [selectedWorkTime, setSelectedWorkTime] = useState(null);
  const [selectedBreakTime, setSelectedBreakTime] = useState(null);
  const [selectedSessions, setSelectedSessions] = useState(null);
  
  const goToPomodoro = () => {
    if(workTime === null || breakTime === null || numberOfSessions === null){
      setModal(true)
      return;
    }else{
      navigation.navigate('Timer', {
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
    setSelectedBreakTime(null)
    setSelectedSessions(null)
    setSelectedWorkTime(null)

  }
  const backModal = () => {
    setModal(false);
    setModalNoTask(false)
  }
  return (
    
    <View style={styles.container}>
      <ModalOneBtn 
        visible={modal}
        titleHeader="Choisir vos options"
        textBodyModal="Vous devez choisir les options de votre session"
        textBtn="Retour"
        onPressBtn={backModal}
        />
      <View style={styles.returnContainer}>
            <Pressable onPress={() => navigation.navigate("Home")}>
                <AntDesign name="arrowleft" size={32} color="#FFBA18" />
            </Pressable>
        </View>
        <View style={styles.choiceContainer}>
          <Choice titleChoice={'Travail'} nb1={15} nb2={30} nb3={45} 
                choice1={() => { setWorkTime(15 * 60 * 1000); setSelectedWorkTime(15); }}
                choice2={() => { setWorkTime(30 * 60 * 1000); setSelectedWorkTime(30); }}
                choice3={() => { setWorkTime(45 * 60 * 1000); setSelectedWorkTime(45); }}
                style1={{ backgroundColor: selectedWorkTime === 15 ? 'white' : 'transparent' }}
        style2={{ backgroundColor: selectedWorkTime === 30 ? 'white' : 'transparent' }}
        style3={{ backgroundColor: selectedWorkTime === 45 ? 'white' : 'transparent' }}
          />
          <Choice titleChoice={'Repos'} nb1={5} nb2={10} nb3={15}
          choice1={() => {setBreakTime(5 * 60 * 1000); setSelectedBreakTime(5);}}
          choice2={() => {setBreakTime(10 * 60 * 1000); setSelectedBreakTime(10)}}
          choice3={() => {setBreakTime(15 * 60 * 1000); setSelectedBreakTime(15)}}
          style1={{ backgroundColor: selectedBreakTime === 5 ? 'white' : 'transparent' }}
        style2={{ backgroundColor: selectedBreakTime === 10 ? 'white' : 'transparent' }}
        style3={{ backgroundColor: selectedBreakTime === 15 ? 'white' : 'transparent' }}
          />
          <Choice titleChoice={'Répétitions'} nb1={1} nb2={2} nb3={3}
          choice1={() => {setNumberOfSessions(1);setSelectedSessions(1);}}
          choice2={() => {setNumberOfSessions(2);setSelectedSessions(2);}}
          choice3={() => {setNumberOfSessions(3);setSelectedSessions(3);}}
          style1={{ backgroundColor: selectedSessions === 1 ? 'white' : 'transparent' }}
        style2={{ backgroundColor: selectedSessions === 2 ? 'white' : 'transparent' }}
        style3={{ backgroundColor: selectedSessions === 3 ? 'white' : 'transparent' }}
          />
        </View>
        <View style={styles.viewSessionContainer}>
            <Text style={styles.textSession}>Votre session</Text>
            <View style={styles.viewSession}>
              <Text style={styles.textViewSession}>Travail : {workTime ? `${workTime / (60 * 1000)} minutes` : "Aucun travail"} </Text>
              <Text style={styles.textViewSession}>Repos : {breakTime ? `${breakTime / (60 * 1000)} minutes` : "Aucun repos"} </Text>
              <Text style={styles.textViewSession}>Répétitions : {numberOfSessions ? `${numberOfSessions } répétition(s)` : "Aucune répétiton"} </Text>
            </View>
            <Pressable onPress={resetSession} >
              <FontAwesome6 name="arrow-rotate-left" size={30} color="#FFBA18" style={{textAlign:'center', marginTop: window.width >400 ? 50 : 20 }}/>
            </Pressable>
      </View>
      <View style={styles.startSessionContainer}>
            <Pressable onPress={goToPomodoro}>
              <Text style={{color :'#FFBA18', fontSize : 18}}><AntDesign name="playcircleo" size={60} color="#FFBA18" /></Text>
            </Pressable>
        </View>
    </View>
  )
}
const window = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#1F2D5C',
        alignItems : 'center',
        justifyContent : 'center'
    },
    choiceContainer :{
        backgroundColor : '#1F2D5C',
        height : '45%',
        alignItems : 'center',
        justifyContent : 'center'
    },
    viewSessionContainer:{
      height : '30%',
      width : '80%',
      borderRadius : 30,
      borderColor : "#FFBA18",
      borderWidth : 3,
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
      marginTop : 50,
    },
    returnContainer :{
      position : 'absolute',
      left : "10%",
      top : '5%'
  },
  selected: {
    backgroundColor: 'white', // Fond blanc pour le choix sélectionné
  },
  });