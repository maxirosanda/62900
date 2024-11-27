import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {View, StyleSheet} from 'react-native'
import uuid from 'react-native-uuid'
import ModalDelete from './src/components/ModalDelete'
import ContainerAddItem from './src/components/ContainerAddItem'
import ListItems from './src/components/ListItems'

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
      <ContainerAddItem
        addItem={addItem}
        errorInput={errorInput}
        newValueItem={newValueItem}
        handlerOnChangeItem={handlerOnChangeItem}
      />
    <ListItems
      items={items}
      onHandlerModal={onHandlerModal}
    />
    <ModalDelete 
      onHandlerModal={onHandlerModal}
      onHandlerDelete={onHandlerDelete} 
      modalVisible={modalVisible}
      itemSelected={itemSelected}
    />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    marginTop:24,
    flex:1
  }
})