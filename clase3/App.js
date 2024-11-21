import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {Pressable, TextInput, View, Text, StyleSheet, FlatList, Modal} from 'react-native'
import uuid from 'react-native-uuid'

const App = () => {

  const [newValueItem,setNewValueItem] = useState("")
  const [errorInput,setErrorInput] = useState("")
  const [items,setItems] = useState([])
  const [itemSelected,setItemselected] = useState({})
  const [modalVisible,setModalVisible]= useState(false)

  const addItem = () => {
    if(newValueItem == ""){
      setErrorInput("Campo requerido")
      return
    }
    const item = {
      id:uuid.v4(),
      value:newValueItem
    }
    setItems(currentItems => [...currentItems,item])
    setNewValueItem("")
  }

  const handlerOnChangeItem = (text) => {
    setErrorInput("")
    setNewValueItem(text)
  }

  const onHandlerModal = (item) => {
    setItemselected(item)
    setModalVisible(!modalVisible)
  }

  const onHandlerDelete = () => {
    setItems(currentItem => currentItem.filter(item => item.id != itemSelected.id) )
    setItemselected({})
    setModalVisible(false)
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerAdd}>
        <View style={styles.containerInput}>
          <TextInput 
            placeholderTextColor="white"
            value={newValueItem}
            onChangeText={handlerOnChangeItem} 
            style={styles.input} 
            placeholder='Ingrese item'
          />
          {<Text style={styles.error}>{errorInput ? errorInput : ""}</Text>}
        </View>
        <Pressable onPress={addItem} style={styles.button}>
          <Text style={styles.textButton}>+</Text>
        </Pressable>
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item})=>{
          return (
            <View style={styles.card} key={item.id}>
              <Text style={styles.textCard}>{item.value}</Text>
              <Pressable onPress={()=> onHandlerModal(item)} style={styles.button}>
                <Text style={styles.textButton}>-</Text>
              </Pressable>
            </View>
          )
        }}
      />
    <Modal 
      animationType='fade' 
      visible={modalVisible}
      transparent = {true}
      >
        <View style={styles.containerModal}>
          <View style={styles.contanierSign}>
            <Text style={styles.modalText}>Esta seguro que quiere eliminar el item: {itemSelected.value }?</Text>
            <View style={styles.containerButtons}>
              <Pressable style={styles.modalButton} onPress={onHandlerDelete}>
                <Text style={styles.modalButtonText}>Si</Text>
              </Pressable>
              <Pressable style={styles.modalButton} onPress={() => onHandlerModal({})}>
                <Text style={styles.modalButtonText}>NO</Text>
              </Pressable>
            </View>
          </View>
        </View>
    </Modal>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    marginTop:24,
    flex:1
  },
  containerAdd:{
    backgroundColor:"#F4012D",
    margin:10,
    padding: 10,
    borderRadius:8,
    flexDirection:"row",
    alignItems:"center"
  },
  containerInput:{
    flex:1
  },
  input:{
    borderBottomColor:"white",
    borderBottomWidth:2,
    margin:10,
    color:"white"
  },
  button:{
    backgroundColor:"white",
    width:40,
    height:40,
    padding:10,
    margin:5,
    borderRadius:3,
    alignItems:"center"
  },
  textButton:{
    color:"red",
    fontWeight:"bold"
  },
  card:{
    width:"80%",
    backgroundColor:"#F4012D",
    marginHorizontal:"10%",
    marginVertical:20,
    padding:15,
    borderRadius:6,
    alignItems:"center",
    flexDirection:"row"
  },
  textCard:{
    color:"white",
    flex:1,
    textAlign:"center"
  },
  error:{
    color:"white"
  },
  containerModal:{
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
  modalText:{
    fontSize:18,
    textAlign:"center"
  },
  containerButtons:{
    flexDirection:"row"
  },
  modalButton:{
    backgroundColor:"red",
    padding:20,
    borderRadius:3,
    margin:10,
    flex:1,
    alignItems:"center"
  },
  modalButtonText:{
    color:"white",
    fontWeight:"bold"
  }
  
})