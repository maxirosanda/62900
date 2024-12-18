import { FlatList, StyleSheet, View} from 'react-native'
import products from '../data/products.json'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import CardProduct from '../components/CardProduct'
import { useSelector } from 'react-redux'


const ProductsByCategory = () => {

  const productsFilteredByCategory = useSelector(state => state.shop.productsFilteredByCategory)
  const [keyword,setKeyword] = useState("")
  const [products,setProducts] = useState(productsFilteredByCategory)


  useEffect(()=>{
 
    setProducts(productsFilteredByCategory.filter(product => product.title.includes(keyword)))

  },[keyword])



  return (
    <View>
      <Search  onChangeKeyword ={(t)=> setKeyword(t)}/>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> (<CardProduct product={item}/>)}
      />
    </View>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({

})