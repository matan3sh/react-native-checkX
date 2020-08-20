import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../../config/Colors';

const AddButton = ({ onToggleModal }) => {
  return (
    <View style={styles.body}>
      <TouchableOpacity style={styles.addList} onPress={() => onToggleModal()}>
        <AntDesign name='plus' size={16} color={colors.blue} />
      </TouchableOpacity>
      <Text style={styles.add}>Add List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    marginVertical: 48,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: colors.blue,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
  },
});

export default AddButton;
