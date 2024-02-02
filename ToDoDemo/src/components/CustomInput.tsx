import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, ICONS} from '../resources';

interface CustomTextProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  password?: boolean;
  style: any;
  keyboardType: KeyboardTypeOptions;
}
const CustomTextInput = (props: CustomTextProps) => {
  const [hideText, setHideText] = useState(true);
  return (
    <View style={[styles.input, props.style]}>
      <TextInput
        style={[styles.textContainer]}
        placeholderTextColor={COLORS.darkGray}
        placeholder={props.placeholder}
        secureTextEntry={(props?.password ?? false) && hideText}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}></TextInput>
      {props?.password && (
        <TouchableOpacity
          onPress={() => {
            setHideText(!hideText);
          }}>
          <Image
            source={
              !hideText ? ICONS.PASSWORD_HIDE_ICON : ICONS.PASSWORD_SHOW_ICON
            }
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    marginVertical: 5,
    width: '100%',
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  textContainer: {flex: 1, height: 60, color: 'black'},
});

export default CustomTextInput;
