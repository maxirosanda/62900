import { View,Text, StyleSheet } from "react-native"

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.contenedorPartes}>
        <View style={styles.parteUno}>
          <Text style={styles.text}>Parte 1</Text>
        </View>
        <View style={styles.parteDos}>
          <Text style={styles.text}>parte 2</Text>
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"red",
    width:"100%",
    flex:1,
    justifyContent:"center"
  },
  text:{
    fontSize:24,
    color:"white",
    fontWeight:"bold"
  },
  contenedorPartes:{
    backgroundColor:"yellow",
    width:"80%",
    marginHorizontal:"10%",
    flexDirection:"row",
    justifyContent:"space-around"
  },
  parteUno:{
    backgroundColor:"blue",
    //width:"40%",
    padding:20,
    margin:10,
    alignItems:"center",
    justifyContent:"center",
    flex:1
  },
  parteDos:{
    backgroundColor:"green",
    //width:"40%",
    padding:30,
    margin:10,
    alignItems:"center",
    flex:1
  }

})

