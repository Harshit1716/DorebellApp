import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS, ICONS} from '../resources';
import {FONTS} from '../resources';

const CustomButton = (props: any) => {
  const filledBgColor = props.color || COLORS.primary;
  const outlinedColor = COLORS.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const borderColor = props.borderColor ? props.borderColor : outlinedColor;
  const textColor = props.filled ? COLORS.white : COLORS.primary;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{backgroundColor: bgColor, borderColor: borderColor},
        ...props.style,
        flexDirection: 'row',
      }}
      onPress={props.onPress}>
      {props.leftImage && (
        <Image
          resizeMode="contain"
          style={{
            height: 24,
            width: 24,
            marginRight: 10,
            tintColor: COLORS.white,
          }}
          source={props.leftImage}
        />
      )}
      <Text style={{...FONTS.h4, ...{color: textColor}}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,

    borderWidth: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CustomButton;
