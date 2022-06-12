import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../../utils';

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
  const [border, setBorder] = useState(color.border);
  const onFocusForm = () => {
    setBorder(color.tertiary);
  };
  const onBlurForm = () => {
    setBorder(color.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: color.text.secondary,
    marginBottom: 6,
    // fontFamily
  },
});
