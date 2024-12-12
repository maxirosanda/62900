import { StatusBar } from 'react-native'
import { colors } from './src/globals/colors'
import { useFonts } from 'expo-font'
import { fonts } from './src/globals/fonts'
import Navigator from './src/navigation/Navigator'


export default function App() {

  
  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded){
    return null
  }
  
  return (
    <>
      <Navigator/>
      <StatusBar style="light" backgroundColor={colors.accent}/>
    </>
  )
}

