import { StyleSheet } from 'react-native';

import AddToDoInput from '@/components/addToDoInput';
import { ThemedView } from '@/components/themed-view';
import ToDoItem from '@/components/todoItem';


export default function HomeScreen() {
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
