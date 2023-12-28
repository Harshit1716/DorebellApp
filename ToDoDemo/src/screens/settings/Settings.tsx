import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Switch,
  FlatList,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, ICONS, SIZES} from '../../resources';
import {FONTS} from '../../resources';
import Button from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomInput';
import CustomHeader from '../../components/CustomHeader';

const option = [
  {
    title: 'Do Not Disturb',
    desc: 'This Setting enables you to disable your Doorbell',
  },
  {
    title: 'Ringer Video',
    desc: 'TMany desktop publishing packages and web page editors now use Lorem Ipsum.',
  },
  {
    title: 'Show my Video',
    desc: 'This Setting enables your video feed for the Ringer',
  },
  {
    title: 'Show my Name',
    desc: 'This Setting enables you to show your name to the Ringer',
  },
  {
    title: 'Show my Photo',
    desc: 'This Setting enables you to show your photo to the Ringer',
  },
  {
    title: 'Show my Photo',
    desc: 'This Setting enables you to show your photo to the Ringer',
  },
  {
    title: 'Set your Range',
    desc: 'TThis sets the range of meters for the Ringer to ring your Doorbell',
  },
  {
    title: 'Integrations',
    desc: 'TMany desktop publishing packages and web page editors now use Lorem Ipsum as their default text',
  },
];
const Subscription = ({navigation}: any) => {
  const [distance, setDistance] = useState(500);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const FreeSubsCard = ({
    item,
    index,
  }: {
    item: {title: string; desc: string};
    index: number;
  }) => {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.lightGray,
          paddingVertical: '4%',
          borderRadius: 10,
          marginBottom: index == option.length - 1 ? 120 : 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{width: '75%'}}>
          <Text style={{...FONTS.h4, lineHeight: 20}}>{item.title}</Text>
          <Text style={{...FONTS.body5, color: COLORS.black}}>{item.desc}</Text>
        </View>
        {item.title != 'Set your Range' ? (
          <Switch
            trackColor={{false: COLORS.gray, true: COLORS.primary}}
            thumbColor={isEnabled ? COLORS.white : COLORS.white}
            ios_backgroundColor="#3e3e3e"
            style={{
              transform: [
                {scaleX: Platform.OS == 'ios' ? 0.7 : 1},
                {scaleY: Platform.OS == 'ios' ? 0.7 : 1},
              ],
            }}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        ) : (
          <View
            style={{
              marginLeft: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDistance(prev => prev + 10);
              }}>
              <Image style={{height: 20, width: 20}} source={ICONS.ADD_ICON} />
            </TouchableOpacity>
            <Text
              numberOfLines={1}
              style={{
                borderWidth: 1,
                marginVertical: 8,
                paddingHorizontal: '3%',
                borderRadius: 5,
                borderColor: COLORS.gray,
                color: COLORS.darkGray,
                maxWidth: 50,
              }}>
              {distance}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setDistance(prev => prev - 10);
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={ICONS.DECREASE_ICON}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={{flex: 1, marginHorizontal: 22}}>
        <View style={{marginBottom: '5%'}}>
          <Text style={styles.signInText}>Settigns</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={option}
          renderItem={FreeSubsCard}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerNowText: {
    marginLeft: 4,
    color: COLORS.primary,
    ...FONTS.bodySemi4,
  },
  noAccContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: '#FBFBFB',
  },
  signInText: {
    ...FONTS.h2,
    marginTop: 12,
    color: COLORS.black,
  },
  desText: {
    ...FONTS.body4,
    marginTop: 12,
    color: COLORS.black,
  },
});

export default Subscription;
