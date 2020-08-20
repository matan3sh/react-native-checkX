import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AppList from '../app/AppList';

import colors from '../../config/Colors';

const Todo = ({ list }) => {
  const [openListModal, setOpenListModal] = useState(false);

  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remaningCount = list.todos.length - completedCount;

  const toggleListModal = () => setOpenListModal(!openListModal);

  return (
    <View>
      <AppList
        toggleListModal={toggleListModal}
        openListModal={openListModal}
        list={list}
        completedCount={completedCount}
      />
      <TouchableOpacity
        style={[styles.container, { backgroundColor: list.color }]}
        onPress={toggleListModal}
      >
        <Text style={styles.listTitle} numberOfLines={1}>
          {list.name}
        </Text>
        <View>
          <View style={styles.center}>
            <Text style={styles.count}>{remaningCount}</Text>
            <Text style={styles.subtitle}>Remaining</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.count}>{completedCount}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 18,
  },
  center: {
    alignItems: 'center',
  },
  count: {
    fontSize: 48,
    fontWeight: '200',
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,
  },
});

export default Todo;
