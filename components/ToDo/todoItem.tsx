import { useToDos } from '@/hooks/useToDos'
import { FontAwesomeFreeSolid } from "@react-native-vector-icons/fontawesome-free-solid"
import { FlatList, Pressable, StyleSheet } from 'react-native'
import { ThemedText } from '../themed-text'
import { ThemedView } from '../themed-view'

const ToDoItem = () => {
  const {todos, deleteToDo, checkToDo} = useToDos()
  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={todos}
        ListEmptyComponent={
            <ThemedText style={styles.emptyList}>
              No tasks yet
            </ThemedText>
        }
        keyExtractor={(item)=> item.$id}
        renderItem={({item}) => (
          <ThemedView style={styles.row}>
            <Pressable onPress={() => checkToDo(item.$id, !item.check)} style={styles.button}>
              <FontAwesomeFreeSolid
                size={20}
                color="#7c7c7c"
                name={item.check ? "square-check" : "square"}
              />
            </Pressable>
            <ThemedText style={ item.check ? [styles.taskChecked, styles.task] : styles.task}>
              {item.todo}
            </ThemedText>
            <Pressable onPress={() => deleteToDo(item.$id)} style={styles.button}>
              <FontAwesomeFreeSolid
                size={20}
                color="#7c7c7c"
                name="close"
              />
            </Pressable>
          </ThemedView>
        )}
      />
    </ThemedView>
  )
}

export default ToDoItem

const styles = StyleSheet.create({
  container: {
    borderColor: '#7c7c7c', 
    borderWidth: 1, 
    borderRadius: 6, 
    flex:1
  },
  button: {
    padding: 16,
    marginVertical: 10,
  },
  task: {
    flex: 1,
    fontSize: 16,
    marginVertical: 16,
  },
  taskChecked: {
    textDecorationLine: 'line-through',
    color: '#7c7c7c'
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    borderBottomWidth: 1,
    borderColor: '#7c7c7c',
    marginHorizontal: 10,
  },
  emptyList: {
    textAlign: 'center',
    marginTop: 20,
  },
})