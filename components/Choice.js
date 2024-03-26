import { View, Text, StyleSheet, Pressable } from 'react-native'
export default function Choice({nb1, nb2, nb3, titleChoice, choice1, choice2, choice3}) {
  return (
    <View>
        <Text>{titleChoice}</Text>
      <View style={styles.choiceTime}>
          <Pressable style={styles.containerTime} onPress={choice1}>
            <Text>{nb1}</Text>
          </Pressable>
          <Pressable style={styles.containerTime} onPress={choice2}>
            <Text>{nb2}</Text>
          </Pressable>
          <Pressable style={styles.containerTime} onPress={choice3}>
            <Text>{nb3}</Text>
          </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    choiceTime:{
        width : '60%',
        height : 35,
        backgroundColor : '#ACD8FC',
        flexDirection : 'row',
        justifyContent :'space-around',
        borderRadius : 15,
      },
      containerTime : {
        width : '15%',
        borderRadius : 50,
        backgroundColor : '#94CE9A',
        justifyContent : 'center',
        alignItems : 'center'
      }
  });
  