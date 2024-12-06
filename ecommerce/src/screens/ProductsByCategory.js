import { FlatList, Pressable, StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import products from '../data/products.json'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import CardProduct from '../components/CardProduct'


const ProductsByCategory = ({category}) => {

  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")
  const [portrait,setPortrait] = useState(false)
  const {width,height} = useWindowDimensions()

  useEffect(()=>{
    if(width > height){
      setPortrait(false)
    } else{
      setPortrait(true)
    }
  },[width,height])

  useEffect(()=>{
    if(keyword){
      return setProductsFiltered(products.filter(
        product => product.category === category 
        && product.title.includes(keyword)))
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

const styles = StyleSheet.create({

})