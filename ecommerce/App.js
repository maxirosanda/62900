import {StatusBar, StyleSheet, Text, useWindowDimensions, SafeAreaView,Platform } from 'react-native'
import Home from './src/screens/Home'
import ProductsByCategory from './src/screens/ProductsByCategory'
import ProductDetail from './src/screens/ProductDetail'
import { colors } from './src/globals/colors'
import { useFonts } from 'expo-font'
import { fonts } from './src/globals/fonts'
import { useEffect, useState } from 'react'

export default function App() {

  const [fontsLoaded] = useFonts(fonts)
  const [portrait,setPortrait] = useState(false)
  const {width,height} = useWindowDimensions()

  useEffect(()=>{
    if(width > height){
      setPortrait(false)
    } else{
      setPortrait(true)
    }
  },[width,height])

  if(!fontsLoaded){
    return null
  }
  
  const product = {
    id: 0,
    title: "Crystal chandelier maria theresa for 12 light",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 47,
    discountPercentage: 16,
    rating: 4.74,
    stock: 133,
    brand: "YIOSI",
    category: "lighting",
    thumbnail: "https://i.ibb.co/Ny45ydp/televisor-43-pulgadas.webp",
    images: [
      "https://i.dummyjson.com/data/products/100/1.jpg",
      "https://i.dummyjson.com/data/products/100/2.jpg",
      "https://i.dummyjson.com/data/products/100/3.jpg",
      "https://i.dummyjson.com/data/products/100/thumbnail.jpg"
    ]
}

  return (
    <SafeAreaView style={styles.container}>
            <ProductsByCategory category="womens-shoes"/>
            <StatusBar style="light" backgroundColor={colors.primary}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
})
