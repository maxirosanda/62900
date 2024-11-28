import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import products from '../data/products.json'
import { useEffect, useState } from 'react'
import Header from '../components/Header'


const ProductsByCategory = ({category}) => {

  const [productsFiltered,setProductsFiltered] = useState([])

  useEffect(()=>{
    setProductsFiltered(products.filter(product => product.category === category))
  },[])


  return (
    <View>
      <Header title={category}/>
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({item})=> (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Text>{item.stock}</Text>
            <Pressable>
              <Text>Carrito</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})