import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, fonts} from '../../../utils';
import fromMe from './IsMe';
import Other from './Other';
import IsMe from './IsMe';

const ChatItem = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;
