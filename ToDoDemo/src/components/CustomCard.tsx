import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const CustomCard = ({imageSource, title, description, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: '5%',
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#3912741A',
          borderRadius: 20,
          margin: 20,
          flexDirection: 'row',
          // shadowColor: '#3912741A',
          // shadowOffset: {
          //   width: 0,
          //   height: 1,
          // },
          // shadowOpacity: 1.22,
          // shadowRadius: 2.22,
          // elevation: 3,
          backgroundColor: '#ffffff',
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 2},
          shadowOpacity: 0.4,
          shadowRadius: 3,
        }}>
        <Image
          style={{height: 50, width: 50, marginRight: '5%'}}
          resizeMode="contain"
          source={imageSource}
        />
        <View style={{width: '80%'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>
            {title}
          </Text>
          <Text style={{fontSize: 14}}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCard;
