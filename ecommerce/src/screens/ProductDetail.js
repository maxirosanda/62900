import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'

const ProductDetail = ({product}) => {
  return (
    <View>
      <Header title={product.title}/>
      <Text>{product.title}</Text>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})