import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import products from '../data/products.json'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import CardProduct from '../components/CardProduct'


const ProductsByCategory = ({category}) => {

  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  useEffect(()=>{
    setProductsFiltered(products.filter(product => product.category === category))
  },[])

  useEffect(()=>{
    if(keyword){
      return setProductsFiltered(productsFiltered.filter(product => product.title.includes(keyword)))
    }
    setProductsFiltered(products.filter(product => product.category === category))
  },[keyword])



  return (
    <View>
      <Header title={category}/>
      <Search  onChangeKeyword ={(t)=> setKeyword(t)}/>
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({item})=> (<CardProduct product={item}/>)}
      />
    </View>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})