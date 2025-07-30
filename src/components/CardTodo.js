import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const CardTodo = ({ title, userName, completed, onToggle }) => {
  const cardColor = completed ? '#C8E6C9' : '#FFCDD2'; // verde claro ou vermelho claro
  const borderColor = completed ? '#4CAF50' : '#F44336'; // borda verde/vermelha
  const checkboxColor = completed ? '#4CAF50' : '#F44336';

  return (
    <View style={[styles.card, { backgroundColor: cardColor, borderColor }]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Checkbox
          value={completed}
          onValueChange={onToggle}
          color={checkboxColor}
        />
      </View>
      <Text style={styles.user}>Responsável: {userName}</Text>
    </View>
  );
};

export default CardTodo;

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    paddingRight: 10,
  },
  user: {
    fontSize: 16,
    marginTop: 8,
    color: 'black',
    fontWeight: '400'
  },
});
