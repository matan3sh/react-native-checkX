import React from 'react';
import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AppTodo from './AppTodo';
import colors from '../../config/Colors';

const AppList = ({ openListModal, toggleListModal, list, completedCount }) => {
  return (
    <Modal
      animationType='slide'
      visible={openListModal}
      onRequestClose={() => toggleListModal()}
    >
      <SafeAreaView>
        <TouchableOpacity
          style={styles.close}
          onPress={() => toggleListModal()}
        >
          <AntDesign name='close' size={24} color={colors.black} />
        </TouchableOpacity>
        <View style={[styles.header, { borderBottomColor: list.color }]}>
          <View>
            <Text style={styles.title}>{list.name}</Text>
            <Text style={styles.taskCount}>
              {completedCount} of {list.todos.length}
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={[styles.section, { flex: 3 }]}>
        <FlatList
          data={list.todos}
          renderItem={({ item }) => <AppTodo todo={item} />}
          keyExtractor={(item) => item.title}
          contentContainerStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <KeyboardAvoidingView
        style={[styles.section, styles.footer]}
        behavior='padding'
      >
        <TextInput style={[styles.input, { borderColor: list.color }]} />
        <TouchableOpacity
          style={[styles.addTodo, { backgroundColor: list.color }]}
        >
          <AntDesign name='plus' size={16} color={colors.white} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    top: 64,
    right: 32,
    zIndex: 100,
  },
  section: {
    flex: 1,
    alignSelf: 'stretch',
  },
  title: {
    fontWeight: '800',
    fontSize: 30,
    color: colors.black,
  },
  header: {
    justifyContent: 'flex-end',
    marginTop: 20,
    marginLeft: 24,
    borderBottomWidth: 3,
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.grey,
    fontWeight: '600',
  },
  flatListContainer: {
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  footer: {
    paddingHorizontal: 21,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppList;
