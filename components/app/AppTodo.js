import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/Colors';

const AppTodo = ({ todo }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons
          name={todo.completed ? 'ios-square' : 'ios-square-outline'}
          size={24}
          color={colors.grey}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.todo,
          {
            color: todo.completed ? colors.grey : colors.black,
            textDecorationLine: todo.completed ? 'line-through' : 'none',
          },
        ]}
      >
        {todo.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
  },
  todo: {
    color: colors.black,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default AppTodo;
