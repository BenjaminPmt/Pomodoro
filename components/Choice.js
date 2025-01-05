import { View, Text, StyleSheet, Pressable, TouchableHighlight } from 'react-native'
import { useState } from 'react';
export default function Choice({nb1, nb2, nb3, titleChoice, choice1, choice2, choice3, style1, style2, style3}) {
  const [pressed, setPressed] = useState(null);



  return (
    <View>
        <Text style={styles.titleChoice}>{titleChoice}</Text>
      <View style={styles.choiceContainer}>
          <Pressable style={[styles.containerTime, style1]} onPress={choice1} >
            <Text style={styles.text}>{nb1}</Text>
          </Pressable>
          <Pressable style={[styles.containerTime, style2]} onPress={choice2}>
            <Text style={styles.text}>{nb2}</Text>
          </Pressable>
          <Pressable style={[styles.containerTime, style3]} onPress={choice3}>
            <Text style={styles.text} >{nb3}</Text>
          </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    choiceContainer:{
        width : '60%',
        height : 35,
        flexDirection : 'row',
        justifyContent :'space-between',
        borderRadius : 15,
      },
      containerTime : {
        height : 75,
        width : 75,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        borderColor : '#FFBA18',
        borderWidth : 2,
      },
      titleChoice :{
        fontSize : 18,
        fontWeight : '700',
        marginTop : 20,
        marginBottom : 10,
        color : '#FFBA18',
      },
      text : {
        color : '#FFBA18',
        fontSize : 30,
      },
      selected: {
        backgroundColor: 'white', // Fond blanc pour le choix sélectionné
      },
  });
  