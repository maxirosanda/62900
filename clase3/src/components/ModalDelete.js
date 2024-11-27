import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'

const ModalDelete = ({onHandlerModal,onHandlerDelete,modalVisible,itemSelected}) => {

    
  return (
    <Modal 
    animationType='fade' 
    visible={modalVisible}
    transparent = {true}
    >
        <View style={styles.container}>
            <View style={styles.contanierSign}>
            <Text style={styles.text}>Esta seguro que quiere eliminar el item: {itemSelected.value }?</Text>
            <View style={styles.containerButtons}>
                <Pressable style={styles.button} onPress={onHandlerDelete}>
                <Text style={styles.buttonText}>Si</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => onHandlerModal({})}>
                <Text style={styles.buttonText}>NO</Text>
                </Pressable>
            </View>
            </View>
        </View>
    </Modal>
  )
}

export default ModalDelete

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(0,0,0,0.8)",
        flex:1,
        justifyContent:"center"
      },
      contanierSign:{
        width:"80%",
        marginHorizontal:"10%",
        backgroundColor:"white",
        padding:30,
        borderRadius:8,
        gap:10
      },
      text:{
        fontSize:18,
        textAlign:"center"
      },
      containerButtons:{
        flexDirection:"row"
      },
      button:{
        backgroundColor:"red",
        padding:20,
        borderRadius:3,
        margin:10,
        flex:1,
        alignItems:"center"
      },
      buttonText:{
        color:"white",
        fontWeight:"bold"
      }
})