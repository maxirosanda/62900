import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import Header from '../components/Header'
import { colors } from '../globals/colors'

const ProductDetail = ({product}) => {
  return (
    <View style={styles.container}>
      <Header title={product.brand}/>
      <Image source={{uri:product.thumbnail}} style={styles.image} resizeMode='contain'/>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Precio: {product.price} $ ARG</Text>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Agregar al carrito</Text>
      </Pressable>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container:{
    gap:10
  },
  image:{
    width:"100%",
    height:200
  },
  title:{
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center",
    paddingVertical:20
  },
  description:{
    fontSize:14,
    padding:20,
    textAlign:"center"
  },
  price:{
    fontSize:20,
    fontWeight:"bold",
    paddingHorizontal:50,
    paddingVertical:20,
    textAlign:"right"
  },
  button:{
    backgroundColor:colors.accent,
    marginHorizontal:10,
    padding:10,
    alignItems:"center",
    borderRadius:6
  },
  textButton:{
    fontSize:20,
    color:colors.lightGray
  }
})