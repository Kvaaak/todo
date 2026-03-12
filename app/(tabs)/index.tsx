import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import AddToDoInput from '@/components/ToDo/addToDoInput';
import ToDoItem from '@/components/ToDo/todoItem';


export default function TaskScreen() {
  return (
    <ThemedView style={{flex: 1}}>
      <AddToDoInput/>
      <ThemedView style={styles.list}>
        <ToDoItem/>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 10,
  },
});
