import { View, Text, StyleSheet, Pressable } from 'react-native'
export default function Choice({nb1, nb2, nb3, titleChoice, choice1, choice2, choice3}) {
  return (
    <View>
        <Text style={styles.titleChoice}>{titleChoice}</Text>
      <View style={styles.choiceContainer}>
          <Pressable style={styles.containerTime} onPress={choice1}>
            <Text style={styles.text}>{nb1}</Text>
          </Pressable>
          <Pressable style={styles.containerTime} onPress={choice2}>
            <Text style={styles.text}>{nb2}</Text>
          </Pressable>
          <Pressable style={styles.containerTime} onPress={choice3}>
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
        width : '15%',
        borderRadius : 50,
        backgroundColor : 'white',
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
        color : '#1F2D5C',
      }
  });
  