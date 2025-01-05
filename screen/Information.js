import { View, Text, StyleSheet, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Constants';

export default function Information({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.returnContainer}>
            <Pressable onPress={() => navigation.navigate("Home")}>
                <AntDesign name="arrowleft" size={32} color={Colors.BLUE} />
            </Pressable>
        </View>
            <Text style={styles.title}>Qu'est ce que la méthode Pomorodo ? </Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                La méthode Pomodoro est une technique de gestion du temps. Elle consiste à diviser le travail en périodes de concentration
                 de votre choix. La période la plus fréquente est de 25 minutes de concentration suivies de 5 minutes de pause. Cette méthode 
                 aide à améliorer la concentration et à éviter la fatigue, tout en permettant de suivre précisément le temps consacré à chaque tâche.
                </Text>
            </View>
            <View style={styles.socialContainer}>
                <AntDesign name="github" size={28} color={Colors.BLUE} />
                <Text style={{fontSize : 16, color :Colors.BLUE, fontWeight:'700', margin : 4, marginLeft :10}}>Benjamin Pmt</Text>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : Colors.BEIGE,
        alignItems : 'center',
    },
    returnContainer :{
        position : 'absolute',
        left : "10%",
        top : '5%'
    },
    title : {
        position : 'absolute',
        left : "5%",
        top : '15%',
        fontSize : 20,
        fontWeight : "700",
        color : Colors.BLUE,
    },
    textContainer : {
        width : '90%',
        position : 'absolute',
        top : "20%"
    },
    text:{
        fontSize : 16,
        color : Colors.BLUE,
        textAlign : 'justify',
        lineHeight : 24,
    },
    socialContainer : {
        position  : 'absolute',
        bottom : '5%',
        flexDirection : "row"
    }
  });