import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardUser = ({ name, email, companyName, zipcode }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>Email: {email}</Text>
      <Text style={styles.info}>Companhia: {companyName}</Text>
      <Text style={styles.info}>CEP: {zipcode}</Text>
    </View>
  );
};

export default CardUser;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#b1b1b1ff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  info: {
    fontSize: 15,
    color: '#333',
    marginBottom: 4,
  },
});
