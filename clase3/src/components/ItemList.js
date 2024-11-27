import { StyleSheet, Text, View } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const ItemList = ({item,onHandlerModal}) => {
  return (
    <View style={styles.container} key={item.id}>
        <Text style={styles.text}>{item.value}</Text>
        <ButtonPrimary text="-" onPress={()=> onHandlerModal(item)}/>
    </View>
  )
}

export default ItemList

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor:"#F4012D",
        marginHorizontal:"10%",
        marginVertical:20,
        padding:15,
        borderRadius:6,
        alignItems:"center",
        flexDirection:"row"
      },
      text:{
        color:"white",
        flex:1,
        textAlign:"center"
      }
})