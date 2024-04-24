import { View, Text , Modal, StyleSheet, TouchableOpacity} from 'react-native'
export default function ModalOneBtn({titleHeader, textBodyModal, onPressBtn, visible, textBtn}) {
  return (
    <Modal
        visible={visible}
        animationType='slide'
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>{titleHeader}</Text>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.textBody}>{textBodyModal}</Text>
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity style={styles.modalPressable} onPress={onPressBtn}>
              <Text style={styles.btnText}>{textBtn}</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({

    modalContainer :{
      flex : 1,
      justifyContent: "center",
      alignItems : 'center',
      backgroundColor : "rgba(0,0,0,0.2)",
      
    },
    modalContent:{
      backgroundColor : 'white',
      width : '90%',
      height : 250,
      borderRadius : 15,
    },
    header:{
      width : '100%',
      height : 40,
      backgroundColor : '#1F2D5C',
      borderTopLeftRadius : 15,
      borderTopRightRadius : 15,
      justifyContent : 'center',
      alignItems : 'center'
    },
    textHeader :{
      color : '#FFBA18',
      fontSize : 20,
      fontWeight : '700',
    },
    modalBody :{
      flex : 1,
      width : '100%',
      justifyContent: 'center',
      alignItems : 'center',
    },
    textBody : {
      fontSize : 20,
      textAlign : 'center',
      color : '#FFBA18'
    },
    modalFooter: {
      width: '100%',
      height : 40,
      backgroundColor : '#1F2D5C',
      borderBottomLeftRadius : 15,
      borderBottomRightRadius : 15,
      flexDirection : "row",
      justifyContent : 'space-around',
      alignItems : 'center'
    },
    separateBtn:{
      width : 3,
      height : 20,
      backgroundColor : 'white'
    },
    btnText: {
      fontSize : 20,
      color: '#FFBA18',
      fontWeight :'700',
      textAlign :'center'
    }
   
  });