import { StyleSheet, Text, View } from 'react-native'
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
        marginTop:28,
        height:50,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        color:colors.lightGray,
        fontSize:20,
        fontFamily:"josefin"
    }
})