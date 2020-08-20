import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../../config/Colors';
import data from '../../data';

const backgroundColors = [
  '#5CD859',
  '#24A6D9',
  '#595BD9',
  '#8022D9',
  '#D159D8',
  '#D85963',
  '#D88559',
];

const AddListModal = ({ openModal, onToggleModal }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState(backgroundColors[0]);

  const renderColors = () =>
    backgroundColors.map((color) => (
      <TouchableOpacity
        key={color}
        style={[styles.colorSelect, { backgroundColor: color }]}
        onPress={() => setColor(color)}
      />
    ));

  const onCreateTodo = () => {
    data.push({ name, color, todos: [] });
    setName('');
    onToggleModal();
  };

  return (
    <Modal
      animationType='slide'
      visible={openModal}
      onRequestClose={() => onToggleModal()}
    >
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <TouchableOpacity style={styles.close} onPress={() => onToggleModal()}>
          <AntDesign name='close' size={24} color={colors.black} />
        </TouchableOpacity>

        <View style={styles.innerContainer}>
          <Text style={styles.title}>Create Todo List</Text>
          <TextInput
            style={styles.input}
            placeholder='List Name?'
            onChangeText={(text) => setName(text)}
          />
          <View style={styles.colorContainer}>{renderColors()}</View>
          <TouchableOpacity
            style={[styles.create, { backgroundColor: color }]}
            onPress={onCreateTodo}
          >
            <Text style={styles.createText}>Create!</Text>
          </TouchableOpacity>
        </View>
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
  },
  innerContainer: {
    alignSelf: 'stretch',
    marginHorizontal: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.black,
    alignSelf: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createText: {
    color: colors.white,
    fontWeight: '600',
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});

export default AddListModal;
