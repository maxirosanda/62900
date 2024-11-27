import { StyleSheet,FlatList} from 'react-native'
import ItemList from './ItemList'

const ListItems = ({items,onHandlerModal}) => {

  return (
        <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item})=>{
            return (
                <ItemList item={item} onHandlerModal={onHandlerModal}/>
            )
        }}
    />
  )
}

export default ListItems

const styles = StyleSheet.create({})