import {StyleSheet} from 'react-native'
import ShadowCard from './wrappers/ShadowCard'
import { colors } from '../globals/colors'
import TextPrimary from './TextPrimary'

const CardItemCategory = ({item}) => {

  return (
    <ShadowCard style={styles.container}>
        <TextPrimary style={styles.text}>{item}</TextPrimary>
    </ShadowCard>
  )
}

export default CardItemCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.accent,
        marginHorizontal:15,
        marginVertical:10,
        padding:15,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:7
    },
    text:{
        color:colors.lightGray
    }
})