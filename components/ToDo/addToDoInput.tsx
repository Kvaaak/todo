import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useState } from 'react';
import { Keyboard, Pressable, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useToDos } from '../../hooks/useToDos';

const AddToDoInput = () => {
  const colorScheme = useColorScheme();
  const [todo, setTodo] = useState('')

  const {createToDo} = useToDos()

  const handleSubmit = async () => {
    if (!todo.trim()) return
    await createToDo({todo, check: false})

    setTodo('')
    Keyboard.dismiss()
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView>
        <TextInput 
          style={[styles.input, { color: Colors[colorScheme ?? 'light'].text }]}
          value={todo}
          placeholder= 'Enter new task...'
          placeholderTextColor='#8f8f8f'
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
    borderWidth: 1,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
    marginVertical: 10,
  },
  button: {
    padding: 15,    
    backgroundColor:'#aaa',
    borderRadius: 6, 
    marginHorizontal: 140,
    alignItems: 'center',
  },
});
