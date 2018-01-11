import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Button } from 'native-base';

import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import * as Actions from "../../actions";

// import Header from './src/components/common/header/header';

export class ButtonWithColor extends Component {
  render() {
    return (
      <View style={[styles.button, styles.button_color]}>
        <Text style={styles.label}>{this.props.label}</Text>
      </View>
    );
  }
}

export class ButtonWithoutColor extends Component {
  render() {
    return (
      <View style={styles.button}>
        <Text style={styles.label}>{this.props.label}</Text>
      </View>
    );
  }
}

class BookingPayment extends Component {

  _onGoToSelectDate() {
    console.log('goToPaymentType')
    this.props.onGoToSelectDate();
  }

  render() {
    return (
      <View style={styles.container}>
        {/* header */}
        {/* <Header /> */}
        {/* contain */}
        <View style={styles.contain}>
          {/* form button 1 */}
          <View style={styles.form_1}>
            <View style={styles.contain_form_1}>
              <Text style={styles.text}>Sélectionnez votre mode de paiement</Text>
              <ButtonWithColor label='Espèces' />
              <ButtonWithoutColor label='Prélèvement' />
              <ButtonWithoutColor label='Virement' />
            </View>
          </View>
          {/* form button 2 */}
          <View style={styles.form_2}>
            <View style={styles.contain_form_2}>
              <Text style={styles.text}>Sélectionnez votre mode de récupération</Text>
              <View style={styles.button}>
                <TouchableHighlight
                  onPress={this._onGoToSelectDate.bind(this)}
                >
                  <Text style={{textAlign: 'center'}}>Retrait en agence</Text>
                </TouchableHighlight>
              </View>
              <ButtonWithoutColor label='Livraison à domicile' />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    nav: state.nav
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookingPayment);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contain: {
    flex: 11,
    backgroundColor: '#F3F9FF',
  },
  contain_form_1: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: '7%',
    padding: '5%',
  },
  contain_form_2: {
    flex: 1,
    flexDirection: 'column',
    padding: '5%',
    paddingTop: 0,
  },
  form_1: {
    flex: 6,
    backgroundColor: '#F3F9FF',
  },
  form_2: {
    flex: 4,
    backgroundColor: '#F4F9FF',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: '#2783BA',
    fontSize: 17,
  },
  button: {
    flex: 2,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    elevation: 2,
  },
  label: {
    color: '#5D5D5D',
    textAlign: 'center',
    fontSize: 16,
  },
  button_color: {
    backgroundColor: '#009EDF',
  },
});