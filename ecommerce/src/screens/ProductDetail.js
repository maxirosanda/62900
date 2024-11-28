import { StyleSheet, Text, View } from 'react-native'

const ProductDetail = ({product}) => {
  return (
    <View>
      <Text>{product.title}</Text>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})