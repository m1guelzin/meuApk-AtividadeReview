import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import sheets from '../axios/axios';
import CardPost from '../components/CardPost';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [postsRes, usersRes] = await Promise.all([
          sheets.posts(),
          sheets.users()
        ]);
        setPosts(postsRes.data);
        setUsers(usersRes.data);
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const renderItem = ({ item }) => {
    const user = users.find(u => u.id === item.userId);
    return (
      <CardPost
        title={item.title}
        body={item.body}
        userName={user ? user.name : 'Desconhecido'}
      />
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#000" style={{ marginTop: 30 }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
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
