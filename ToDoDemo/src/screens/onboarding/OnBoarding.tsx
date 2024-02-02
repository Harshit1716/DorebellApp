import {
  Animated,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {COLORS, FONTS, SIZES} from '../../resources';
import OnBoardingComponent from '../../components/OnBoardingComponents';
import AnimatedDots from '../../components/AnimatedDots';

const OnBoarding = ({navigation}: any) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  // component to show the dots at the bottom
  const btnComponent = () => {
    return (
      <View style={styles.dotContainer}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <View
              key={index + ''}
              style={{
                height: index == 3 ? 15 : 10,
                width: index == 3 ? 15 : 10,
                borderRadius: index == 3 ? 15 : 10,
                backgroundColor: index == 3 ? COLORS.primary : COLORS.lightGray,
                margin: 5,
              }}
            />
          );
        })}
      </View>
    );
  };
  const data = [
    {
      id: '1',
      title: 'Ring the Bell',
      dec: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti nisl
    tellus vestibulum dictum luctus cum habitasse augue. Convallis vitae,
    dictum justo, iaculis id. Cras a ac augue netus egestas semper varius
    facilisis id.`,
    },
    {
      id: '2',
      title: 'Ring the Bell',
      dec: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti nisl
    tellus vestibulum dictum luctus cum habitasse augue. Convallis vitae,
    dictum justo, iaculis id. Cras a ac augue netus egestas semper varius
    facilisis id.`,
    },
    {
      id: '3',
      title: 'Ring the Bell',
      dec: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti nisl
    tellus vestibulum dictum luctus cum habitasse augue. Convallis vitae,
    dictum justo, iaculis id. Cras a ac augue netus egestas semper varius
    facilisis id.`,
    },
    {
      id: '4',
      title: 'Ring the Bell',
      dec: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti nisl
    tellus vestibulum dictum luctus cum habitasse augue. Convallis vitae,
    dictum justo, iaculis id. Cras a ac augue netus egestas semper varius
    facilisis id.`,
    },
  ];

  const handleIndexChanged = index => {
    setActiveIndex(index);
  };

  return (
    // <ScrollView style={{height: SIZES.height, width: SIZES.width}}>
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View
            style={{
              marginTop: SIZES.height * 0.33,
              width: SIZES.width,
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.h1,
                textAlign: 'center',
                width: '70%',
                color: COLORS.black,
              }}>
              Ring the Bell
            </Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              potenti nisl tellus vestibulum dictum luctus cum habitasse augue.
              Convallis vitae, dictum justo, iaculis id. Cras a ac augue netus
              egestas semper varius facilisis id.
            </Text>
          </View>
        )}
        onMomentumScrollEnd={event => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width,
          );
          handleIndexChanged(newIndex);
        }}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: SIZES.height * 0.58,
          width: SIZES.width,
          flex: 1,
        }}>
        <View style={{}}>
          <AnimatedDots
            data={data}
            activeIndex={activeIndex}
            onIndexChanged={handleIndexChanged}
          />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.signInBtn}>
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={styles.registerBtn}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    height: SIZES.height,
    width: SIZES.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    ...FONTS.body4,
    textAlign: 'center',
    paddingHorizontal: '5%',
    color: COLORS.black,
    marginTop: 10,
  },
  btnContainer: {
    marginTop: '10%',
    borderRadius: 10,
    width: '90%',
    // height: '7%',
    height: 60,
    flexDirection: 'row',
    overflow: 'hidden',
    // backgroundColor: COLORS.black,
  },
  signInBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.mainBlack,
  },
  registerBtn: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  btnText: {
    textAlign: 'center',
    ...FONTS.h3,
    color: COLORS.white,
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: '7%',
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
