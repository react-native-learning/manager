import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableNativeFeedback, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';
// import Header from './src/components/common/header/header';

export class ButtonWithIcon extends Component {
  render() {
    return (
      <TouchableNativeFeedback>
        <View style={styles.button_form}>
          <Image source={require('./images/date-picker.png')} style={styles.button_icon} />
          <Text style={styles.button_label}>{this.props.name}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export class ValueWithSmallType extends Component {
  render() {
    return (
      <View style={styles.type_value}>
        <Text style={styles.type}>{this.props.type}</Text>
        <Text style={styles.contain_text}>
          <Text style={styles.value}>{this.props.value}</Text>
          <Text style={styles.text_small}> {this.props.small}</Text>
        </Text>
      </View>
    );
  }
}

//TODO: 
export class DateTimePicker extends Component {
  render() {
    return (
      <DatePicker
        mode="date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
      />
    )
  }
}

export default class BookingSelectDate extends Component {
  constructor(props) {
    super(props)
    this.state = { date: "2016-05-15" }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* header */}
        {/* <Header /> */}
        {/* contain */}
        <View style={styles.contain}>
          {/* form 1 (label) */}
          <View style={styles.form_1}>
            <Text style={styles.text}>Récapitulatif de votre demande</Text>
          </View>
          {/* form 2 (show data) */}
          <View style={styles.form_2}>
            <View style={{ flex: 1, marginTop: 10 }}>
              <ValueWithSmallType type='DEVISE' value='EURO - EUR' />
              {/* <TypeWithValue type='MONTANT' value='500' /> */}
              <ValueWithSmallType type='MONTANT' value='500' small='EUR' />
              <ValueWithSmallType type='PRIX' value='18 885' small='Ps' />
              <ValueWithSmallType type='TAUX' value='377,77' />
              <ValueWithSmallType type='MODE DE PAIEMENT' value='Espèces' />
              <ValueWithSmallType type='MODE DE RÉCUPESRATION' value='Retrait en agence' />
            </View>
          </View>
          {/* form 3 (contain button) */}
          <View style={styles.form_3}>
            <ButtonWithIcon name='AUJOURD`HUI' uri='./images/logo.png' />
            <ButtonWithIcon name='CHOISIR LA DATE' uri='./images/date-picker.png' />
            {/* <DateTimePicker /> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9FF',
  },
  contain: {
    flex: 11,
    margin: '5%',
    marginTop: '7%',
  },
  form_1: {
    flex: 1,
    backgroundColor: '#F4F9FF',
  },
  form_2: {
    flex: 15,
    backgroundColor: '#ffffff',
  },
  form_3: {
    flex: 5,
    backgroundColor: '#F4F9FF',
    flexDirection: 'column',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: '#2783BA',
    fontSize: 17,
  },
  type_value: {
    flex: 1,
    margin: '1%',
    marginTop: '1%',
    marginLeft: '3%',
    marginRight: '3%',
  },
  type: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2783BA',
  },
  value: {
    fontSize: 25,
  },
  contain_text: {
    flex: 3,
  },
  text_small: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  button_form: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009EDF',
    marginTop: '2%',
  },
  button_icon: {
    width: '9%',
    height: '60%',
    marginRight: 10,
  },
  button_label: {
    fontSize: 18,
    color: '#ffffff',
  }
});