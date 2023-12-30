import React, {useRef, useEffect} from 'react';
import {View, Animated, FlatList, StyleSheet, Text} from 'react-native';
import {COLORS, SIZES} from '../resources';

const AnimatedDots = ({
  data,
  activeIndex,
  dotSize = 10,
  onIndexChanged,
}: any) => {
  const dotOpacity = useRef(data.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = dotOpacity.map((opacity, index) => {
      return Animated.timing(opacity, {
        toValue: index === activeIndex ? 1 : 0.5,
        duration: 300,
        useNativeDriver: false,
      });
    });

    Animated.stagger(100, animations).start();
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      {dotOpacity.map((opacity, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            {
              width: dotSize,
              height: dotSize,
              opacity,
            },
            {
              height: index == activeIndex ? 15 : 10,
              width: index == activeIndex ? 15 : 10,
              borderRadius: index == activeIndex ? 15 : 10,
              backgroundColor:
                index == activeIndex ? COLORS.primary : COLORS.lightGray,
              margin: 5,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default AnimatedDots;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    borderRadius: 20,
    backgroundColor: '#5E56E7',
    marginHorizontal: 5,
  },
});
