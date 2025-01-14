import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
import cart from '../data/cart.json'
import CardCartProduct from '../components/CardCartProduct'
import { colors } from '../globals/colors'
import Counter from '../components/Counter'
import { usePostOrdersMutation } from '../services/orders'
import { useSelector } from 'react-redux'
import { useGetCartQuery } from '../services/cart'
import { object } from 'yup'
import { useEffect, useState } from 'react'

const Cart = () => {

  const [triggerPost] = usePostOrdersMutation()
  const localId = useSelector(state => state.user.localId)
  const {data:cart} = useGetCartQuery({localId})
  const [total,setTotal] = useState(0)

  useEffect(()=>{
    if(cart){
      setTotal(cart.reduce((acc,item) => acc + item.price * item.quantity ,0 ))
    }
  },[cart])


  const confirmCart = () => {
    triggerPost({id:"2",products:[{id:"2"}],total:120})
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CardCartProduct product = {item}/>}
      />
      <View style={styles.containerTotal}>
        <Text style={styles.text}>Total: {total} $ ARG </Text>
        <Pressable style={styles.button} onPress={confirmCart}>
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