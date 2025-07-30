import { View, Text, StyleSheet } from 'react-native';

const CardPost = ({ title, body, userName }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.user}>Autor: {userName}</Text>
    </View>
  );
};

export default CardPost;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#b1b1b1ff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  body: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  user: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
    fontWeight: '500'
  },
});
