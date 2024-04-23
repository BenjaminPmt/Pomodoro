import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';



export default function Home({navigation}) {

  return (
    
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{color : '#FFBA18',  fontSize : 25, fontWeight : "700"}}>Concentration</Text>
        <Text style={{color :'#FFBA18', fontSize : 18}}>Ne laissez personne vous distraire</Text>
      </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => navigation.navigate("ChoiceTime")}>
          <Text style={{color :'#FFBA18', fontSize : 18}}>Commencer un Pomodoro</Text>
          </Pressable>
        </View>
        <View style={styles.infoContainer}>
          <Pressable onPress={() => navigation.navigate("Information")}>
            <Ionicons name="information-circle-outline" size={28} color="#FFBA18" />
          </Pressable>
        </View>
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
  infoContainer :{
    bottom : '5%',
    position : "absolute"
  }
});