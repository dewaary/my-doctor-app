import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChatItem, Header, InputChat, ListDoctor} from '../../components';
import {color} from '../../utils';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        type={'dark-profile'}
        title={'Kadek Devi'}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.chatDate}>Senin, 21 Maret, 2022</Text>
      <View style={styles.content}>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    color: color.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});
