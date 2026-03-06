import { Keyboard, Pressable, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import { useToDos } from '../hooks/useToDos';

const AddToDoInput = () => {
  const [todo, setTodo] = useState('')
  const [check, setCheck] = useState(false)

  const {createToDo} = useToDos()

  console.log(todo)

  const handleSubmit = async () => {
    if (!todo.trim()) return
    await createToDo({todo, check})

    setTodo("")
    Keyboard.dismiss()
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView>
        <TextInput 
          style={styles.input}
          value={todo}
          placeholder= 'Enter new task...'
          onChangeText={setTodo}
        />

        <Pressable onPress={handleSubmit} style={styles.button}>
          <ThemedText>
            Add
          </ThemedText>
        </Pressable>
          
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default AddToDoInput

const styles = StyleSheet.create({
  input: {
    padding: 20,
    backgroundColor: '#7c7c7c',
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
    marginVertical: 10,
  },
  button: {
    padding: 15,    
    backgroundColor:'#7c7c7c',
    borderRadius: 6, 
    marginHorizontal: 140,
    alignItems: 'center'
  },
});
