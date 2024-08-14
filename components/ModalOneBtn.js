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
          <View style={styles.modalBody}>
            <Text style={styles.textBody}>{textBodyModal}</Text>
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
      backgroundColor : "rgba(0,0,0,0.6)",
    },
    modalContent:{
      backgroundColor : '#1F2D5C',
      width : '90%',
      height : 200,
      borderRadius : 15,
      borderWidth : 2,
      borderColor : '#FFBA18'
    },
    modalBody :{
      flex : 1,
      width : '100%',
      paddingTop : 20,
      paddingHorizontal : 20
      // justifyContent: 'center',
      // alignItems : 'center',
    },
    textBody : {
      fontSize : 24,
      textAlign : 'justify',
      color : '#FFBA18'
    },
    btnText: {
      fontSize : 20,
      color: '#FFBA18',
      fontWeight :'700',
      textAlign :'center'
    },
    modalPressable : {
      position : 'absolute',
      top : 150,
      right : 50,

    }
   
  });