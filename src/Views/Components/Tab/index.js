import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Buttons from '../Buttons';
import { belliconImage, carticonImage, exploreiconImage, homeiconImage, myaccountImage, redaccounticonImage } from '../../../Assets/Images';

const tabs = {
  tabs: [
    {
      title: 'Home',
      icon: homeiconImage,
      tab: {
        title: 'Home',
        icon: homeiconImage,
      },
    },
    {
      title: 'Explore',
      icon: exploreiconImage,
      tab: {
        title: 'Explore',
        icon: exploreiconImage,
      },
    },
    {
      title: 'MyCart',
      icon: carticonImage,
      tab: {
        title: 'MyCart',
        icon: carticonImage,
      },
    },
    {
      title: 'Notification',
      icon: belliconImage,
      tab: {
        title: 'Notification',
        icon: belliconImage,
      },
    },
    {
      title: 'Account',
      icon: myaccountImage,
      tab: {
        title: 'Account',
        icon: redaccounticonImage,
      },
    },
  ],
};

const Tab = ({focused}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          padding: 2,
        }}>
        {tabs.tabs.map((tab, index) => {
          return (
            <Buttons
              key={index}
              source={tab.icon}
              style={[
                focused == tab.tab.title && {backgroundColor: 'white'},
                {height: 80, width: 95, padding: 10, borderColor: 'white'},
              ]}
              textStyle={focused == tab.title && {color: 'red'}}
              name={tab.title}
              onPress={() => {
                navigation.navigate(tab.title);
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
});
