
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const FooterComp = (() => {
  return (
    <View style={{ marginTop: 5, marginBottom: 3 }}>
      <View style={styles.customview1}>
        <View style={{
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderBottomColor: 'blue',
          paddingBottom: 0,
        }}>
          <Image style={{ width: 20, height: 20 }} source={require('./images/setting.png')} />
          <Text style={styles.customtext1}>
            Personnaliser votre espace
            </Text>
        </View>
      </View>
      <View style={styles.customview2}>
        <Text style={styles.customtext2}>Français</Text>
        <Text style={styles.customtext3}> | English</Text>
      </View>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {

  },
  customview1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  customview2: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  customtext2: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2196F3',
    marginBottom: 3,
  },
  customtext1: {
    paddingLeft: 5,
    textAlign: 'center',
    color: '#4DD0E1',
  },
  customtext3: {
    textAlign: 'center',
    color: '#9E9E9E',
    marginBottom: 5,
  },
});

export { FooterComp };
