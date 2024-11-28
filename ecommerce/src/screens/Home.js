import {StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

const home = () => {

 
  return (
    <View>
      <Header title="Home"/>
      <Categories/>
    </View>
  )
}

export default home

const styles = StyleSheet.create({})