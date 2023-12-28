import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../resources';

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  style,
  ...rest
}: any) => {
  return (
    <TextInput
      placeholderTextColor={COLORS.gray}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    padding: 8,
    marginVertical: 5,
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default CustomTextInput;
