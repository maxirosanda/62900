import { StyleSheet, Text, View, TextInput,Pressable } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import InputPrimary from './InputPrimary'

const ContainerAddItem = ({addItem,newValueItem,handlerOnChangeItem,errorInput}) => {
  return (
        <View style={styles.container}>
            <InputPrimary 
                newValueItem={newValueItem}
                handlerOnChangeItem={handlerOnChangeItem}
                errorInput={errorInput}
            />
            <ButtonPrimary text="+" onPress={addItem}/>
    </View>
  )
}

export default ContainerAddItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F4012D",
        margin:10,
        padding: 10,
        borderRadius:8,
        flexDirection:"row",
        alignItems:"center"
      }
})