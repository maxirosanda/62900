import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import ProductsByCategory from './src/screens/ProductsByCategory'
import ProductDetail from './src/screens/ProductDetail'
import { colors } from './src/globals/colors'

export default function App() {

  const product = {
    id: 0,
    title: "Crystal chandelier maria theresa for 12 light",
    description: "Crystal chandelier maria theresa for 12 light",
    price: 47,
    discountPercentage: 16,
    rating: 4.74,
    stock: 133,
    brand: "YIOSI",
    category: "lighting",
    thumbnail: "https://i.dummyjson.com/data/products/100/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/100/1.jpg",
      "https://i.dummyjson.com/data/products/100/2.jpg",
      "https://i.dummyjson.com/data/products/100/3.jpg",
      "https://i.dummyjson.com/data/products/100/thumbnail.jpg"
    ]
}

  return (
    <>
      <Home/>
      <StatusBar style="light" backgroundColor={colors.primary}/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
