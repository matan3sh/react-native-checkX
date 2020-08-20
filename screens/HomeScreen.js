import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Logo from '../components/shared/Logo';
import AddButton from '../components/buttons/AddButton';
import List from '../components/home/List';
import AddListModal from '../components/home/AddListModal';

const HomeScreen = () => {
  const [openModal, setOpenModal] = useState(false);

  const onToggleModal = () => setOpenModal(!openModal);

  return (
    <View style={styles.container}>
      <AddListModal openModal={openModal} onToggleModal={onToggleModal} />
      <Logo />
      <AddButton onToggleModal={onToggleModal} />
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
