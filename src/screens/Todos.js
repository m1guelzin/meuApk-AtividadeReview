import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import sheets from '../axios/axios';
import CardTodo from '../components/CardTodo';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [todosRes, usersRes] = await Promise.all([
          sheets.todos(),
          sheets.users()
        ]);
        const todosWithState = todosRes.data.map(todo => ({
          ...todo,
          completed: todo.completed,
        }));
        setTodos(todosWithState);
        setUsers(usersRes.data);
      } catch (err) {
        console.error('Erro ao carregar todos:', err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const toggleCompleted = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const renderItem = ({ item }) => {
    const user = users.find(u => u.id === item.userId);
    return (
      <CardTodo
        title={item.title}
        userName={user ? user.name : 'Desconhecido'}
        completed={item.completed}
        onToggle={() => toggleCompleted(item.id)}
      />
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#000" style={{ marginTop: 30 }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    paddingBottom: 20,
  },
});
