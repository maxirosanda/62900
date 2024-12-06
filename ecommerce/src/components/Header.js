import { StyleSheet, Text, View ,useWindowDimensions  } from 'react-native'
import { useEffect,useState } from 'react'
import { colors } from '../globals/colors'

const Header = ({title}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:50,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        color:colors.lightGray,
        fontSize:16,
        fontFamily:"josefin"
    }
})