import { StyleSheet, Text,Pressable} from 'react-native'
import React from 'react'

const ButtonPrimary = ({text,onPress}) => {

  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:40,
        height:40,
        padding:10,
        margin:5,
        borderRadius:3,
        alignItems:"center"
      },
      text:{
        color:"red",
        fontWeight:"bold"
      },
})