import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Todo from './Todo';

import data from '../../data';

const List = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Todo list={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 275,
    paddingLeft: 32,
  },
});

export default List;
