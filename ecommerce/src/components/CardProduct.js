import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../globals/colors'

const CardProduct = ({product}) => {

    const {title,price,stock,thumbnail} = product
  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} source={{uri:thumbnail}} resizeMode='cover'/>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerText}>
            <Text style={styles.text}>Precio: {price} $ ARG</Text>
            <Text style={styles.text}>Stock: {stock}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default CardProduct

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        margin:10,
        borderRadius:5,
        padding:10,
        flexDirection:"row",
        gap:10,
        alignItems:"center"
    },
    image:{
        width:50,
        height:50
    },
    title:{
        color:colors.lightGray,
        fontSize:14,
        padding:5
    },
    containerText:{
        flexDirection:"row",
        gap:20,
        padding:10
    },
    text:{
        color:colors.lightGray,
        fontSize:12
    }
})