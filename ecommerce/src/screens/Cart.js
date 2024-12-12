import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
import cart from '../data/cart.json'
import CardCartProduct from '../components/CardCartProduct'
import { colors } from '../globals/colors'

const Cart = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cart.products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CardCartProduct product = {item}/>}
      />
      <View style={styles.containerTotal}>
        <Text style={styles.text}>Total: {cart.total}$ ARG </Text>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Finalizar Compra</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:"relative"
    },
    containerTotal:{
        width:"100%",
        backgroundColor:colors.accent,
        flexDirection:"row",
        padding:15,
        justifyContent:"space-around",
        alignItems:"center",
        position:"absolute",
        bottom:0
    },
    text:{
        color:colors.lightGray,
        fontSize:16
    },
    button:{
        backgroundColor:colors.primary,
        padding:10,
        borderRadius:5
    },
    buttonText:{
        color:colors.lightGray
    }
})