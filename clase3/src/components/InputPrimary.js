import { StyleSheet, Text, View,TextInput } from 'react-native'


const InputPrimary = ({newValueItem,handlerOnChangeItem,errorInput}) => {


  return (
        <View style={styles.container}>
            <TextInput 
                placeholderTextColor="white"
                value={newValueItem}
                onChangeText={handlerOnChangeItem} 
                style={styles.input} 
                placeholder='Ingrese item'
            />
            {<Text style={styles.error}>{errorInput ? errorInput : ""}</Text>}
        </View>
  )
}

export default InputPrimary

const styles = StyleSheet.create({
    container:{
        flex:1
      },
      input:{
        borderBottomColor:"white",
        borderBottomWidth:2,
        margin:10,
        color:"white"
      },
      error:{
        color:"white"
      }
})