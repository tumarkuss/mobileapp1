import React from 'react';
import {View, StyleSheet, TextInput,Button} from 'react-native';

export const Primer = props => {
  return(
      <View style={styles.batton}>
      <Button onPress= {() => {
        alert('К сожалению доступных ресторанов сейчас нет');
      }}
      title="Рестораны"
      color='#000'
      />
      <Button onPress= {() => {
        alert('К сожалению доступных баров сейчас нет');
      }}
      title="Бары"
      color='#000'
      />
            <Button onPress= {() => {
        alert('К сожалению доступных пабов сейчас нет');
      }}
      title="Пабы"
      color='#000'
      />
    </View>
    )
}
const styles = StyleSheet.create({
  batton: {
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});